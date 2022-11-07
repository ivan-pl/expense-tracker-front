export interface ITransaction {
  id: number;
  tag: string;
  payMethod: string;
  comment: string;
  amount: string;
}

export interface IDayStransactionList {
  date: Date;
  transactionList: ITransaction[];
}

export interface ITransactionSection {
  total: {
    day: number;
    week: number;
    month: number;
  };
  transactionHistory: IDayStransactionList[];
}
