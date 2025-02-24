import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="py-4">
      <p className="mb-3 flex items-center justify-between text-left text-lg">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold sm:text-sm">
          {formatCurrency(totalPrice)}
        </p>
        <Button type="delete">Delete</Button>
      </div>
    </li>
  );
}

export default CartItem;
