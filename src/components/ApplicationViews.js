import { Route, Redirect } from "react-router-dom";
import { withRouter } from "react-router";
import React, { Component } from "react";
import Navbar from "./nav/Navbar";
import ApiManager from "../modules/ApiManager";
import Landing from "./landing/Landing";
import SignupForm from "./user/SignupForm";
import LoginForm from "./user/LoginForm";
import Search from "./search/Search";
import SearchResults from "./search/SearchResults";
import BuildList from "./buildList/BuildList";
import BuildItem from "./buildList/BuildItem";

class ApplicationViews extends Component {
    state = {
        signup: [],
        users: [],
        searchResults: [],
        buildList: []
    }

    isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

    getSearchResults = (searchInput) => {
        ApiManager.getAlternate(searchInput)
            .then(results => {
                this.setState({
                    searchResults: results.results
                });
                console.log("SEARCH RESULTS", results);
                // console.log("first result", results.results)
                // return searchResults
            });
    };

    saveBuildItem = evt => {
        evt.preventDefault();
        const buildItem = {
            userID: this.state.userID,
            mocName: this.state.mocName,
            mocNumber: this.state.mocNumber,
            notes: this.state.notes,
            built: this.state.built
        };
        console.log("build list item", buildItem)

        this.addItem(buildItem).then(() => this.props.history.push('/buildList'));
        // return user
    };

    addItem = (item) => {
        return ApiManager.addListItem(item)
            .then(newItem => {
                this.setState({
                    buildList: item
                });
                console.log("new item", item);
                // sessionStorage.setItem(
                //     "userID", user.id
            })
    };

    render() {
        console.log("AppViews render");
        return (
            <React.Fragment>
                <Route exact path="/" component={Landing} />
                <Route exact path="/signup" component={SignupForm} />
                <Route exact path="/login" component={LoginForm} />
                <Route exact path="/search" render={(props) => {
                    return <Search getSearchResults={this.getSearchResults} {...props} />
                }} />
                <Route exact path="/searchResults" render={(props) => {
                    return <SearchResults searchResults={this.state.searchResults} {...props} />
                }} />
                <Route exact path="/buildList" render={(props) => {
                    return <BuildList buildList={this.state.buildList} addItem={this.addItem} saveBuildItem={this.saveBuildItem} {...props} />
                }} />
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
