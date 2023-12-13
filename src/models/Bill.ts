export interface Bill {
  firstName: string | null;
  lastName: string | null;
  email: string;
  phone: string;
  address: string | null;
  city: string | null;
  state: string | null;
  zipCode: string | null;
  note: string | null;
  differentAdd: boolean;
}
