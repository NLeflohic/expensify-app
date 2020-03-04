import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddExpensePage from "../components/AddExpansePage";
import EditExpensePage from "../components/EditExpansePage";
import ExpenseDashBoardPage from "../components/ExpenseDashBoardPage";
import Header from "../components/Header";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";

const AppRouter = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit/:id" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
      <Route path="/" component={ExpenseDashBoardPage} exact={true} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
);

export default AppRouter;
