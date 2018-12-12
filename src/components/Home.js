import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div class="container1">
        <div class="row">
          <div class="col-sm">
            <img
              src="http://oak.ucc.nau.edu/jae89/Jesse3.jpg"
              class="PIC"
              alt="Jesse Profile"
            />
          </div>
          <div class="col-sm">
            <p class="text-">
              Welcome! I am an Assistant Professor of Applied Linguistics at
              Northern Arizona University. As a researcher, I specialize in the
              use of corpus linguistic methods to explore patterns of language
              variation across registers of academic prose and the internet. I'm
              also interested in issues related to quantitative linguistic
              research, including corpus design and representativeness,
              methodological triangulation, and the application of multivariate
              statistical techniques to language data.
            </p>
          </div>
          <div class="col-sm">One of three columns</div>
        </div>
      </div>
    );
  }
}

export default Home;
