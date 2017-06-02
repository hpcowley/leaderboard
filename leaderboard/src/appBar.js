import React from 'react';
import MaterialAppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import StartDialog from './StartScreen.js';

var button = <FlatButton /> 
const AppBar = () => (
  <MaterialAppBar title="CIRCUIT 2017 Leaderboard"
    //iconClassNameRight="muidocs-icon-navigation-expand-more"
    showMenuIconButton={false}
    iconElementRight={
      <StartDialog />
    }
  />
);

export default AppBar;

