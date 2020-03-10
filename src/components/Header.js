import React from "react";
import { NavLink } from "react-router-dom";
import ExpenseTotal from "./ExpenseTotal";

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <ExpenseTotal />
    <ul>
      <li>
        <NavLink to="/" activeClassName="is-active" exact={true}>
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink to="/create" activeClassName="is-active">
          Add expanse
        </NavLink>
      </li>
      {/* <li>
        <NavLink to="/edit/:id" activeClassName="is-active">
          Edit expanse
        </NavLink>
      </li> */}
      <li>
        <NavLink to="/help" activeClassName="is-active">
          Help
        </NavLink>
      </li>
    </ul>
  </header>
);

export default Header;
