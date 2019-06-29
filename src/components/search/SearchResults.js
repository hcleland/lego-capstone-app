import React, { Component } from 'react';
import "./searchForm.css";
import "./searchResults.css";
import BuildItem from "../buildList/BuildItem";
import { Form, Label, Col, Input, Button } from "reactstrap";

class SearchResults extends Component {
    state = {
        mocName: "",
        mocNumber: "",
        disabled: false
    };

    addItem = evt => {
        evt.preventDefault()
        const newItem = {
            id: this.props.match.params.buildItemId,
            mocName: this.state.mocName,
            mocNumber: this.state.mocNumber
        };

        this.props.addListItem(newItem)
    }

    render() {
        return (
            <Form>
                {/* <div className="searchForm">
                    <Label for="inputSet" sm={4}>Lego Set Number</Label>
                    <Col sm={10}>
                        <Input type="text" required name="inputSet" onChange={this.handleFieldChange} id="searchInput" placeholder="" />
                    </Col>
                    <Label for="search" sm={4}><Button onClick={this.props.getSearchResults} tag={Link} to="/searchResults" color="success">Search</Button></Label>
                    <Label for="search" sm={4}><Button onClick={() => this.props.getSearchResults(this.state.searchInput)} tag={Link} to="/searchResults" color="success">Search</Button></Label>
                </div> */}
                <div>
                    <h1>Search Results for Lego Set Number: {this.props.searchedSet}</h1>
                    {
                        this.props.searchResults.map((result) => {
                            return <BuildItem key={result.set_num} result={result} {...this.props} />
                        })
                    }

                </div>
            </Form>
        )
    }
}

export default SearchResults;