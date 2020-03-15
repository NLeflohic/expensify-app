import React from "react";
import { NavLink } from "react-router-dom";
import ExpenseTotal from "./ExpenseTotal";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";

export const Header = props => (
  <header>
    <h1>Expensify</h1>
    <ExpenseTotal />
    <ul>
      <li>
        <NavLink to="/dashboard" activeClassName="is-active">
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink to="/create" activeClassName="is-active">
          Add expanse
        </NavLink>
      </li>
    </ul>
    <button onClick={props.startLogout}>Logout</button>
  </header>
);

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
