import React, { Component } from "react";
import Navbar from "./nav/Navbar";
import ApplicationViews from "./ApplicationViews";


class Lego extends Component {
    state = {
        currentUser: JSON.parse(sessionStorage.getItem("credentials")),
        modal: false
    }

    setUser = (user) => {
        sessionStorage.setItem("credentials", JSON.stringify(user));

        this.setState({
            currentUser: user
        })
    }

    render() {
        return (
            <React.Fragment>
                <Navbar setUser={this.setUser} currentUser={this.state.currentUser} modal={this.state.modal} />
                <ApplicationViews setUser={this.setUser} currentUser={this.state.currentUser} />
            </React.Fragment>
        )
    }
}

export default Lego