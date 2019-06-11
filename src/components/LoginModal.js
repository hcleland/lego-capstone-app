import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ApiManager from "../modules/ApiManager";
import Navbar from "./nav/Navbar";

export default class LoginModal extends Component {
    state = {
        modal: false,
        userName: "",
        password: ""
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    handleLogin = e => {
        e.preventDefault();

        ApiManager.get(this.state.userName).then(result => {
            console.log("result", result);
            if (result.length > 0) {
                sessionStorage.setItem(
                    "credentials",
                    JSON.stringify({
                        userName: result[0].userName,
                        password: result[0].password,
                        id: result[0].id
                    })
                );
                this.props.history.push("/");
            } else {
                alert("Please sign up");
            }
        });
    }

    render() {
        return (
            <div>
                {/* <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button> */}
                {/* <Button color="danger" onClick={this.toggle}>Sign Up</Button>
                <h1>header</h1> */}
                <Modal isOpen={this.props.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Log In</ModalHeader>
                    <ModalBody>
                        <form className="LoginForm">
                            <div className="form-group">
                                <label htmlFor="user_name">User Name</label>
                                <input
                                    type="text"
                                    required
                                    className="form-control"
                                    onChange={this.handleFieldChange}
                                    id="userName"
                                    placeholder="user name"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    required
                                    className="form-control"
                                    onChange={this.handleFieldChange}
                                    id="password"
                                    placeholder="password"
                                />
                            </div>
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.handleLogin}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}
