import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import App from './App';
import MoreImages from './MoreImages';
import AboutUs from './AboutUs';
import Services from './Services';
import Blog from './Blog';
import BlogPost from './BlogPost';
import AdminBlog from './AdminBlog';
import './index.css';
import { AuthProvider } from './contexts/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import Login from './Login';

const pageVariants = {
  initial: {
    opacity: 0
  },
  in: {
    opacity: 1
  },
  out: {
    opacity: 0
  }
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/services" element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={{ duration: 0.4 }}
            >
              <Services />
            </motion.div>
          } />
          <Route path="/more-images" element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={{ duration: 0.4 }}
            >
              <MoreImages />
            </motion.div>
          } />
          <Route path="/about-us" element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={{ duration: 0.4 }}
            >
              <AboutUs />
            </motion.div>
          } />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/admin/login" element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={{ duration: 0.4 }}
            >
              <Login />
            </motion.div>
          } />
          <Route path="/admin/blog" element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={{ duration: 0.4 }}
            >
              <ProtectedRoute>
                <AdminBlog />
              </ProtectedRoute>
            </motion.div>
          } />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);