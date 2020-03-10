import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "modern-normalize/modern-normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";

const store = configureStore();

// store.subscribe(() => {
//   const state = store.getState();
//   const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//   console.log(visibleExpenses);
// });

// store.dispatch(
//   addExpense({ description: "Water bill", amount: 1000, createdAt: 2000 })
// );
// store.dispatch(
//   addExpense({ description: "Gaz bill", amount: 300, createdAt: 1000 })
// );

// store.dispatch(
//   addExpense({ description: "rent", amount: 109500, createdAt: 1500 })
// );

//store.dispatch(setTextFilter("bill"));
//store.dispatch(setTextFilter("water"));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
// ReactDOM.render(<AppRouter />, document.getElementById("app"));
