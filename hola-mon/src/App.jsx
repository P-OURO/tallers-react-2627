import { useState } from 'react'

function App() {
  const [comptador, setComptador] = useState(0)

  //El valor de comptador no se actualizará hasta que no salga de la función por asincronía (no cambia comptador al instante) y la función seguirá viendo el valor anterior del render actual.
  function incrementar(){
    setComptador((valor) => valor + 1);
  }

  function decrementar() {
    setComptador((valor) => valor - 1);
  }

  function reset() {
    setComptador((valor) => valor = 0);
  }

  let missatge = "";

  if(comptador > 0){
    missatge ="Vas per bon camí!";
  } else if(comptador < 0){
    missatge="Compte, vas enrere!";
  } else {
    missatge = "Encara no has començat.";
  }

  return (
    <main className='container'>
      <h1 className='title-500 text-3xl sm:text-5xl'>Hola món!</h1>
      <div className='content mt-5'>
        <p className='title-100'>Clicks fets: {comptador}</p>
        <p className='title-100'>{missatge}</p>

        <div className='container-buttons'>
          <button onClick={incrementar}>Incrementa</button>
          <button onClick={decrementar}>Decrementa</button>
          <button onClick={reset} disabled={comptador === 0}>Reset</button>
        </div>
      </div>
    </main>
  )
}

export default App
