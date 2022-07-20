import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { bdd } from "../../services/firebase"
import { getDoc, doc } from "firebase/firestore"
import "../../sassCarpeta/index.scss"

const ItemDetailContainer = () => {

    const [prods, setProds] = useState()
    const { productId } = useParams()

    useEffect(() => {
        const docProdRef = doc(bdd, "products", productId)
        getDoc(docProdRef)
            .then(doc => {
                const prodMaped = { id: doc.id, ...doc.data() }
                setProds(prodMaped);
            })
            .catch(error => {
                console.log (error);
            })

    }, [productId])


    return (
        <>
            <ItemDetail {...prods} />
        </>
    )
}
export default ItemDetailContainer