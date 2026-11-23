import { useState } from 'react'
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

  return (
    <TasquesContext.Provider value={value}>
      {children}
    </TasquesContext.Provider>
  )
}

export default TasquesProvider