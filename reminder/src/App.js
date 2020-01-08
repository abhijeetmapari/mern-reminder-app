import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import CreateTodo from "./components/create-todo";
import EditTodo from "./components/edit-todo";
import TodosList from "./components/todo-list";

import logo from "./logo.png";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://" target="_blank">
              <img src={logo} width="30" height="30" alt=".com" />
            </a>
            <Link to="/" className="navbar-brand">Reminder App</Link>
            <div className="collpase nav-collapse">
              <ul className="navbar-nav mr-auto">

                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Add Reminder</Link>
                </li>

                <li className="navbar-item">
                  <Link to="/" className="nav-link">Reminders</Link>
                </li>
                
              </ul>
            </div>
          </nav>

          <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
        </div>
        
      </Router>
    );
  }
}

export default App;
