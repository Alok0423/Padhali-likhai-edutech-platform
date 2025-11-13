'use client'

import { motion } from 'framer-motion'

const partners = [
  { name: 'Google', logo: 'https://via.placeholder.com/150x80/4285F4/FFFFFF?text=Google' },
  { name: 'Microsoft', logo: 'https://via.placeholder.com/150x80/00A4EF/FFFFFF?text=Microsoft' },
  { name: 'Amazon', logo: 'https://via.placeholder.com/150x80/FF9900/FFFFFF?text=Amazon' },
  { name: 'Meta', logo: 'https://via.placeholder.com/150x80/0081FB/FFFFFF?text=Meta' },
  { name: 'Apple', logo: 'https://via.placeholder.com/150x80/000000/FFFFFF?text=Apple' },
  { name: 'IBM', logo: 'https://via.placeholder.com/150x80/006699/FFFFFF?text=IBM' },
]

export default function Partners() {
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
            Our Partners
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Trusted by leading companies worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-full h-auto opacity-60 hover:opacity-100 transition-opacity"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

