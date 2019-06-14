import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ApiManager from '../../modules/ApiManager';
import "./searchForm.css";
import SearchResults from "./SearchResults"
import {
    Form, Col, Button, Input, Label, CardDeck, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,
} from "reactstrap";
import { Link } from "react-router-dom";

class Search extends Component {
    state = {
        searchInput: " ",
        // moc: [{ id: 1, color: { name: 'blue' } }]
    };

    // getInventory = (mocId) => {
    //     ApiManager.getInventory(mocId)
    //         .then(results => {
    //             console.log("results", results)
    //             this.setState({ moc: results.results })
    //         })
    // };


    handleFieldChange = evt => {
        console.log("evt", evt)
        console.log("state", this.state.searchInput)
        // this.setState({ input: evt.target.value });
        const stateToChange = {};
        stateToChange[evt.target.id] =
            evt.target.value;
        this.setState(stateToChange);
    };



    render() {
        return (
            <React.Fragment>

                <Form>
                    <div className="searchForm">
                        <Label for="userName" sm={4}>Lego Set Number</Label>
                        <Col sm={10}>
                            <Input type="text" required name="userName" onChange={this.handleFieldChange} id="searchInput" placeholder="31088-1" />
                        </Col>
                        {/* <Label for="search" sm={4}><Button onClick={this.props.getSearchResults} tag={Link} to="/searchResults" color="success">Search</Button></Label> */}
                        <Label for="search" sm={4}><Button onClick={() => this.props.getSearchResults(this.state.searchInput)} tag={Link} to="/searchResults" color="success">Search</Button></Label>
                    </div>
                </Form>
            </React.Fragment>
        )
    }
}

export default Search;