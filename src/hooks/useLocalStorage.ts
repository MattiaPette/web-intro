import { useCallback, useState } from 'react'

type InitialValue<T> = T | (() => T)

/**
 * Hook riutilizzabile: stato React persistito in localStorage.
 * La funzione setValue accetta sia un valore diretto sia una funzione updater.
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: InitialValue<T>,
): [T, (value: T | ((prev: T) => T)) => void] {
  const [stored, setStored] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key)
      if (item !== null) {
        return JSON.parse(item) as T
      }
    } catch {
      // valori corrotti o storage non disponibile: si riparte dall'initial
    }
    return typeof initialValue === 'function' ? (initialValue as () => T)() : initialValue
  })

  const setValue = useCallback(
    (value: T | ((prev: T) => T)) => {
      setStored((prev) => {
        const next = typeof value === 'function' ? (value as (prev: T) => T)(prev) : value
        try {
          window.localStorage.setItem(key, JSON.stringify(next))
        } catch {
          // storage pieno o non disponibile: lo stato in memoria resta valido
        }
        return next
      })
    },
    [key],
  )

  return [stored, setValue]
}