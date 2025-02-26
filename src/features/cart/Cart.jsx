import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./cartSlice";
import { getUser } from "../user/userSlice";


function Cart() {
  const username = useSelector(getUser);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  if(!cart.length) return  <EmptyCart/>

  return (
    <div className="flex grow flex-col gap-4 px-4 py-3">
      <div className="flex items-center justify-between capitalize">
        <LinkButton to="/menu" className="linkBtn">
          &larr; Back to menu
        </LinkButton>
      </div>

      <h2 className="text-2xl font-bold capitalize">Your cart, {username}</h2>
      <ul className="my-7 divide-y divide-solid divide-gray-300">
        {cart.map((i) => (
          <CartItem item={i} key={i.id} />
        ))}
      </ul>

      <div className="mt-5 flex items-center justify-between space-x-10 sm:space-x-40">
        <Button type="primary" to="/order/new">
          Order pizzas
        </Button>
        <Button type="clear" onClick={()=>dispatch(clearCart())}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
