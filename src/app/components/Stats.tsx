"use client"

import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react"
import { useEffect, useRef } from "react"
import { Users, Wallet, Car } from "lucide-react"

function CountUp({
  to = 1000,
  prefix = "",
  suffix = "",
}: {
  to?: number
  prefix?: string
  suffix?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-20% 0px -20% 0px" })

  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.floor(latest).toLocaleString("en-IN"))

  useEffect(() => {
    let controls: ReturnType<typeof animate> | undefined
    if (inView) {
      controls = animate(count, to, {
        duration: 1.2,
        ease: "easeOut",
      })
    }
    return () => controls?.stop()
  }, [inView, count, to])

  return (
    <div ref={ref}>
      <span className="tabular-nums">
        {prefix}
        <motion.span>{rounded}</motion.span>
        {suffix}
      </span>
    </div>
  )
}

export default function Stats() {
  return (
    <div className="grid gap-4 rounded-xl border bg-white/70 p-4 backdrop-blur sm:grid-cols-3">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
          <Car className="h-5 w-5 text-amber-700" />
        </div>
        <div>
          <div className="text-2xl font-bold text-gray-900 flex">
            <CountUp to={1200} />
          </div>
          <div className="text-xs text-gray-600">{"Rides shared"}</div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
          <Wallet className="h-5 w-5 text-orange-700" />
        </div>
        <div>
          <div className="text-2xl font-bold text-gray-900 flex">
            <CountUp to={35000} prefix="₹" />
          </div>
          <div className="text-xs text-gray-600">{"Saved by the community"}</div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
          <Users className="h-5 w-5 text-amber-700" />
        </div>
        <div>
          <div className="text-2xl font-bold text-gray-900 flex">
            <CountUp to={4200} />
          </div>
          <div className="text-xs text-gray-600">{"Active members"}</div>
        </div>
      </div>
    </div>
  )
}
