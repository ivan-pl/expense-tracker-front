import ITransaction from "./transaction";

export default interface IDayStransactionList {
  date: Date;
  transactionList: ITransaction[];
}
