// import React, { Component } from "react";
// let presentations = ''
// class PresentationsForm extends Component {
//   //'this.' would be the same as saying 'PresentationsForm.'. state is an object
//   state = {
//     id: "",
//     presenter: "",
//     year: "",
//     title: "",
//     description: "",
//     location: "",
//     list: [],
//     searchId: ""
//   };


//   componentDidMount() {
//     fetch("http://localhost:4000/presentations", {
//       // mode: "cors", may or may not need it...mike did it here in his because he didn't have access to third party api
//       headers: {
//         "Content-Type": "application/json"
//       }
//     })
//       .then(results => {
//         return results.json(); //.json validates/parses or converting the data so it can be used and acted on as such.
//       })
//       .then(data => {
//           presentations = data.reduce((acc, cur)=> cur, 0)
//         // console.log(data)  //inspect page I can see data coming in as array in console
//         this.setState({
//             presenter: presentations.presenter,
//             year: presentations.year,
//             title: presentations.title,
//             description: presentations.description,
//             location: presentations.location,
//             id: presentations._id
//         },() => {

//         }) //runs console log before set state. if we put it here, it forces th console log to run right where we want
//       });
//   }

//        console.clear();
// const { Component } = React;

// class App extends Component {
// 	constructor(props){
// 		super(props);
// 		this.state = {perro:'form-control',input:'Submit',name:'',lname:'',email:'',users:[]};
// 	}
// 	onSubmit(e){
// 		e.preventDefault();
// 		if(this.submitInput.value == 'Submit'){
// 		const obj = {name:this.state.name,lname:this.state.lname,email:this.state.email};
// 		this.setState({users:[...this.state.users,obj],name:'',lname:'',email:''});
// 		}else 
// 			if(this.submitInput.value == 'Edit'){
// 				const pos = Number(this.rowRef.value);
// 				this.state.users[pos].name = this.inputName.value;
// 				this.state.users[pos].lname = this.inputLname.value;
// 				this.state.users[pos].email = this.inputEmail.value;
// 				this.submitInput.value = 'Submit';
// 				this.clearInputs();
				
// 				this.forceUpdate();
// 		}
// 	}
	
// 	clearInputs(){
// 		this.inputName.value = '';
// 		this.inputLname.value = '';
// 		this.inputEmail.value = '';
// 		this.state.name = '';
// 		this.state.lname = '';
// 		this.state.email = '';
// 	}
// 	deleteRow(row){
// 		var pos = this.state.users.indexOf(row);
// 		this.setState({users:this.state.users.slice(0,pos)});
// 		this.clearInputs();
		
// 	}	
// editRow(row){
// 	var pos = this.state.users.indexOf(row);
// 	this.inputName.value = this.state.users[row].name;
// 	this.state.name = this.state.users[row].name;
// 	this.inputLname.value = this.state.users[row].lname;
// 	this.state.lname = this.state.users[row].lname;
// 	this.inputEmail.value = this.state.users[row].email;
// 	this.state.email = this.state.users[row].email;
// 	this.rowRef.value = row;
// 	this.state.input = 'Edit';
// 	this.forceUpdate();
// 	}
// render(){

// 	return(
// 		<div className="container">
// 			<form className="form-horizontal" role="form" onSubmit={this.onSubmit.bind(this)}>
// 				<label>table</label>
// 				<div className="input-group">
// 					<span className="input-group-addon">F</span>
// 					<input required type="text" ref={(ref) => this.inputName = ref} onChange={event => this.setState({ name: event.target.value})}  value={this.state.name} className={this.state.perro} placeholder="first name" arial-describedby="basic-addon1"/>
// 				</div>
// 				<div className="input-group">
// 					<span className="input-group-addon">L</span>
// 					<input type="text" required ref={(ref) => this.inputLname = ref} onChange={event => this.setState({ lname: event.target.value})} value={this.state.lname} className="form-control"  placeholder="last name" arial-describedby="basic-addon1"/>
// 				</div>
// 				<div className="input-group">
// 					<span className="input-group-addon">@</span>
// 					<input type="email" required ref={(ref) => this.inputEmail = ref} onChange={event => this.setState({ email: event.target.value})} value={this.state.email} className="form-control" placeholder="Email" aria-describedby="basic-addon1" />
// 				</div>
// 				<div className="form-group"> 
// 					<div className="col-sm-offset-2 col-sm-10">
// 					  <input type="submit"  ref={(ref) => this.submitInput = ref} value={this.state.input} className="btn btn-default"/>
// 					</div>
// 				</div>
				
// 				<input type="hidden" className="row-ref" value="" ref={(ref) => this.rowRef = ref}/>
// 			</form>
// 			<div className="container" >	
// 				<table className="table table-hover">
// 					<thead>
// 						<tr>
// 							<th>Firstname</th>
// 							<th>Lastname</th>
// 							<th>Email</th>
// 							<th>Options</th>
// 						</tr>
// 					</thead>
// 					<tbody>
						
// 						{this.state.users.map((data,index) => {
							
// return <Row editRow= {this.editRow.bind(this)} users = {this.state.users}  data = {data} key={index} row={index} deleteRow={this.deleteRow.bind(this)} />
// 						})}
								
// 					</tbody>
// 				</table>
// 			</div>
// 		</div>
// 	);	
// }
// }
// class Row extends Component{
// 	constructor(props){
// 		super(props);
// 	}
	
// 	render(){
// 		return (
// 			<tr>
// 				<td>{this.props.data.name}</td>
				
// 				<td>{this.props.data.lname}</td>
				
// 				<td>{this.props.data.email}</td>
// 				<td className="glyphicon glyphicon-trash" onClick={() => {this.props.deleteRow(this.props.row)}}></td>
// 				<td className="glyphicon glyphicon-edit" onClick={() => {this.props.editRow(this.props.row)}} ></td>
// 			</tr>
			
// 		);
// 	}
// }

// ReactDOM.render( <App />, document.querySelector(".container"));
//   handleSubmit = async e => {
//     alert("Submit information");
//     e.preventDefault(); //puts in in the omnibar/address bar and refreshes page
//     const data = JSON.stringify({ ...this.state }); //spread syntax...take object from the form and making it a json string
//     await fetch("http://localhost:4000/presentations", {
//       method: "POST",
//       body: data,
//       headers: {
//         "Content-Type": "application/json" //sending json instead of object. where it's going and what kind
//       }
//     });
//   };

// //   handleSearchId = async (e, _id) => {
// //     alert("FIND ONE id");
// //     e.preventDefault(); //
// //     const searchId = JSON.stringify({ ...this.state });
// //     await fetch("http://localhost:4000/presentations/:" + _id, {
// //       headers: {
// //         "Content-Type": "application/json"
// //       }
// //     })
// //       .then(results => {
// //         return results.json(); //.json validates/parses or converting the data so it can be used and acted on as such.
// //       })
// //       .then(data => {
// //         this.setState({
// //           //id, presenter: , year, title, description, location
// //           //putting it into state so we can access it. using it in map at bottom
// //           // list: searchId //only getting list [] from db
// //         }); //runs console log before set state. if we put it here, it forces th console log to run right where we want
// //       });
// //   };

//   handleUpdateItem = (e, _id) => {
//     alert("Update information");
//     e.preventDefault();
//     return fetch("http://localhost:4000/presentations/" + _id, {
//       method: "PUT",
//       body: ""
//     });
//   }; //attach + _id to the end of the URL and in handleOnClick(e, _id)

//   handleDeleteItem = (e, _id) => {
//     alert("Delete Information");
//     e.preventDefault();
//     fetch("http://localhost:4000/presentations/" + _id, {
//       method: "DELETE"
//     });

//   // handleDeleteItem = (e) => {
//   //     e.preventDefault()

//   //     const oldData = this.state.items.filter(item => item.item_id !== e.target.name)
//   //     this.setState({presentations: formData})
//   // }
//   // handleOnChange =(e) => {
//   //     e.preventDefault()
//   //     const formData = this.state.presentations
//   //     this.setState({presentations: formData})
//   // }
//   }; //attach + _id to the end of the URL and in handleOnClick(e, _id)

//   //e is the change or click or whatever target.value is what it changed to and sending to state.     function takes in (e)...what is the event (console.log 'e')
//   render() {
//     const presentations = this.state.list;

//     // console.log(presentations)  this can go anywhere outside of the scope inside of the class
//     return (
//       <div className="Presentations">
//         <form onSubmit={this.handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="exampleInputPresenter">Presenter(s)</label>
//             <input
//               type="text"
//               className="form-control"
//               id="exampleInputPresenter"
//               placeholder="Presenter(s)"
//               onChange={e => this.setState({ presenter: e.target.value })}
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
//             <label htmlFor="exampleInputPassword">Title</label>
//             <input
//               type="text"
//               className="form-control"
//               id="exampleInputTitle"
//               placeholder="Title"
//               onChange={e => this.setState({ title: e.target.value })}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="exampleInputDescription">Description</label>
//             <input
//               type="text"
//               className="form-control"
//               id="exampleInputDescription"
//               placeholder="Description"
//               onChange={e => this.setState({ description: e.target.value })}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="exampleInputLocation">Location</label>
//             <input
//               type="text"
//               className="form-control"
//               id="exampleInputLocation"
//               placeholder="Location"
//               onChange={e => this.setState({ location: e.target.value })}
//             />
//           </div>

//           <button type="submit" className="btn btn-primary">
//             Submit
//           </button>
//         </form>

//         <hr />
//         <form>
//           <div className="form-search">
//             <label for="exampleInputID" />
//             <input
//               type="text"
//               class="form-control"
//               id="presentationId"
//               aria-describedby="id"
//               placeholder="Search by Id"
//               onChange={e => this.setState({ searchId: e.target.value })}
//             />
//             {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
//           </div>
//           <button type="submit" class="btn btn-primary">
//             Search
//           </button>
//         </form>
//         <hr />
//         {presentations.map(presentation => (
//           <div key={presentation._id}>
//             presenter: {presentation.presenter}
//             <br />
//             Year: {presentation.year}
//             <br />
//             Title: {presentation.title}
//             <br />
//             Location: {presentation.location}
//             <br />
//             Description: {presentation.description}
//             <br />
//             id: {presentation._id}
//             <hr />
//             <button onClick={e => this.handleUpdateItem(e, presentation._id)}>
//               {" "}
//               Edit{" "}
//             </button>
//             <button onClick={e => this.handleDeleteItem(e, presentation._id)}>
//               {" "}
//               X{" "}
//             </button>
//             <button onClick={e => this.handleSearchId(e, presentation._id)}>
//               {" "}
//               Find One{" "}
//             </button>
//           </div>
//         ))}
//       </div>
//     );
//   }
//   //event when event happens =>this.handleClick() calling a function
// }

// export default PresentationsForm;
//   // clearInputs(){
// 	// 	this.inputPresenter.value = '';
// 	// 	this.inputYear.value = '';
//   //   this.inputTitle.value = '';
//   //   this.inputDescription.value = '';
// 	// 	this.inputLocation.value = '';
// 	// 	this.state.presenter = '';
// 	// 	this.state.year = '';
//   //   this.state.title = '';
//   //   this.state.description = '';
// 	// 	this.state.location = '';
// 	// }