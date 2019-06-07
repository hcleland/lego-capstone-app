import { Route, Redirect } from "react-router-dom";
import { withRouter } from "react-router";
import React, { Component } from "react";
import SignupModal from "./Signup.js"

class ApplicationViews extends Component {
    state = {
        signup: []
    }

    isAuthenticated = () => sessionStorage.getItem('credentials') !== null;

    render() {
        console.log("AppViews render");
        return (
            <React.Fragment>
                <Route exact path="/signup" render={props => {
                    return (
                        <SignupModal {...props} users={this.state.users} addUser={this.addUser} />
                    );
                }}></Route>
            </React.Fragment>
        )
    }
}

export default withRouter(ApplicationViews);
