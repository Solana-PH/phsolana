'use client'

import { useEffect } from 'react'

export function AutoFontResizer() {
  useEffect(() => {
    const resizeFontSize = () => {
      const diff = window.innerHeight - 1024

      if (diff > 0) {
        const increase = diff / 1024
        const fontSize = 16 * (1 + increase)
        document.documentElement.style.fontSize = `${fontSize}px`
      }
    }

    window.addEventListener('load', resizeFontSize)
    window.addEventListener('resize', resizeFontSize)

    return () => {
      window.removeEventListener('load', resizeFontSize)
      window.removeEventListener('resize', resizeFontSize)
    }
  }, [])

  return null
}
