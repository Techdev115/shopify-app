import * as React from 'react';
import {Switch, Route, withRouter, RouteComponentProps} from 'react-router';
import compose from '@shopify/react-compose';

import {NotFound} from 'components';
import HomeIndex from './HomeIndex';

interface Props {}
type ComposedProps = RouteComponentProps<{}> & Props;

function HomeRoutes({match}: ComposedProps) {
  return (
    <Switch>
      <Route exact path={match.url} component={HomeIndex} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default compose<Props>(withRouter as any)(HomeRoutes);
