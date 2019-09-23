import React, {Component, ReactNode} from 'react';
import withDrawer from '../app/components/drawerWrapper';
import Counter from '../app/components/counter';

class Test extends Component {
  state = {
    imageURL: 'https://picsum.photos/800/200',
    tags: ['tag1', 'tag2', 'tag3', 'tag4dd'],
    counters: [
      {id: 1, value: 0},
      {id: 2, value: 4},
      {id: 3, value: 6}
    ]
  };


  render(): ReactNode {
    return (
      <>
        <div style={{marginBottom: 20, minHeight: 200}}>
          <img src={this.state.imageURL}/>
        </div>

        <div style={{marginBottom: 20}}>
          {this.state.counters.map(counter => <Counter {...counter} key={counter.id}/>)}
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
