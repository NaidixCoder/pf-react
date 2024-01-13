import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";



function ItemDetail( {id, name, img, category, desc, price, stock} ) {

    const [quantityAdded, setQuantityAdded] = useState(0);
    const { addItem, formatMoney } = useContext(CartContext );

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, name, price, img, desc
        }

        addItem(item, quantity)
    }

    return (
        <article className="mt-20 h-[100%] place-items-center grid grid-cols-3 mx-[15%] p-3 border" >
            
            <picture className="col-start-1 col-end-3 max-w-[300px] lg:max-w-[500px] xl:max-w-[600px]" >
                <img src={img} className="object-cover"/>            
            </picture>
            
            <div className="col-start-3 col-end-4 border-2 p-5 h-[100%] flex flex-col justify-center min-w-72">
                <p className="text-sm text-gray-500">Nuevo  | +1000 vendidos</p>
                <header>
                    <h2 className="text-center text-3xl text-main uppercase pt-4 pb-2 font-serif">{name}</h2>
                    <p className="text-3xl">{formatMoney(price)}</p>
                    <p>en 12x $ {(price * 2.5 / 12).toFixed(2)}</p>
                    <div className="py-6">
                        <p className="text-green-600 text-md font-bold pt-2">Llega gratis <span className="text-slate-600 font-normal">el martes</span></p>
                        <p className="text-green-600 text-md font-bold pt-2">Devolución gratis</p>
                        <p className="text-slate-600 font-normal">Tenés 30 días desde que lo recibís.</p>
                    </div>
                </header>
                <section className="py-4 text-lg grid items-center h-[100%]">
                    <div>
                        <p className="py-2">Descripcion: {desc}</p>
                        <p className="py-2">Stock: {stock}</p>
                    </div>
                </section>

                <footer className="flex justify-center items-center w-[100%] h-[100%]">
                    {
                        quantityAdded > 0 ? (
                            <div className="flex flex-col gap-4 w-[90%]">
                            <Link to='/cart' className="bg-second py-1 px-3 rounded-sm text-xl text-main text-center">Ir al carrito</Link>
                            <Link to='/' className="bg-second py-1 px-3 rounded-sm text-xl text-main text-center">Seguir comprando</Link>
                            </div>
                            
                        ) : (
                            <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                        )
                    }

                </footer>
            </div>    
        </article>
    )
}

export default ItemDetail;