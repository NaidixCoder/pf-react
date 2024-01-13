import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom";
import { EmptyCart } from "./EmptyCart";
import Swal from "sweetalert2";

function Cart() {
    const { cart, clearCart, totalQuantity, total, removeItem, formatMoney } = useContext(CartContext);

    const delAlert = (productId) => {  
        Swal.fire({
            title: "Advertencia",
            text: "¿Estás seguro de que deseas eliminar el producto del carrito?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí",
            cancelButtonText: "No",
        }).then((result) => {
            if (result.isConfirmed) {
                // Si el usuario confirma, eliminamos el producto
                removeItem(productId);
            }
        });
    };

    const clearCartAlert = () => {
        Swal.fire({
            title: "Advertencia",
            text: "¿Estás seguro de que deseas limpiar todo el carrito?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí",
            cancelButtonText: "No",
        }).then((result) => {
            if (result.isConfirmed) {
                clearCart();
            }
        });
    };

    if (totalQuantity() === 0) {
        return (
            <EmptyCart />
        )
    }

    return (
        <div className="mt-6 h-screen flex items-center flex-col w-[100%]">
            <h1 className="text-3xl py-5">Productos en el carrito</h1>
            <div className="flex flex-col flex-wrap w-[90%] sm:w-[500px] md:w-[500px]">
                {cart.map((p) => (
                    <div key={p.id} className="flex justify-between gap-4p-4 rounded w-[100%] border-[1px] p-3 mb-2">
                        <div className="flex h-[100%] items-center">
                            <picture className="border-black border-[1px] w-20 min-w-20 min-h-20 h-20 flex items-center">
                                <img src={p.img} alt={p.name} className="object-cover"/>
                            </picture>
                        </div>
                        <div className="flex flex-col text-left flex-grow px-4">
                            <h3 className="text-lg font-semibold">{p.name}</h3>
                            <h4>{p.desc}</h4>
                            <p>Cantidad: {p.quantity}</p>
                            <p>Subtotal: {formatMoney(p.price * p.quantity)}</p>
                        </div>
                        <div className="flex justify-center items-center">
                            <button
                                onClick={() => delAlert(p.id)}
                                className="bg-main h-10 text-white px-2 py-1 rounded hover:bg-red-500 transition-all duration-300 font-light"
                            >
                                Eliminar
                            </button>
                        </div>
                    </div>
                ))}
                <p>Productos: {cart.length}</p>
                <p>Envio: <span className="text-green-600">Gratis</span></p>
                <p className="text-xl font-semibold mt-4">Total: {formatMoney(total())}</p>
                <Link
                    to="/checkout"
                    className="bg-blue-700 text-center text-white px-4 py-2 rounded mt-2 hover:bg-blue-800 transition-all duration-300"
                >
                    Continuar compra
                </Link>
                <p
                    onClick={clearCartAlert}
                    className="text-red-600 cursor-pointer py-2 rounded mt-2 hover:text-red-900 transition-all duration-300"
                >
                    Limpiar carrito
                </p>
            </div>
        </div>
    )
}

export default Cart