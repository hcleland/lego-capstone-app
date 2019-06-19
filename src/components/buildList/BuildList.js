import React, { Component } from 'react';
import ApiManager from "../../modules/ApiManager"
import { Link } from 'react-router-dom';
import "./BuildList.css";
import ListItem from "./ListItem";

class BuildList extends Component {


    render() {

        return (
            < section >
                {
                    this.props.buildItems.map((buildItem) => {
                        return <ListItem key={buildItem.id} buildItem={buildItem} {...this.props} />
                    })
                }
            </section >
        )
    }
}
export default BuildList