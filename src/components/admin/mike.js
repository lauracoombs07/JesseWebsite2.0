import React, { Component } from 'react';
import Layout from './Layout';
import '../App.css';
import { createBrowserHistory } from 'history';
import uuid from "uuid";
import {apiURL} from '../App'

const history = createBrowserHistory();
let list_data
class EditList extends Component {
    constructor(props) {
        super(props);
        this.state = {
         owner: '',
          _id: this.props.location.state.state._id,
          name: '',
          description: '',
         items: [{item_id: '',
            itemName: '',
            itemDescription: '',
            link: ''
         }]
        }; 
    }
    componentDidMount() {

        fetch(`${apiURL}/list/${this.state._id}`, {
    headers: {"Content-Type":"application/json" }})
    .then(results => {
     return results.json() 
    })
    .then((data) => {
        list_data = data.reduce((acc, cur) => cur, 0)
      this.setState({
        owner: list_data.owner,
        name: list_data.name,
        description: list_data.description,
        items: list_data.items

      })
    })
    }
    addItem = (e)=> {
        e.preventDefault()
        this.setState((prevState) => ({
          items: [...prevState.items,
            {item_id: uuid.v1().substring(0,7),
            itemName: '',
            itemDescription: '',
            link: ''        }]
        }))
        
      }
    handleChange = (e) => {
        if (["item_id","itemName", "link","itemDescription"].includes(e.target.className) ) {
            let items = [...this.state.items]   
            items[e.target.dataset.id][e.target.className] = e.target.value
         
            this.setState({ items })
          } else {
            this.setState({ [e.target.name]: e.target.value })
          } 
    }
    handleSubmit = async (e) => {
        e.preventDefault()
        const formData = JSON.stringify({...this.state})
       
            await fetch(`${apiURL}/list/${this.state._id}`,  {
            method: 'PATCH',
            body: formData,
            headers: {
              "Content-Type":"application/json" 
             }  
          })
    history.push('/user', {state: {db_id: this.state.owner}}) 
    history.go(0)
    }
    handleDeleteItem = (e) => {
        e.preventDefault()
        
        const oldData = this.state.items.filter(item => item.item_id !== e.target.name)
        this.setState({items: oldData})
    }
    backHandler(){
        history.goBack(1)
    }

        render() {
 let listItems = this.state.items   

            return (
              <Layout> 
              <div>
                 
                <h2>Edit {this.state.name}</h2>
<form onChange={this.handleChange} onSubmit={this.handleSubmit}>               
      <input type="text" name="name" data-id="name" id="name" value={this.state.name} className="editListName" onChange={event => this.setState({name: event.target.value})}></input><br/>
       <textarea name="description" data-id="desc" id="desc" value={this.state.description} className="listDescription" onChange={event => this.setState({description: event.target.value})}></textarea><br/>
       <hr/>
{listItems.map((item,i) => (
    <div key={item.item_id} id={item.item_id} className="editList">
         <button name={item.item_id} value={item.item_id} onClick={e => this.handleDeleteItem(e)} className="deleteItemBtn">Delete</button><br/>
            
       <input type="text" data-id={i} id={item.item_id} placeholder="Item Name" name="itemName" value={item.itemName} className="itemName" onChange={event => this.setState({items:[{itemName: event.target.value}]})}></input>
       <input type="text" data-id={i} name="link" placeholder="Link" value={item.link} className="link" onChange={event => this.setState({items:[{link: event.target.value}]})}></input>
       <br/>
       
        <textarea name="itemDescription" placeholder="Description" data-id={i} id="itemDescID" value={item.itemDescription} className="itemDescription" onChange={event => this.setState({items:[{itemDescription: event.target.value}]})}></textarea>
   
    </div>
 
))}
<div className="buttonDiv">
        <button onClick={this.addItem}>New Item</button>
        <button type="submit">Save Changes</button>
</div>
</form>  
      
       <button className="backButton" onClick={e => this.backHandler(e)}>Back</button>
              </div>
              </Layout> 
            );
          }
        }
      export default EditList;


      MINE//Broken because I'm not getting by ${id}
      import React, { Component } from "react";
      const apiURL = 'http://localhost:4000/presentations'
      let listData
      class PresentationsForm extends Component {
        //'this.' would be the same as saying 'PresentationsForm.'. state is an object
        state = {
          id: "",
          presenter: "",
          year: "",
          title: "",
          description: "",
          location: "",
          searchId: ""
        };
      
        getPresenters = async () => {
          await fetch(apiURL, {
            // mode: "cors", may or may not need it...mike did it here in his because he didn't have access to third party api
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            }
          })
            .then(results => {
              return results.json(); //.json validates/parses or converting the data so it can be used and acted on as such.
            })
            .then((data) => {
                listData = data.reduce((acc,cur) => cur, 0)
            //   this.setState({ 
            //       Presenter: listData.presenter,
            //       Year: listData.year,
            //       title: listData.title,
            //       description: listData.description,
            //       location: listData.location, 
            //   });
            // });
            
        };
      
//         handleSubmit = async e => {
//           e.preventDefault(); //puts in in the omnibar/address bar and refreshes page
//           const data = JSON.stringify({ ...this.state }); //spread syntax...take object from the form and making it a json string
//           await fetch(apiURL, {
//             method: "POST",
//             body: data,
//             headers: {
//               "Content-Type": "application/json" //sending json instead of object. where it's going and what kind
//             }
//           });
//           await this.getPresenters();
//         };
      
//           // handleSearchId = async (e, _id) => {
//           //   alert("FIND ONE id");
//           //   e.preventDefault(); //
//           //   const searchId = JSON.stringify({ ...this.state });
//           //   await fetch(apiURL/:" + _id, {
//           //     headers: {
//           //       "Content-Type": "application/json"
//           //     }
//           //   })
//           //     .then(results => {
//           //       return results.json(); //.json validates/parses or converting the data so it can be used and acted on as such.
//           //     })
//           //     .then(data => {
//           //       this.setState({
//           //         //id, presenter: , year, title, description, location
//           //         //putting it into state so we can access it. using it in map at bottom
//           //         // list: searchId //only getting list [] from db
//           //       }); //runs console log before set state. if we put it here, it forces th console log to run right where we want
//           //     });
//           // };
      
//         handleUpdateItem = async (e, _id) => {
//           e.preventDefault();
//           await fetch(apiURL + `/` + _id, {
//             method: "PUT",
//             body: ""
//           });
//           await this.getPresenters();
//         }; //attach + _id to the end of the URL and in handleOnClick(e, _id)
      
//         handleDeleteItem = async _id => {
//           await fetch(apiURL + `/` + _id, {
//             method: "DELETE"
//           });
//           await this.getPresenters();
//         };
      
      
      
//         async componentWillMount() {
//           await this.getPresenters();
//         }
      
//         render() {
//           const presentations = this.state.list;
      
//           // console.log(presentations)  this can go anywhere outside of the scope inside of the className
//           return (
//             <div className="Presentations">
//               <form onSubmit={this.handleSubmit}>
//                 <div className="form-group">
//                   <label htmlFor="exampleInputPresenter">Presenter(s)</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="exampleInputPresenter"
//                     placeholder="Presenter(s)"
//                     onChange={e => this.setState({ presenter: e.target.value })}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="exampleInputYear">Year</label>
//                   <input
//                     type="number"
//                     className="form-control"
//                     id="exampleInputYear"
//                     placeholder="Year"
//                     onChange={e => this.setState({ year: e.target.value })}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="exampleInputPassword">Title</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="exampleInputTitle"
//                     placeholder="Title"
//                     onChange={e => this.setState({ title: e.target.value })}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="exampleInputDescription">Description</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="exampleInputDescription"
//                     placeholder="Description"
//                     onChange={e => this.setState({ description: e.target.value })}
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="exampleInputLocation">Location</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="exampleInputLocation"
//                     placeholder="Location"
//                     onChange={e => this.setState({ location: e.target.value })}
//                   />
//                 </div>
      
//                 <button type="submit" className="btn btn-primary">
//                   Submit
//                 </button>
//               </form>
      
//               <hr />
//               <form>
//                 <div className="form-search">
//                   <label htmlFor="exampleInputID" />
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="presentationId"
//                     aria-describedby="id"
//                     placeholder="Search by Id"
//                     onChange={e => this.setState({ searchId: e.target.value })}
//                   />
//                   {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
//                 </div>
//                 <button type="submit" className="btn btn-primary">
//                   Search
//                 </button>
//                 {/* <button onClick={() => this.handleSearchId( presentation._id)}>
//                     {" "}
//                     Find One{" "}
//                   </button> */}
//               </form>
//               <hr />
//               {presentations.map(presentation => (
//                 <div key={presentation._id}>
//                   presenter: {presentation.presenter}
//                   <br />
//                   Year: {presentation.year}
//                   <br />
//                   Title: {presentation.title}
//                   <br />
//                   Location: {presentation.location}
//                   <br />
//                   Description: {presentation.description}
//                   <br />
//                   id: {presentation._id}
//                   <button onClick={e => this.handleUpdateItem(e, presentation._id)}>
//                     {" "}
//                     Edit{" "}
//                   </button>
//                   <button onClick={() => this.handleDeleteItem(presentation._id)}>
//                     {" "}
//                     X{" "}
//                   </button>
//                   <hr />
//                 </div>
//               ))}
//             </div>
//           );
//         }
//         //event when event happens =>this.handleClick() calling a function
//       }
      
//       export default PresentationsForm;
      