import { Link } from "react-router-dom";
import SerachOrder from "../features/order/SerachOrder";

function Header() {
  return (
    <header className="bg-violet-900 text-xl text-amber-50 p-5 flex">
      <Link to="/" >Home</Link>
      <SerachOrder />
      <p>Masih</p>
    </header>
  );
}
export default Header;
