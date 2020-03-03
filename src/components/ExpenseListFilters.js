import React from "react";
import { connect } from "react-redux";
import { setTextFilter, sortByAmount, sortByDate } from "../actions/filters";

const ExpenseListFilters = props => {
  return (
    <div>
      <input
        type="text"
        defaultValue={props.filters.text}
        onChange={e => {
          props.dispatch(setTextFilter(e.target.value));
        }}
      />
      <select
        onChange={e => {
          e.target.value === "date"
            ? props.dispatch(sortByDate())
            : props.dispatch(sortByAmount());
        }}
        value={props.filters.sortBy}
      >
        <option value="date">Date</option>
        <option value="amount">Amount</option>
      </select>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);
