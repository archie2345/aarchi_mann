"use client"

import { useEffect, useRef, useState, useCallback } from "react"

export function useScrollReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, isVisible }
}

export function useParallax(speed = 0.3) {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  const handleScroll = useCallback(() => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const windowHeight = window.innerHeight
    const elementCenter = rect.top + rect.height / 2
    const distanceFromCenter = elementCenter - windowHeight / 2
    setOffset(distanceFromCenter * speed * -1)
  }, [speed])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])

  return { ref, offset }
}
