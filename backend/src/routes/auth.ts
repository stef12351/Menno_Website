import express from 'express';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import rateLimit from 'express-rate-limit';

const router = express.Router();

const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5 // limit each IP to 5 login attempts per windowMs
});

router.post('/login', loginLimiter, async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;

        // Check if credentials match environment variables
        if (username === process.env.ADMIN_USERNAME &&
            password === process.env.ADMIN_PASSWORD) {

            // Generate JWT token
            const token = jwt.sign(
                { username },
                process.env.JWT_SECRET!,
                { expiresIn: '24h' }
            );

            res.json({ token });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.get('/verify-token', (req: Request, res: Response) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    try {
        jwt.verify(token, process.env.JWT_SECRET!);
        res.json({ valid: true });
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' });
    }
});

export default router;