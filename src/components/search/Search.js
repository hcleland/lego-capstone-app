import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ApiManager from '../../modules/ApiManager';
import {
    Form, Col, Button, Input, Label, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,
} from "reactstrap";
import "./searchForm.css";
import SearchDetail from "./SearchDetails"

class Search extends Component {
    state = {
        searchResults: [],
        searchInput: " ",
        moc: [{ id: 1, color: { name: 'blue' } }]
    };

    // handleSearch(input) {
    //     if (input.keyCode === 13) {
    //         console.log("handle search - input target value", input.target.value);
    //         this.getSearchResults(input.target.value);
    //     }
    // };

    getSearchResults = () => {
        ApiManager.getAlternate(this.state.searchInput)
            .then(results => {
                this.setState({
                    searchResults: results.results
                });
                console.log("SEARCH RESULTS", results);
                console.log("first result", results.results)
                // return searchResults
            });
    };

    getInventory = (mocId) => {
        ApiManager.getInventory(mocId)
            .then(results => {
                console.log("results", results)
                this.setState({ moc: results.results })
            })
    };


    handleFieldChange = evt => {
        console.log("evt", evt)
        console.log("state", this.state.searchInput)
        // this.setState({ input: evt.target.value });
        const stateToChange = {};
        stateToChange[evt.target.id] =
            evt.target.value;
        this.setState(stateToChange);
    };

    // componentDidMount() {
    //     const newState = {};
    //     ApiManager.search("input")
    //         .then(input => newState.input = input)
    //         .then(() => this.setState(newState))
    // }
    render() {
        console.log("this.state.moc", this.state.moc)
        return (
            <React.Fragment>
                <div className="searchForm">
                    <Form>
                        <Label for="userName" sm={4}>Lego Set Number</Label>
                        <Col sm={10}>
                            <Input type="text" required name="userName" onChange={this.handleFieldChange} id="searchInput" placeholder="31088-1" />
                        </Col>
                        <Label for="userName" sm={4}><Button onClick={this.getSearchResults} color="success">Search</Button></Label>
                    </Form>
                    <div>
                        <h1>Search Results here</h1>
                        <section className="searchResults">
                            {this.state.searchResults.map(result => (
                                <div key={result.id} className="result_card">
                                    <Card>
                                        <CardImg top width="100%" src={result.moc_img_url} alt="Card image cap" />
                                        <CardBody>
                                            <CardTitle><h3>{result.name}</h3></CardTitle>
                                            <CardSubtitle>{result.set_num}</CardSubtitle>
                                            <CardText>
                                                <p>Designed by: {result.designer_name}</p>
                                                <p>Number of bricks used: {result.num_parts}</p></CardText>
                                            <Button onClick={() => this.getInventory(result.set_num)}>Details</Button>
                                        </CardBody>
                                    </Card>
                                </div>
                            ))}
                        </section>
                    </div>
                </div>
                <SearchDetail searchResult={this.state.moc} />
            </React.Fragment>
        )
    }
}

export default Search;