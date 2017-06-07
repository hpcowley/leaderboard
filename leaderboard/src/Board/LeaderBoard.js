import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import BoardControl from './BoardControl.js';

const styles = {
  paperStyle: {
    height: 'auto',
    width: 'auto',
    margin: 20,
  },
  controlStyle: {
    width: 200,
    overflow: 'hidden',
    margin: '20px'
  },
  barStyle: {
    width: '50px',
    float: 'right',
    marginLeft: 'auto',
  },
  bdiv: {
    padding: 40,
  }
}

export const LeaderBoard = (props) => (
  <div>
    <div style={styles.bdiv}>
      <BoardControl />
    </div>
    <Paper
      style={styles.paperStyle}
      zDepth={0}
    >
      <Table
        fixedHeader={true}
        selectable={false}
      >
        <TableHeader
          displaySelectAll={false}
          adjustForCheckbox={false}
        >
          <TableRow>
            <TableHeaderColumn>Rank</TableHeaderColumn>
            <TableHeaderColumn>Name</TableHeaderColumn>
            {
              props.tasks.map(taskname =>
                <TableHeaderColumn>{taskname}</TableHeaderColumn>
              )}
            {
              Object.keys(props.instanceQuotas).map(quota =>
                <TableHeaderColumn>% of {quota} Quota</TableHeaderColumn>
              )}
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          <TableRow>
            <TableRowColumn>{props.ranking}</TableRowColumn>
            <TableRowColumn>{props.displayname}</TableRowColumn>
            {
              Object.values(props.instanceCounts).map(count =>
                <TableRowColumn>{count}</TableRowColumn>
              )}
            {
              Object.keys(props.instanceCounts).map(count =>
                <TableRowColumn>
                  {props.instanceQuotas[count] > 0 ? `${((props.instanceCounts[count] / props.instanceQuotas[count]) * 100).toFixed(2)}%` : "N/A"}
                </TableRowColumn>
              )}
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  </div>
)

