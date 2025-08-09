"use client"

import { motion } from "motion/react"

export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      {/* Soft gradient base */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50/80 via-orange-50/40 to-transparent" />
      {/* Animated blobs */}
      <motion.div
        className="absolute left-[-10%] top-[5%] h-72 w-72 rounded-full bg-amber-200/50 blur-[50px]"
        animate={{ x: [0, 20, -10, 0], y: [0, -10, 10, 0], scale: [1, 1.05, 0.98, 1] }}
        transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-8%] top-[15%] h-64 w-64 rounded-full bg-orange-200/60 blur-[46px]"
        animate={{ x: [0, -15, 8, 0], y: [0, 8, -8, 0], scale: [1, 1.08, 0.96, 1] }}
        transition={{ duration: 13, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[5%] left-[25%] h-60 w-60 rounded-full bg-amber-300/40 blur-[40px]"
        animate={{ x: [0, 10, -6, 0], y: [0, 10, -6, 0], scale: [1, 1.06, 0.97, 1] }}
        transition={{ duration: 14, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
    </div>
  )
}