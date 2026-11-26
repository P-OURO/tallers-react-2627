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
  const { tasques } = useContext(TasquesContext)
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
