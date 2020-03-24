import React from "react";
import ExpenseTotal from "./ExpenseTotal";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";

const ExpenseDashBoardPage = () => (
  <div>
    <ExpenseTotal />
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashBoardPage;
