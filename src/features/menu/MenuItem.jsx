import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="flex gap-4 my-3 sm:my-4 mx-6 md:mx-10 text-left capitalize">
      <img
        src={imageUrl}
        alt={name}
        className={`ring-3 shadow-lg shadow-violet-600 ring-violet-500 h-28 rounded-xl sm:h-32 md:h-36 ${soldOut ? "opacity-75 grayscale" : ""}`}
      />
      <div className="flex grow flex-col pt-0.5 md:pt-1">
        <p className="font-semibold sm:text-lg md:text-xl">{name}</p>
        <p className="italic">{ingredients.join(", ")}</p>
        <div className="mt-auto flex items-center justify-between text-sm font-bold uppercase">
          {!soldOut ? (
            <p>{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-gray-400">Sold out</p>
          )}
          {!soldOut && <Button type="small">Add+</Button>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
