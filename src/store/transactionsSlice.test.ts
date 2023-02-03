import { PayMethod, Tag, Transaction } from "../types/transactions.type";
import formatDate from "../utils/formatDate";
import loadMockedTransactionsHistory from "../utils/loadMockedTransactions";
import transactionsReducer, {
  initialState,
  TransactionsState,
  setNewTransactions,
  add,
  deleteTransaction,
} from "./transactionsSlice";

const CURRENT_DATE = formatDate(new Date());

const mockedTransactionsHistory = loadMockedTransactionsHistory();

describe("transactions reducer", () => {
  it("should handle initial state", () => {
    expect(transactionsReducer(undefined, { type: "unknown" })).toEqual(
      initialState
    );
  });

  it("should handle setNewTransactions", () => {
    expect(
      transactionsReducer(
        initialState,
        setNewTransactions(mockedTransactionsHistory)
      )
    ).toEqual({
      ...initialState,
      transactionsHistory: mockedTransactionsHistory,
    });
  });

  it("should handle add", () => {
    let actualState = initialState;
    const transaction: Transaction = {
      amount: "123.00",
      comment: "comment",
      id: "1232",
      payMethod: PayMethod.Cash,
      tag: Tag.Clothing,
    };

    actualState = transactionsReducer(
      actualState,
      add({ transaction, date: formatDate(new Date(CURRENT_DATE)) })
    );
    expect(actualState).toEqual({
      ...initialState,
      transactionsHistory: [
        { date: CURRENT_DATE, transactionList: [transaction] },
      ],
    } as TransactionsState);

    actualState = transactionsReducer(
      actualState,
      add({ transaction, date: formatDate(new Date(CURRENT_DATE)) })
    );
    expect(actualState).toEqual({
      ...initialState,
      transactionsHistory: [
        { date: CURRENT_DATE, transactionList: [transaction, transaction] },
      ],
    } as TransactionsState);
  });

  it("should handle deleteTransaction", () => {
    expect(
      transactionsReducer(
        initialState,
        deleteTransaction({ id: "asd", date: "2022-11-15" })
      )
    ).toEqual(initialState);

    const state: TransactionsState = {
      ...initialState,
      transactionsHistory: mockedTransactionsHistory,
    };

    const date = mockedTransactionsHistory[0].date;
    const idToDelete = mockedTransactionsHistory[0].transactionList[0].id;
    const newState = transactionsReducer(
      state,
      deleteTransaction({ id: idToDelete, date })
    );

    let isDeleted = true;
    for (const dayTransaction of newState.transactionsHistory) {
      if (dayTransaction.transactionList.find((_) => _.id === idToDelete)) {
        isDeleted = false;
        break;
      }
    }

    expect(isDeleted).toBeTruthy();
  });
});
