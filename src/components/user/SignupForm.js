import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import ApiManager from '../../modules/ApiManager';
import "./signupform.css"

export default class SignupForm extends Component {

    // Set initial state
    state = {
        firstLastName: "",
        email: "",
        userName: "",
        password: "",
        currentUser: {}
    };

    addUser = (user) => {
        return ApiManager.post(user)
            .then(newUser => {
                this.setState({
                    currentUser: user
                })
                console.log("new user", newUser);
                // sessionStorage.setItem(
                // this is new below
                // sessionStorage.setItem(
                //     "credentials",
                //     JSON.stringify({
                //         id: user.id,
                //         userName: user.userName,
                //         password: user.password
                //     })
                // )
                // this is new above
                // )
            })
        // .then(() => LoginManager.getAll('users'))
        // .then(newUser => {
        //     this.setState({
        //         currentUser: user
        //     })
        //     console.log("new user", newUser)
        // }
        // )
    }
    // .then(() => this.props.history.push('users'));

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    saveNewUser = evt => {
        evt.preventDefault();
        const user = {
            firstLastName: this.state.firstLastName,
            email: this.state.email,
            userName: this.state.userName,
            password: this.state.password
        };
        console.log("user", user)

        this.addUser(user).then(() => {
            this.props.history.push('/login');
            // return user
        });
    };

    // this.addUser(user).then(() => {
    //     if (user.length > 0) {
    //         sessionStorage.setItem(
    //             'credentials',
    //             JSON.stringify({
    //                 firstLastName: user[0].firstLastName,
    //                 email: user[0].email,
    //                 userName: user[0].userName,
    //                 password: user[0].password
    //             })
    //         );
    //         this.props.history.push('/');
    //     } else {
    //         alert("Please sign up");
    //     }
    // });


    componentDidMount() {
        const newState = {};
        ApiManager.getAll("users")
            .then(users => newState.users = users)
            .then(() => this.setState(newState))
    }

    render() {
        return (
            <React.Fragment>
                <div className="signupForm">
                    <Form>
                        <FormGroup row>
                            <Label for="name" sm={2}>Name</Label>
                            <Col sm={10}>
                                <Input type="text"
                                    required name="name"
                                    onChange={this.handleFieldChange}
                                    id="firstLastName" placeholder="First Last" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="Email" sm={2}>Email</Label>
                            <Col sm={10}>
                                <Input type="email" required name="email"
                                    onChange={this.handleFieldChange}
                                    id="email" placeholder="Email" />
                            </Col>
                        </FormGroup>
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
                                <Button onClick={this.saveNewUser}>Submit</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </React.Fragment>
        );
    }

}


