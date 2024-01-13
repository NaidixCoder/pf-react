import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Error from "./components/Error/Error";
import NavBar from "./components/NavBar/NavBar";
import Cart from "./components/Cart.jsx/Cart";
import CheckOut from "./components/CheckOut/CheckOut";

import { BrowserRouter, Routes, Route  } from "react-router-dom";
import { CartProvider } from "./context/CartContext";



function App() {

  return (
    <>
      <BrowserRouter>
        <CartProvider >
        
          <NavBar/>
          
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={"Todos los productos"}/>} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Error />} />
          </Routes>

        </CartProvider>

      </BrowserRouter>


    </>
  )
}

export default App
