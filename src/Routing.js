import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Awards from "./components/Awards";
import Presentations from "./components/Presentations";
import Publications from "./components/Publications";
import Research from "./components/Research";
import Teaching from "./components/Teaching";
import FormUpdate from "./components/admin/FormUpdate";

import PresentationsForm from "./components/admin/PresentationsForm";
// import AwardsForm from "./components/admin/AwardsForm";
// import PublicationsForm from "./components/admin/PublicationsForm";
// import TeachingForm from "./components/admin/TeachingForm";
// import ResearchForm from "./components/admin/ResearchForm";

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
      <Route path="/admin/formupdate" component={FormUpdate} />
    
      <Route path="/admin/presentationsform" component={PresentationsForm} />
      {/* <Route path="/admin/awardsform" component={AwardsForm} />
      <Route path="/admin/publicationsform" component={PublicationsForm} />
      <Route path="/admin/teachingform" component={TeachingForm} />
      <Route path="/admin/researchform" component={ResearchForm} /> */}
    </Switch>
  </Router>
);

export default Routing;
