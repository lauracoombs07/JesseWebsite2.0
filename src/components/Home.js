import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      
      <div class="container1">
      
        <div class="row">
          <div class="col">
            <img
              src="Jesseprofile.jpg"
              class="PIC"
              alt="Jesse Profile"
            />
          </div>
          <div class="col-6 wrapper" >
            <p class="welcome">
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
          <div class="col" style={{ textAlign: 'center'}}>  
           <h5><b>Contact Information</b></h5>
              <h6>BAA 315</h6> 
              <h6>Northern Arizona University</h6>
              <h6>Flagstaff, AZ 86011</h6> 
              <h6>Phone (801) 979-1706 </h6>
              <h6>jesse.egbert@nau.edu</h6>
              <a class="btn btn-primary" href="/PresentationsForm.js" role="button">Form</a>
            
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
// style={{ textAlign: 'center'}}