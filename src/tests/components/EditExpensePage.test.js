import React from "react";
import { shallow } from "enzyme";
import { EditExpensePage } from "../../components/EditExpansePage";
import expenses from "../fixtures/expenses";

let startEditExpense, startRemoveExpense, history, wrapper;
beforeEach(() => {
  startEditExpense = jest.fn();
  startRemoveExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage
      expense={expenses[1]}
      startEditExpense={startEditExpense}
      startRemoveExpense={startRemoveExpense}
      history={history}
    />
  );
});

test("Should render EditExpensePage correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("Should handle edit expense correctly", () => {
  const expense = expenses[1];
  expense.description = "Update";
  wrapper.find("ExpenseForm").prop("onSubmit")(expense);
  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(startEditExpense).toHaveBeenLastCalledWith(expense.id, expense);
});

test("Should handle remove expense correctly", () => {
  wrapper.find("button").simulate("click");
  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(startRemoveExpense).toHaveBeenLastCalledWith({ id: expenses[1].id });
});
