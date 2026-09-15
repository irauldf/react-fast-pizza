import { createBrowserRouter } from "react-router-dom";
import { Cart } from "@/features/cart/components/Cart/Cart";
import { menuLoader } from "@/features/menu";
import { MenuPage } from "@/features/menu/pages/MenuPage";
import { orderLoader } from "@/features/order";
import { createOrderAction, updateOrderAction } from "@/features/order/actions";
import { Order } from "@/features/order/components/Order";
import { CreateOrderPage } from "@/features/order/pages";
import { AppLayout } from "@/layout";
import { ErrorMessage } from "@/shared/components/ErrorMessage";
import { Home } from "@/shared/components/Home";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorMessage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <MenuPage />,
        loader: menuLoader,
        errorElement: <ErrorMessage />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrderPage />,
        action: createOrderAction,
      },
      {
        path: "/order/:id",
        element: <Order />,
        loader: orderLoader,
        errorElement: <ErrorMessage />,
        action: updateOrderAction
      },
    ],
  },
]);

export default router;
