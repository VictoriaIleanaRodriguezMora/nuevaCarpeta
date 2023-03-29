import "../../sassCarpeta/index.scss"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import ItemList from "../ItemList/ItemList"
import Spinner from "../Spinner/Spinner"
import { getDocs, collection, query, where } from "firebase/firestore"
import { bdd } from "../../services/firebase"
import Asynckmock from "../asynckmock"

const ItemListContainer = () => {

    const [load, setLoad] = useState(true)
    const [prods, setProds] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {
        setLoad(true)
        
        const collectionProdsRef = (categoryId) ? (
            query(collection(bdd, "products"), where("category", "==", categoryId))
        ) : (collection(bdd, "products"))

        fetch('http://localhost:5050/products')
            .then((response) => {
                return response.json()
            })
            .then((articulos) => {
                setProds(articulos)
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                setLoad(false)
            })

    }, [])

    if (load) {
        return (<Spinner />)
    }

    return (
        <>
            <div className="div__ILC">
                {prods.length > 0
                    ? <ItemList prods={prods} />
                    : <h1>No hay productos que coincidan con esta busqueda</h1>
                }
            </div>
            <Asynckmock />
        </>
    )
}
export default ItemListContainer