import React, { Component } from 'react';

let dbPresentations
class PresentationsForm extends Component {

    state = {
        presenter: '',
        year: '',
        title: '',
        description: '',
        location: '',
        list: []
    }

    handleSubmit = (e) => {
        e.preventDefault();//puts in in the browser and refreshes page
        const data = JSON.stringify({...this.state})
        fetch('http://localhost:4000/presentations', { //(url you are fetching from)
            method: 'POST',
            body: data,
            headers: {
                "Content-Type": "application/json"
            } 
        })
    }
    componentDidMount() {
        fetch('http://localhost:4000/presentations', {
            headers: {
             "Content-Type": "application/json"
            }   
        }).then(results => {
            return results.json()
        }).then(data => {
        dbPresentations = data       
        // console.log(data)  //inspect page I can see data coming in as array in console   
        this.setState({
            list: dbPresentations
        }, console.log(this.state.list))//runs console log before set state. if we put it here, it forces th console log to run right where we want
        })//checking react devtools in chrome the list IS infact in state

    }


    //only needs to be a function on one side or the other
    // handleListAll = (e) => {
    //     e.preventDefault();//probably don't need this but doesn't hurt
    //     alert('you have clicked');
    //     fetch('http://localhost:4000/presentations')
    //     .then((res) => { return res.json() })
    //     .then((data) => {
    //         let result = `<h2> Random Presentation Info From Jsonplaceholder API</h2>`;
    //         data.forEach((presentation) => {
    //             const { number, presenter, year, title, description, location: { city, country } } = presentation
    //             result +=
    //                 `<div>
    //                  <h5> Presenation ID: ${number} </h5>
    //                      <ul class="w3-ul">
    //                          <li> Presenter Name : ${presenter}</li>
    //                          <li> Year : ${year} </li>
    //                          <li> Title : ${title}</li>
    //                          <li> Description : ${description} </li>
    //                          <li> Location : ${city}, ${country} </li>
    //                      </ul>
    //                   </div>`;
    //                   return result
    //                     // document.getElementById('result').innerHTML = result;
    //                 });
    //             }) 

    //         }
        
  render() {
   let presentations = this.state.list
    // console.log(presentations)
    return (
      <div className="Presentations">
        <form onSubmit={this.handleSubmit}> 

          <div className="form-group">
            <label htmlFor="exampleInputPresenter">Presenter(s)</label>
            <input type="text" className="form-control" id="exampleInputPresenter" placeholder="Presenter(s)"
                onChange={e => this.setState({presenter: e.target.value})}/>
        </div>
         <div className="form-group">
             <label htmlFor="exampleInputYear">Year</label>
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
    {/* <button onClick={e => this.handleListAll(e)} className="btn btn-primary">List All</button>
       */}
      
      <hr/>
      {presentations.map(presentation => ( 
        <div key={presentation._id}> 
            presenter: {presentation.presenter}
            {presentation.year}
         </div>

      )
        )}
      </div>
    );
  }
}

export default PresentationsForm;
// presenter: '',
//         year: '',
//         title: '',
//         description: '',
//         location: '',
//         list: []

//using the index as the unique id only works if there is a single map on a page could use presentation.id}