import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!totalCartQuantity) return null;

  return (
    <div className="flex items-center justify-between bg-amber-500 p-4 p-5 text-stone-800 dark:bg-gray-800 dark:text-stone-100">
      <p className="space-x-4 font-semibold">
        <span>{totalCartQuantity}</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart" className="font-semibold">
        {" "}
        🛒Open cart 👉
      </Link>
    </div>
  );
}

export default CartOverview;
