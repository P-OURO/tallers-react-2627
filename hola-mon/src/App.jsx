import { useState } from 'react'
import Comptador from './components/Comptador';

function App() {
  const [comptador, setComptador] = useState(0)

  function canvia(delta) {
    setComptador((comptador) => comptador + delta);
  }

  function reset() {
    setComptador((comptador) => comptador = 0);
  }

  let missatge = "";

  if(comptador > 0){
    missatge ="Vas per bon camí!";
  } else if(comptador < 0){
    missatge="Compte, vas enrere!";
  } else {
    missatge = "Encara no has començat.";
  }

  return <Comptador valor={comptador} missatge={missatge} onCanvia={canvia} onReinicia={reset}/>
}

export default App
