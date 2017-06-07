import React, { Component } from 'react';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import SortIcon from 'material-ui/svg-icons/content/sort'
import Popover from 'material-ui/Popover';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

const barStyle = {
  width: '50px',
  float: 'right',
  marginLeft: 'auto',
};

export default class BoardControl extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      value: "1",
    }
  }

  handleTouchTap = (event) => {
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.target,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  handleMenuSelect = (event, child) => {
    this.state.value = child.props.value
  }

  render() {
    return (
      <Toolbar
        style={{
          width: 200,
          height: 30,
          float: 'right',
        }}
      >
        <ToolbarTitle text="Tools"
          style={{
            fontSize: 20
          }}
          align="center" />

        <ToolbarGroup style={barStyle}>
          <IconMenu
            iconButtonElement={
              <IconButton>
                <SortIcon
                  onTouchTap={this.handleTouchTap}
                />
              </IconButton>
            }
            value={this.state.value}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            targetOrigin={{ horizontal: 'right', vertical: 'top' }}
            onItemTouchTap={this.handleMenuSelect}
          >
            <MenuItem
              primaryText="Ascending Rank"
              value="1"
            />
            <MenuItem
              primaryText="Descending Rank"
              value="2"
            />
          </IconMenu>
        </ToolbarGroup>
      </Toolbar>
    )
  }
};