import { useState } from "react"
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function ItemCount( {stock, initial, onAdd} ) {

    const mostrarAlerta = () => {
        Swal.fire("Ingrese una cantidad", "", "error")
    }

    const successfully = () => {
        Swal.fire({
            title: "Exito",
            text: "Producto agregado al carrito",
            icon: "success",
            timer: "1000",
            showConfirmButton: false,
        })
    }

    const [quantity, setQuantity] = useState(0);

    const handleClickAddToCart = () => {
        if (quantity === 0) {
            mostrarAlerta();
        } else {
            onAdd(quantity);
            successfully();
        }
    };

    const handleIncrement = () => quantity < stock && setQuantity(quantity + 1);
    const handleDectrement = () => quantity > 0 && setQuantity(quantity - 1);

    return (
        <div className="flex flex-col justify-center items-center px-10 py-3 rounded-sm">
            <div className="flex p-2 justify-center gap-4 items-center">
                <button onClick={handleIncrement} className="bg-second py-1 px-3 rounded-sm text-main">+</button>
                <span className="text-center min-w-[1.2rem]">{quantity}</span>
                <button onClick={handleDectrement} className="bg-second py-1 px-3 rounded-sm text-main">-</button>
            </div>
            <div className="px-2 flex justify-center">
                <Link
                        onClick={handleClickAddToCart}
                        disabled={!stock}
                        className={`${
                            stock === 0 ? "cursor-not-allowed bg-gray-300 text-gray-500" : "bg-second"
                        } py-1 px-3 rounded-sm text-main text-center`}
                    >
                        Agregar al carrito
                    </Link>
            </div>
        </div>
    )
}

export default ItemCount