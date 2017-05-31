import React from 'react';
import TextField from 'material-ui/TextField';

export default class TextFieldExampleControlled extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  formType = (props) => {
      return {props};
  }

  render() {
    return (
      <div>
        <TextField
          id="text-field-controlled"
          value={this.state.value}
          hintText={this.props.type}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}