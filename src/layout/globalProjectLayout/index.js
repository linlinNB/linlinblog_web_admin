import React, { useContext, useEffect, Suspense, useCallback } from 'react';
import { observer } from 'mobx-react-lite';
import { Layout } from 'antd';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withRouter, Switch, Route } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import ProjectHeader from '../../component/header';
import ProjectSideMenu from '../../component/side-menu';
import { menuConfigList } from '../../common/menu.config';
import { getLocalStorage, getRoutesAndComponent } from '../../utils/utils';
import styles from './index.less';
import { projectRoutes } from '../../common/router.config';
import { globalStoreContext } from '../../store';
import PageLoading from '../../component/loading';
import { ProjectService } from '../../service';

const { Content } = Layout;

const GlobalProjectLayout = observer((props) => {
  // 从当前的globalProjectLayout获取的props
  const globalStore = useContext(globalStoreContext);

  // 路由鉴权
  // eslint-disable-next-line no-unused-vars
  const authLogin = () => {
    // eslint-disable-next-line no-undef,react-hooks/rules-of-hooks
    if (!globalStore.isLoginStatus) {
      props.history.push('/login');
    }
  };

  const dispatchProjectBuildingList = useCallback(async () => {
    // globalStore.setLoadingBuildingList();
    await ProjectService.projectBuildingList().then((res) => {
      // console.log('res = ', res);
      globalStore.setProjectBuildingList(res.builds || []);
    });
  }, [globalStore]);

  useEffect(() => {
  }, []);

  const renderLazySupRoutes = () => (
    <Suspense fallback={<PageLoading />}>
      <Switch>
        {/* eslint-disable-next-line no-unused-vars */}
        {getRoutesAndComponent(projectRoutes).map((routeConfigItem) => (
          <Route
            exact={routeConfigItem.exact}
            path={routeConfigItem.path}
            component={routeConfigItem.component}
            key={routeConfigItem.key}
          />
        ))}
      </Switch>
    </Suspense>
  );

  const userInfo = getLocalStorage('loginUserInfo') || '';
  if (!userInfo) {
    props.history.push('/login');
  }

  return (
    <DocumentTitle title="智慧电能后台管理系统">
      <Layout className={styles.projectLayoutContainer}>
        <ProjectHeader history={props.history} userInfo={userInfo} />
        <Layout style={{ height: '100%', position: 'relative' }}>
          <ProjectSideMenu menuConfigs={menuConfigList} />
          <Content className={styles.pageMiddleContent} style={{ position: 'relative' }}>
            {renderLazySupRoutes()}
          </Content>
        </Layout>
      </Layout>
    </DocumentTitle>
  );
});

export default withRouter(GlobalProjectLayout);
