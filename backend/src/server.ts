import express, { Request, Response } from 'express';
import cors from 'cors';
import multer from 'multer';
import jwt from 'jsonwebtoken';
import { join } from 'path';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';
import { securityHeaders } from './middleware/securityHeaders'
import helmet from 'helmet';
import csrf from 'csurf';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth';

dotenv.config();

const app = express();

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});

// Configure CORS with expanded headers
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: [
        'Content-Type',
        'Authorization',
        'CSRF-Token',
        'X-XSRF-TOKEN',
        'x-xsrf-token'
    ]
}));

// 1. Basic middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// 3. CSRF Configuration
const csrfMiddleware = csrf({
    cookie: {
        key: 'XSRF-TOKEN',
        httpOnly: false,
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production'
    }
});

// 4. Debug middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});

// 5. CSRF Token endpoint (exclude from CSRF protection)
app.get('/api/csrf-token', (req, res) => {
    try {
        // Apply CSRF middleware specifically for this route
        csrfMiddleware(req, res, (err: any) => {
            if (err) {
                console.error('CSRF middleware error:', err);
                return res.status(500).json({ message: 'CSRF token generation failed' });
            }
            // Send the token
            res.json({ csrfToken: req.csrfToken() });
        });
    } catch (error) {
        console.error('CSRF token generation error:', error);
        res.status(500).json({ message: 'Failed to generate CSRF token' });
    }
});

// 6. Apply CSRF protection to other routes
app.use((req, res, next) => {
    // Skip CSRF for login
    if (req.path === '/api/login') {
        return next();
    }
    // Apply CSRF protection to all other routes
    csrfMiddleware(req, res, next);
});

// 7. Error handler
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    if (err.code === 'EBADCSRFTOKEN') {
        console.error('CSRF error:', err);
        return res.status(403).json({ message: 'Invalid CSRF token' });
    }
    console.error('Server error:', err);
    res.status(500).json({ message: 'Internal server error' });
});

app.use(limiter);
app.use(securityHeaders);
app.use(helmet()); // Add Helmet for additional security headers

app.use('/api', authRoutes);

interface BlogPost {
    id: string;
    title: string;
    content: string;
    imageUrl: string | null;
    date: string;
    author: string;
    category: string;
}

const posts: BlogPost[] = [];

// Storage configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage });

// Basic routes
app.get('/api/health', (req: Request, res: Response) => {
    res.json({ status: 'ok' });
});

// Add this route before your other routes
app.post('/api/upload', upload.single('image'), (req: Request, res: Response) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: 'No image file provided'
            });
        }

        const imageUrl = `/uploads/${req.file.filename}`;
        return res.status(200).json({
            success: true,
            imageUrl
        });
    } catch (error) {
        console.error('Error uploading image:', error);
        return res.status(500).json({
            success: false,
            message: 'Failed to upload image'
        });
    }
});

// Blog post routes with file upload
app.post('/api/posts', upload.single('image'), (req: Request, res: Response) => {
    try {
        if (!req.body.title || !req.body.content) {
            return res.status(400).json({
                message: 'Title and content are required'
            });
        }

        const newPost: BlogPost = {
            id: Date.now().toString(),
            title: req.body.title,
            content: req.body.content,
            imageUrl: req.file ? `/uploads/${req.file.filename}` : null,
            date: new Date().toISOString(),
            author: req.body.author, // Remove the default 'Admin' value
            category: req.body.category || 'Uncategorized'
        };

        posts.unshift(newPost);
        console.log('Created new post:', newPost);

        res.status(201).json(newPost);
    } catch (error) {
        console.error('Error creating post:', error);
        res.status(500).json({
            message: 'Internal server error while creating post'
        });
    }
});

// Fetch all posts
app.get('/api/posts', (req: Request, res: Response) => {
    res.json(posts);
});

// Delete a post
app.delete('/api/posts/:id', (req: Request, res: Response) => {
    try {
        const postId = req.params.id;
        const postIndex = posts.findIndex(post => post.id === postId);

        if (postIndex === -1) {
            return res.status(404).json({ message: 'Post not found' });
        }

        // Remove the post from the array
        posts.splice(postIndex, 1);

        console.log(`Post ${postId} deleted successfully`);
        res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
        console.error('Error deleting post:', error);
        res.status(500).json({ message: 'Failed to delete post' });
    }
});

// Update a post
app.put('/api/posts/:id', upload.single('image'), (req: Request, res: Response) => {
    try {
        const postId = req.params.id;
        const postIndex = posts.findIndex(post => post.id === postId);

        if (postIndex === -1) {
            return res.status(404).json({ message: 'Post not found' });
        }

        // Get the existing post
        const existingPost = posts[postIndex];

        // Update the post with new data, keeping existing data if not provided
        const updatedPost = {
            ...existingPost,
            title: req.body.title || existingPost.title,
            content: req.body.content || existingPost.content,
            author: req.body.author || existingPost.author,
            category: req.body.category || existingPost.category,
            imageUrl: req.file ? `/uploads/${req.file.filename}` : existingPost.imageUrl,
            date: new Date().toISOString()
        };

        // Replace the old post with the updated one
        posts[postIndex] = updatedPost;

        console.log('Updated post:', updatedPost);
        res.status(200).json(updatedPost);
    } catch (error) {
        console.error('Error updating post:', error);
        res.status(500).json({ message: 'Internal server error while updating post' });
    }
});

// Serve uploaded files
app.use('/uploads', express.static(join(__dirname, '../uploads')));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});