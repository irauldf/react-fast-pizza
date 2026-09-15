import { useAppSelector } from "@/stores/hooks";

export function UserName() {
  const user = useAppSelector((store) => store.user);
  if (!user || !user.username) return null;
  return <div className="hidden text-sm font-semibold md:block">{user.username}</div>;
}
