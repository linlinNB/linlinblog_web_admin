import React from 'react';
import { Button } from 'antd';
import styles from './styles.less';

const DeleteBindUserForm = (props) => {
  const handleSubmit = () => {
    if (props.onSubmit) {
      props.onSubmit();
    }
  };

  const handleCancel = () => {
    if (props.onCancel) {
      props.onCancel();
    }
  };
  return (
    <div className={styles.deleteBindUserContainer}>
      <div className={styles.messageInfo}>
        <span>
          确认解除绑定当前用户:{' '}
          {props.userInfo.name ? props.userInfo.name : props.userInfo.nickName} ？
        </span>
      </div>
      <div className={styles.controlBtnGroup}>
        <Button type="primary" className={styles.submitBtn} onClick={handleSubmit}>
          确定
        </Button>
        <Button onClick={handleCancel} className={styles.cancelBtn}>
          取消
        </Button>
      </div>
    </div>
  );
};

export default DeleteBindUserForm;
