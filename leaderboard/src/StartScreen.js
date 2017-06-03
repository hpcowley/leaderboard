import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';


/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
export default class StartDialog extends React.Component {
  state = {
    open: false,
    usr: '',
    pwd: '',
  };

  actions = [
    <FlatButton
      label="Cancel"
      onTouchTap={this.handleClose}
    />,
    <FlatButton
      type="submit"
      label="Enter Board"
      primary={true}
      disabled={true}
      onTouchTap={this.handleClose}
    />
  ];

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleUsrChange = (event) => {
    this.setState({
      usr: event.target.value,
    });
  };
  
  handlePwdChange = (event) => {
    this.setState({
      pwd: event.target.value,
    });
  };

  render() {
    const {usr, pwd} = this.state;
    return (
      <div>
        <RaisedButton label="Login" onTouchTap={this.handleOpen} />
        <Dialog
          title="Join Your Board"
          actions={this.actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
        <ValidatorForm 
          ref="form"
        > 
          <TextValidator
            floatingLabelText="Username"
            onChange={this.handleUsrChange}
            name="usr"
            value={usr}
            validators={['required']}
            errorMessages={['this field is required']}         
          />
          <TextValidator
            type="password"
            floatingLabelText="Password"
            onChange={this.handlePwdChange}
            name="pwd"
            value={pwd}
            validators={'required'}
            errorMessages={['this field is required']}         
        />
      </ValidatorForm>
        </Dialog>
      </div>
    );
  }
}