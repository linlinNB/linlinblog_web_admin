import React from 'react'
// 导入页面schema
import { GETUSERLIST } from '../../schema/login'
import { useQuery } from '@apollo/client'

import styles from './index.less'

const loginPage = () => {
  const { loading, error, data } = useQuery(GETUSERLIST)

  console.log('--- apollo useQuery = ', loading, error, data)

  // const handleLoginSubmit = async (values) => {
  //   globalStore.setLoadingStatus();
  //   await ProjectService.projectLogin({
  //     data: {
  //       username: values.phone,
  //       password: values.pwd,
  //     }
  //   })
  //     .then((res) => {
  //       const { admin } = res;
  //       globalStore.setUserInfo(admin);
  //       setLocalStorage('loginUserInfo', admin);
  //       props.history.push('/project/electricStat/electricMeter/list');
  //     })
  //     .finally(() => {
  //       globalStore.clearLoadingStatus();
  //     });
  // };

  return (
    <div className={styles.loginPageContent}>
      <div className={styles.loginGroupContent}>
        <div className={styles.companyTitle}>博客后台管理系统</div>
        <div className={styles.loginGroupTitle}>登录</div>
      </div>
    </div>
  )
}

export default loginPage
