import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import './Fonts.css';
import AppBarFunc from './appBar.js';
import TableExampleSimple from './table.js';
import Options from './flatOptions.js';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App"> 
          <AppBarFunc />
          <div className="Intro">
            <p> This is where you put in some info! </p>
            <p> This is where you select some options! </p>
            <Options />
          </div>
          <Board/>
        </div>
      </MuiThemeProvider>
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
        <TableExampleSimple />
    );
  }
}

export default App;
