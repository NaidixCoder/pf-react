import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebase/config";
import CheckOutForm from "../CheckOutForm/CheckOutForm";
import { Timestamp, collection, writeBatch, addDoc, documentId, getDocs, query, where } from "firebase/firestore";
import { RingLoader } from "react-spinners";
import { Link } from "react-router-dom";

function CheckOut() {

  const [ loading, setLoading ] = useState(false);
  const [ orderId, setOrderId ] = useState("");
  
  const { cart, total, clearCart } = useContext(CartContext);

  const createOrder = async( {name, lastName, phone, email, city, prov, zip} ) => {
    setLoading(true);
    
    try{
        const objOrder = {
        buyer: {
          name, lastName, phone, email, city, prov, zip
        },
        items: cart,
        total: total(),
        date: Timestamp.fromDate(new Date())
      }

      const batch = writeBatch(db);
      const outOfStock = [];
      const ids = cart.map(prod => prod.id);
      const productsRef = collection(db, "products");
      const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), "in", ids )))

      const { docs } = productsAddedFromFirestore;
      docs.forEach(doc => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;

        const productAddedToCart = cart.find(prod => prod.id === doc.id);
        const prodQuantity = productAddedToCart?.quantity;

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      })

      if (outOfStock.length === 0) {
        await batch.commit()

        const orderRef = collection(db, "orders");

        const orderAdded = await addDoc(orderRef, objOrder);

        setOrderId(orderAdded.id);
        clearCart();
      } else {
        console.error("Hay productos que estan fuera de stock")
      }
    } catch (error) {
      console.log(error)
    } finally{
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="h-[calc(100vh-88px)] flex items-center pt-10 flex-col">
        <h1 className="text-4xl p-4">Se esta generando la orden...</h1>
        <RingLoader color="#dbdbdb" loading={loading} size={150} />
      </div>
  )
  }

  if (orderId){
    return (
      <div className="h-[calc(100vh-88px)] flex pt-20 items-center flex-col">
        <h1 className="text-4xl">¡Gracias por su compra!</h1>
        <img className="w-40 py-10" src="https://us.123rf.com/450wm/inueng/inueng1610/inueng161000004/67663749-ilustraci%C3%B3n-vectorial-casilla-de-verificaci%C3%B3n-verde-aislado-en-el-fondo-blanco.jpg?ver=6" alt="" />
        <div className="text-center">
          <h1 className="text-xl">Su numero de orden es:</h1>
          <p>{orderId}</p>
        </div>
        <div className="py-6">
          <Link to="/" className="bg-second py-1 px-3 rounded-sm text-xl text-main text-center hover:bg-blue-500">Volver</Link>
        </div>
      </div>
    )
  }
  
  return (
    <CheckOutForm onConfirm={createOrder}/>
  )
}

export default CheckOut