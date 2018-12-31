import React, { Component } from "react";
import "./User.css";
import firebase from "./Firebase.js";

class User extends Component {
  constructor() {
    super();
    this.state = {
      currentPassword: "",
      username: "",
      passwords: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //JS carve out space to keep track of the user using our username and password. Create constructor and setting default value
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const passwordsRef = firebase.database().ref("passwords");
    const password = {
      title: this.state.password,
      user: this.state.username
    };
    passwordsRef.push(password);
    this.setState({
      currentPassword: "",
      username: ""
    });
  }

  componentDidMount() {
    const passwordsRef = firebase.database().ref("passwords");
    passwordsRef.on("value", snapshot => {
        let passwords = snapshot.val();
      let newState = [];
      for (let password in passwords) {
        newState.push({
          id: password,
          title: passwords[password].title,
          user: passwords[password].user
        });
      }
      this.setState({
        passwords: newState
      });
    });
  }
  removePassword(passwordId) {
    const passwordRef = firebase.database().ref(`/passwords/${passwordId}`);
    passwordRef.remove();
  }
  render() {
    return (
      <div className="user">
        <header>
          <div className="wrapper">
            <h1>User</h1>
          </div>
        </header>
        <div className="container">
          <section className="add-user">
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                name="username"
                placeholder="Name"
                onChange={this.handleChange}
                value={this.state.username}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.handleChange}
                value={this.state.password}
              />
              <button>Add User</button>
            </form>
          </section>
          <section className="display-password">
            <div className="wrapper">
              <ul>
                {this.state.passwords.map(password => {
                  return (
                    <li key={password.id}>
                      <h3>{password.title}</h3>
                      <p>{password.user}
                      <button onClick={() => this.removePassword(password.id)}>
                        Remove Password
                      </button>
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
export default User;
