import React from 'react';
import axios from 'axios';
import { notification, Icon } from 'antd';
// 作用: 匹配url和params中的关系
import pathToRegexp from 'path-to-regexp';

// 获取service中的拼装函数
import { getAPIByName } from '../common/api.config';

axios.defaults.withCredentials = true;

// 默认的Axios的配置
// eslint-disable-next-line no-unused-vars
const defaultAxiosConfig = {
  params: {},
  method: 'GET',
  timeout: 4000,
  // withCredentials: true,
  changeOrigin: true, // 允许跨域

  // 设置具体方法传递的参数
  headers: {
    'Content-Type': 'application/json',
    get: {
      'Content-Type': 'application/json',
    },
    post: {
      'Content-Type': 'application/json',
    },
    put: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  },
};

// 默认的baseURL
const baseURL =
  process.env.NODE_ENV !== 'production' ? 'http://localhost:3000' : 'https://zsdbs.zizilaidian.com';
// const baseURL = 'http://localhost:3000';

// 对于'Method Api'的方式进行拆分
function urlParse(params) {
  const result = params.split(' ');
  const method = result[0].toLowerCase();
  const url = `${baseURL}${result[1]}`;
  return [method, url];
}

// 按照不同的method整理对应的params
function pathToRegexpUrlAndAPI(url, params) {
  const result = pathToRegexp.compile(url)(params);
  return result;
}

function makeAxiosOptions(options) {
  const { name, queryParams, url: requestUrl } = options;
  let { data, params } = options;
  let url = '';
  let method = 'get';
  // 合并对应的Url
  if (requestUrl) {
    url = requestUrl;
  } else {
    [method, url] = urlParse(pathToRegexpUrlAndAPI(getAPIByName(name), params));
  }
  // 合并headers
  if (!data) {
    data = {};
  }
  if (!params) {
    params = {};
  }
  const axiosOptions = {
    url,
    method,
    data,
  };

  // 设置查询字符串
  if (!queryParams || Object.keys(queryParams).length === 0) {
    axiosOptions.params = {};
  } else {
    axiosOptions.params = queryParams;
  }

  const result = { ...defaultAxiosConfig, ...axiosOptions };
  return result;
}

const renderProjectRequestErrorInfo = (reponseInfoParams = {}) => {
  notification.open({
    message: reponseInfoParams.message,
    icon: <Icon type="info-circle" theme="filled" style={{ color: 'red' }} />,
  });
};

function request(name, options) {
  let use = {};
  if (!options) {
    use = name;
  } else {
    use = { ...options, name };
  }
  const axiosOptions = makeAxiosOptions(use);
  // 发送请求
  return (
    axios(axiosOptions)
      // eslint-disable-next-line consistent-return
      .then((res) => {
        if (res.status === 200 || res.status === 304) {
          if (res.data.err) {
            renderProjectRequestErrorInfo({ message: res.data.msg });
          }
          return res.data;
        }
        throw new Error();
      })
      .catch((errorInfo) => {
        renderProjectRequestErrorInfo(errorInfo);
        throw errorInfo;
      })
  );
}

// 暴露当前的request的方法
export default request;
