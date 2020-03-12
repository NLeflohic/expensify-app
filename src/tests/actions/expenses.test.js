import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("Should setup remove expense action object", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc"
  });
});

test("Should setup add expense action object", () => {
  const expenseData = {
    description: "my_description",
    note: "myNote",
    amount: 1000,
    createdAt: 1000
  };

  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      ...expenseData
    }
  });
});

test("Should setup add expense action object with default value", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      description: "",
      note: "",
      amount: 0,
      createdAt: 0
    }
  });
});

test("Should setup edit expense action object", () => {
  const action = editExpense("123abc", {
    note: "myNote"
  });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    updates: {
      note: "myNote"
    }
  });
});
