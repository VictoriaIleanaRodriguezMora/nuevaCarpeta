import { Link } from "react-router-dom"
import "../../sassCarpeta/index.scss"

const Item = ({ id, name, img, price }) => {
    return (
        <li>
            <h3>{name}</h3>
            <img src={img} alt={name} />
            <p>${price}</p>
            <Link to={`/detail/${id}`} > Ver detalle </Link>
        </li>
    )
}
export default Item