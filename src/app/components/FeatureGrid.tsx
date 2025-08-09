"use client"

import { motion } from "framer-motion"
import { Users, Wallet, Clock, Phone } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Campus community",
    desc: "Connect with verified students and staff from NIT Rourkela.",
    color: "text-amber-700 bg-amber-100",
  },
  {
    icon: Wallet,
    title: "Budget‑friendly",
    desc: "Split fares, pay less, and travel smarter together.",
    color: "text-orange-700 bg-orange-100",
  },
  {
    icon: Clock,
    title: "Flexible schedules",
    desc: "Filter by date and time to match your plan.",
    color: "text-amber-700 bg-amber-100",
  },
  {
    icon: Phone,
    title: "Easy contact",
    desc: "Reach owners directly and confirm details quickly.",
    color: "text-orange-700 bg-orange-100",
  },
]

export default function FeaturesGrid() {
  return (
    <div className="pt-6 sm:pt-10 md:pt-8 lg:pt-10 pb-12 sm:pb-12 md:pb-20 lg:pb-24 mb-12 sm:mb-16 md:mb-20 lg:mb-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 space-y-8">
        <div className="text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700">
            <span>{"Why CabShare"}</span>
          </div>
          <h2 className="mt-3 text-balance text-3xl font-bold sm:text-4xl">{"Built for the NITR community"}</h2>
          <p className="mx-auto mt-2 max-w-2xl text-gray-600">
            {"Clean, simple, and campus‑first—everything you need to coordinate intercity rides together."}
          </p>
        </div>

        <div className="grid gap-4 sm:gap-5 md:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => {
          const Icon = f.icon
          return (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="rounded-xl border bg-white/90 p-5 sm:p-6 md:p-7 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="px-2 py-1">
                <div className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full ${f.color}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold mb-2 px-1">{f.title}</h3>
                <p className="text-sm text-gray-600 leading-snug px-1">{f.desc}</p>
              </div>
            </motion.div>
          )
        })}
        </div>
      </div>
    </div>
  )
}
