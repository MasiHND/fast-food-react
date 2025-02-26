import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity";
import { getCurrentQuantityById } from "./cartSlice";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId))

  return (
    <li className="py-4">
      <div className="flex items-center justify-between text-left p-4">
        <p className="font-semibold text-lg">
          {quantity}&times; {name}
        </p>
        <p className="font-semibold mx-9">
          {formatCurrency(totalPrice)}
        </p>
      </div>
      <div className="flex items-center justify-between">
        <UpdateItemQuantity pizzaId={pizzaId} currentQuantity={currentQuantity} />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
