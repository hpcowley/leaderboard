import React from 'react';
import {
  Toolbar,
  ToolbarGroup,
  ToolbarSeparator,
  ToolbarTitle,
} from 'material-ui/Toolbar';
import { 
  RaisedButton,
  Paper 
} from 'material-ui';
import AddIcon from 'material-ui/svg-icons/content/add'
import RemoveIcon from 'material-ui/svg-icons/content/remove'
import {
  fullWhite
} from 'material-ui/styles/colors'

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
            <TaskCounter
              key={taskname}
              taskname={taskname}
              value={props.instanceCounts[taskname]}
              quota={props.instanceQuotas[taskname]}
              onIncrement={props.onIncrement}
              onDecrement={props.onDecrement}
            />
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


const counterStyle = {
  padding: 15,
  height: 50,
  margin: 0,
  textAlign: 'center',
}


export const TaskCounter = (props) => (
  <ToolbarGroup>
    <Paper style={counterStyle}>
      {props.taskname} - {props.quota > 0 ? props.value : "N/A"}
    </Paper>
    <div style={{width: 50, height: 50}}>
      <RaisedButton
        style={{margin: 0, height: 25, width: 25}}
        primary={true}
        icon={<AddIcon color={fullWhite} />}
        onTouchTap={() => props.onIncrement(props.taskname)}
        disabled={props.quota === 0}
      />
      <RaisedButton
        style={{margin: 0, height: 25, width: 25}}
        secondary={true}
        icon={<RemoveIcon color={fullWhite} />}
        onTouchTap={() => props.onDecrement(props.taskname)}
        disabled={props.quota === 0}
      />
    </div>
  </ToolbarGroup>
);


const completionStyle = {
  paddingLeft: 20,
  paddingRight: 20,
  height: 50,
  margin: -25,
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