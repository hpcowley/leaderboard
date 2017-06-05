import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
//import TextField from 'material-ui/TextField';
//import Divider from 'material-ui/Divider';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';


export default class StartDialog extends React.Component {

  state = {
    open: false,
    username: undefined,
    password: undefined,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.refs.form.submit();
    alert(event.target.value);
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
    //disabled={true}
    //onTouchTap={this.handleClose}
    />
  ];

  render() {
    const { username, password } = this.state;
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
            onSubmit={this.handleSubmit}
            instantValidate={true}
          >
            <TextValidator
              floatingLabelText="Username"
              onChange={this.handleUsrChange}
              name="username"
              value={username}
              validators={['required']}
              errorMessages={['This field is required']}
            />
            <br />
            <TextValidator
              type="password"
              floatingLabelText="Password"
              onChange={this.handlePwdChange}
              name="password"
              value={password}
              validators={['required']}
              errorMessages={['This field is required']}
            />
            <br />
            <RaisedButton type="submit" label="submit" />
          </ValidatorForm>
        </Dialog>
      </div>
    );
  }
}