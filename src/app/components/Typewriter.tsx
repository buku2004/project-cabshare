"use client"

import { useEffect, useState } from "react"

export default function Typewriter({
  words = ["Fast.", "Affordable.", "Eco-friendly."],
  typingSpeed = 30,
  deletingSpeed = 20,
  pauseTime = 1200,
  className = "",
}: {
  words?: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseTime?: number
  className?: string
}) {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [blink, setBlink] = useState(true)

  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((v) => !v), 500)
    return () => clearInterval(blinkInterval)
  }, [])

  useEffect(() => {
    const current = words[index % words.length]
    if (!deleting && subIndex === current.length) {
      const pause = setTimeout(() => setDeleting(true), pauseTime)
      return () => clearTimeout(pause)
    }
    if (deleting && subIndex === 0) {
      setDeleting(false)
      setIndex((i) => (i + 1) % words.length)
      return
    }

    const timeout = setTimeout(
      () => setSubIndex((s) => s + (deleting ? -1 : 1)),
      deleting ? deletingSpeed : typingSpeed,
    )

    return () => clearTimeout(timeout)
  }, [subIndex, deleting, index, words, typingSpeed, deletingSpeed, pauseTime])

  const text = words[index % words.length].slice(0, subIndex)

  return (
    <span className={className}>
      {text}
      <span className="ml-0.5 inline-block w-[2px] bg-gray-800" style={{ opacity: blink ? 1 : 0, height: "1em" }} />
    </span>
  )
}
