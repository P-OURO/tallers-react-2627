const ESTILS = {
    primari: 'text-amber-50 bg-amber-600 hover:bg-amber-700 focus:bg-amber-900',
    secundari: 'text-amber-50 bg-cyan-500 hover:bg-cyan-600 focus:bg-cyan-800',
    perill: 'text-amber-50 bg-rose-500 hover:bg-rose-600 focus:bg-rose-800 disabled:bg-rose-900 disabled:text-gray-400 disabled:border-gray-400',
    base: 'p-2 border-2 rounded border-amber-50 hover:shadow-2xl font-bold cursor-pointer w-full sm:w-auto'
}

function Boto({ variant="primari", className='', onClick, disabled, children, ...props }) {
    const estilVariant = ESTILS[variant];
    
    return (
        <button type="button" className={`${ESTILS.base} ${estilVariant}`} onClick={()=>onClick()} disabled={disabled} {...props}>{children}</button>
    )
}

export default Boto