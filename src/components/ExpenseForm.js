import React from "react";
import moment from "moment";
import "react-dates/initialize";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

moment.locale("fr");
const now = moment();
console.log(now.format("DD MMMM YYYY"));

export default class ExpenseForm extends React.Component {
  state = {
    description: "",
    note: "",
    amount: "",
    createAt: moment(),
    calenderFocused: false
  };
  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onNoteChange = e => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };

  onAmountChange = e => {
    const amount = e.target.value;
    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  onDateChanged = () => {
    this.setState(() => ({ createAt }));
  };

  onFocusChanged = ({ focused }) => {
    this.setState(() => ({ calenderFocused: focused }));
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Description"
          autoFocus
          value={this.state.description}
          onChange={this.onDescriptionChange}
        />
        <input
          type="text"
          placeholder="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
        />
        <SingleDatePicker
          date={this.state.createAt} // momentPropTypes.momentObj or null
          onDateChange={this.onDateChanged} // PropTypes.func.isRequired
          focused={this.state.calenderFocused} // PropTypes.bool
          onFocusChange={this.onFocusChanged} // PropTypes.func.isRequired
          id="cal" // PropTypes.string.isRequired,
        />

        <textarea
          placeholder="Add note for your expense (Optionnal)"
          value={this.state.note}
          onChange={this.onNoteChange}
        />
        <button>Add expense</button>
      </div>
    );
  }
}
