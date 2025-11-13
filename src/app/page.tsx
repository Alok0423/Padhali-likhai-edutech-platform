'use client'

import { motion } from 'framer-motion'
import Hero from '@/components/Home/Hero'
import Slideshow from '@/components/Home/Slideshow'
import TopCourses from '@/components/Home/TopCourses'
import WhyChoose from '@/components/Home/WhyChoose'
import Testimonials from '@/components/Home/Testimonials'
import Partners from '@/components/Home/Partners'
import Counters from '@/components/Home/Counters'

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Slideshow />
      <TopCourses />
      <Counters />
      <WhyChoose />
      <Testimonials />
      <Partners />
    </motion.div>
  )
}

