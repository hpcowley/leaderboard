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
import Toggle from 'material-ui/Toggle';

const data = [
  {
    name: '',
    syn: 0,
    trace: 0,
  }
]

const paperStyle = {
  height: 'auto',
  width: 'auto',
  margin: 20,
}

export default class LeaderBoard extends Component {
  state = {
    stripedRows: true,
    selectable: false,
  }
  render() {
    return (
      <div>
        <Paper
          style={paperStyle}
          zDepth={0}
        >
          <Table fixedHeader={true}>
            <TableHeader
              displaySelectAll={false}
              adjustForCheckbox={false}
            >
              <TableRow>
                <TableHeaderColumn>Name</TableHeaderColumn>
                {
                  this.props.tasks.map(taskname => 
                    <TableHeaderColumn>{taskname}</TableHeaderColumn>
                )}
                {
                  Object.keys(this.props.instanceQuotas).map(quota =>
                    <TableHeaderColumn>% of {quota} Quota</TableHeaderColumn>
                )}
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
              <TableRow>
                <TableRowColumn>
                </TableRowColumn>
              </TableRow>
            </TableBody>
          </Table>
        </Paper>
      </div>
    )
  }
}

