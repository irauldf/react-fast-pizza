import { CreateUser } from "@/features/user/components/CreateUser";
import { useAppSelector } from "@/stores/hooks";
import { Button } from "../Button";

export function Home() {
  const user = useAppSelector((store) => store.user);

  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-8 text-xl font-semibold md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">Straight out of the oven, straight to you.</span>
      </h1>

      {user.username === "" ? (
        <CreateUser />
      ) : (
        <Button to="/menu" variant="primary">
          Continue ordering, {user.username}
        </Button>
      )}
    </div>
  );
}
