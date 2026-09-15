import type { Position } from "@/types";
import type { NominatimAddress, NominatimResponse } from "./geocoding.types";

export async function getAddress({ latitude, longitude }: Position): Promise<NominatimAddress> {
  const res = await fetch(
    `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=jsonv2&addressdetails=1`,
  );
  if (!res.ok) throw Error("Failed getting address");
  const data: NominatimResponse = await res.json();
  const address: NominatimAddress = data.address;
  return address;
}
