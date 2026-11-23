import { useState, useContext } from 'react'
import Comptador from './components/Comptador';
import Targeta from './components/Targeta';
import FormulariTasca from './components/FormulariTasca';
import LlistaTasques from './components/LlistaTasques';
import FiltreTasques from './components/FiltreTasques';

//Export default -> sin {}
//Export sense default -> amb {}
import { TasquesContext } from './context/TasquesContext';

function App() {
  const [comptador, setComptador] = useState(0);
  const { tasques, toggleTasca, eliminaTasca } = useContext(TasquesContext)
  const [filtre, setFiltre] = useState('totes')

  function canvia(delta) {
    setComptador((comptador) => comptador + delta);
  }

  function reset() {
    setComptador((comptador) => comptador = 0);
  }

  //COMPTADOR
  let missatge = "";
  let tipus = "";

  if (comptador > 0) {
    missatge = "Vas per bon camí!";
    tipus = "exit";
  } else if (comptador < 0) {
    missatge = "Compte, vas enrere!";
    tipus = "error";
  } else {
    missatge = "Encara no has començat.";
    tipus = "info";
  }
  //FIN COMPTADOR

  //TASQUES
  const tasquesFiltrades = tasques.filter((tasca) => {
    if (filtre === 'pendents') return !tasca.feta
    if (filtre === 'fetes') return tasca.feta
    return true
  })

  let missatgeBuit = 'Encara no hi ha tasques. Afegeix-ne una.'

  if (tasques.length > 0 && filtre === 'pendents') {
    missatgeBuit = 'No hi ha tasques pendents. Bona feina!';
  } else if (tasques.length > 0 && filtre === 'fetes') {
    missatgeBuit = 'Encara no has marcat cap tasca com a feta';
  }
  //FI TASQUES

  return (
    
    <main className='container'>
      <Targeta titol="Comptador">
        <Comptador valor={comptador} missatge={missatge} tipus={tipus} onCanvia={canvia} onReinicia={reset} />
      </Targeta>

      <Targeta titol="Tasques">
        <FormulariTasca/>
        <LlistaTasques tasques={tasquesFiltrades} onToggle={toggleTasca} onElimina={eliminaTasca} missatgeBuit={missatgeBuit}></LlistaTasques>
        <FiltreTasques filtre={filtre} onCanviaFiltre={setFiltre}></FiltreTasques>
      </Targeta>
    </main>
  )
}

export default App
