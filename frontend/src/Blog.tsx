import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Calendar, User, Search, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProShineLogo from '../src/images/Proshine_logo.png';
import { BlogPost } from './BlogPost'; // Add this import

const Blog: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [email, setEmail] = useState('');
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [displayCount, setDisplayCount] = useState(3);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch posts');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleReadMore = (post: BlogPost) => {
    // Convert the title to a URL-friendly slug
    const slug = post.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');

    navigate(`/blog/${slug}`, { state: { post } });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add newsletter subscription logic
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  const handleLoadMore = () => {
    setDisplayCount(prevCount => prevCount + 3);
  };

  const categories = [
    "Bootonderhoud",
    "Jachtpolijsten",
    "Reparaties & Restauraties",
    "Maritieme Trends",
    "Duurzaamheid & Milieu"
  ];

  const filteredPosts = selectedCategory
    ? posts.filter(post => post.category === selectedCategory)
    : posts;

  const paginatedPosts = filteredPosts.slice(0, displayCount);

  useEffect(() => {
    setHasMore(displayCount < filteredPosts.length);
  }, [displayCount, filteredPosts.length]);

  return (
    <div className="min-h-screen bg-[#ffffff]">
      <nav>
        {/* Shared Navbar */}
        <Navbar />
      </nav>
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-gradient-to-b from-green-50 via-green-50/80 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[#A4C2C2] uppercase tracking-wider font-medium"
            >
              Blog
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-[#006039] mt-4 mb-6"
            >
              Maritieme Inzichten & Onderhoudstips
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-gray-600 max-w-3xl mx-auto text-lg mb-8"
            >
              Ontdek de nieuwste trends, tips en verhalen over bootzorg en maritieme innovatie.
            </motion.p>
            <motion.form
              onSubmit={handleNewsletterSubmit}
              className="max-w-md mx-auto"
            >
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Uw e-mailadres"
                  className="flex-1 px-6 py-3 rounded-full border focus:ring-2 focus:ring-[#006039] focus:border-transparent"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  type="submit"
                  className="bg-[#006039] text-white px-6 py-3 rounded-full hover:bg-[#B3E9F2] transition-colors duration-300"
                >
                  Schrijf je in
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </section>
      {/* Blog Content */}
      <section className="py-20 bg-gradient-to-b from-white via-green-50/30 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="space-y-12">
                {loading ? (
                  <div className="text-center py-12">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#006039] mx-auto"></div>
                  </div>
                ) : error ? (
                  <div className="text-red-600 text-center py-12">{error}</div>
                ) : filteredPosts.length === 0 ? (
                  <div className="text-gray-600 text-center py-12">
                    Nog geen blog posts beschikbaar.
                  </div>
                ) : (
                  <>
                    {paginatedPosts.map((article, index) => (
                      <motion.article
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="bg-white rounded-2xl shadow-lg overflow-hidden w-full mx-auto"
                      >
                        <div className="w-full aspect-[16/9] h-48">
                          {article.imageUrl ? (
                            <img
                              src={`http://localhost:3001${article.imageUrl}`}
                              alt={article.title}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            // Optional: Show a placeholder if no image is available
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                              <span className="text-gray-400">No image available</span>
                            </div>
                          )}
                        </div>
                        <div className="p-6">
                          <span className="text-[#A4C2C2] text-sm font-medium">
                            {article.category}
                          </span>
                          <h2 className="text-xl font-bold text-[#006039] mt-2 mb-3">
                            {article.title}
                          </h2>
                          <div className="flex items-center text-gray-600 text-sm mb-3">
                            <Calendar className="h-4 w-4 mr-2" />
                            {article.date}
                            <User className="h-4 w-4 ml-4 mr-2" />
                            {article.author}
                          </div>
                          <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                            {article.summary}
                          </p>
                          <button onClick={() => handleReadMore(article)} className="text-[#006039] font-medium hover:text-[#B3E9F2] transition-colors duration-300 flex items-center">
                            Lees Meer
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </button>
                        </div>
                      </motion.article>
                    ))}

                    {hasMore && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center pt-8"
                      >
                        <button
                          onClick={handleLoadMore}
                          className="bg-white text-[#006039] px-8 py-4 rounded-full border-2 border-[#006039] hover:bg-[#006039] hover:text-white transition-all duration-300 flex items-center mx-auto"
                        >
                          <span>Laad Meer Artikelen</span>
                          <ChevronRight className="h-5 w-5 ml-2" />
                        </button>
                      </motion.div>
                    )}
                  </>
                )}
              </div>
            </div>
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Search */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Zoeken..."
                      className="w-full px-4 py-3 pl-12 rounded-lg border focus:ring-2 focus:ring-[#006039] focus:border-transparent"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  </div>
                </div>
                {/* Categories */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-semibold text-[#006039] mb-4">
                    Categorieën
                  </h3>
                  <ul className="space-y-2">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <button
                          onClick={() => handleCategoryClick(category)}
                          className={`text-gray-600 hover:text-[#006039] transition-colors duration-300 flex items-center w-full ${selectedCategory === category ? 'text-[#006039] font-medium' : ''
                            }`}
                        >
                          <ChevronRight className="h-4 w-4 mr-2" />
                          {category}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Newsletter */}
                <div className="bg-[#006039] rounded-2xl shadow-lg p-6 text-white">
                  <h3 className="text-xl font-semibold mb-4">
                    Blijf Altijd Op de Hoogte
                  </h3>
                  <p className="text-white/90 mb-6">
                    Ontvang als eerste de nieuwste artikelen en exclusieve tips in uw inbox.
                  </p>
                  <form onSubmit={handleNewsletterSubmit}>
                    <div className="space-y-4">
                      <input
                        type="email"
                        placeholder="Uw e-mailadres"
                        className="w-full px-4 py-3 rounded-lg text-gray-900"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <button
                        type="submit"
                        className="w-full bg-white text-[#006039] px-6 py-3 rounded-lg hover:bg-[#B3E9F2] transition-colors duration-300"
                      >
                        Schrijf je nu in
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        {/* Shared Footer */}
        <Footer />
      </footer>
      {/* Mobile Logo */}
      <div className="md:hidden fixed top-0 left-0 z-50" style={{ position: 'fixed', top: 0, left: 0 }}>
        <Link to="/" className="flex items-start block">
          <img
            src={ProShineLogo}
            alt="ProShine Logo"
            className="w-48 h-48 object-contain -translate-y-14 -translate-x-6"
            style={{ position: 'fixed' }}
          />
        </Link>
      </div>
      {/* Mobile Hamburger - floating icon only */}
      <header className="md:hidden fixed top-4 w-full z-50">
      </header>
    </div>
  );
};

export default Blog;