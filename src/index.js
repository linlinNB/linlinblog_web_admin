import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
// 测试导入apollo/react，替换原有Mobx
import { ApolloClient, HttpLink, InMemoryCache, ApolloProvider } from '@apollo/client';
// 导入当前项目路由
import ProjectRoutes from './Router';

// 配置apollo的请求配置
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://127.0.0.1:7001/graphql',
  })
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <ProjectRoutes />
  </ApolloProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
