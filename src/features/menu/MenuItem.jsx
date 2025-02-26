import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";

function MenuItem({ pizza }) {
  const dispatch = useDispatch();

  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;

  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }

  return (
    <div className="flex flex-col items-end">
      <li className="mx-6 my-3 flex gap-4 text-left capitalize sm:my-4 md:mx-10">
        <img
          src={imageUrl}
          alt={name}
          className={`h-28 rounded-xl shadow-lg ring-3 shadow-violet-600 ring-violet-500 sm:h-32 md:h-36 ${soldOut ? "opacity-75 grayscale" : ""}`}
        />
        <div className="flex grow flex-col pt-0.5 md:pt-1">
          <p className="font-semibold sm:text-lg md:text-xl">{name}</p>
          <p className="italic">{ingredients.join(", ")}</p>
          <div className="mt-auto flex flex-col items-end justify-between gap-2 text-sm font-bold uppercase">
            {!soldOut ? (
              <p>{formatCurrency(unitPrice)}</p>
            ) : (
              <p className="text-gray-400">Sold out</p>
            )}
          </div>
        </div>
      </li>
      <div className="mx-6">
        {isInCart && (
          <div className="flex items-center gap-2">
            <UpdateItemQuantity
              pizzaId={id}
              currentQuantity={currentQuantity}
            />
            <DeleteItem pizzaId={id} />
          </div>
        )}
        {!soldOut && !isInCart && (
          <Button type="small" onClick={handleAddToCart}>
            Add+
          </Button>
        )}
      </div>
    </div>
  );
}

export default MenuItem;
