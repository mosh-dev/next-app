import React, {Component, ReactNode} from 'react';
import withDrawer from '../app/components/drawerWrapper';
import Counter from '../app/components/counter';

class Test extends Component {
  state = {
    imageURL: 'https://picsum.photos/800/100',
    counters: [
      {id: 1, value: 0},
      {id: 2, value: 4},
      {id: 3, value: 6}
    ]
  };

  handleCounterDelete = (counterId) => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters});
  };

  getCounterProps(counter) {
    return {
      ...counter,
      onDelete: this.handleCounterDelete
    }
  }


  render(): ReactNode {
    return (
      <>
        <div style={{marginBottom: 20, minHeight: 100}}>
          <img width={'100%'} src={this.state.imageURL}/>
        </div>

        <div style={{marginBottom: 20}}>
          {this.state.counters.map(counter => (
            <Counter key={counter.id} {...this.getCounterProps(counter)}>
              <h5>Counter {counter.id}</h5>
            </Counter>
          ))}
        </div>
      </>
    );
  }
}

export default withDrawer(Test)
