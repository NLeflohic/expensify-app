import ExpensesTotal from "../../selectors/expensesTotal";
import expenses from "../fixtures/expenses";

test("Should return 0", () => {
  const sum = ExpensesTotal([]);
  expect(sum).toBe(0);
});

test("Should return 195", () => {
  const sum = ExpensesTotal([expenses[0]]);
  expect(sum).toBe(195);
});

test("Should return 195", () => {
  const sum = ExpensesTotal(expenses);
  expect(sum).toBe(199695);
});
