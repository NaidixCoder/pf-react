import { Link } from "react-router-dom"


export const EmptyCart = () => {
    return (
        <div className="h-screen bg-second flex pt-36 items-center flex-col">
            <div className="p-4 text-center">
            <p className="text-5xl mb-5"> ¡Ups!</p>

                <h1 className="text-3xl text-main">No hay productos en el carrito =&#40;</h1>
            </div>
            <Link
                to="/"
                className="bg-blue-700 text-center text-white px-4 py-2 rounded mt-2 hover:bg-blue-800 transition-all duration-300"
            >
                Volver
            </Link>
        </div>
    )
}
