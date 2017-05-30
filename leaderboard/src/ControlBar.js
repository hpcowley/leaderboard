import React from 'react';
import {
  Toolbar,
  ToolbarGroup,
  ToolbarSeparator,
  ToolbarTitle,
} from 'material-ui/Toolbar';
import { RaisedButton, Paper } from 'material-ui';
import PlusOneIcon from 'material-ui/svg-icons/image/exposure-plus-1';


export const TaskControlBar = (props) => (
  <Toolbar style={{height:70, display:'block'}}>
    <ToolbarGroup>
      <ToolbarTitle text={props.username} />
      <ToolbarSeparator />
        {   
          props.tasks.map(taskName => (
            <TaskCounter
              key={taskName}
              taskName={taskName}
              value={props.counts[taskName]}
              quota={props.quotas[taskName]}
              onClick={() => props.onClick(taskName)}
            />
          ))
        }
      <ToolbarSeparator />
        {
          props.tasks.map(taskName => (
            <TaskPercentageCompletionDisplay
              className="IndividualQuotaCompletionDisplay"
              key={taskName}
              taskName={taskName}
              quota={props.quotas[taskName]}
              value={props.counts[taskName]}
            />
          ))
        }
      <TaskPercentageCompletionDisplay
        className="DailyQuotaCompletionDisplay"
        taskName="Daily Quota"
        quota={props.quotas.daily}
        value={props.counts.daily}
      />
      <TaskPercentageCompletionDisplay
        className="TotalQuotaCompletionDisplay"
        taskName="Total Quota"
        quota={props.quotas.total}
        value={props.counts.total}
      />
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
      {props.taskName} - {props.quota > 0 ? props.value : "N/A"}
    </Paper>
    <RaisedButton
      style={{margin: 0, height: 50}}
      primary={true}
      icon={<PlusOneIcon/>}
      onTouchTap={props.onClick}
      disabled={props.quota === 0}
    />
  </ToolbarGroup>
);


const completionStyle = {
  paddingLeft: 20,
  paddingRight: 20,
  height: 50,
  margin: 0,
  textAlign: 'center',
}


export const TaskPercentageCompletionDisplay = (props) => (
  <Paper style={completionStyle}>
    <p>{props.taskName} - {props.quota > 0 ? `${((props.value / props.quota)*100).toFixed(2)}%` : "N/A"}</p>
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