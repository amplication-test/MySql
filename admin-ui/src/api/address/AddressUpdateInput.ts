import { CustomerUpdateManyWithoutAddressesInput } from "./CustomerUpdateManyWithoutAddressesInput";

export type AddressUpdateInput = {
  address_1?: string | null;
  address_2?: string | null;
  city?: string | null;
  customers?: CustomerUpdateManyWithoutAddressesInput;
  options?: Array<"One" | "Two">;
  state?: string | null;
  zip?: number | null;
};
