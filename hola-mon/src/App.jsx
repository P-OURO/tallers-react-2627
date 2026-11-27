import { useState, useContext, useEffect } from 'react'
import Comptador from './components/Comptador';
import Targeta from './components/Targeta';
import FormulariTasca from './components/FormulariTasca';
import LlistaTasques from './components/LlistaTasques';
import FiltreTasques from './components/FiltreTasques';

//Export default -> sin {}
//Export sense default -> amb {}
import { TasquesContext } from './context/TasquesContext';

function App() {
  const CLAU_FILTRE = 'hola-mon.filtre'
  const FILTRES_VALIDS = ['totes', 'pendents', 'fetes']
  const [comptador, setComptador] = useState(0);
  const { tasques } = useContext(TasquesContext);
  const [filtre, setFiltre] = useState(llegeixFiltre);
  
  function llegeixFiltre() {
    try {
      const guardat = localStorage.getItem(CLAU_FILTRE)
      if (!guardat) return 'totes'
      
      const valor = JSON.parse(guardat)
      return FILTRES_VALIDS.includes(valor) ? valor : 'totes'
    } catch {
      return 'totes';
    }
  }

  useEffect(() => {
    try {
      localStorage.setItem(CLAU_FILTRE, JSON.stringify(filtre))
    } catch {
      // L’aplicació continua funcionant en memòria.
    }
  }, [filtre])

  return (
    <main className='container'>
      <Targeta titol="Comptador">
        <Comptador valor={comptador} missatge={missatge} tipus={tipus} onCanvia={canvia} onReinicia={reset} />
      </Targeta>

      <Targeta titol="Tasques">
        <FormulariTasca/>
        <LlistaTasques filtre={filtre}></LlistaTasques>
        <FiltreTasques filtre={filtre} onCanviaFiltre={setFiltre}></FiltreTasques>
      </Targeta>
    </main>
  )
}

export default App
