import { useState } from 'react'
import Comptador from './components/Comptador';
import Targeta from './components/Targeta';

function App() {
  const [comptador, setComptador] = useState(0)

  function canvia(delta) {
    setComptador((comptador) => comptador + delta);
  }

  function reset() {
    setComptador((comptador) => comptador = 0);
  }

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

  return (
    <main className='container'>
      <Targeta titol="Comptador">
        <Comptador valor={comptador} missatge={missatge} tipus={tipus} onCanvia={canvia} onReinicia={reset} />
      </Targeta>
    </main>
  )
}

export default App
