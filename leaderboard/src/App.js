import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import './Fonts.css';
import AppBar from './appBar';
import TableExampleSimple from './table';
import Options from './flatOptions';
import StartDialogue from './StartScreen';

import { TaskControlBar } from './ControlBar';

// Set up requirement for Material UI
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


const props = {
  username: "Devin Hill",
  ranking: 1,
  tasks: ['Synapses', 'Tracing'],
  counts: {
    Synapses: 3,
    Tracing: 12,
    daily: 15,
    total: 30,
  },
  quotas: {
    Synapses: 0,
    Tracing: 20,
    daily: 23,
    total: 40,
  }
}

// This would need to become a class in a real application, of course.
// It's just a simple function like this for this demo.
const App = () => (
  <MuiThemeProvider className="App">
    <div>
      <AppBar />
      <StartDialogue />
      <TaskControlBar
        {...props}
        onClick={i => console.log(`${i}`)}
        ranking={1}
      />
    </div>
  </MuiThemeProvider>
);



/*
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
*/

/*
should toggle between three options: view as current
count, view as percent of quota, view as all time count
*/

/*
class Board extends Component {
  render() {
    return (
      <TableExampleSimple />
    );
  }
}
*/

export default App;
