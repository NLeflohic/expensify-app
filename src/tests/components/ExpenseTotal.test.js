import React from "react";
import { shallow } from "enzyme";
import { ExpenseTotal } from "../../components/ExpenseTotal";

test("Should render ExpenseTotal correctly without expenses", () => {
  const wrapper = shallow(<ExpenseTotal expensesCount={0} />);
  expect(wrapper).toMatchSnapshot();
});

test("Should render ExpenseTotal correctly without expenses", () => {
  const wrapper = shallow(<ExpenseTotal expensesCount={1} expensesSum={444} />);
  expect(wrapper).toMatchSnapshot();
});
