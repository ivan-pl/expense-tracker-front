import { DayTransactions } from "../types/transactions.type";
import { STORAGE_PREFIX } from "./variables";

export default async function addDayTransactions(
  dayTransactions: DayTransactions
) {
  localStorage.setItem(
    STORAGE_PREFIX + dayTransactions.date,
    JSON.stringify(dayTransactions)
  );
}
