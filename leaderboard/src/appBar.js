import React from 'react';
import MaterialAppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

var button = <FlatButton /> 
const AppBar = () => (
  <MaterialAppBar title="CIRCUIT 2017 Leaderboard"
    //iconClassNameRight="muidocs-icon-navigation-expand-more"
    showMenuIconButton={false}
    iconElementRight={
      <FlatButton 
        label="Login"
      />
    }
  />
);

export default AppBar;

