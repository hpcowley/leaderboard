import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/RaisedButton';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

export default class ControlledSubmitForm extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: '',
    };
  }

  handleChange = (event) => {
    const usr = event.target.value
    this.setState({
      value: event.target.value,
    });
  };
  
  render() {
    const {usr} = this.state;
    const {pwd} = this.state;
    return (
      <div>
      <ValidatorForm
          ref="form"
      >
        <TextValidator
          floatingLabelText="Username"
          onChange={this.handleChange}
          name="usr"
          value={usr}
          validators={['required']}
          errorMessages={['this field is required']}         
        />
        <TextValidator
          floatingLabelText="Password"
          onChange={this.handleChange}
          name="pwd"
          value={pwd}
          validators={'required'}
          errorMessages={['this field is required']}         
        />
      </ValidatorForm>
      </div>
    );
  }
}