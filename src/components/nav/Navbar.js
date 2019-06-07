import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import "./Navbar.css"


class Navbar extends Component {
    render() {
        return (
            <div id="navbar">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">App Logo</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-item nav-link active" href="#">Home <span class="sr-only"></span></a>
                            <Link to="/signup" class="nav-item nav-link active">Sign Up</Link>
                            <a class="nav-item nav-link active" href="#">Logout</a>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;