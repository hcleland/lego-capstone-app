import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class AlertModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        return (
            <div>
                {/* <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button> */}
                {/* <Button color="danger" onClick={this.toggle}>Sign Up</Button> */}
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

export default AlertModal;
