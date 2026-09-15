// https://uibakery.io/regex-library/phone-number

import { useState } from "react";
import { Form, useActionData, useNavigation } from "react-router-dom";
import { EmptyCart } from "@/features/cart";
import { getCart, getTotalCartPrice } from "@/features/cart/cartSlice";
import { fetchAddress } from "@/features/user/userSlice";
import { Button } from "@/shared/components/Button";
import { useAppDispatch, useAppSelector } from "@/stores/hooks";
import { formatCurrency } from "@/utils";

export function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);

  const user = useAppSelector((store) => store.user);
  const { username, status: addressStatus, position, address, error: errorAddress } = user;

  const isLoadingAddress = addressStatus === "loading";

  const totalCartPrice = useAppSelector(getTotalCartPrice);
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;

  const actionData = useActionData();
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const cartItems = useAppSelector(getCart);
  if (!cartItems.length) return <EmptyCart />;

  const isSubmitting = navigation.state === "submitting";

  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Let's go!</h2>

      <Form method="POST" action="/order/new">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input
            type="text"
            name="customer"
            required
            className="input grow"
            defaultValue={username}
          />
          {actionData?.errors?.customer && <p>{actionData.errors.customer}</p>}
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input type="tel" name="phone" required className="input w-full" />
            {actionData?.errors?.phone && (
              <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
                {actionData.errors.phone}
              </p>
            )}
          </div>
        </div>

        <div className="relative mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input
              type="text"
              disabled={isLoadingAddress}
              name="address"
              defaultValue={address}
              required
              className="input w-full"
            />
            {actionData?.errors?.address && <p>{actionData.errors.address}</p>}
            {addressStatus === "error" && errorAddress && (
              <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">{errorAddress}</p>
            )}
          </div>
          {!position?.latitude && !position?.longitude && (
            <span className="absolute top-0.75 right-0.75 z-50 md:top-1.25 md:right-1.25">
              <Button
                variant="small"
                onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                  e.preventDefault();
                  dispatch(fetchAddress());
                }}
                disabled={isLoadingAddress}
              >
                Get position
              </Button>
            </span>
          )}
        </div>

        <div className="mb-10 flex items-center gap-5">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            checked={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
            className="h-6 w-6 accent-yellow-400 focus:ring focus:ring-yellow-400 focus:ring-offset-2 focus:outline-none"
          />
          <label htmlFor="priority" className="font-medium">
            Want to yo give your order priority? (+ 20% of the total price)
          </label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cartItems)} />
          <input
            type="hidden"
            name="position"
            value={
              position?.latitude && position.longitude
                ? `${position?.latitude},${position?.longitude}`
                : ""
            }
          />
          <Button variant="primary" disabled={isSubmitting || isLoadingAddress}>
            {isSubmitting ? "Placing order..." : `Order now from ${formatCurrency(totalPrice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}
