import React from "react";
import { shallow } from "enzyme";
import ExpenseDashBoardPage from "../../components/ExpenseDashBoardPage";

test("Should generate ExpenseDashBoard", () => {
  const wrapper = shallow(<ExpenseDashBoardPage />);
  expect(wrapper).toMatchSnapshot();
});
