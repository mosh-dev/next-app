import React, {Component, ReactNode} from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export class ToolbarComponent extends Component {
  render(): ReactNode {
    return (
      <Toolbar>
        <Typography variant="h6" noWrap>
          Mini variant drawer
        </Typography>
      </Toolbar>
    );
  }
}
