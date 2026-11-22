import { useState } from 'react'
import Comptador from './components/Comptador';
import Targeta from './components/Targeta';
import FormulariTasca from './components/FormulariTasca';
import LlistaTasques from './components/LlistaTasques';
import FiltreTasques from './components/FiltreTasques';

function App() {
  const [comptador, setComptador] = useState(0);
  const [tasques, setTasques] = useState([]);
  const [filtre, setFiltre] = useState('totes')

  function canvia(delta) {
    setComptador((comptador) => comptador + delta);
  }

  function reset() {
    setComptador((comptador) => comptador = 0);
  }

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

  function eliminaTasca(id){
    setTasques((anteriors) => anteriors.filter((tasca) => tasca.id !== id));
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
        <FormulariTasca onAfegir={afegeixTasca}></FormulariTasca>
        <LlistaTasques tasques={tasquesFiltrades} onToggle={toggleTasca} onElimina={eliminaTasca} missatgeBuit={missatgeBuit}></LlistaTasques>
        <FiltreTasques filtre={filtre} onCanviaFiltre={setFiltre}></FiltreTasques>
      </Targeta>
    </main>
  )
}

export default App
