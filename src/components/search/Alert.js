import React, { Component } from 'react';
import { UncontrolledAlert } from 'reactstrap';
import { Link } from 'react-router-dom';


class Alert extends Component {

    render() {

        return (
            <div>
                {/* {this.props.setNotFound ?
                    <UncontrolledAlert color="success" className="alert">
                        <h4 className="alert-heading">Well done!</h4>
                        <p>Aww yeah, you successfully read this important alert message. This example text is going
  to run a bit longer so that you can see how spacing within an alert works with this kind
                                              of content.</p>
                        <hr />
                        <img src="https://media.makeameme.org/created/ahhh-i-stepped.jpg" className="alertImg"></img>
                    </UncontrolledAlert> : null} */}
                {this.props.setNotFound ?
                    <img src="https://media.makeameme.org/created/ahhh-i-stepped.jpg"></img>
                    : null}
            </div>
        )
    }
}
export default Alert;