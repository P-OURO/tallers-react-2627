import Boto from './Boto';

function Comptador({ valor, missatge, onCanvia, onReinicia, pas = 1 }) {
    return (
        <main className='container'>
            <h1 className='title-500 text-3xl sm:text-5xl'>Hola món!</h1>
            <div className='content mt-5'>
                <p className='title-100'>Clicks fets: {valor}</p>
                <p className='title-100'>{missatge}</p>

                <div className='container-buttons'>
                    <Boto onClick={()=>onCanvia(pas)} disabled={false}>Incrementa</Boto>
                    <Boto variant="secundari" onClick={()=>onCanvia(-pas)} disabled={false}>Decrementa</Boto>
                    <Boto variant="perill" onClick={onReinicia} disabled={valor === 0}>Reset</Boto>
                </div>
            </div>
        </main>
    )
}

export default Comptador