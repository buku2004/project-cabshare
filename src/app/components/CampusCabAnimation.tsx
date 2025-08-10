"use client"

import type React from "react"

import { motion, useMotionValue, animate } from "motion/react"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"

/**
 * CampusCabAnimation
 * - Animated SVG map with hostel markers and a cab that moves between them.
 * - Subtle, looping animation intended for homepage hero background/side visual.
 */

type Node = { id: string; label: string; x: number; y: number }

const nodes: Node[] = [
  { id: "HB", label: "HB", x: 100, y: 400 },
  { id: "MSS", label: "MSS", x: 220, y: 330 },
  { id: "DBA", label: "DBA", x: 360, y: 420 },
  { id: "GDB", label: "GDB", x: 520, y: 340 },
  { id: "VS", label: "VS", x: 700, y: 290 },
  // Added SD after VS (placed between VS and CVR for a smoother path)
  { id: "SD", label: "SD", x: 640, y: 240 },
  { id: "CVR", label: "CVR", x: 560, y: 160 },
  { id: "KMS", label: "KMS", x: 320, y: 210 },
]

// Sequence (loop)
// Insert SD right after VS
const routeIds = ["HB", "MSS", "DBA", "GDB", "VS", "SD", "CVR", "KMS", "HB"]

function distance(a: Node, b: Node) {
  const dx = b.x - a.x
  const dy = b.y - a.y
  return Math.sqrt(dx * dx + dy * dy)
}

function angleDeg(a: Node, b: Node) {
  const dx = b.x - a.x
  const dy = b.y - a.y
  return (Math.atan2(dy, dx) * 180) / Math.PI
}

export default function CampusCabAnimation({
  className = "",
  speed = 220, // px per second
  pauseAtNode = 0.6, // seconds
  accent = "#f59e0b", // amber-500
  accentDim = "rgba(245, 158, 11, 0.25)",
}: {
  className?: string
  speed?: number
  pauseAtNode?: number
  accent?: string
  accentDim?: string
}) {
  const nodeMap = useMemo(() => {
    const map = new Map<string, Node>()
    nodes.forEach((n) => map.set(n.id, n))
    return map
  }, [])

  const route = useMemo(() => routeIds.map((id) => nodeMap.get(id)!).filter(Boolean), [nodeMap])

  // Motion values for cab position and rotation
  const x = useMotionValue(route[0].x)
  const y = useMotionValue(route[0].y)
  const rot = useMotionValue(angleDeg(route[0], route[1]))

  // Active (highlight) index
  const [activeIdx, setActiveIdx] = useState(0)

  const rafRef = useRef<{ stop?: () => void } | null>(null)
  const isMountedRef = useRef(true)

  // Main animation loop
  useEffect(() => {
    isMountedRef.current = true

    async function loop() {
      let i = 0
      while (isMountedRef.current) {
        const from = route[i % route.length]
        const to = route[(i + 1) % route.length]

        // Highlight arrival at "from"
        setActiveIdx(i % route.length)

        // Rotate towards next segment
        const targetAngle = angleDeg(from, to)
        const rotAnim = animate(rot, targetAngle, { duration: 0.25, ease: "easeOut" })

        // Move cab from -> to
        const dist = distance(from, to)
        const duration = Math.max(0.3, dist / speed)
        const ax = animate(x, to.x, { duration, ease: "easeInOut" })
        const ay = animate(y, to.y, { duration, ease: "easeInOut" })

        rafRef.current = ax
        await Promise.all([rotAnim.finished, ax.finished, ay.finished])

        // Brief pause on arrival
        await new Promise((r) => setTimeout(r, pauseAtNode * 1000))

        i++
      }
    }

    loop()

    return () => {
      isMountedRef.current = false
      rafRef.current?.stop?.()
    }
  }, [route, speed, pauseAtNode, x, y, rot])

  const containerRef = useRef<HTMLDivElement>(null)
  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    // subtle parallax for the entire SVG
    const rect = e.currentTarget.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    const el = containerRef.current
    if (el) {
      el.style.transform = `perspective(800px) rotateX(${py * -3}deg) rotateY(${px * 3}deg)`
    }
  }, [])

  const onMouseLeave = useCallback(() => {
    const el = containerRef.current
    if (el) el.style.transform = `perspective(800px) rotateX(0deg) rotateY(0deg)`
  }, [])

  // Polyline connecting all nodes
  const polylinePoints = useMemo(() => route.map((n) => `${n.x},${n.y}`).join(" "), [route])

  return (
    <div
      className={`relative ${className}`}
      aria-label="NIT Rourkela hostel route animation"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div ref={containerRef} className="transition-transform duration-300" style={{ willChange: "transform" }}>
        <svg viewBox="0 0 800 500" className="h-full w-full" role="img" aria-labelledby="campusTitle">
          <title id="campusTitle">Animated cab traveling between hostels</title>

          {/* Background */}
          <defs>
            <linearGradient id="pathGradient" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor={accent} stopOpacity="0.35" />
              <stop offset="100%" stopColor={accent} stopOpacity="0.6" />
            </linearGradient>
            <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Subtle grid */}
          <g opacity="0.08">
            {Array.from({ length: 9 }).map((_, i) => (
              <line
                key={`v${i}`}
                x1={(i + 1) * (800 / 10)}
                y1="40"
                x2={(i + 1) * (800 / 10)}
                y2="460"
                stroke="#000"
                strokeWidth="1"
              />
            ))}
            {Array.from({ length: 6 }).map((_, i) => (
              <line
                key={`h${i}`}
                x1="40"
                y1={(i + 1) * (420 / 7) + 40}
                x2="760"
                y2={(i + 1) * (420 / 7) + 40}
                stroke="#000"
                strokeWidth="1"
              />
            ))}
          </g>

          {/* Path */}
          <polyline
            points={polylinePoints}
            fill="none"
            stroke="url(#pathGradient)"
            strokeWidth="6"
            strokeLinecap="round"
          />
          {/* Soft outline for depth */}
          <polyline
            points={polylinePoints}
            fill="none"
            stroke={accentDim}
            strokeWidth="12"
            strokeLinecap="round"
            opacity="0.5"
            strokeLinejoin="round"
          />

          {/* Hostels */}
      {route.map((n, idx) => {
            const isActive = idx === activeIdx
            return (
        <g key={`${n.id}-${idx}`} transform={`translate(${n.x}, ${n.y})`}>
                <motion.circle
                  r="10"
                  fill="#fff"
                  stroke={accent}
                  strokeWidth="3"
                  initial={false}
                  animate={{
                    scale: isActive ? 1.25 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                />
                {/* Glow ring on active */}
                <motion.circle
                  r="18"
                  fill="none"
                  stroke={accent}
                  strokeWidth="3"
                  opacity={0.2}
                  initial={false}
                  animate={{
                    scale: isActive ? [1, 1.2, 1] : 1,
                    opacity: isActive ? [0.25, 0.4, 0.25] : 0.15,
                  }}
                  transition={{
                    duration: 1.4,
                    repeat: isActive ? Number.POSITIVE_INFINITY : 0,
                    ease: "easeInOut",
                  }}
                  filter="url(#softGlow)"
                />
                {/* Label */}
                <text x={0} y={-20} textAnchor="middle" className="fill-gray-700 text-[12px] font-semibold">
                  {n.label}
                </text>
              </g>
            )
          })}

          {/* Cab */}
          <motion.g
            style={{
              x,
              y,
              rotate: rot,
              transformBox: "fill-box",
              transformOrigin: "center",
            }}
          >
            {/* Dust / motion lines (behind cab in local -X) */}
            <motion.line
              x1="-26"
              y1="0"
              x2="-10"
              y2="0"
              stroke={accent}
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ opacity: 0.35, scaleX: 1 }}
              animate={{ opacity: [0.35, 0, 0.35], scaleX: [1, 0.4, 1] }}
              transition={{ duration: 1.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />
            <motion.line
              x1="-22"
              y1="6"
              x2="-8"
              y2="6"
              stroke={accent}
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ opacity: 0.25, scaleX: 1 }}
              animate={{ opacity: [0.25, 0, 0.25], scaleX: [1, 0.4, 1] }}
              transition={{ duration: 1.4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.1 }}
            />
            <motion.line
              x1="-22"
              y1="-6"
              x2="-8"
              y2="-6"
              stroke={accent}
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ opacity: 0.25, scaleX: 1 }}
              animate={{ opacity: [0.25, 0, 0.25], scaleX: [1, 0.4, 1] }}
              transition={{ duration: 1.4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.2 }}
            />

            {/* Cab glyph */}
            <g>
              {/* Body */}
              <rect x="-12" y="-9" width="28" height="18" rx="4" fill={accent} stroke="#1f2937" strokeWidth="1.5" />
              {/* Roof */}
              <path d="M -6 -9 L 2 -9 L 8 -3 L -12 -3 Z" fill="#fde68a" stroke="#1f2937" strokeWidth="1.2" />
              {/* Windows */}
              <rect x="-4" y="-7" width="5" height="3.5" fill="#fff" opacity="0.9" />
              <rect x="2" y="-7" width="5" height="3.5" fill="#fff" opacity="0.9" />
              {/* Wheels */}
              <circle cx="-6" cy="10" r="3.5" fill="#111827" />
              <circle cx="8" cy="10" r="3.5" fill="#111827" />
              {/* Headlight */}
              <circle cx="17" cy="0" r="2" fill="#fff" opacity="0.9" />
            </g>
          </motion.g>
        </svg>
      </div>
    </div>
  )
}