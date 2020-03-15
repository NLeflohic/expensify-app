import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import AddExpensePage from "../components/AddExpansePage";
import EditExpensePage from "../components/EditExpansePage";
import LoginPage from "../components/LoginPage";
import ExpenseDashBoardPage from "../components/ExpenseDashBoardPage";
import NotFoundPage from "../components/NotFoundPage";
import PrivateRoute from "./PrivateRoute";

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <PrivateRoute path="/create" component={AddExpensePage} />
      <PrivateRoute path="/edit/:id" component={EditExpensePage} />
      <PrivateRoute path="/dashboard" component={ExpenseDashBoardPage} />
      <Route path="/" component={LoginPage} exact={true} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);

export default AppRouter;
