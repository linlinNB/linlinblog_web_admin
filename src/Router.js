import React, { Suspense, useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import LoginProjectPage from './pages/login';
import GlobalProjectLayout from './layout/globalProjectLayout';
import PageLoading from './component/loading';

/**
 * 作用: 全局路由统计
 * @returns {*}
 */
const projectRoutes = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {});

  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoading />}>
        <Switch>
          <Route path="/login" exact component={LoginProjectPage} />
          <Route path="/project" render={() => <GlobalProjectLayout />} />
          <Redirect from="/" to="/login" />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default projectRoutes;
