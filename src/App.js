import React, { Component } from 'react';
import StudentName from './components/StudentName';
import List from './components/List';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data:
        [
          {
            "name": "Abhishek"
          },
          {
            "name": "Saharsh"
          },
          {
            "name": "Ajay"
          }
        ]
    }
  }
  render() {
    return (
      <div>
        <StudentName />
        <ul>
          {this.state.data.map((item) => <List data={item} />)}
        </ul>
      </div>
    );
  }
}

export default App;
