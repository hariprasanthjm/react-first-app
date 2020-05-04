import React, { Component } from 'react';
import styles from './TableList.module.css';
import axios from 'axios';
const API_URL = 'http://jsonplaceholder.typicode.com';

class TableList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      columnName: []
    };
    console.log('INSIDE CONSTRUCTOR');
  }

  testDriver = val => {
    console.log('CLick event', val);
    this.setState({ money: val });
  };

  componentDidMount() {
    console.log('componentDidMount');
    const url = `${API_URL}/users/`;
    axios
      .get(url)
      .then(response => response.data)
      .then(data => {
        if (data.length > 0) {
          this.setState({ columnName: Object.keys(data[0]) });
        }
        this.setState({ users: data });
        console.log(this.state.users);
      });
  }
  componentDidUpdate() {
    console.log('Did Update');
    console.log(this.state);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  displayRowValue = list => {
    return Object.keys(list).map(function(listVal) {
      if (typeof list[listVal] == 'string') return <td>{list[listVal]}</td>;
    });
  };

  render() {
    console.log('INSIDE RENDER');
    return (
      <div className='container'>
        <h2>Basic Table</h2>
        <p>
          The .table class adds basic styling (light padding and horizontal
          dividers) to a table:
        </p>
        <table className='table'>
          <thead>
            <tr>
              {this.state.columnName.map((headerName, i) => (
                <th key={i}>{headerName}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {this.state.users.map(indLists => {
              return <tr>{this.displayRowValue(indLists)}</tr>;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
export default TableList;
