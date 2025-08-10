"use client"

import { motion } from "framer-motion"

const items = ["NITR SAC", "Alumni Network", "Coding Club", "Hostel Council", "Cultural Societies", "Sports Council"]

function Row() {
  return (
    <div className="flex items-center gap-8 pr-8">
      {items.map((name) => (
        <div
          key={name}
          className="flex h-10 items-center justify-center whitespace-nowrap rounded-md border bg-white px-4 text-sm font-medium text-gray-700 shadow-sm"
        >
          {name}
        </div>
      ))}
    </div>
  )
}

export default function LogosMarquee() {
  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      >
        <Row />
        <Row />
        <Row />
        <Row />
      </motion.div>
    </div>
  )
}
