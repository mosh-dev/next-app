import React, {Component, ReactNode} from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import {Icon} from '@material-ui/core';

export default class Counter extends Component {
  initialProps: any = this.props;
  state = {
    value: this.initialProps.value,
  };

  fabStyle = {margin: 10};

  handleIncrement = () => {
    this.setState({value: this.state.value + 1});
  };

  handleDecrement = () => {
    this.setState({value: this.state.value - 1});
  };

  private get badgeClasses() {
    let classes = 'badge badge-';
    classes += this.state.value === 0 ? 'danger' : 'warning';
    return classes;
  }

  render(): ReactNode {
    return (
      <div style={{marginBottom: 32}}>
        {this.props.children}
        <span style={{fontSize: 18}} className={this.badgeClasses}>{this.state.value}</span>

        <Fab
          onClick={this.handleIncrement}
          size="small"
          color="primary"
          style={this.fabStyle}>
          <AddIcon/>
        </Fab>
        <Fab
          onClick={this.handleDecrement}
          size="small"
          style={this.fabStyle}>
          <RemoveIcon/>
        </Fab>
        <Fab
          color="secondary"
          onClick={() => this.initialProps.onDelete(this.initialProps.id)}
          size="small"
          style={this.fabStyle}>
          <Icon>delete_forever</Icon>
        </Fab>
      </div>
    );
  }
}
