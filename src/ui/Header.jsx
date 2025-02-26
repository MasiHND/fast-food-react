import { Link } from "react-router-dom";
import SerachOrder from "../features/order/SerachOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="flex items-center justify-between rounded-b-lg border-b-4 border-gray-700 bg-linear-to-t from-indigo-500 to-violet-700 px-5 py-5 text-xl text-amber-50 shadow-xl sm:px-10 md:text-3xl">
      <Link to="/" className="font-shrikhand">
        Fast Food React
      </Link>
      <div className="flex items-center space-x-4 capitalize">
        <SerachOrder />
        <Username />
      </div>
    </header>
  );
}
export default Header;
