import React, { Component } from 'react';

class List extends React.Component {
    render() {
        return (
            <ul>
                <li>{this.props.data.name}</li>
            </ul>
            // <h7>{this.props.data.name}</h7>
        );
    }
}

export default List;
