import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import "./Navbar.css"

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }



    render() {
        console.log("current user", this.props.currentUser)
        return (
            <div id="navbar">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/"><img src="rainbowBricks.jpg" width="30" height="30" alt=""></img></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav w-100">
                            <a className="nav-item nav-link active" href="/">Home <span className="sr-only"></span></a>
                            <li className="nav-item">
                                <Link className="nav-item nav-link active" to="/search">Search</Link>
                            </li>


                            {!this.props.currentUser ? <li className="nav-item">
                                <Link className="nav-item nav-link active" to="/signup">Sign Up</Link>
                            </li> : null}

                            {/* <li className="nav-item">
                                <Link className="nav-item nav-link active" to="/signup">Sign Up</Link>
                            </li> */}

                            {!this.props.currentUser ? <li className="nav-item">
                                <Link className="nav-item nav-link active" to="/login" onClick={this.toggle}>Log In</Link>
                            </li> : null}

                            {/* <Link to="/login" className="nav-item nav-link active" onClick={this.toggle}>Log In</Link> */}

                            {!!this.props.currentUser ? <li className="nav-item">
                                <Link className="nav-item nav-link active" to="/buildItems">Build List</Link>
                            </li> : null}

                            {/* <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} /> */}

                            {!!this.props.currentUser ? <li className="nav-item">
                                <Link className="nav-item nav-link active" to="/" onClick={this.props.logout}>Logout</Link>
                            </li> : null}

                            {/* <Link to="/" className="nav-item nav-link active" onClick={this.logout}>Log Out</Link> */}


                            {!!this.props.currentUser ? <li className="nav-item nav-link ml-auto active">Welcome {this.props.currentUser.firstLastName}</li> : null}

                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;