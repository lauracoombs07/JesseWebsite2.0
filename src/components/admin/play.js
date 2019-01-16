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