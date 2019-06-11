import { Route, Redirect } from "react-router-dom";
import { withRouter } from "react-router";
import React, { Component } from "react";
import Navbar from "./nav/Navbar";
import ApiManager from "../modules/ApiManager";
import Landing from "./landing/Landing";
import SignupForm from "./user/SignupForm";
import LoginForm from "./user/LoginForm";
import Search from "./search/Search";

class ApplicationViews extends Component {
    state = {
        signup: [],
        users: []
    }

    isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

    render() {
        console.log("AppViews render");
        return (
            <React.Fragment>
                <Route exact path="/" component={Landing} />
                <Route exact path="/signup" component={SignupForm} />
                <Route exact path="/login" component={LoginForm} />
                <Route exact path="/search" component={Search} />
                {/* <Route path="/" render={props => {
                    if (this.isAuthenticated()) {
                        return (
                            <Landing {...props}
                                currentUser={this.props.currentUser}
                            />
                        );
                    } else {
                        return <Redirect to="/" />
                    }
                }}
                />
                <Route exact path="/signup" render={props => {
                        return (
                            <SignupModal {...props} users={this.state.users} addUser={this.addUser} />
                        );
                    }
                }}
                /> */}
            </React.Fragment>
        )
    }
}


export default withRouter(ApplicationViews);
