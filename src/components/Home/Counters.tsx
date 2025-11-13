'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { Users, BookOpen, GraduationCap } from 'lucide-react'

const counters = [
  { icon: Users, label: 'Students Enrolled', target: 50000, suffix: '+' },
  { icon: BookOpen, label: 'Courses Available', target: 200, suffix: '+' },
  { icon: GraduationCap, label: 'Expert Instructors', target: 150, suffix: '+' },
]

function Counter({ value, label, Icon }: { value: number; label: string; Icon: any }) {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-4">
        <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-full">
          <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
      >
        {value.toLocaleString()}+
      </motion.div>
      <p className="text-lg text-gray-600 dark:text-gray-400">{label}</p>
    </div>
  )
}

export default function Counters() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {counters.map((counter, index) => {
            const Icon = counter.icon
            return (
              <motion.div
                key={counter.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Counter
                  value={counter.target}
                  label={counter.label}
                  Icon={Icon}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

