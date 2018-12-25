import React, {Component} from "react"
import "./Publications.css";
//import { Link } from 'react-router-dom'
import firebase from './Firebase.js'


class Publications extends Component { //extends power of parent React

    
    
    
constructor() {
    super();
    this.state = {
        publications: "",
        presentations: "",
        awards: "",
        research: "",
        teaching: "",
    };
this.handleChange = this.handleChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
}

handleChange(e) {
    this.setState({
        [e.target.name]: e.target.value
    });
}

handleSubmit(e) {
    e.preventDefault();//stops page from refreshing every time button is pushed
    const awardsRef = firebase.database().ref("awards"); //shows all items every time anything is submitted. 
    const award = {
        title: this.state.award,
        date: this.state.date
    };
    awardsRef.push(award);
    this.setState({
        award: "",
        date: ""
    });
}
componentDidMount() {
    const awardsRef = firebase.database().ref("awards");
    awardsRef.on("value", snapshot => {
        let awards = snapshot.val();
        let newState = [];
        for (let award in awards) {
            newState.push({
                id: award,
                title: award,
            });
        }
        this.setState({
            awards:newState
        });
    });
}
removeAward(itemID) {
    const awardRef = firebase.database().ref(`/items/${itemID}`);
    awardRef.remove();
}
 
render() {//calling a function fruom index.js
    return(
        <div>
        <h1 className ="laura">Publications</h1>
        
            {/* <Link to="/awards">Awards</Link><br/>
            <Link to="/presentations">Presentations</Link><br/>
            <Link to="/publications">Publications</Link><br/>
            <Link to="/research">Research</Link><br/>
            <Link to="/teaching">Teaching</Link><br/>
            
         */}
        </div>
    )
}
}

export default Publications;