import { Route } from "react-router-dom";
import { withRouter } from "react-router";
import React, { Component } from "react";
import ApiManager from "../modules/ApiManager";
import Landing from "./landing/Landing";
import SignupForm from "./user/SignupForm";
import LoginForm from "./user/LoginForm";
import Search from "./search/Search";
import SearchResults from "./search/SearchResults";
import SearchDetails from "./search/SearchDetails";
import BuildList from "./buildList/ItemForm";
import BuildItem from "./buildList/BuildItem";


class ApplicationViews extends Component {
    state = {
        signup: [],
        users: [],
        searchResults: [],
        searchDetails: [],
        buildItems: []
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

    getDetails = (details) => {
        ApiManager.getInventory(details)
            .then(results => {
                console.log(results)
                this.setState({
                    searchDetails: results.results
                })
            });
    }

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
                    buildItems: newItem
                });
                console.log("new item", item);
                // sessionStorage.setItem(
                //     "userID", user.id
            })
    };

    updateItem = (editedListObject) => {
        return ApiManager.updateListItem(editedListObject)
            .then(() => ApiManager.getAllItems())
            .then(buildItems => {
                this.props.history.push("/buildItems");
                this.setState({
                    buildItems: buildItems
                })
            })
    };

    componentDidMount() {
        const newState = {};
        ApiManager.getAllItems()
            .then(items => {
                console.log("items", items);
                newState.buildItems = items
            })
            .then(() => this.setState(newState))
    }


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
                    return <SearchResults searchResults={this.state.searchResults} getDetails={this.getDetails} addItem={this.addItem} {...props} />
                }} />
                <Route exact path="/searchDetails" render={(props) => {
                    return <SearchDetails searchDetails={this.state.searchDetails} getDetails={this.getDetails} {...props} />
                }} />
                <Route exact path="/buildItems" render={(props) => {
                    return <BuildList buildItems={this.state.buildItems} addItem={this.addItem} saveBuildItem={this.saveBuildItem} getAllItems={this.getAllItems} {...props} searchResults={this.state.searchResults} />
                }} />
                <Route exact path="/buildList/:buildItemId(\d+)/edit" render={props => {
                    return <BuildItem {...props} buildItems={this.state.buildItems} updateItem={this.updateItem} />
                }}
                />
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
