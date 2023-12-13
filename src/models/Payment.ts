export interface Payment {
  isPaypal: boolean;
  isCard: boolean;
  isCash: boolean;
  cardNumber: string | null;
  nameOnCard: string | null;
  expired: string | null;
  CVV: string | null;
}
