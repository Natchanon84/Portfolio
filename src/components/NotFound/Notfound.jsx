import { Link } from "react-router-dom"
import img from "../../img/404notfound.jpg"
import "./notfound.css"
function Notfound() {

    return (
        <Link to="/"className="notfound">
                <img src={img} className="img-notfound" />
        </Link>
    )
}

export default Notfound