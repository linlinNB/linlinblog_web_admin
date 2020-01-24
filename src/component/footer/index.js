import React from 'react';
import { Layout } from 'antd';

import styles from './styles.less';

const { Footer } = Layout;

const ProjectFooter = () => {
  return (
    <Footer style={{ position: 'absolute', bottom: '10px', left: 0, right: 0 }}>
      <div className={styles.footerLayoutContent}>
        <span>项目: 吴店西里小区电表改造项目</span>
        <span>开发: 滋滋来电-前端开发部</span>
      </div>
    </Footer>
  );
};

export default ProjectFooter;
