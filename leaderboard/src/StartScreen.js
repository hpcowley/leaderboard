import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import Form from './Form.js'

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
export default class StartDialog extends React.Component {
  state = {
    open: true,
  };

  /*const { boardID, usr, pwd } = this.state;
  const isEnabled =
    boardID.length > 0 && usr.length > 0 && pwd.length > 0;
  this.setState({disabled: !isEnabled});*/

  /*handleOpen = () => {
    this.setState({open: true});
  };*/

  handleClose = () => {
    this.setState({open: false});
  };

  handleTextReq = (a, b, c) => {
    if(a && b && c) {
      this.setState({disabled: false});
    }
  };

  render() {
    const actions = [
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
    const boardName = <Form type="Board Name" />;
    const username = <Form type="Username" />;
    const pwd = <Form type="Password" />;
    return (
      <div>
        <RaisedButton label="Modal Dialog" onTouchTap={this.handleOpen} />
        <Dialog
          title="Join Your Board"
          actions={actions}
          modal={true}
          open={this.state.open}
        >
          {boardName}
          {username}
          {pwd}
          <Divider />
        </Dialog>
      </div>
    );
  }
}