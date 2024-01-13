import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import { RingLoader } from 'react-spinners'; 
import Error from '../Error/Error';

function ItemDetailContainer() {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    const { itemId } = useParams();

    useEffect(() => {
        const docRef = doc(db, 'products', itemId);
        getDoc(docRef)
        .then((resp) => {
            if (resp.exists()) {
            setProduct({ ...resp.data(), id: resp.id });
            } else {
            setProduct(null);
            }
        })
        .finally(() => {
            setLoading(false);
        });
    }, [itemId]);

    if (loading) {
        return (
        <div className="h-[calc(100vh-88px)] flex justify-center items-center">
            <RingLoader color="#dbdbdb" loading={loading} size={150} />
        </div>
        );
    }

    if (!product) {
        return <Error />;
    }

    return (
        <div>
        <ItemDetail {...product} />
        </div>
    );
}

export default ItemDetailContainer;
