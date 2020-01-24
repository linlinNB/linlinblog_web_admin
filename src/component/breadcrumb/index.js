import React from 'react';
import { Breadcrumb } from 'antd';
import { formatToArray } from '../../common/router.config';
import styles from './styles.less';

const formatLocationAndRoutes = (location, match) => {
  // 依照配置规则，自动解析当前面包屑和路由之间的关系
  const breadcurmbConfigList = [];
  const routesConfigList = formatToArray();
  const { path: pathname } = match;
  // 判断是否包含detail这个字段
  // 解析当前localtion的pathname并且放入breadcurmbConfigList中
  const pathList = pathname.split('/').filter((pathItem) => pathItem !== '');
  // eslint-disable-next-line
  pathList.reduce((preItem, nextItem) => {
    // eslint-disable-next-line no-param-reassign
    preItem += `/${nextItem}`;
    // 按照当前拼成的path，去routerArrayList中寻找对应的结果
    const position = routesConfigList.findIndex(
      (routeConfigItem) => routeConfigItem.path === preItem
    );
    if (position > -1) {
      breadcurmbConfigList[0] = {
        path: routesConfigList[position].path,
        name: routesConfigList[position].name,
        breadcrumbIcon: routesConfigList[position].breadcrumbIcon,
      };
    }
    return preItem;
  }, '');
  // 结合breadcurmbConfigList拼接路由
  return breadcurmbConfigList.map((breadcurmbConfigItem) => (
    <>
      {breadcurmbConfigItem && breadcurmbConfigItem.breadcrumbIcon ? (
        <img
          className={styles.breadcrumbIcon}
          src={require(`../../assets/routes/${breadcurmbConfigItem.breadcrumbIcon}`)} // eslint-disable-line
          alt="面包屑图片"
          key={`${breadcurmbConfigItem.path}/Img`}
        />
      ) : null}
      <Breadcrumb.Item href={breadcurmbConfigItem.path} key={breadcurmbConfigItem.path}>
        {breadcurmbConfigItem.name}
      </Breadcrumb.Item>
    </>
  ));
};

const ProjectBreadcrumb = (props) => {
  // 获取当前路由和具体信息
  const { location, match } = props;

  return (
    <Breadcrumb className={styles.breadcrumbContent}>
      {formatLocationAndRoutes(location, match)}
    </Breadcrumb>
  );
};

export default ProjectBreadcrumb;
