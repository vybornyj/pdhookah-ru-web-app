import { useEffect, useRef } from 'react'

type useDidUpdate = (effect: () => void, deps?: ReadonlyArray<any>) => void

/**
 * Usage similar to useEffect
 */

export const useDidUpdate: useDidUpdate = (effect, deps) => {
  const hasMount = useRef(false)

  useEffect(() => {
    if (hasMount.current) {
      effect()
    } else {
      hasMount.current = true
    }
  }, deps)
}
