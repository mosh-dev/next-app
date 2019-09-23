import React from 'react';
import {Button} from '@material-ui/core';
import {Counter} from './counter';


export const CountersContainer = (props) => {
  const {
    counters,
    onDelete,
    onReset,
    onIncrement,
    onDecrement
  } = props;
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
            <p>Counter {counter.id}</p>
          </Counter>
        ))}
      </div>
      <div>
        <Button variant="outlined" onClick={onReset}>Reset</Button>
      </div>
    </>
  )
};
