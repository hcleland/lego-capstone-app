import React, { Component } from "react";
// import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./nav/Navbar";
import ApplicationViews from "./ApplicationViews";

class Lego extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <ApplicationViews />
            </React.Fragment>
        )
    }
}

export default Lego