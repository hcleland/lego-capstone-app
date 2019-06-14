import React, { Component } from 'react';
import ApiManager from '../../modules/ApiManager';

class SearchDetail extends Component {

    render() {
        console.log("this.props.searchResult", this.props.searchResult)
        return (
            <>
                <p>Hello</p>
                {this.props.searchResult.map(brick => (
                    <div key={brick.id}>
                        <p>Id: {brick.id} - color: {brick.color.name}</p>
                    </div>
                ))}
            </>
        )
    }
}
export default SearchDetail