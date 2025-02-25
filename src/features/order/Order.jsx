// Test ID: IIDSAT

import { getOrder } from "../../services/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import { useLoaderData } from "react-router-dom";
import OrderItem from "./OrderItem";

function Order() {
  const order = useLoaderData();

  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="flex cursor-default flex-col space-y-8 px-4 py-6 capitalize">
      <div className="flex flex-wrap items-center gap-4 sm:justify-between sm:gap-18">
        <h2 className="text-xl font-semibold">order #{id} Status</h2>

        <div className="flex flex-wrap gap-2 space-x-2 sm:gap-0">
          {priority && (
            <span className="rounded-full bg-rose-600 px-3 py-1 text-xs font-bold tracking-wide uppercase shadow-lg ring-2 shadow-red-900 ring-red-900 sm:text-sm">
              Priority
            </span>
          )}
          <span className="rounded-full bg-sky-700 px-3 py-1 text-xs font-bold tracking-wide uppercase shadow-lg ring-2 shadow-sky-800 ring-sky-400 sm:text-sm">
            {status} order
          </span>
        </div>
      </div>

      <ul className="divide-y divide-gray-400 rounded-xl bg-violet-900/30 py-2 shadow-md ring-2 shadow-violet-500 ring-violet-500">
        {cart.map((i) => (
          <OrderItem item={i} key={i.id} />
        ))}
      </ul>

      <div className="flex flex-wrap items-center gap-2 rounded-xl bg-sky-600/40 px-4 py-2 shadow-md ring-2 shadow-sky-400 ring-sky-400 sm:justify-between sm:gap-18">
        <p>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-sm text-sky-100">
          <span> Estimated delivery:</span>{" "}
          <span> {formatDate(estimatedDelivery)}</span>
        </p>
      </div>

      <div className="rounded-xl bg-gray-500/50 px-4 py-2 text-left text-sm text-stone-100 shadow-md ring-2 shadow-green-500 ring-green-500">
        <div className="flex items-center justify-between px-2 py-1">
          <p>Price pizza:</p> {formatCurrency(orderPrice)}
        </div>
        {priority && (
          <div className="flex items-center justify-between px-2 py-1">
            <p>Price priority:</p> {formatCurrency(priorityPrice)}
          </div>
        )}
        <div className="flex items-center justify-between rounded-lg bg-green-700 px-2 py-1 text-sm font-bold md:text-lg">
          <p>To pay on delivery:</p>
          <span className="text-yellow-300">
            {formatCurrency(orderPrice + priorityPrice)}
          </span>
        </div>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
