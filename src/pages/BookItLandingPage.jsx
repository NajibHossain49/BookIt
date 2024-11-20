import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  Users, 
  Camera, 
  Palette, 
  Dumbbell, 
  Music, 
  Book, 
  Utensils, 
  Microscope, 
  Globe, 
  Headphones,
  ArrowRight,
  Search,
  Leaf,
  Film,
  Zap,
  PaintBucket,
  Anchor,
  Mic
} from 'lucide-react';

// Extensive Activity Data
const featuredActivities = [
  {
    id: 1,
    title: "Weekend Pottery Workshop",
    host: "Clay Creations Studio",
    price: 45,
    rating: 4.8,
    image: "/api/placeholder/400/250",
    category: "Art & Craft"
  },
  {
    id: 2,
    title: "Urban Photography Walk",
    host: "City Snappers Club",
    price: 35,
    rating: 4.6,
    image: "/api/placeholder/400/250",
    category: "Photography"
  },
  {
    id: 3,
    title: "Sunrise Yoga in the Park",
    host: "Zen Wellness",
    price: 25,
    rating: 4.9,
    image: "/api/placeholder/400/250",
    category: "Fitness"
  },
  {
    id: 4,
    title: "Jazz Improvisation Class",
    host: "Harmony Music School",
    price: 55,
    rating: 4.7,
    image: "/api/placeholder/400/250",
    category: "Music"
  },
  {
    id: 5,
    title: "Gourmet Cooking Masterclass",
    host: "Culinary Experts",
    price: 75,
    rating: 4.9,
    image: "/api/placeholder/400/250",
    category: "Cooking"
  },
  {
    id: 6,
    title: "Science Experiment Day",
    host: "Kids Discovery Center",
    price: 30,
    rating: 4.5,
    image: "/api/placeholder/400/250",
    category: "Science"
  },
  {
    id: 7,
    title: "Surfing Basics Lesson",
    host: "Beach Waves Academy",
    price: 60,
    rating: 4.7,
    image: "/api/placeholder/400/250",
    category: "Outdoor Sports"
  },
  {
    id: 8,
    title: "Film Production Workshop",
    host: "Indie Filmmakers Guild",
    price: 80,
    rating: 4.6,
    image: "/api/placeholder/400/250",
    category: "Filmmaking"
  }
];

// Expanded Categories with Icons
const categories = [
  { 
    name: "Art & Craft", 
    icon: Palette,
    color: "bg-pink-100 text-pink-600"
  },
  { 
    name: "Fitness", 
    icon: Dumbbell,
    color: "bg-green-100 text-green-600"
  },
  { 
    name: "Photography", 
    icon: Camera,
    color: "bg-blue-100 text-blue-600"
  },
  { 
    name: "Music", 
    icon: Music,
    color: "bg-purple-100 text-purple-600"
  },
  { 
    name: "Cooking", 
    icon: Utensils,
    color: "bg-orange-100 text-orange-600"
  },
  { 
    name: "Science", 
    icon: Microscope,
    color: "bg-indigo-100 text-indigo-600"
  },
  { 
    name: "Language", 
    icon: Book,
    color: "bg-teal-100 text-teal-600"
  },
  { 
    name: "Travel", 
    icon: Globe,
    color: "bg-yellow-100 text-yellow-600"
  },
  { 
    name: "Outdoor Sports", 
    icon: Anchor,
    color: "bg-lime-100 text-lime-700"
  },
  { 
    name: "Wellness", 
    icon: Leaf,
    color: "bg-emerald-100 text-emerald-600"
  },
  { 
    name: "Filmmaking", 
    icon: Film,
    color: "bg-rose-100 text-rose-600"
  },
  { 
    name: "Dance", 
    icon: Zap,
    color: "bg-cyan-100 text-cyan-600"
  },
  { 
    name: "Performance Art", 
    icon: Mic,
    color: "bg-fuchsia-100 text-fuchsia-600"
  },
  { 
    name: "Digital Art", 
    icon: PaintBucket,
    color: "bg-sky-100 text-sky-600"
  }
];

const BookItLandingPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState(null);

  const filteredActivities = featuredActivities.filter(activity => 
    (activeCategory ? activity.category === activeCategory : true) &&
    activity.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 p-6 font-sans">
      {/* Header Section */}
      <motion.header 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto text-center mb-12"
      >
        <h1 className="text-5xl font-bold text-indigo-800 mb-4 tracking-tight">
          BookIt
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover and book local activities that inspire, connect, and transform your community
        </p>
      </motion.header>

      <div className="max-w-7xl mx-auto">
        {/* Search and Filter Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          {/* Search Input */}
          <div className="relative mb-6">
            <input 
              type="text" 
              placeholder="Search activities..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-3 pl-10 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 transition"
            />
            <Search className="absolute left-3 top-3.5 text-gray-400" />
          </div>

          {/* Category Scroll */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex overflow-x-auto space-x-4 pb-4 category-scrollbar"
            style={{ 
              scrollbarWidth: 'thin',
              scrollbarColor: 'rgba(0,0,0,0.2) transparent'
            }}
          >
            {categories.map((category) => (
              <motion.button
                key={category.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(
                  activeCategory === category.name ? null : category.name
                )}
                className={`
                  flex flex-col items-center justify-center 
                  p-4 rounded-xl 
                  min-w-[120px] 
                  transition duration-300 
                  ${activeCategory === category.name 
                    ? `${category.color} ring-2 ring-offset-2` 
                    : 'bg-white shadow-md hover:shadow-lg'}
                `}
              >
                <category.icon className="w-8 h-8 mb-2" />
                <span className="text-sm font-medium text-center">{category.name}</span>
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Activities Grid */}
        <AnimatePresence>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {filteredActivities.length > 0 ? (
              filteredActivities.map((activity) => (
                <motion.div
                  key={activity.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  whileHover={{ 
                    scale: 1.03,
                    boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
                  }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <img 
                    src={activity.image} 
                    alt={activity.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm bg-indigo-100 text-indigo-800 px-2 py-1 rounded">
                        {activity.category}
                      </span>
                      <div className="flex items-center text-yellow-500">
                        <Star className="w-4 h-4 mr-1" fill="currentColor" />
                        {activity.rating}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{activity.title}</h3>
                    <div className="flex justify-between items-center">
                      <p className="text-gray-600">{activity.host}</p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                      >
                        Book <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="col-span-full text-center py-12 bg-white rounded-xl shadow-md"
              >
                <Headphones className="mx-auto w-16 h-16 mb-4 text-indigo-400" />
                <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                  No Activities Found
                </h2>
                <p className="text-gray-500">
                  Try a different search or explore other categories
                </p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Additional Features Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="max-w-7xl mx-auto mt-12 bg-white rounded-xl shadow-lg p-8"
      >
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <Globe className="mx-auto w-12 h-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Diverse Activities</h3>
            <p className="text-gray-600">
              Explore 14+ unique categories of local experiences
            </p>
          </div>
          <div className="text-center">
            <Users className="mx-auto w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
            <p className="text-gray-600">
              Connect with local hosts and passionate instructors
            </p>
          </div>
          <div className="text-center">
            <Star className="mx-auto w-12 h-12 text-yellow-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Curated Experiences</h3>
            <p className="text-gray-600">
              Handpicked and verified activities for quality assurance
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default BookItLandingPage;
