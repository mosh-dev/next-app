import React, {Component, ReactNode} from 'react';
import withDrawer from '../app/components/drawerWrapper';
import withMaterialUI from '../app/components/shared/mui/with-mui';
import {CountersContainer} from '../app/components/countersContainer';

class Test extends Component {

  state = {
    imageURL: 'https://picsum.photos/800/100',
    counters: [
      {id: 1, value: 0},
      {id: 2, value: 4},
      {id: 3, value: 6}
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
        <div style={{marginBottom: 20, minHeight: 100}}>
          <img width={'100%'} src={this.state.imageURL} alt=''/>
        </div>
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
