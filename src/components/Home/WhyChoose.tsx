'use client'

import { motion } from 'framer-motion'
import { Award, Clock, Users, Headphones, Globe, Shield } from 'lucide-react'

const features = [
  {
    icon: Award,
    title: 'Expert Instructors',
    description: 'Learn from industry professionals with years of experience',
  },
  {
    icon: Clock,
    title: 'Flexible Learning',
    description: 'Study at your own pace with lifetime access to courses',
  },
  {
    icon: Users,
    title: 'Community Support',
    description: 'Join a vibrant community of learners and get help when needed',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Get assistance anytime with our dedicated support team',
  },
  {
    icon: Globe,
    title: 'Global Recognition',
    description: 'Earn certificates recognized by top companies worldwide',
  },
  {
    icon: Shield,
    title: 'Money-Back Guarantee',
    description: '100% satisfaction guarantee or your money back',
  },
]

export default function WhyChoose() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Why Choose PadhaiLikhai?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            We provide the best learning experience for our students
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg w-fit mb-4">
                  <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

