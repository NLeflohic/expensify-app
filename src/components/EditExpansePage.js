import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../actions/expenses";

const EditExpensePage = props => {
  console.log(props);
  return (
    <div>
      <ExpenseForm
        expense={props.expense}
        onSubmit={expense => {
          props.dispatch(editExpense(props.match.params.id, expense));
          console.log("Update", expense);
          props.history.push("/");
        }}
      />
      <button
        onClick={() => {
          props.dispatch(removeExpense({ id: props.match.params.id }));
          props.history.push("/");
        }}
      >
        Remove
      </button>
    </div>
  );
};

const mapToStateProps = (state, props) => {
  return {
    expense: state.expenses.find(
      expense => expense.id === props.match.params.id
    )
  };
};

export default connect(mapToStateProps)(EditExpensePage);
