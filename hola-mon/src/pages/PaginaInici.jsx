import { useState } from 'react'
import { Link } from 'react-router'
import Comptador from '../components/Comptador.jsx'
import Targeta from '../components/Targeta.jsx'

function PaginaInici() {
  const [comptador, setComptador] = useState(0)

  function canvia(delta) {
    setComptador((anterior) => anterior + delta)
  }

  function reinicia() {
    setComptador(0)
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
        <Comptador valor={comptador} missatge={missatge} tipus={tipus} onCanvia={canvia} onReinicia={reinicia}
          pas={1}
        />
      </Targeta>

      <Link to="/tasques">Ves a les tasques</Link>
    </main>
  )
}