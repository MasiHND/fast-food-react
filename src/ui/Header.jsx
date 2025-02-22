import { Link } from "react-router-dom"
import SerachOrder from "../features/order/SerachOrder"

function Header() {
    return (
        <header>
           <Link to="/">Home</Link> 
           <SerachOrder />
        </header>
    )
}
export default Header
