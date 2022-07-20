import Item from "../Item/Item"


const ItemList = ({ prods }) => {
    return (
        <ul>
            {prods.map(prods => <Item key={prods.id} {...prods} />)}
        </ul>
    )
}
export default ItemList
