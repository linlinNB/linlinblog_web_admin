import { lazy } from 'react';

// 电量统计相关路由
export const projectRoutes = {
  // 'electricStat.electricMeter.list': {
  //   path: '/project/electricStat/electricMeter/list',
  //   name: '用电数据统计',
  //   breadcrumbIcon: 'electricStat.png',
  //   // eslint-disable-next-line import/no-cycle
  //   component: lazy(() => import('../pages/electricStat/electricMeterList')),
  // },
  // 'electricManage.electricDevice.detail': {
  //   path: '/project/electricStat/electricManage/detail/:deviceId',
  //   name: '电表详情',
  //   breadcrumbIcon: 'electricManage.png',
  //   // eslint-disable-next-line import/no-cycle
  //   component: lazy(() => import('../pages/electricManage/electricDeviceDetail')),
  // },
  // 'electricStat.electricMeter.error.list': {
  //   path: '/project/electric-stat/user/error/list',
  //   name: '异常电表情况统计',
  //   breadcrumbIcon: 'electricErrorOrderList.png',
  //   // eslint-disable-next-line import/no-cycle
  //   component: lazy(() => import('../pages/electricStat/errorListPage')),
  // },
  // 'electricDevice.list': {
  //   path: '/project/electricDevice/list',
  //   name: '电表管理',
  //   breadcrumbIcon: 'electricDevice.png',
  //   // eslint-disable-next-line import/no-cycle
  //   component: lazy(() => import('../pages/electricManage/electricDeviceList')),
  // },
  // 'electricPay.detail': {
  //   path: '/project/electricPay/detail/:deviceId',
  //   name: '设备电费充值详情',
  //   breadcrumbIcon: 'electricPay.png',
  //   // eslint-disable-next-line import/no-cycle
  //   component: lazy(() => import('../pages/electricPay/electricPayDetail')),
  // },
  // 'electricBindUser.list': {
  //   path: '/project/electricBindUser/list',
  //   name: '用户绑定',
  //   breadcrumbIcon: 'electricBind.png',
  //   // eslint-disable-next-line import/no-cycle
  //   component: lazy(() => import('../pages/electricBind/electricBindUser')),
  // },
  // 'electricBindUser.detail': {
  //   path: '/project/electricBindUser/detail/:deviceId',
  //   name: '用户绑定详情页',
  //   breadcrumbIcon: 'electricBind.png',
  //   // eslint-disable-next-line import/no-cycle
  //   component: lazy(() => import('../pages/electricBind/electricBindUserDetail')),
  // },
  // 'electricPay.history.list': {
  //   path: '/project/electricPay/history/list',
  //   name: '缴费流水',
  //   breadcrumbIcon: 'electricHistoryOrderList.png',
  //   // eslint-disable-next-line import/no-cycle
  //   component: lazy(() => import('../pages/electricPay/electricHistoryOrderList')),
  // },
  'project.test': {
    path: '/project/test',
    name: '项目功能测试页面',
    component: lazy(() => import('../pages/test')),
  },
};

export const formatToArray = () => {
  const result = Object.keys(projectRoutes).map((projectRouteKey) => {
    const tempRouteItem = {
      ...projectRoutes[projectRouteKey],
      key: projectRouteKey,
    };
    return tempRouteItem;
  });
  return result;
};
