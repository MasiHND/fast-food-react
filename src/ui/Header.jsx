import { Link } from "react-router-dom";
import SerachOrder from "../features/order/SerachOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="flex items-center justify-between rounded-b-lg border-b-4 border-indigo-500 bg-violet-900 p-5 px-4 py-5 text-xl text-amber-50 shadow-2xl">
      <Link to="/" className="font-mono">
        Fast Food React
      </Link>
      <SerachOrder />
      <Username />
    </header>
  );
}
export default Header;
