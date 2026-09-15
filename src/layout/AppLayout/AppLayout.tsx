import { CartOverviewPage } from "@/features/cart";
import { Header } from "../Header/Header";
import { Outlet, useNavigation } from "react-router-dom";
import { Loader } from "@/shared/components/Loader";

export function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}

      <Header />

      <div className="overflow-y-auto">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>

      <CartOverviewPage />
    </div>
  );
}
