import React from 'react';
import MaterialAppBar from 'material-ui/AppBar';
//import FlatButton from 'material-ui/FlatButton';
import StartDialog from './StartScreen.js';


const AppBar = () => (
  <MaterialAppBar title="CIRCUIT 2017 Leaderboard"
    showMenuIconButton={false}
    iconElementRight={
      <StartDialog />
    }
  />
);

export default AppBar;

