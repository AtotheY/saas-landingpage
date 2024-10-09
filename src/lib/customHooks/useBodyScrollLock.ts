import { useLayoutEffect } from 'react'

export function useBodyScrollLock(active: boolean): void {
  useLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow

    if (active) {
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.body.style.overflow = originalStyle
    }
  }, [active])
}