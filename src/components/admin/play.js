// // const getFromDb = new Promise(executor:(resolve, reject) =>

// // )



// const getFromDb = () => Promise.resolve( value:{name: 'Laura'})

// const run = async () => {
//     const results = await getFromDb()
// }
// const results = getFromDb()
// // console.log(results.then)
// // console.log(results.catch)

// getFromDb()
//     .then(result => {
//         console.log(result)
//         return result.toUpperCase()
//     })
//     .then(result.name.toUpperCase())
//     .catch(err => console.error(err))

// //controls the flow .then for value .catch for an error

// //Using promises most in our APIs
// name:'Laura', json() {}


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
    //                      <ul className="w3-ul">
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

    // componentDidMount() {
    //     fetch("http://localhost:4000/presentations", {
    //       headers: {
    //         "Content-Type": "application/json"
    //       }
    //     })
    //       .then(results => {
    //         return results.json(); //.json validates/parses or converting the data so it can be used and acted on as such.
    //       })
    //       .then(data => {
    //         presentations = data.reduce((acc, cur) => cur, 0)
    //         // console.log(data)  //inspect page I can see data coming in as array in console
    //         this.setState({
    //             presenter: presentations.presenter, 
    //             year: presentations.year,
    //             title: presentations.title,
    //             description: presentations.description,
    //             location: presentations.location,
    //           },); //runs console log before set state. if we put it here, it forces th console log to run right where we want
    //       });
    //   }

    <div>
    {this.state.presentations.map
      (presentations =>
        <div className="border" key={presentation._id}>
          <h3> Presenter: {presentation.presenter}</h3>
          <p> Year: {presentation.year}</p>
          <p> Address: {presentation.title}</p>
  </div>
  </div></div>

  <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-sm">Update
  </button>

  <div className="modal fade bd-example-modal-sm" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel"
       aria-hidden="true">
    <div className="modal-dialog modal-sm">
      <div className="modal-content">

        <form onSubmit={() => this.handleUpdate(presentation._id)}>
          <div className="form-group">
            <label htmlFor="InputPresenter">Presenter(s)</label>
            <input type="text" className="form-control" id="InputPresenter" aria-describedby="PresenterHelp"
                   placeholder="Presenter(s)" onChange={e => this.setState({presenter: e.target.value})}/>
          </div>
          <div className="form-group">
            <label htmlFor="InputYear">Year</label>
            <input type="number" className="form-control" id="InputYear" placeholder="Year"
                   onChange={e => this.setState({ year: e.target.value })}/>
          </div>
          <div className="form-group">
            <label htmlFor="InputTitle">Title</label>
            <input type="text" className="form-control" id="InputTitle" placeholder="Title"
                   onChange={e => this.setState({ title: e.target.value })}/>
          </div>
          <div className="form-group">
            <label htmlFor="InputDescription">Description</label>
            <input type="text" className="form-control" id="InputDescription" placeholder="Description"
                   onChange={e => this.setState({ description: e.target.value })}/>
          </div>
          <div className="form-group">
            <label htmlFor="InputLocation">Location</label>
            <input type="text" className="form-control" id="InputLocation" placeholder="Location"
                   onChange={e => this.setState({ location: e.target.value })}/>
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
