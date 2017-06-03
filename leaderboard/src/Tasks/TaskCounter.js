import React from 'react';

import { ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import AddIcon from 'material-ui/svg-icons/content/add';
import RemoveIcon from 'material-ui/svg-icons/content/remove';
import Popover, { PopoverAnimationVertical } from 'material-ui/Popover';
import { FlatButton, RaisedButton, IconButton, Paper } from 'material-ui';

import getMuiTheme from 'material-ui/styles/getMuiTheme';

const theme = getMuiTheme();


export default class TaskCounter extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false,
      value: props.value,
    };

    this.quotaExists = props.quota > 0;
    this.enableCounter = props.quota >= 0;
  }


  handleButton = (event) => {
    this.setState({
      menuOpen: true,
      anchorElement: event.currentTarget,
    });
  };


  handleRequestClose = (event) => {
    this.setState({
      menuOpen: false,
    });
  };


  handleIncrement = () => {
    this.setState(state => ({
      value: state.value + 1,
      menuOpen: false,
    }));
  };


  handleDecrement = () => {
    this.setState(state => ({
      value: state.value - 1,
      menuOpen: false,
    }));
  };


  render() {

    const iconStyle = {
      width: 48,
      height: 48,
    };

    return (
      <div>
        <FlatButton
          label={this.enableCounter ? `${this.state.value}` : "N/A"}
          onTouchTap={this.handleButton}
          disabled={!this.enableCounter}
        />
        <Popover
          open={this.state.menuOpen}
          animation={PopoverAnimationVertical}
          anchorEl={this.state.anchorElement}
          anchorOrigin={{ horizontal: 'middle', vertical: 'bottom' }}
          targetOrigin={{ horizontal: 'middle', vertical: 'top' }}
          onRequestClose={this.handleRequestClose}
        >
          <Paper style={{ height: 50 }} zDepth={2}>
            <IconButton
              style={iconStyle}
              onTouchTap={this.handleIncrement}
              touchRippleColor={theme.palette.primary1Color}
            >
              <AddIcon color={theme.palette.primary1Color} />
            </IconButton>
            <IconButton
              style={iconStyle}
              disabled={this.state.value === 0}
              onTouchTap={this.handleDecrement}
              touchRippleColor={theme.palette.accent1Color}
            >
              <RemoveIcon color={theme.palette.accent1Color} />
            </IconButton>
          </Paper>
        </Popover>
      </div>
    );
  }
}
