import { Component } from "react";

class AwardsForm extends Component {
//   state = {
//     award: "",
//     year: "",
//     amount: ""
//   };

//   handleSubmit = e => {
//     alert("An Award was submitted: " + this.state.value);
//     e.preventDefault(); //puts in in the browser
//     const data = JSON.stringify({ ...this.state });
//     fetch("http://localhost:4000", {
//       //(url you are fetching from)
//       method: "POST",
//       body: data,
//       headers: {
//         "Content-Type": "application/json"
//       }
//     });
//   };
//   render() {
//     console.log(this.state);
//     return (
//       <div className="AwardsForm">
//         <form onSubmit={this.handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="exampleInputAward">Award</label>
//             <input
//               type="text"
//               className="form-control"
//               id="exampleInputAward"
//               placeholder="Award"
//               onChange={e => this.setState({ award: e.target.value })}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="exampleInputYear">Year</label>
//             <input
//               type="number"
//               className="form-control"
//               id="exampleInputYear"
//               placeholder="Year"
//               onChange={e => this.setState({ year: e.target.value })}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="exampleInputAmount">Amount</label>
//             <input
//               type="number"
//               className="form-control"
//               id="exampleInputAmount"
//               placeholder="Amount"
//               onChange={e => this.setState({ amount: e.target.value })}
//             />
//           </div>

//           <button type="submit" className="btn btn-primary">
//             Submit
//           </button>
//         </form>

//         <button type="submit" className="btn btn-primary">
//           List All
//         </button>
//       </div>
//     );
//   }
}

export default AwardsForm;
