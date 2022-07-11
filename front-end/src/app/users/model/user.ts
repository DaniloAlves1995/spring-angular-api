/*
  Interface with user data to be worked on the form.
  They have equivalence to back-end
*/
export interface User {
  id: number;
  name: string;
  birth: string;
  gender: string;
  country: string;
  phone: string;
  email: string;
}
