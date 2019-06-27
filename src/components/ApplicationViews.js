import { Route } from "react-router-dom";
import { withRouter } from "react-router";
import React, { Component } from "react";
import { Alert } from 'reactstrap';
import ApiManager from "../modules/ApiManager";
import Landing from "./landing/Landing";
import SignupForm from "./user/SignupForm";
import LoginForm from "./user/LoginForm";
import Search from "./search/Search";
import SearchResults from "./search/SearchResults";
import SearchDetails from "./search/SearchDetails";
import BuildList from "./buildList/BuildList";
import BuildItem from "./buildList/BuildItem";
// import AlertModal from "./search/AlertModal"
// import ListItem from "./buildList/ListItem";
// import BrickPic from "./search/BrickPic";


class ApplicationViews extends Component {
    state = {
        signup: [],
        users: [],
        searchResults: [],
        searchDetails: [],
        buildItems: [],
        currentUser: {},
    };



    isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

    getSearchResults = (searchInput) => {
        ApiManager.getAlternate(searchInput)
            .then(results => {
                if (results.count === 0) {
                    //                 return (
                    //                     <Alert color="success">
                    //                         <h4 className="alert-heading">Well done!</h4>
                    //                         <p>Aww yeah, you successfully read this important alert message. This example text is going
                    //   to run a bit longer so that you can see how spacing within an alert works with this kind
                    //       of content.</p>
                    //                         <hr />
                    //                         <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
                    //                     </Alert>
                    //                 )
                    alert("none found")

                } else {
                    this.setState({
                        searchResults: results.results
                    })
                    this.props.history.push("/searchResults")
                };
                console.log("SEARCH RESULTS", results);
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
    };

    getBuildItems = () => {
        const user = JSON.parse(sessionStorage.getItem("credentials"))
        ApiManager.getAllItemsById(user.id)
            .then(results => {
                this.setState({
                    buildItems: results
                });
                console.log("results", results);
                console.log("current user", this.props.currentUser)
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
                    buildItems: newItem
                });
                console.log("new item from app views", item);
                // sessionStorage.setItem(
                //     "userID", user.id
            })
    };

    updateItem = (editedListObject) => {
        const user = JSON.parse(sessionStorage.getItem("credentials"))
        return ApiManager.updateListItem(editedListObject)
            .then(() => ApiManager.getAllItemsById(user.id))
            .then(buildItems => {
                this.props.history.push("/buildItems");
                this.setState({
                    buildItems: buildItems
                })
            })
    };

    deleteItem = (id) => {
        const newState = {};
        ApiManager.deleteListItem(id)
            .then(ApiManager.getAllItems)
            .then(buildItems => {
                console.log("build Items", buildItems);
                newState.buildItems = buildItems
            })
            .then(() => {
                this.props.history.push("/buildItems")
                this.setState(newState)
            })
    };

    // updateItem = (updatedItem) => {
    //     console.log(updatedItem.id)
    //     return ApiManager.updateListItem(updatedItem)
    //         .then(() => ApiManager.getAllItems())
    //         .then(buildItems => {
    //             this.setState({
    //                 buildItems: buildItems
    //             })
    //             this.props.history.push("/buildItems");
    //         })
    // };

    componentDidMount() {
        // const newState = {};

        // ApiManager.getAllItems()
        //     .then(items => {
        //         console.log("items", items);
        //         newState.buildItems = items
        //     })
        // .then(() => this.setState(newState))
    }

    render() {
        // console.log("AppViews render");
        return (
            <React.Fragment>
                <Route exact path="/" component={Landing} />
                <Route exact path="/signup" component={SignupForm} />
                <Route exact path="/login" render={(props) => {
                    return <LoginForm setUser={this.props.setUser} {...props} />
                }} />
                <Route exact path="/search" render={(props) => {
                    return (
                        <>
                            <Search getSearchResults={this.getSearchResults} {...props} />
                        </>
                    )
                }} />
                <Route exact path="/searchResults" render={(props) => {
                    return (
                        <>
                            <SearchResults searchResults={this.state.searchResults} getDetails={this.getDetails} addItem={this.addItem} getBuildItems={this.getBuildItems} {...props} />
                        </>
                    )
                }} />
                <Route exact path="/searchDetails" render={(props) => {
                    return (
                        <>
                            <SearchDetails searchDetails={this.state.searchDetails} getDetails={this.getDetails} {...props} />
                        </>
                    )
                }} />
                <Route path="/buildItems" render={props => {
                    return (
                        <>
                            <BuildList {...props} buildItems={this.state.buildItems} getBuildItems={this.getBuildItems} deleteItem={this.deleteItem} updateItem={this.updateItem} />
                            {/* <ListItem {...props} buildItems={this.state.buildItems} getBuildItems={this.getBuildItems} /> */}
                        </>
                    )
                }}
                />
                <Route exact path="/buildItems/:buildItemId(\d+)/edit" render={props => {
                    return <BuildItem {...props} buildItems={this.state.buildItems} updateItem={this.updateItem} />
                }}
                />
                <Route exact path="/buildItems/:buildItemId(\d+)" render={(props) => {
                    // Find the animal with the id of the route parameter
                    let buildItem = this.state.buildItems.find(buildItem =>
                        buildItem.id === parseInt(props.match.params.buildItemId)
                    )

                    return <BuildList buildItem={buildItem}
                        deleteItem={this.deleteItem} updateItem={this.updateItem} />
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
