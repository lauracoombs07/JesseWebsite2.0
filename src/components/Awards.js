import React, { Component } from "react";
import "./Awards.css";

class Awards extends Component {
  //extends power of parent React
  render() {
    //calling a function from index.js
    return (
      <div>
          <h1 className ="laura">Awards</h1>
        <ul class="b">
        <li>NAU Faculty Development Grant (2016)</li>
        <li>BYU College of Humanities Research Grant (2015)</li>
        <li>Spaan Research Grant, CaMLA (2014)</li>
        <li>Regents' Graduate Student Research Grant (2013)</li>
        <li>North America Travel Fund, University of Birmingham (2012)</li>
        <li>Applied Linguistics Doctoral Fellowship (2011-2012)</li>
        <li>NAU Vice President for Research Travel Award (2011)</li>
        <li>NAU Graduate Student Organization Travel Award (2011)</li>
        <li>BYU - Valedictorian of Graduating Class (2009)</li>
        <li>Highest Grade Point Average Award, BYU Linguistics Department (2009)</li>
        <li>BYU College of Humanities Dean’s List (2007 - 2009)</li>
        <li>Brigham Young Full Tuition Scholarship (2007 - 2009)</li>
        <li>BYU Honors Thesis Research Award (2008)</li>
        </ul>
        {/* <h1 className ="laura">Awards</h1>
                <Link to="/awards">Awards</Link><br/>
                <Link to="/presentations">Presentations</Link><br/>
                <Link to="/publications">Publications</Link><br/>
                <Link to="/research">Research</Link><br/>
                <Link to="/teaching">Teaching</Link><br/> */}
      </div>
    );
  }
}

export default Awards;
