import { motion } from 'framer-motion'
import React from 'react'

const Tap = ({ children }) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      {children}
    </motion.div>
  )
}

export default Tap
