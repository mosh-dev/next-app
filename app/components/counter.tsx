import React, {Component, ReactNode} from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import {Icon} from '@material-ui/core';

export default class Counter extends Component {

  fabStyle = {margin: '0px 18px 4px 8px'};

  private get badgeClasses() {
    let classes = 'badge badge-';
    classes += this.props['counter'].value === 0 ? 'danger' : 'warning';
    return classes;
  }

  render(): ReactNode {
    const {
      counter,
      onDelete,
      onIncrement,
      onDecrement
    } = this.props as any;
    return (
      <div style={{marginBottom: 32}}>
        {this.props.children}
        <span
          style={{fontSize: 18, marginRight: 12}}
          className={this.badgeClasses}>{counter.value}
        </span>

        <Fab
          onClick={() => onIncrement(counter)}
          size="small"
          color="primary"
          style={this.fabStyle}>
          <AddIcon/>
        </Fab>
        <Fab
          onClick={() => onDecrement(counter)}
          size="small"
          style={this.fabStyle}>
          <RemoveIcon/>
        </Fab>
        <Fab
          color="secondary"
          onClick={() => onDelete(counter)}
          size="small"
          style={this.fabStyle}>
          <Icon>delete_forever</Icon>
        </Fab>
      </div>
    );
  }
}
