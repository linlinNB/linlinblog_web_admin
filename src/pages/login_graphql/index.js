import React, { useContext } from 'react';
import LoginProjectForm from './component/loginForm';
import { ProjectService } from '../../service';
import { setLocalStorage } from '../../utils/utils';

import styles from './index.less';

const loginPage = (props) => {
  const globalStore = {};

  const handleLoginSubmit = async (values) => {
    globalStore.setLoadingStatus();
    await ProjectService.projectLogin({
      data: {
        username: values.phone,
        password: values.pwd,
      }
    })
      .then((res) => {
        const { admin } = res;
        globalStore.setUserInfo(admin);
        setLocalStorage('loginUserInfo', admin);
        props.history.push('/project/electricStat/electricMeter/list');
      })
      .finally(() => {
        globalStore.clearLoadingStatus();
      });
  };

  return (
    <div className={styles.loginPageContent}>
      <div className={styles.loginGroupContent}>
        <div className={styles.companyTitle}>博客后台管理系统</div>
        <div className={styles.loginGroupTitle}>登录</div>
        <div>
          <LoginProjectForm onSubmit={handleLoginSubmit} />
        </div>
      </div>
    </div>
  );
}

export default loginPage;
