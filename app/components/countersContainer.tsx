import React, {Component, ReactNode} from 'react';
import Counter from './counter';
import {Button} from '@material-ui/core';

export class CountersContainer extends Component {
  props: any;

  render(): ReactNode {
    const {
      counters,
      onDelete,
      onReset,
      onIncrement,
      onDecrement
    } = this.props;
    return (
      <>
        <div style={{marginBottom: 20}}>
          {counters.map(counter => (
            <Counter
              key={counter.id}
              counter={counter}
              onDelete={onDelete}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
            >
              <h5>Counter {counter.id}</h5>
            </Counter>
          ))}
        </div>
        <div>
          <Button variant="outlined" onClick={onReset}>
            Reset
          </Button>
        </div>
      </>
    );
  }
}
