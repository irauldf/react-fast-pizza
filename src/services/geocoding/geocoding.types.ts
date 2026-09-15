import type { Position } from "@/types";

export interface NominatimAddress {
  city?: string;
  country?: string;
  road?: string;
  postcode?: string;
}

export interface FetchAddressResult {
  position: Position;
  address: string;
}

export interface NominatimResponse {
  address: NominatimAddress;
}
