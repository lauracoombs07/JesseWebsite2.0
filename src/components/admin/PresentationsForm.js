import React, { Component } from "react";
import { createBrowserHistory } from 'history';

const apiURL = 'http://localhost:4000/presentations'


const history = createBrowserHistory();

class PresentationsForm extends Component {
  //'this.' would be the same as saying 'PresentationsForm.'. state is an object
  state = {
    id: "",
    presenter: "",
    year: "",
    title: "",
    description: "",
    location: "",
    presentations: [{
        // Presenter: '',
        // Year: '',
        // Title: '',
        // Description: '',
        // Location: '',
        // id: '',
    
    }],
  };

  getPresentations = async () => {
    return fetch('http://localhost:4000/presentations')
      .then(results => {
        return results.json(); //.json validates/parses or converting the data so it can be used and acted on as such.
      })
      .then((data) => {
        this.setState({presentations: data});
      });
  };//Scope locked data1 variable



  handleSubmit = async (e) => {
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
    history.go(0)//clears the form by refreshing the page. change later to set inputs to empty ''
  };

    // handleSearchId = async (e, _id) => {
    //   alert("FIND ONE id");
    //   e.preventDefault(); //
    //   const searchId = JSON.stringify({ ...this.state });
    //   await fetch(apiURL/:" + _id, {
    //     headers: {
    //       "Content-Type": "application/json"
    //     }
    //   })
    //     .then(results => {
    //       return results.json(); //.json validates/parses or converting the data so it can be used and acted on as such.
    //     })
    //     .then(data => {
    //       this.setState({
    //         //id, presenter: , year, title, description, location
    //         //putting it into state so we can access it. using it in map at bottom
    //         // list: searchId //only getting list [] from db
    //       }); //runs console log before set state. if we put it here, it forces th console log to run right where we want
    //     });
    // };

  handleUpdateItem = async (e, _id) => {
    e.preventDefault();  
    const formUpdate = JSON.stringify({ ...this.state })
    await fetch(apiURL + `/` + _id, {  //path
      method: "PUT",
      body: formUpdate,
      headers: { "Content-Type":"application/json" }
    });
    await this.getPresentations();
  };

  handleDeleteItem = async _id => {
    await fetch(apiURL + `/`+ _id, {
      method: "DELETE"
    })
    await this.getPresentations();
    // history.replace('/admin/presentationsform')
    // history.push('/admin/presentationsform')
    console.log('hi')
    history.go(0)
  };



    componentDidMount() {
      this.getPresentations();
  }

  render() {
    const presentations = this.state.presentations;

    //  console.log(presentations)  this can go anywhere outside of the scope inside of the className
    return (
      <div className="Presentations">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputPresenter">Presenter(s)</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPresenter"
              placeholder="Presenter(s)"
              onChange={e => this.setState({ presenter: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputYear">Year</label>
            <input
              type="number"
              className="form-control"
              id="exampleInputYear"
              placeholder="Year"
              onChange={e => this.setState({ year: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword">Title</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputTitle"
              placeholder="Title"
              onChange={e => this.setState({ title: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputDescription">Description</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputDescription"
              placeholder="Description"
              onChange={e => this.setState({ description: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputLocation">Location</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputLocation"
              placeholder="Location"
              onChange={e => this.setState({ location: e.target.value })}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>

        <hr />
        <form>
          <div className="form-search">
            <label htmlFor="exampleInputID" />
            <input
              type="text"
              className="form-control"
              id="presentationId"
              aria-describedby="id"
              placeholder="Search by Id"
              onChange={e => this.setState({ searchId: e.target.value })}
            />
            {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
          </div>
          <button type="submit" className="btn btn-primary">
            Search
          </button>
          {/* <button onClick={() => this.handleSearchId( presentation._id)}>
              {" "}
              Find One{" "}
            </button> */}
        </form>
        <hr />
        {presentations.map(presentation => (
          <div key={presentation._id}>
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
            id: {presentation._id}
            <button onClick={e => this.handleUpdateItem(e, presentation._id)}>
              {" "}
              Edit{" "}
            </button>
            <button onClick={() => this.handleDeleteItem(presentation._id)}>
              {" "}
              X{" "}
            </button>
            <hr />
          </div>
        ))}
      </div>
    );
  }
  //event when event happens =>this.handleClick() calling a function
}

export default PresentationsForm;
