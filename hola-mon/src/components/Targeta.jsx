const ESTILS = {
    base: 'flex flex-wrap flex-col bg-[#dfbcf0] p-5 w-100 justify-self-center text-center shadow-2xl rounded-2xl'
}

function Targeta({ titol, children }) {
    return (
        <section>
            <h2 className="font-extrabold text-3xl sm:text-5xl">{titol}</h2>
            <div className={`${ESTILS.base} mt-5`}>
                {children}
            </div>
        </section>
    )
}

export default Targeta