import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="px-4 py-2 text-left hover:font-bold">
      <div className="flex items-center justify-between">
        <p className="text-lg">
          <span className="font-semibold text-yellow-300">{quantity}&times;</span> {name}
        </p>
        <p className="text-sm font-semibold hover:text-lg text-yellow-300">
          {formatCurrency(totalPrice)}
        </p>
      </div>
    </li>
  );
}

export default OrderItem;
