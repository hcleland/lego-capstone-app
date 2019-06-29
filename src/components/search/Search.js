import React, { Component } from 'react';
import "./searchForm.css";
import { Form, Col, FormGroup, Button, Input, Label } from "reactstrap";

class Search extends Component {
    state = {
        searchInput: " ",
        visible: true
    };

    handleFieldChange = evt => {
        console.log("evt", evt)
        // this.setState({ input: evt.target.value });
        const stateToChange = {};
        stateToChange[evt.target.id] =
            evt.target.value;
        this.setState(stateToChange);
        console.log("input state", this.props.searchInput)
    };

    // onDismiss() {
    //     this.setState({
    //         // visible: false,
    //         searchInput: ""
    //     });
    // }


    render() {
        return (
            <React.Fragment>
                <h4 className="searchHeader">Search for other creations to build with bricks from your Lego set</h4>
                <Form inline className="searchForm">
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="inputSet" className="mr-sm-2">Lego Set Number</Label>
                        <Input type="text" required name="inputSet" onChange={this.handleFieldChange} id="searchInput" placeholder="" />
                    </FormGroup>
                    <Label for="search"><Button onClick={() => this.props.getSearchResults(this.state.searchInput)} color="success">Search</Button></Label>
                    {this.props.setNotFound ?
                        <h3 className="alertText">No Results Found. Try Another Set.<img src="https://media.makeameme.org/created/ahhh-i-stepped.jpg" className="alertImg"></img></h3> : null}


                    {/* <div className="searchForm">

                        <Label for="inputSet" sm={4}>Lego Set Number</Label>
                        <Col sm={10}>
                            <Input type="text" required name="inputSet" onChange={this.handleFieldChange} id="searchInput" placeholder="" />
                            <Label for="search" sm={4}><Button onClick={this.props.getSearchResults} tag={Link} to="/searchResults" color="success">Search</Button></Label> */}

                    {/* <Label for="search" sm={4}><Button onClick={() => this.props.getSearchResults(this.state.searchInput)} color="success">Search</Button></Label>
                        </Col>
                        {this.props.setNotFound ? <img src="https://media.makeameme.org/created/ahhh-i-stepped.jpg" className="alertImg"></img> : null}
                    </div> */}
                    {/* 
                    <UncontrolledAlert color="success" className="alert">
                        <h4 className="alert-heading">Well done!</h4>
                        <p>Aww yeah, you successfully read this important alert message. This example text is going
  to run a bit longer so that you can see how spacing within an alert works with this kind
                                              of content.</p>
                        <hr />

                    </UncontrolledAlert> : null} */}
                </Form>
            </React.Fragment >
        )
    }
}

export default Search;