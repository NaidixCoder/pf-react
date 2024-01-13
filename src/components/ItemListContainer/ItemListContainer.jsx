import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/config';
import RingLoader from 'react-spinners/RingLoader';

function ItemListContainer({ greeting }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true); 
    const { categoryId } = useParams();

    useEffect(() => {
        const productsRef = collection(db, 'products');
        const q = categoryId ? query(productsRef, where('category', '==', categoryId)) : productsRef;
        setLoading(true);

        getDocs(q)
        .then((res) => {
            setProducts(
            res.docs.map((doc) => {
                return { ...doc.data(), id: doc.id };
            })
            );
        })
        .finally(() => {
            setLoading(false); 
        });
    }, [categoryId]);

    return (
        <>
        <h1 className="text-3xl text-center font-semibold mt-10 text-main uppercase">
            {categoryId ? `${categoryId}` : greeting}
        </h1>

        {loading ? (
            <div className="flex justify-center items-center mt-16">
                <RingLoader color="#dbdbdb" loading={loading} size={150} />
            </div>
        ) : (
            <div>
                <ItemList products={products} />
            </div>
        )}
        </>
    );
}

export default ItemListContainer;
