import { GoogleAuthProvider, onAuthStateChanged, signInWithRedirect, signOut } from "firebase/auth";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { auth } from "./Firebaseconfig";

export default class Navbar extends Component {
    state={
        loginstatus:""
    };
    componentDidMount(){
        onAuthStateChanged(auth , (user)=>{
            if(user)
            this.setState({loginstatus:true});
            else
            this.setState({loginstatus:false});
        })
    }
    handleLogin()
    {
        signInWithRedirect(auth , new GoogleAuthProvider);
    };
    handleLogout()
    {
        signOut(auth);

    };
    render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-info">
          <div className="container-fluid">
            <Link className="navbar-brand" to="#">
              My Planner
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Create Task
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/mytasks">
                    My Tasks
                  </Link>
                </li>
                <li className="nav-item">
                  {!(this.state.loginstatus) && <a className="nav-link" onClick={this.handleLogin}>Login</a>}
                </li>
                <li className="nav-item">
                  {this.state.loginstatus && <a className="nav-link" onClick={this.handleLogout}>Logout</a> }
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
