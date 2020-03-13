import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";
import database from "../../firebase/firebase";

beforeAll(done => {
  database.goOnline();
  done();
});

afterAll(done => {
  database.goOffline();
  done();
});

test("Should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("Should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("Should not remove expense by id not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "abc"
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("Should add an expense", () => {
  const action = {
    type: "ADD_EXPENSE",
    expense: {
      id: "4",
      description: "Car",
      note: "New car",
      amount: 660000,
      createdAt: 0
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, action.expense]);
});

test("Should edit expense by id", () => {
  const action = {
    type: "EDIT_EXPENSE",
    id: "1",
    updates: {
      text: "New text"
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[0].text).toBe("New text");
});

test("Should not edit expense by id not found", () => {
  const action = {
    type: "EDIT_EXPENSE",
    id: "0",
    updates: {
      text: "New text"
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("Should set expenses", () => {
  const action = {
    type: "SET_EXPENSES",
    expenses: [expenses[1]]
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[1]]);
});
