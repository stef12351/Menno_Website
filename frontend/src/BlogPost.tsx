import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DOMPurify from 'dompurify';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';


interface BlogPost {
    title: string;
    content: string;
    author: string;
    date: string;
    category: string;
    imageUrl?: string;
}

const BlogPost: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { post } = location.state as { post: BlogPost };

    if (!post) {
        navigate('/blog');
        return null;
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-white pt-32">
            <div className="container mx-auto px-4">
                <motion.button
                    onClick={() => navigate('/blog')}
                    className="flex items-center text-[#006039] mb-8 hover:text-[#004c2d] transition-colors"
                    whileHover={{ x: -5 }}
                >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Terug naar Blog
                </motion.button>

                <article className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
                    {post.imageUrl && (
                        <img
                            src={`http://localhost:3001${post.imageUrl}`}
                            alt={post.title}
                            className="w-full h-64 md:h-96 object-cover rounded-xl mb-8"
                        />
                    )}

                    <header className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="bg-green-50 text-[#006039] px-4 py-1 rounded-full text-sm font-medium">
                                {post.category}
                            </span>
                            <span className="text-gray-500 text-sm">{post.date}</span>
                        </div>
                        <h1 className="text-4xl font-bold text-[#006039] mb-4">{post.title}</h1>
                        <p className="text-gray-500">Door {post.author}</p>
                    </header>

                    <div
                        className="prose prose-lg max-w-none prose-headings:text-[#006039] prose-a:text-[#006039]"
                        dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(post.content)
                        }}
                    />
                </article>
            </div>
        </div>
    );
};

export default BlogPost;

