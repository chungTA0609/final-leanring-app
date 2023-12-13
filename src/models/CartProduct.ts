import { Film } from "./Film";

export interface CartProduct {
  product: Film | null;
  quantity: number;
}
