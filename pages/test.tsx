import React, {Component, ReactNode} from 'react';
import withDrawer from '../app/components/drawerWrapper';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

class Test extends Component {
  state = {
    count: 0,
    imageURL: 'https://picsum.photos/800/200',
    tags: ['tag1', 'tag2', 'tag3', 'tag4dd']
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
      <>
        <div style={{marginBottom: 20}}>
          <img src={this.state.imageURL}/>
        </div>

        <div style={{marginBottom: 20}}>
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

        <div>
          <ul>
            {this.state.tags.map(tag => <li key={tag}>{tag.toLocaleUpperCase()}</li>)}
          </ul>
        </div>

      </>
    );
  }
}

export default withDrawer(Test)
