import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import Navbar from "./nav/Navbar";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ApiManager from "../modules/ApiManager";
import Landing from "./landing/Landing";
import ApplicationViews from "./ApplicationViews";

class SignUpModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            firstLastName: "",
            email: "",
            userName: "",
            password: ""
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    addUser = (user) => {

        return ApiManager.post(user)
            .then(newUser => {
                this.setState({
                    currentUser: user
                })
                console.log("new user", newUser);
                sessionStorage.setItem(
                    "userID", newUser.id
                )
            }
            )

    }

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    }

    saveNewUser = evt => {
        evt.preventDefault();
        const user = {
            firstLastName: this.state.firstLastName,
            email: this.state.email,
            userName: this.state.userName,
            password: this.state.password
        };
        console.log("user", user)
        //todo
        this.addUser(user).then(() => this.props.history.push("/"));
        return user
    };

    componentDidMount() {
        const newState = {};
        ApiManager.getAll("users")
            .then(users => newState.users = users)
            .then(() => this.setState(newState))
    }

    render() {
        return (
            <div>
                {/* <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button> */}
                <Button color="danger" onClick={this.toggle}>Sign Up</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>New User Sign Up</ModalHeader>
                    <ModalBody>
                        <form className="SignupForm">
                            <div className="form-group">
                                <label htmlFor="user_name">Name</label>
                                <input
                                    type="text"
                                    required
                                    className="form-control"
                                    onChange={this.handleFieldChange}
                                    id="firstLastName"
                                    placeholder="FIRST LAST"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="user_email">Email</label>
                                <input
                                    type="email"
                                    required
                                    className="form-control"
                                    onChange={this.handleFieldChange}
                                    id="email"
                                    placeholder="Name@Mail.com"
                                />
                            </div>
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
                        <Button color="primary" onClick={this.saveNewUser}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default SignUpModal;
