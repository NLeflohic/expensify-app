import React from "react";
import { shallow } from "enzyme";
import ExpenseListItem from "../../components/ExpenseListItem";
import expenses from "../fixtures/expenses";

test("Should generate ExpenseListItem from item", () => {
  const expense = {
    description: expenses[1].description,
    amount: expenses[1].amount,
    createdAt: expenses[1].createdAt,
    id: expenses[1].id
  };

  const wrapper = shallow(<ExpenseListItem {...expense} />);
  expect(wrapper).toMatchSnapshot();
});
