interface IName {
  first: string;
  last: string;
}

export interface IUser {
  _id: string;
  amount: number;
  type: 'income' | 'outcome' | 'loan' | 'investment';
  name: IName;
  company: string;
  email: string;
  phone: string;
  address: string;
}
