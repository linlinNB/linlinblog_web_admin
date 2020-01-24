import React, { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from 'react-router-dom';
import pathToRegexp from 'path-to-regexp';
// 导入整体项目的路由
import { projectRoutes } from '../../common/router.config';

const LinkComp = (props) => {
  const [name, setName] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [params, setParams] = useState({});
  // eslint-disable-next-line no-unused-vars
  useEffect(() => {
    // eslint-disable-next-line no-shadow
    const { name, params } = props;
    setName(name);
    setParams(params);
  }, [props]);

  // eslint-disable-next-line no-shadow
  const pathRouterAndParams = (path = '', params = {}) => {
    const result = pathToRegexp.compile(path)(params);
    return result;
  };

  return (
    <Link
      to={{
        pathname: name ? pathRouterAndParams(projectRoutes[name].path, props.params) : '',
        params: props.params,
        match: {
          params: props.params,
        },
      }}
    >
      {props.children}
    </Link>
  );
};

export default LinkComp;
