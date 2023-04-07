import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './page/IndexPage';
import page from './page/page';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/a" exact component={page} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
