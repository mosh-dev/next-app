import React, {Component, ReactNode} from 'react';
import withDrawer from '../app/components/drawerWrapper';
import Counter from '../app/components/counter';
import {Button} from '@material-ui/core';
import withMaterialUI from '../app/components/shared/mui/with-mui';

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

        <div style={{marginBottom: 20}}>
          {this.state.counters.map(counter => (
            <Counter
              key={counter.id}
              counter={counter}
              onDelete={this.handleCounterDelete}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
            >
              <h5>Counter {counter.id}</h5>
            </Counter>
          ))}
        </div>
        <div>
          <Button variant="outlined" onClick={this.handleCounterReset}>
            Reset
          </Button>
        </div>
      </>
    );
  }
}

export default withMaterialUI(withDrawer(Test))
