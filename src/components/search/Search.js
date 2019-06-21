import React, { Component } from 'react';
import "./searchForm.css";
import {
    Form, Col, Button, Input, Label
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
                        <Label for="inputSet" sm={4}>Lego Set Number</Label>
                        <Col sm={10}>
                            <Input type="text" required name="inputSet" onChange={this.handleFieldChange} id="searchInput" placeholder="" />
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