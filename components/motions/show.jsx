import { motion } from 'framer-motion'
import React from 'react'

const Show = ({ children, delay }) => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 0.9,
      }}
      transition={{
        duration: 0.4,
        delay: delay,
      }}>
      {children}
    </motion.div>
  )
}

export default Show
