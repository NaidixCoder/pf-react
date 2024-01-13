
function Error() {
    return (
        <div className='h-[calc(100vh-88px)] bg-second flex justify-center items-center flex-col'>
            <h1 className="text-5xl text-main p-10">Ups ¡algo salio mal!</h1>
            <h2 className="text-2xl">Error 404</h2>
            <p className="text-lg">Pagina no encontrada</p>
        </div>
    )
}

export default Error