import React, { useEffect } from 'react';
// 导入UI组件
import { Layout } from 'antd';
import UserInfoGroup from '../userinfo-group';

import styles from './styles.less';

const { Header } = Layout;

const ProjectHeader = (props) => {
  useEffect(() => {}, []);
  return (
    <Header className={styles.globalHeaderContent}>
      <div className={styles.companyGroupInfo}>
        <div className={styles.companyIcon} />
        <span>&nbsp; — &nbsp;</span>
        <span>智慧电能后台管理系统</span>
      </div>
      <div>
        <UserInfoGroup history={props.history} userInfo={props.userInfo} />
      </div>
    </Header>
  );
};

export default ProjectHeader;
