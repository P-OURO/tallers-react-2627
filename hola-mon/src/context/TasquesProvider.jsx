import { useState, useEffect } from 'react'
import { TasquesContext } from './TasquesContext.js'

function TasquesProvider({ children }) {
  const CLAU_TASQUES = 'hola-mon.tasques'
  const [tasques, setTasques] = useState(llegeixTasques)
  // Tot el que tenim dins
  const value = { tasques, afegeixTasca, toggleTasca, eliminaTasca } 

  function afegeixTasca(text) {
    let tascaNova = {
      id: crypto.randomUUID(),
      text: text,
      feta: false
    }
    setTasques((tasques) => [...tasques, tascaNova]);
  }

  function toggleTasca(id){
    setTasques((anteriors) => anteriors.map((tasca) =>
      tasca.id === id ? { ...tasca, feta: !tasca.feta } : tasca,
    ));
  }

  function esTascaValida(tasca) {
    return (
      tasca !== null &&
      typeof tasca === 'object' &&
      typeof tasca.id === 'string' &&
      typeof tasca.text === 'string' &&
      typeof tasca.feta === 'boolean'
    )
  }

  function esLlistaDeTasques(valor) {
    return Array.isArray(valor) && valor.every(esTascaValida)
  }

  function eliminaTasca(id) {
    setTasques((anteriors) => anteriors.filter((tasca) => tasca.id !== id))
  }

  function llegeixTasques() {
    try {
      const guardades = localStorage.getItem(CLAU_TASQUES)
      if (!guardades) return []

      const dades = JSON.parse(guardades)
      return esLlistaDeTasques(dades) ? dades : []
    } catch {
      return []
    }
  }

  useEffect(() => {
    try {
      localStorage.setItem(CLAU_TASQUES, JSON.stringify(tasques));
    } catch {
      // L’aplicació continua funcionant en memòria.
    }
  }, [tasques])

  return (
    <TasquesContext.Provider value={value}>
      {children}
    </TasquesContext.Provider>
  )
}

export default TasquesProvider