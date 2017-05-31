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
  username: "devinhill",
  displayname: "Devin Hill",
  ranking: 1,
  tasks: ['Synapses', 'Tracing'],
  instanceCounts: {
    Synapses: 3,
    Tracing: 12,
  },
  instanceQuotas: {
    Synapses: 1,
    Tracing: 8
  },
  totalCounts: {
    Synapses: 0,
    Tracing: 20,
  },
  totalQuotas: {
    Synapses: 40,
    Tracing: 20
  },
  onIncrement: i => console.log(`increment ${i}`),
  onDecrement: i => console.log(`decrement ${i}`),
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
      />
    </div>
  </MuiThemeProvider>
);

export default App;
