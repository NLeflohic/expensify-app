import React from "react";
import { connect } from "react-redux";
import getSumExpenses from "../selectors/expensesTotal";
import selectExpenses from "../selectors/expenses";
import numeral from "numeral";

export const ExpenseTotal = props => {
  return (
    <div>
      <p>
        {props.expensesCount > 0 ? (
          <span>
            Viewing {props.expensesCount} expense(s) totalling{" "}
            {numeral(props.expensesSum / 100).format("$0,00.00")}
          </span>
        ) : (
          <span>No Expenses</span>
        )}
      </p>
    </div>
  );
};

const mapStateToProps = state => ({
  expensesSum: getSumExpenses(state.expenses),
  expensesCount: selectExpenses(state.expenses, state.filters).length
});

export default connect(mapStateToProps)(ExpenseTotal);
