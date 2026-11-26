import { useState, useEffect } from 'react'
import { TasquesContext } from './TasquesContext.js'

function TasquesProvider({ children }) {
  const [tasques, setTasques] = useState([])

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

  function eliminaTasca(id) {
    setTasques((anteriors) => anteriors.filter((tasca) => tasca.id !== id))
  }

  // Tot el que tenim dins
  const value = { tasques, afegeixTasca, toggleTasca, eliminaTasca } 

  const CLAU_TASQUES = 'hola-mon.tasques'

  function llegeixTasques() {
    const guardades = localStorage.getItem(CLAU_TASQUES)

    if (!guardades) return []

    const dades = JSON.parse(guardades)
    return Array.isArray(dades) ? dades : []
  }




  return (
    <TasquesContext.Provider value={value}>
      {children}
    </TasquesContext.Provider>
  )
}

export default TasquesProvider