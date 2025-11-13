'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Search, Filter, Star, Users, Clock, ShoppingCart } from 'lucide-react'
import coursesData from '@/data/courses.json'
import { useCartStore } from '@/store/cartStore'
import { useInventoryStore } from '@/store/inventoryStore'
import toast from 'react-hot-toast'

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedLevel, setSelectedLevel] = useState('All')
  const [showFilters, setShowFilters] = useState(false)
  const { addToCart } = useCartStore()
  const { getAvailableSeats, isCourseFullyBooked, initializeInventory } = useInventoryStore()

  const categories = ['All', ...Array.from(new Set(coursesData.map(c => c.category)))]
  const levels = ['All', ...Array.from(new Set(coursesData.map(c => c.level)))]

  // Initialize inventory for all courses on mount
  useMemo(() => {
    coursesData.forEach(course => {
      initializeInventory(course.id, 100) // 100 seats per course
    })
  }, [])

  const filteredCourses = useMemo(() => {
    return coursesData.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory
      const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel
      return matchesSearch && matchesCategory && matchesLevel
    })
  }, [searchQuery, selectedCategory, selectedLevel])

  const handleAddToCart = (course: any) => {
    if (isCourseFullyBooked(course.id)) {
      toast.error('This course is currently full! Check back later.')
      return
    }
    addToCart({
      id: course.id,
      title: course.title,
      price: course.price,
      instructor: course.instructor,
      image: course.image,
    })
    toast.success('Course added to cart!')
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            All Courses
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Discover our complete catalog of courses
          </p>
        </motion.div>

        {/* Search and Filter Bar */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="px-6 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <Filter className="w-5 h-5" />
              Filters
            </button>
          </div>

          {/* Filter Options */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-300 dark:border-gray-700"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Category
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Level
                  </label>
                  <select
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  >
                    {levels.map(level => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course, index) => {
            const availableSeats = getAvailableSeats(course.id)
            const isFullyBooked = isCourseFullyBooked(course.id)

            return (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow ${
                  isFullyBooked ? 'opacity-75' : ''
                }`}
              >
                {/* Course Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  {isFullyBooked && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">SOLD OUT</span>
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    ${course.price}
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-4 space-y-3">
                  <div>
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">{course.category}</p>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-1">
                      {course.title}
                    </h3>
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    By <span className="font-medium">{course.instructor}</span>
                  </p>

                  {/* Course Meta */}
                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{course.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{course.students.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                  </div>

                  {/* Inventory Status */}
                  <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded-lg">
                    <div className="flex justify-between text-xs font-medium mb-1">
                      <span>Seats Available</span>
                      <span>{availableSeats}/100</span>
                    </div>
                    <div className="w-full bg-gray-300 dark:bg-gray-600 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full transition-all ${
                          availableSeats > 50
                            ? 'bg-green-500'
                            : availableSeats > 20
                            ? 'bg-yellow-500'
                            : 'bg-red-500'
                        }`}
                        style={{ width: `${(availableSeats / 100) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* Button */}
                  <button
                    onClick={() => handleAddToCart(course)}
                    disabled={isFullyBooked}
                    className={`w-full py-2 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 ${
                      isFullyBooked
                        ? 'bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-400 cursor-not-allowed'
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                    }`}
                  >
                    <ShoppingCart className="w-4 h-4" />
                    {isFullyBooked ? 'Sold Out' : 'Add to Cart'}
                  </button>
                </div>
              </motion.div>
            )
          })}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No courses found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

        {/* Results Count */}
        <div className="mb-6 text-gray-600 dark:text-gray-400">
          Found {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''}
        </div>

        {/* Courses Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    ${course.price}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">
                      {course.category}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {course.level}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                    {course.description}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-semibold">{course.rating}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{(course.students / 1000).toFixed(1)}k</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                    </div>
                  </div>
                  <Link href={`/courses/${course.id}`}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
                    >
                      View Course
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 dark:text-gray-400">
              No courses found. Try adjusting your filters.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

