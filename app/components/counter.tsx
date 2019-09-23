import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import {Icon} from '@material-ui/core';


export const Counter = (props) => {

  const {counter, onDelete, onIncrement, onDecrement} = props;

  const fabStyle = {margin: '0 18px 10px 0'};
  const counterStyle = {fontSize: 18, marginRight: 32, minWidth: 200};
  const badgeClasses = `badge badge-${counter.value === 0 ? 'danger' : 'warning'}`;


  return (
    <div style={{marginBottom: 32}}>
      {props.children}
      <span style={counterStyle} className={badgeClasses}>
        {counter.value}
      </span>

      <Fab
        onClick={() => onIncrement(counter)}
        size="small"
        color="primary"
        style={fabStyle}>
        <AddIcon/>
      </Fab>
      <Fab
        onClick={() => onDecrement(counter)}
        size="small"
        style={fabStyle}>
        <RemoveIcon/>
      </Fab>
      <Fab
        color="secondary"
        onClick={() => onDelete(counter)}
        size="small"
        style={fabStyle}>
        <Icon>delete_forever</Icon>
      </Fab>
    </div>
  );
};
