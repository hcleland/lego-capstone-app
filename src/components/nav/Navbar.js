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
        return (
            <div id="navbar">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/">App Logo</a>
                    {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-item nav-link active" href="/">Home <span className="sr-only"></span></a>
                            <li className="nav-item">
                                <Link className="nav-item nav-link active" to="/search">Search</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-item nav-link active" to="/signup">Sign Up</Link>
                            </li>
                            <Link to="/login" className="nav-item nav-link active" onClick={this.toggle}>Log In</Link>
                            <li className="nav-item">
                                <Link className="nav-item nav-link active" to="/buildItems">Build List</Link>
                            </li>
                            {/* <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} /> */}
                            <a className="nav-item nav-link" href="#">Log Out</a>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;