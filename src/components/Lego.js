import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./nav/Navbar";
import ApplicationViews from "./ApplicationViews";


class Lego extends Component {
    state = {
        currentUser: JSON.parse(sessionStorage.getItem("credentials")),
        modal: false
    }

    setUser = (user) => {
        sessionStorage.setItem("credential", JSON.stringify(user));

        this.setState({
            currentUser: user
        })
    }

    render() {
        return (
            <React.Fragment>
                <Navbar setUser={this.setUser} currentUser={this.state.currentUser} modal={this.state.modal} />
                <ApplicationViews setUser={this.setUser} activeUser={this.state.currentUser} />
            </React.Fragment>
        )
    }
}

export default Lego