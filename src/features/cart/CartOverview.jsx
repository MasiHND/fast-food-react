import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="flex bg-amber-500 p-4 p-5 text-stone-800 dark:bg-gray-800 dark:text-stone-100">
      <p className="space-x-4 font-semibold">
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
