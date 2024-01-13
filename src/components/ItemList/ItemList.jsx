import Item from "../Item/Item"


const ItemList = ({products}) => {

    return (
        <div className="flex flex-wrap gap-6 justify-center mt-10 mx-[10%]">
            {products.map((prod) => <Item key={prod.id} {...prod} />)}
        </div>
    )
}

export default ItemList
