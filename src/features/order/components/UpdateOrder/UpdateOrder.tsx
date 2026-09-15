import { Button } from "@/shared/components/Button";
import { useFetcher } from "react-router-dom";

export function UpdateOrder() {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button variant="primary">Make priority</Button>
    </fetcher.Form>
  );
}
