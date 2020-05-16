import React, { Component } from 'react';

class StudentName extends React.Component {
    constructor(props) {
        super(props);
        console.log('hell:', this)
    }
    render() {
        return (
            <div>
                <h1>Student Name Detail {this.props.name}</h1>
            </div>
        );
    }
}

export default StudentName;