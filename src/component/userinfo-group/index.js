import React from 'react';
import { observer } from 'mobx-react-lite';
// eslint-disable-next-line no-unused-vars
import { Menu, Dropdown, Icon } from 'antd';
import { formatUserPhoneNumber, clearLocalStorage } from '../../utils/utils';
import styles from './styles.less';

const userInfoGroup = observer((props) => {
  // 强制进行路由跳转，在登出操作之后，强制跳转projectManage.login
  // eslint-disable-next-line no-unused-vars
  const handleProjectLogout = async () => {};

  // 强制跳转到userManage.update页面
  // eslint-disable-next-line no-unused-vars
  const handleUserUpdateInfo = () => {};

  // eslint-disable-next-line no-unused-vars
  const renderDropdownMenu = () => (
    <Menu>
      <Menu.Item onClick={handleUserUpdateInfo}>
        <Icon type="user" />
        修改密码
      </Menu.Item>
      <Menu.Item onClick={handleProjectLogout}>
        <Icon type="logout" />
        退出登录
      </Menu.Item>
    </Menu>
  );

  const handleLogout = () => {
    clearLocalStorage('loginUserInfo');
    props.history.push('/login');
  };

  return (
    <div className={styles.container}>
      <div className={styles.messageIcon} />
      <div className={styles.testGroup}>
        <div className={styles.userImg} />
        <div className={styles.infoGroupContainer}>
          <div>{props.userInfo.nickName || '暂无用户名'}</div>
          <div>
            {props.userInfo.phone && props.userInfo.phone.length >= 11
              ? formatUserPhoneNumber(props.userInfo.phone)
              : '暂无手机号'}
          </div>
        </div>
      </div>
      <div
        style={{ margin: '0 0 0 10px', backgroundColor: '#86D1FF', width: '1px', height: '36px' }}
      />
      <div className={styles.exitProject} onClick={handleLogout} />
    </div>
  );
});

// eslint-disable-next-line no-lone-blocks
{
  /* <Dropdown overlay={renderDropdownMenu()} trigger={['click']} placement="bottomCenter"> */
}

export default userInfoGroup;
