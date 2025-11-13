'use client'

import { motion } from 'framer-motion'
import { Target, Eye, Heart, Users, Award, Lightbulb } from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Mission',
    description: 'To provide accessible, high-quality education that empowers individuals to achieve their career goals and transform their lives.',
  },
  {
    icon: Eye,
    title: 'Vision',
    description: 'To become the world\'s leading online learning platform, recognized for innovation, excellence, and student success.',
  },
  {
    icon: Heart,
    title: 'Values',
    description: 'We believe in integrity, excellence, innovation, and putting our students first in everything we do.',
  },
]

const team = [
  {
    name: 'Alok sharma',
    role: 'CEO & Founder',
    image: 'https://image2url.com/images/1763008796068-c8456743-559e-4eeb-912d-0167995bc3e5.jpeg',
  },
  {
    name: 'Paritosh sir',
    role: 'Chief Learning Officer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200',
  },
  {
    name: 'PP stack',
    role: 'Head of Technology',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200',
  },
  {
    name: 'Emily Davis',
    role: 'Director of Content',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200',
  },
]

const stats = [
  { icon: Users, value: '50,000+', label: 'Active Students' },
  { icon: Award, value: '200+', label: 'Courses Available' },
  { icon: Lightbulb, value: '150+', label: 'Expert Instructors' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            About PadhaiLikhai
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90"
          >
            Empowering learners worldwide with quality education and skill development
          </motion.p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center p-8 bg-gray-50 dark:bg-gray-700 rounded-xl"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-full">
                      <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {value.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg">
                      <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <p className="text-lg text-gray-600 dark:text-gray-400">{stat.label}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Our Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Meet the passionate people behind PadhaiLikhai
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-xl p-8 md:p-12 shadow-lg"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Our Story
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                PadhaiLikhai was founded in 2020 with a simple mission: to make quality education
                accessible to everyone, everywhere. We started as a small team of educators and
                technologists who believed that learning should be engaging, practical, and
                affordable.
              </p>
              <p>
                Today, we've grown into a global platform with thousands of courses, expert
                instructors, and a vibrant community of learners. Our commitment to excellence
                and student success remains at the heart of everything we do.
              </p>
              <p>
                We're constantly innovating and expanding our course catalog to meet the evolving
                needs of learners in today's fast-paced world. Whether you're looking to start a
                new career, advance in your current role, or simply learn something new,
                PadhaiLikhai is here to support your journey.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

