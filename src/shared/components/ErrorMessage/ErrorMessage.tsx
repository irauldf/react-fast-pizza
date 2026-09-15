import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { parseErrorMessage } from "@/utils";
import { LinkButton } from "../LinkButton";

export function ErrorMessage() {
  const error = useRouteError();
  const errorMessage: string = parseErrorMessage(error, isRouteErrorResponse(error));

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{errorMessage}</p>
      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}
