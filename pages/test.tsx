import React, {Component, ReactNode} from 'react';
import withDrawer from '../app/components/drawerWrapper';
import withMaterialUI from '../app/components/shared/mui/with-mui';
import {CountersContainer} from '../app/components/countersContainer';

class Test extends Component {

  state = {
    imageURL: 'https://i0.wp.com/acceleratedevolutionacademy.com/wp-content/uploads/2016/12/gradient-bg-color.jpg?fit=2048%2C786&ssl=1',
    counters: [
      {id: 1, value: 0},
      {id: 2, value: 0},
      {id: 3, value: 6},
      {id: 4, value: 0},
    ]
  };

  handleCounterReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({counters});
  };

  handleCounterDelete = (counter) => {
    const counters = this.state.counters.filter(c => c.id !== counter.id);
    this.setState({counters});
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({counters});
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value--;
    this.setState({counters});
  };

  render(): ReactNode {
    return (
      <>
        <h1 style={{margin: '32px 0px'}}>Total active Counter {this.state.counters.filter(c => c.value).length}</h1>
        <CountersContainer
          counters={this.state.counters}
          onReset={this.handleCounterReset}
          onDelete={this.handleCounterDelete}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </>
    );
  }
}

export default withMaterialUI(withDrawer(Test))
