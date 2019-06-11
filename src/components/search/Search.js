import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ApiManager from '../../modules/ApiManager';
import { Form, FormGroup, Col, Button, Input, Label } from "reactstrap";
import "./searchForm.css";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: []
        }
    };

    searchAlternateBuilds = (input) => {
        return ApiManager.search(input)
            .then(results => {
                this.setState({
                    input: input
                })
                console.log("input results", results)
            })
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] =
            evt.target.value;
        this.setState(stateToChange);
    };

    componentDidMount() {
        const newState = {};
        ApiManager.search("input")
            .then(input => newState.input = input)
            .then(() => this.setState(newState))
    }
    render() {

        return (
            <React.Fragment>
                <div className="searchForm">
                    <Form>
                        <Label for="userName" sm={4}>Lego Set Number</Label>
                        <Col sm={10}>
                            <Input type="text" required name="userName" onChange={this.handleFieldChange} id="userName" placeholder="31088-1" />
                        </Col>
                        <Label for="userName" sm={4}><Button onClick={this.searchAlternateBuilds} color="success">Search</Button></Label>
                        {/* <FormGroup check row>
                            <Col sm={{ size: 10, offset: 2 }}>
                                <Button onClick={this.handleLogin}>Submit</Button>
                            </Col>
                        </FormGroup> */}
                    </Form>
                    <div>
                        <h1>Search Results here</h1>
                        <section className="searchResults">
                            <h1>Search Results</h1>
                            {this.props.results.map(result => (
                                <div key={result.id} className="result_card">
                                    <h2>key={result.name}</h2>
                                    <button>detail</button>
                                </div>
                            ))}
                        </section>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Search;