import React, { Component } from 'react';


class TeachingForm extends Component {

    state = {
        name: '',
        address: '',
        password: '',
    }
    handleSubmit = (e) => {
        e.preventDefault();//puts in in the browser
        const data = JSON.stringify({...this.state})
        fetch('http://localhost:4000', { //(url you are fetching from)
            method: 'POST',
            body: data,
            headers: {
                "Content-Type": "application/json"
            }
        })
    }
  render() {
      console.log(this.state)
    return (
      <div className="Presentations">
        <form onSubmit={this.handleSubmit}> 

          <div className="form-group">
            <label htmlFor="exampleInputPresenter">Presenter(s)</label>
            <input type="test" className="form-control" id="exampleInputName" placeholder="Presenter(s)"
                onChange={e => this.setState({presenter: e.target.value})}/>
        </div>
         <div className="form-group">
             <label htmlFor="exampleInputAddress">Year</label>
             <input type="number" className="form-control" id="exampleInputYear" placeholder="Year"
                 onChange={e => this.setState({year: e.target.value})}/>
         </div>
          <div className="form-group">
           <label htmlFor="exampleInputPassword">Title</label>
              <input type="text" className="form-control" id="exampleInputTitle" placeholder="Title"
                  onChange={e => this.setState({title: e.target.value})}/>
         </div>
         <div className="form-group">
             <label htmlFor="exampleInputDescription">Description</label>
             <input type="text" className="form-control" id="exampleInputDescription" placeholder="Description"
                 onChange={e => this.setState({description: e.target.value})}/>
         </div>
          <div className="form-group">
           <label htmlFor="exampleInputLocation">Location</label>
              <input type="text" className="form-control" id="exampleInputLocation" placeholder="Location"
                  onChange={e => this.setState({location: e.target.value})}/>
         </div>

  <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    <button type="submit" className="btn btn-primary">List All</button>
      </div>
    );
  }
}

export default PresentationsForm;
