import React from 'react';
import {
  Toolbar,
  ToolbarGroup,
  ToolbarSeparator,
  ToolbarTitle,
} from 'material-ui/Toolbar';
import {
  FlatButton,
  RaisedButton,
  IconButton,
  Paper,
} from 'material-ui';
import TaskCounter from './Tasks/TaskCounter';


export const TaskControlBar = (props) => (
  <Toolbar style={{
      margin: 10,
      height: 70,
      display: 'block',
      paddingTop: 6,
    }}>
    <ToolbarGroup>
      <ToolbarTitle text={props.displayname} />
      <ToolbarSeparator />
        {     
          props.tasks.map(taskname => (
            <ToolbarGroup>
              <TaskCounter
                key={taskname}
                taskname={taskname}
                value={props.instanceCounts[taskname]}
                quota={props.instanceQuotas[taskname]}
                onIncrement={props.onIncrement}
                onDecrement={props.onDecrement}
              />
            </ToolbarGroup>
          ))
        }
      <ToolbarSeparator />
        {
          props.tasks.map(taskname => (
            <TaskPercentageCompletionDisplay
              key={taskname}
              taskname={`Daily ${taskname}`}
              quota={props.instanceQuotas[taskname]}
              value={props.instanceCounts[taskname]}
            />
          ))
        }
        {
          props.tasks.map(taskname => (
            <TaskPercentageCompletionDisplay
              key={taskname}
              taskname={`Total ${taskname}`}
              quota={props.totalQuotas[taskname]}
              value={props.totalCounts[taskname]}
            />
          ))
        }
      <ToolbarSeparator />
      <TaskRanking
        user={props.username}
        rank={props.ranking}
      />     
    </ToolbarGroup>
  </Toolbar>
);


const completionStyle = {
  paddingLeft: 20,
  paddingRight: 20,
  height: 50,
  textAlign: 'center',
}


export const TaskPercentageCompletionDisplay = (props) => (
  <Paper style={completionStyle}>
    <p>{props.taskname} - {props.quota > 0 ? `${((props.value / props.quota)*100).toFixed(2)}%` : "N/A"}</p>
  </Paper>
);


export const TaskRanking = (props) => (
  <ToolbarGroup>
    <ToolbarTitle
      className={props.className || "TaskRanking"} 
      text={`#${props.rank}`}
    />
  </ToolbarGroup>
)

export default TaskControlBar;