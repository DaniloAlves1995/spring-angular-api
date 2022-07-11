/*
  Interface with user data to be worked on the form.
  They have equivalence to back-end
*/
export interface User {
  _id: number;
  name: string;
  birth: string;
  sex: string;
  country: string;
  phone: string;
  email: string;
}
