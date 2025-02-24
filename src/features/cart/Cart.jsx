import { Link } from "react-router-dom";
import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom sdjfam;ldsafmd sa;mfdksnf",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const cart = fakeCart;

  return (
    <div className="flex grow flex-col gap-4 px-4 py-3">
      <div className="flex items-center justify-between capitalize">
        <LinkButton to="/menu" className="linkBtn">
          &larr; Back to menu
        </LinkButton>
      </div>

      <h2 className="text-2xl font-bold">Your cart, %NAME%</h2>
      <ul className="my-7 divide-y divide-solid divide-gray-300">
        {cart.map((i) => (
          <CartItem item={i} key={i.key} />
        ))}
      </ul>

      <div className="mt-5 flex items-center justify-between space-x-10 sm:space-x-40">
        <Button type="primary" to="/order/new">
          Order pizzas
        </Button>
        <Button type="clear">Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
