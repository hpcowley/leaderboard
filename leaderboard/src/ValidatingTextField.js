import React from 'react';
import { TextField } from 'material-ui';


/*

type VerifierResult {
  ok: boolean;
  value: string;
}

*/


export function requiredField(event) {
  if (event.target.value === "") {
    return {
      error: true,
      errorText: "This field is required",
    };
  } else {
    return {
      error: false,
      value: event.target.value,
    };
  }
}


export default class ValidatingTextField extends React.Component {

  static defaultProps = {
    
  };


  constructor(props) {
    super(props);

    this.state = {
      error: false,
      value: this.props.value,
      errorText: '',
    };
    
  }

  handleChange = (event) => {
    const value = event.target.value;
    this.setState(checkValidity(value));
    
  };

  checkValidity(val) {
    let result;
    for (let validator of this.props.validators) {
      result = validator(val);
      if (result.error) {
        return result;
      }
    }
    return result;
  }


  render() {
    return (
      <TextField
        value={this.state.value}
        onChange={this.handleChange}
        errorText={this.state.error ? this.state.errorText : ''}
        {...this.props}
      />
    );
  }

}