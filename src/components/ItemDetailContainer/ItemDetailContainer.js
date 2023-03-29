import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
// import { bdd } from "../../services/firebase"
// import { getDoc, doc } from "firebase/firestore"
import "../../sassCarpeta/index.scss"

const ItemDetailContainer = () => {

    const [prods, setProds] = useState()
    const { productId } = useParams()

    useEffect(() => {
        fetch('http://localhost:5050/products')
            .then((response) => {
                return response.json()
            })
            .then((articulos) => {
                setProds(articulos)
            })

    }, [])

    return (
        <>
            <ItemDetail {...prods} />
        </>
    )
}
export default ItemDetailContainer