import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
export default class StartDialog extends React.Component {
  state = {
    open: true,
    disabled: true,
  };

  /*handleOpen = () => {
    this.setState({open: true});
  };*/

  handleClose = () => {
    this.setState({open: false});
  };

  handleTextReq = (a, b, c) => {
    if(a & b & c) {
      this.setState({disabled: false});
    }
  };

  render() {
    const actions = [
      /*<FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,*/
      <FlatButton
        label="Create New Board"
        secondary={true}
        disabled={false}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Enter Board"
        primary={true}
        //disabled={handleTextReq()}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Modal Dialog" onTouchTap={this.handleOpen} />
        <Dialog
          title="Join Your Board"
          actions={actions}
          modal={true}
          open={this.state.open}
        >
          <TextField
            floatingLabelText="Leaderboard Name"
            errorText="This field is required"
          /><br />
          <TextField
            floatingLabelText="Username"
            errorText="This field is required"
          />
          <TextField
            floatingLabelText="Password"
            errorText="This field is required"
          />
        </Dialog>
      </div>
    );
  }
}