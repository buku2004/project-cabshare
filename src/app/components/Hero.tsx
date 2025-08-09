"use client"

import { motion } from "motion/react"
import Link from "next/link"
import { GraduationCap, Car, MapPin } from "lucide-react"
import { Button } from "./ui/button"
import AnimatedBackground from "./AnimatedBackground"
import CampusCabAnimation from "./CampusCabAnimation"
import Typewriter from "./Typewriter"
import Stats from "./Stats"

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 mb-4 sm:mb-10 md:mb-12 lg:mb-16">
      <AnimatedBackground />
      <div className="container mx-auto max-w-7xl px-4 py-6 sm:py-12 md:py-12 lg:py-20">
        <div className="grid items-center gap-8 md:gap-12 lg:grid-cols-2">
          {/* Left: Content */}
          <div className="relative z-10 space-y-4 sm:space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700 shadow-sm">
              <GraduationCap className="h-4 w-4" />
              {"NIT Rourkela • Campus Ride Share"}
            </div>

            <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-5xl md:text-5xl lg:text-6xl">
              {"Share your ride. "}
              <span className="text-amber-600">{"Save money."}</span>{" "}
              <span className="text-orange-500">{"Go together."}</span>
            </h1>

            <p className="max-w-xl text-sm text-gray-600 sm:text-base lg:text-lg mx-auto lg:mx-0">
              {"CabShare connects NIT Rourkela students and staff for safe, affordable intercity cab pooling."}
            </p>

            <div className="text-sm text-gray-700 min-h-[2rem]">
              <Typewriter
                words={[
                  "Campus-first. Built for NITR.",
                  "Split fares. Travel smarter.",
                  "Meet co-travelers. Go together.",
                ]}
                typingSpeed={26}
                deletingSpeed={18}
                pauseTime={1400}
                className="font-medium text-black text-base sm:text-lg md:text-xl"
              />
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                <Button asChild size="lg" className="bg-amber-600 text-white hover:bg-amber-700 w-full sm:w-auto">
                  <Link href="/post-ride">
                    <Car className="mr-2 h-5 w-5" />
                    {"Post a Ride"}
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-amber-300 bg-transparent text-amber-700 hover:bg-amber-50 w-full sm:w-auto"
                >
                  <Link href="/find-ride">
                    <MapPin className="mr-2 h-5 w-5" />
                    {"Find a Ride"}
                  </Link>
                </Button>
              </motion.div>
            </div>

            <div className="pt-4 sm:pt-6">
              <Stats />
            </div>
          </div>

          {/* Right: Visual */}
          <div className="relative order-first lg:order-last">
            <CampusCabAnimation className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border bg-white/70 shadow-lg backdrop-blur" />
          </div>
        </div>
      </div>
    </section>
  )
}
