import React, { Component } from 'react';
import BuildItem from "../buildList/BuildItem";

class BuildList extends Component {
    render() {
        return (
            <section className="buildList">
                <h2>Build List</h2>
                {
                    this.props.buildItems.map(buildItem =>
                        <div key={buildItem.id}>
                            {buildItem.mocName}
                        </div>)
                }
            </section>
        )
    }
}

export default BuildList