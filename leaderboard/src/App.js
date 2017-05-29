import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import './Fonts.css';
import AppBarFunc from './appBar.js';
import TableExampleSimple from './table.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <AppBarFunc />
        </MuiThemeProvider>
        <Board/>
      </div>
    );
  }
}

/*
should toggle between three options: view as current
count, view as percent of quota, view as all time count
*/

class Board extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <TableExampleSimple />
      </MuiThemeProvider>
    );
  }
}

export default App;
