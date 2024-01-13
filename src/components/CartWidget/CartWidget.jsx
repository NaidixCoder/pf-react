import { BsFillCartFill  } from 'react-icons/bs';
import "./cartwidget.css"

import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

function CartWidget() {
    const { totalQuantity } = useContext( CartContext );

    return (
        <Link to={"/Cart"}>
            <div className='flex items-center'>
                <BsFillCartFill className='icon ico-cart is-normal has-text-info text-white hover:text-second transition-all duration-200 cursor-pointer text-2xl'/>
                { totalQuantity() > 0 ?
                    <span className="text-yellow-300 font-bol text-s cursor-pointer pointer-events-none">{totalQuantity()}</span>
                    :                
                    <span className="text-red-500 left-2.5 text-xs cursor-pointer pointer-events-none">{totalQuantity()}</span>                
                }
            </div>
        </Link>
    )
}

export default CartWidget