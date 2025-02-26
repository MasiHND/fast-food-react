import { useState } from "react";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import SubmitButton from "../../ui/SubmitButton";
import { useSelector } from "react-redux";
import { clearCart, getCart, getTotalCartPrice } from "../cart/cartSlice";
import EmptyCart from "../cart/EmptyCart";
import store from "../../store";
import { formatCurrency } from "../../utils/helpers";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const username = useSelector((state) => state.user.username);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const formErrors = useActionData();
  const labelClass = "text-semibold text-lg text-left";
  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = priorityPrice + totalCartPrice;

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="p-6 px-4 capitalize">
      <h2 className="font-shrikhand mb-6 text-3xl font-medium">
        Ready to order? Let's go!
      </h2>

      <Form
        method="post"
        className="m-auto flex max-w-auto flex-col space-y-4 rounded-3xl bg-gray-700 p-4"
      >
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <label className={labelClass}>First Name:</label>
          <div className="grow">
            <input
              className="input"
              type="text"
              name="customer"
              defaultValue={username}
              required
            />
          </div>
        </div>

        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <label className={labelClass}>Phone number:</label>
          <div className="grow">
            <input className="input" type="tel" name="phone" required />
            {formErrors?.phone && (
              <div className="flex items-center justify-center rounded-md bg-amber-300 p-1 text-xs font-black text-red-700">
                {formErrors.phone}
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <label className={labelClass}>Address:</label>
          <div className="grow">
            <input className="input" type="text" name="address" required />
          </div>
        </div>

        <div className="mt-6 flex items-center space-x-3">
          <input
            className="h-6 w-6 accent-violet-500 focus:ring-2 focus:ring-violet-700 focus:outline-none"
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <SubmitButton disabled={isSubmitting}>
            {isSubmitting ? "Placing Your Order..." : `Order Now For ${formatCurrency(totalPrice)}`}
          </SubmitButton>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData.entries());
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
  };

  const errors = {};
  if (!isValidPhone(order.phone)) {
    errors.phone = "Invalid phone number";
  }
  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);

  //DO NOT OVER USE THIS HACK
  store.dispatch(clearCart());

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
