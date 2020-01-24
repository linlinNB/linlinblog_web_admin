/**
 * 工具函数存在
 */
import moment from 'moment';
/**
 * 作用: 把route.config.js的扁平化的routes转换成数组，并且解析成为特定的数据结构
 * @returns {{path: string, component: string, exact: string, key: string}}
 */
export const getRoutesAndComponent = (projectRoutesConfig) => {
  const projectRoutesList = Object.keys(projectRoutesConfig).map((projectRoutesConfigItem) => {
    const result = {};
    result.path = projectRoutesConfig[projectRoutesConfigItem].path;
    result.component = projectRoutesConfig[projectRoutesConfigItem].component;
    result.key = projectRoutesConfigItem;
    result.exact = true;
    return result;
  });
  return projectRoutesList;
};

/**
 * 作用: 把楼号building.name和房间名room.name拼接到一起
 * @param deviceInfo
 * @returns {string}
 */
export const getBuildNameAndRoomName = (deviceInfo) => {
  const buildingName =
    deviceInfo.building && deviceInfo.building.name ? deviceInfo.building.name : '暂无楼号';
  const roomName = deviceInfo.room && deviceInfo.room.name ? deviceInfo.room.name : '暂无房间信息';
  return `${buildingName}/${roomName}`;
};

/**
 * 作用: 把时间按照一定格式解析出来
 * @param date
 * @param formatTem
 * @returns {string}
 */
export const formatDatePicker = (date, formatTem = 'YYYY-MM-DD hh:mm:ss') => {
  return moment(date).format(formatTem);
};

/**
 * 作用: 把电话号码解析出来
 * @param phoneNumber
 * @returns {string}
 */
export const formatUserPhoneNumber = (phoneNumber = '') => {
  const tempNumList = phoneNumber.split('');
  if (tempNumList.length < 11) {
    return phoneNumber;
  }
  tempNumList.splice(3, 4, '****');
  return tempNumList.join('');
};

export const setLocalStorage = (key, value) => {
  console.log('---- setLocalStorage = ', key, value);
  return localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = (key) => {
  console.log('---- getLocalStorage = ', key);
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (e) {
    return '';
  }
};

export const clearLocalStorage = (key) => {
  return localStorage.removeItem(key);
};
