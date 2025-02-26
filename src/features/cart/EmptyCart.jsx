import LinkButton from "../../ui/LinkButton";

function EmptyCart() {
  return (
    <div className=" capitalize px-6 py-2 text-left">
      <LinkButton to="/menu" className="linkBtn">
        &larr; Back to menu
      </LinkButton>
      <p className="font-semibold pt-6">Your cart is empty right now. Start adding some pizzas! 😋</p>
    </div>
  );
}

export default EmptyCart;
