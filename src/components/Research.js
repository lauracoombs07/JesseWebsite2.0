import React, {Component} from "react"
import "./Research.css";
import { Link } from 'react-router-dom'


class Research extends Component { //extends power of parent React
    render() {//calling a function fruom index.js
        return(
            <div>
            
                <h1 className ="laura">Research</h1>
                <Link to="/awards">Awards</Link><br/>
                <Link to="/presentations">Presentations</Link><br/>
                <Link to="/publications">Publications</Link><br/>
                <Link to="/research">Research</Link><br/>
                <Link to="/teaching">Teaching</Link><br/>
            </div>
        )
    }
}

export default Research;