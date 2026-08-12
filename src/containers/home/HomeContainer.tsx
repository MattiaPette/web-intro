import { useCallback } from 'react'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import HomeContent from '../../components/home/HomeContent'

/**
 * Container: contiene la logica di questa pagina (qui: stato persistito).
 * Non conosce i dettagli di presentazione: delega tutto a HomeContent.
 */
export default function HomeContainer() {
  const [name, setName] = useLocalStorage('home.name', '')

  const handleNameChange = useCallback((value: string) => setName(value), [setName])

  return <HomeContent name={name} onNameChange={handleNameChange} />
}