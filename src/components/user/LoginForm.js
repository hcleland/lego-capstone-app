import React, { Component } from "react";
import ApiManager from '../../modules/ApiManager';
import "./loginform.css"
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class LoginForm extends Component {
    state = {
        userName: "",
        password: ""
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] =
            evt.target.value;
        this.setState(stateToChange);
    };

    handleLogin = e => {
        e.preventDefault();

        ApiManager.get(this.state.userName).then(result => {
            console.log("result", result);
            if (result.length > 0) {
                this.props.setUser(result[0])
                // sessionStorage.setItem(
                //     "credentials",
                //     JSON.stringify({
                //         id: result[0].id,
                //         userName: result[0].userName,
                //         password: result[0].password
                //     })
                // )
                this.props.history.push("/search");
            } else {
                alert("Please sign up");
            }
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className="signupForm">
                    <Form>
                        <FormGroup row>
                            <Label for="userName" sm={2}>User Name</Label>
                            <Col sm={10}>
                                <Input type="text" required name="userName" onChange={this.handleFieldChange} id="userName" placeholder="UserName" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="Password" sm={2}>Password</Label>
                            <Col sm={10}>
                                <Input type="password" required name="password" onChange={this.handleFieldChange} id="password" placeholder="password" />
                            </Col>
                        </FormGroup>
                        <FormGroup check row>
                            <Col sm={{ size: 10, offset: 2 }}>
                                <Button onClick={this.handleLogin} color="primary">Submit</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </React.Fragment>
        )
    }
}