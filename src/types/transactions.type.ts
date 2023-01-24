export enum PayMethod {
  Debit = "Debit card",
  Credit = "Credit card",
  Cash = "Cash",
}

export enum Tag {
  Food = "Food",
  Housing = "Housing",
  Transportation = "Transportation",
  Clothing = "Clothing",
  Utilities = "Utilities",
  Insurance = "Insurance",
  MedicalAndHealthcare = "Medical & Healthcare",
  Investing = "Investing",
}

export interface Transaction {
  id: string;
  tag: Tag;
  payMethod: PayMethod;
  comment: string;
  amount: string;
}

export interface DayTransactions {
  date: string;
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
