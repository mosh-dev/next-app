import React, {Component, ReactNode} from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

export default class Counter extends Component {
  initialProps: any = this.props;
  state = {
    count: this.initialProps.value,
  };

  fabStyle = {margin: 10};

  formatCount() {
    const {count} = this.state;
    return count === 0 ? <span>Zero</span> : count;
  }

  handleIncrement = () => {
    this.setState({count: this.state.count + 1});
  };

  handleDecrement = () => {
    this.setState({count: this.state.count - 1});
  };

  private get badgeClasses() {
    let classes = 'badge badge-';
    classes += this.state.count === 0 ? 'warning' : 'primary';
    return classes;
  }

  render(): ReactNode {
    return (
      <div style={{marginBottom: 32}}>
        <h4>
          <span className={this.badgeClasses}>Counter : {this.formatCount()}</span>
        </h4>

        <Fab
          onClick={this.handleIncrement}
          size="small"
          color="secondary"
          style={this.fabStyle}>
          <AddIcon/>
        </Fab>
        <Fab
          onClick={this.handleDecrement}
          size="small"
          style={this.fabStyle}>
          <RemoveIcon/>
        </Fab>
      </div>
    );
  }
}
