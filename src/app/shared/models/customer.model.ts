export interface Customer {
  id: number;
  firstName: string;
  lastName: string;
  company: string;
  phoneNumber: string;
  email: string;
  licensePlate: string;
  isActive?: boolean;
}
