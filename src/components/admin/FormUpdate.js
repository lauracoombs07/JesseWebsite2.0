import React, { Component } from "react";
import { createBrowserHistory } from "history";

const apiURL = "http://localhost:4000/presentations";

const history = createBrowserHistory();




class FormUpdate extends Component {
    state = {
        id: "",
        presenter: "",
        year: "",
        title: "",
        description: "",
        location: "",
        presentations: [
          {
            presenter: "",
            year: "",
            title: "",
            description: "",
            location: "",
            id: ""
          }
        ],
        m_id: "",
        mpresenter: "laura",
        myear: "",
        mtitle: "",
        mdescription: "",
        mlocation: "",
        mpresentations: [
          {
            mpresenter: "",
            myear: "",
            mtitle: "",
            mdescription: "",
            mlocation: "",
            m_id: ""
          }
        ]
      };
      //GET
  getPresentations = async () => {
    return fetch("http://localhost:4000/presentations")
      .then(results => {
        return results.json(); //.json validates/parses or converting the data so it can be used and acted on as such.
      })
      .then(data => {
        this.setState({ presentations: data });
      });
  }; //Scope locked data1 variable
  //POST
  handleSubmit = async e => {
    e.preventDefault(); //puts in in the omnibar/address bar and refreshes page
    const formData = JSON.stringify({
      presenter: this.state.presenter,
      year: this.state.year,
      title: this.state.title,
      description: this.state.description,
      location: this.state.location
    });
    await fetch(apiURL, {
      method: "POST",
      body: formData,
      headers: {
        "Content-Type": "application/json" //sending json instead of object. where it's going and what kind
      }
    });
    await this.getPresentations();
    history.go(0); //clears the form by refreshing the page. change later to set inputs to empty ''
  };
  //UPDATE
  handleAddItem = async _id => {
    const newData = JSON.stringify({
      presenter: this.state.mpresenter,
      year: this.state.myear,
      title: this.state.mtitle,
      description: this.state.mdescription,
      location: this.state.mlocation
    });

    await fetch(apiURL + `/` + _id, {
      method: "PUT",
      body: newData,
      headers: {
        "Content-Type": "application/json"
      }
    });
    await this.getPresentations();
  };

  //DELETE
  handleDeleteItem = async _id => {
    await fetch(apiURL + `/` + _id, {
      method: "DELETE"
    });
    await this.getPresentations();
    // history.replace('/admin/presentationsform')
    // history.push('/admin/presentationsform')
    console.log("hi");
    history.go(0);
  };

  componentDidMount() {
    this.getPresentations();
  }
    render() {
        const presentations = this.state.presentations;
        return(
            <div>
                <a class="btn btn-primary" href="/admin/PresentationsForm" role="button">Go to Submit</a>

{presentations.map((presentation, index) => (
          <div key={index}>
            id: {presentation._id}
            <br />
            Presenter: {presentation.presenter}
            <br />
            Year: {presentation.year}
            <br />
            Title: {presentation.title}
            <br />
            Location: {presentation.location}
            <br />
            Description: {presentation.description}
            <br />



                    <form onSubmit={e => this.handleAddItem(presentation._id)}>
                      <div className="form-group">
                        <label htmlFor="exampleInputPresenter">
                          Presenter(s)
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputPresenter"
                          placeholder="Presenter(s)"
                        //   value={`${presentation.presenter}`}
                          onChange={e =>
                            this.setState({ mpresenter: e.target.value })
                          }
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputYear">Year</label>
                        <input
                          type="number"
                          className="form-control"
                          id="exampleInputYear"
                          placeholder="Year"
                        //   value={presentation.year}
                          onChange={e =>
                            this.setState({ myear: e.target.value })
                          }
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword">Title</label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputTitle"
                          placeholder="Title"
                        //   value={presentation.title}
                          onChange={e =>
                            this.setState({ mtitle: e.target.value })
                          }
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputDescription">
                          Description
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputDescription"
                          placeholder="Description"
                        //   value={presentation.description}
                          onChange={e =>
                            this.setState({ mdescription: e.target.value })
                          }
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputLocation">Location</label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleInputLocation"
                          placeholder="Location"
                        //   value={presentation.location}
                          onChange={e =>
                            this.setState({ mlocation: e.target.value })
                          }
                        />
                      </div>

                      <button type="submit" className="btn btn-primary">
                        Update
                      </button>
                      <button className="btn btn-primary" onClick={() => this.handleDeleteItem(presentation._id)}>
              {" "}
              X{" "}
            </button>

            
                    </form>

            <hr />
          </div>
        ))}
            </div>
            //history.push history.go  dig down to get the state.location.props or whatever like mikes
            
        )
    }
}


export default FormUpdate


