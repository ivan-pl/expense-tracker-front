export interface Transaction {
  id: number;
  tag: string;
  payMethod: string;
  comment: string;
  amount: string;
}

export interface DayTransactions {
  date: Date;
  transactionList: Transaction[];
}

export interface TransactionsInfo {
  total: {
    day: number;
    week: number;
    month: number;
  };
  transactionHistory: DayTransactions[];
}
