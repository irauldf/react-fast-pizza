import { Link } from "react-router-dom";
import { SearchOrder } from "@/features/order/components/SearchOrder";
import { UserName } from "@/features/user/components/UserName";

export function Header() {
  return (
    <header className="flex justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <UserName />
    </header>
  );
}
