import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Awards from "./components/Awards";
import Presentations from "./components/Presentations";
import Publications from "./components/Publications";
import Research from "./components/Research";
import Teaching from "./components/Teaching";
import User from "./components/User";
import PresentationsForm from "./components/admin/PresentationsForm";

const Routing = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/awards" component={Awards} />
      <Route path="/presentations" component={Presentations} />
      <Route path="/publications" component={Publications} />
      <Route path="/research" component={Research} />
      <Route path="/teaching" component={Teaching} />
      <Route path="/user" component={User} />
      <Route path="/admin/presentationsform" component={PresentationsForm} />
    </Switch>
  </Router>
);

export default Routing;
