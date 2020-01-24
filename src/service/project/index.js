import request from '../../request';
/**
 * 作用: 登录接口
 */
export const projectLogin = (params) => request('project.login', params);

/**
 * 作用: 拉取这当前项目内所有楼列表
 * @param params
 * @returns {Promise<T>}
 */
export const projectBuildingList = (params = {}) => request('project.building.list', params);

export const projectLogout = (url, params) => request(url, params);
