/**
 * 采用可配置的侧边栏的形式，保证当前侧边栏的路由-名字和service.js中的文件名称对应
 */
import { projectRoutes } from './router.config';

// eslint-disable-next-line import/prefer-default-export
export const menuConfigList = [
  // {
  //   name: '用电统计',
  //   // eslint-disable-next-line global-require
  //   unSelectedIcon: require('../assets/menu/electricStatisticManageMenuIcon.png'),
  //   // eslint-disable-next-line global-require
  //   selectedIcon: require('../assets/menu/electricStatisticSelectedManageMenuIcon.png'),
  //   path: '/project/electricStat/electricMeter',
  //   children: [
  //     {
  //       name: '用电数据统计',
  //       // eslint-disable-next-line global-require
  //       unSelectedIcon: require('../assets/menu/electricStatisticMenuIcon.png'),
  //       // eslint-disable-next-line global-require
  //       selectedIcon: require('../assets/menu/electricStatisticSelectedMenuIcon.png'),
  //       path: projectRoutes['electricStat.electricMeter.list'].path,
  //     },
  //   ],
  // },
  // {
  //   name: '电表管理',
  //   // eslint-disable-next-line global-require
  //   unSelectedIcon: require('../assets/menu/electricDeviceManageMenuIcon.png'),
  //   // eslint-disable-next-line global-require
  //   selectedIcon: require('../assets/menu/electricDeviceManageSelectedManageMenuIcon.png'),
  //   path: projectRoutes['electricDevice.list'].path,
  // },
  {
    name: '测试页面',
    icon: 'hdd',
    path: projectRoutes['project.test'].path,
  },
];
