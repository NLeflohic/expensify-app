import React from "react";
import { connect } from "react-redux";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate
} from "../actions/filters";

class ExpenseListFilters extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    calendarFocused: null
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  onFocusedChange = calendarFocused =>
    this.setState(() => ({ calendarFocused }));
  render() {
    return (
      <div>
        <input
          type="text"
          defaultValue={this.props.filters.text}
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
          value={this.props.filters.sortBy}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
          startDateId="start_dateId" // PropTypes.string.isRequired,
          endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
          endDateId="end_dateId" // PropTypes.string.isRequired,
          onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
          focusedInput={this.state.calendarFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={this.onFocusedChange} // PropTypes.func.isRequired,
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);
