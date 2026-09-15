import type { ErrorResponse } from "react-router-dom";

export function formatCurrency(value: number) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

export function formatDate(dateStr: string) {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(dateStr));
}

export function calcMinutesLeft(dateStr: string) {
  const d1 = new Date().getTime();
  const d2 = new Date(dateStr).getTime();
  return Math.round((d2 - d1) / 60000);
}

export function parseErrorMessage(error: unknown, isRouteErrorResponse: boolean = false): string {
  if (isRouteErrorResponse) {
    return (error as ErrorResponse).data;
  }

  if (typeof error === "string") {
    return error;
  }

  if (error instanceof Error) {
    if (error.name === "AbortError") {
      return "Operation Aborted";
    }

    return error.message;
  }

  return "Something went wrong";
}
