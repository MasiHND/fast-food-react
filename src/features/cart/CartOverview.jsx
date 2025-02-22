import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="bg-amber-500 text-stone-800 p-5 dark:bg-gray-800 dark:text-stone-100">
      <p>
        <span>23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
