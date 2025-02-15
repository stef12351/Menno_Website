import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Ship, ChevronRight, Calendar, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import createDOMPurify from 'dompurify';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const DOMPurify = createDOMPurify(window);

interface BlogPost {
  title: string;
  content: string;
  author: string;
  date: string;
  category: string;
  imageUrl?: string;
}

const Blog: React.FC = () => {
  // Removed unused state hook for isMenuOpen
  const navigate = useNavigate();
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    // Fetch posts from backend
    fetch('http://localhost:3001/api/posts')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);


  const handleReadMore = (post: BlogPost) => {
    // Convert the title to a URL-friendly slug
    const slug = post.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');

    navigate(`/blog/${slug}`, { state: { post } });
  };

  return (
    <div className="min-h-screen bg-[#ffffff]">
      <nav>
        {/* Shared Navbar */}
        <Navbar />
      </nav>
      {/* Main Content */}
      <section className="py-32 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-[#A4C2C2] uppercase tracking-wider font-medium"
            >
              Blog
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-[#006039] mt-4 mb-6"
            >
              Laatste Updates
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-gray-600 max-w-2xl mx-auto text-lg"
            >
              Expertise, tips en nieuws over bootonderhoud en verzorging
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {posts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative w-full pb-[60%]">
                  {post.imageUrl ? (
                    <img
                      src={`http://localhost:3001${post.imageUrl}`}
                      alt={post.title}
                      className="absolute inset-0 w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  ) : (
                    <div className="absolute inset-0 w-full h-full bg-[#006039]/5 flex items-center justify-center">
                      <Ship className="w-12 h-12 text-[#006039]/20" />
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-[#006039]">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center mb-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{post.date}</span>
                    </div>
                    <span className="mx-2">•</span>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-[#006039] mb-3 group-hover:text-[#004c2d] transition-colors">
                    {post.title}
                  </h3>
                  <div
                    className="prose prose-sm max-w-none text-gray-600 mb-4"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(post.content)
                    }}
                  />
                  <motion.button
                    whileHover={{ x: 5 }}
                    onClick={() => handleReadMore(post)}
                    className="inline-flex items-center text-[#006039] font-medium group-hover:text-[#004c2d]"
                  >
                    Lees Meer
                    <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <footer>
        {/* Shared Footer */}
        <Footer />
      </footer>
    </div>
  );
};

export default Blog;