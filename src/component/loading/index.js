import React from 'react';

// 导入组件的样式
import styles from './styles.less';

const PageLoading = (props) => {
  const defaultProps = {
    message: '加载中...',
  };
  // eslint-disable-next-line no-unused-vars,react/prop-types
  const message = props.message || defaultProps.message;
  // style={props.isShow ? {} : { display: 'none' }}
  return (
    <div className={styles.pageLoading}>
      <div className={styles.loadingIcon} />
      <div>{message}</div>
    </div>
  );
};

export default PageLoading;
