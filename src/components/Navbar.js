import React from "react";

function Navbar() {
return(
      <div>
        <div class="container-fluid">
          <h1
            class="text-center"
            // style="font-family: 'Rokkitt'; padding-top: 1em"
          >
            JESSE EGBERT
          </h1>
          {/* <h5 class="text-center text-muted;" /> */}
        </div>
        <nav
          class="navbar navbar-expand-lg navbar-light navbar-light fixed"
        //   style="background-color: transparent; font-family: 'Rokkitt', serif;"
        >
          {/* <a class="navbar-brand" href="#" /> */}
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item active">
                <a class="nav-link" href="/Home">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Publications">
                  Publications
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Presentations">
                  Presentations
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Teaching">
                  Teaching
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Research">
                  Research
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Awards">
                  Awards
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
);
  }


export default Navbar;
