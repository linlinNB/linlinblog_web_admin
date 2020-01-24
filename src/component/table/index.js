import React from 'react';
import { Table } from 'antd';
// 暂时没有想好Table是否放入loading组件，这里先等待开发状态
import styles from './styles.less';
import ProjectLoading from '../loading';

const ProjectTable = (props) => {
  // eslint-disable-next-line no-unused-vars
  const renderTableRowHeader = (columnsConfigList) => {
    // eslint-disable-next-line array-callback-return
    const result = columnsConfigList.reduce((preConfigItem, nextConfigItem) => {
      const tempConfigItem = nextConfigItem;
      tempConfigItem.title = <div style={{ color: '#7C8297' }}>{nextConfigItem.title}</div>;
      preConfigItem.push(tempConfigItem);
      return preConfigItem;
    }, []);
    return result;
  };

  return (
    <Table
      {...props}
      className={styles.projectTableContainer}
      columns={renderTableRowHeader(props.columns)}
      dataSource={props.dataSource}
      loading={{
        indicator: <ProjectLoading message="数据加载中..." />,
        spinning: props.loading,
      }}
    />
  );
};

// 设置默认的传递参数
ProjectTable.defaultProps = {
  dataSource: [],
  columns: [],
  loading: Boolean,
  tableClassName: Object,
};

export default ProjectTable;
