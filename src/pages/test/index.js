// eslint-disable-next-line no-unused-vars
import React, { useEffect, useContext, useState, useCallback } from 'react';
import { observer } from 'mobx-react-lite';

import PageLoading from '../../component/loading';

import { testStoreContext, globalStoreContext } from '../../store';

import request from '../../request';

const TestPage = observer(() => {
  const testStore = useContext(testStoreContext);
  const globalStore = useContext(globalStoreContext);

  const fetchData = useCallback(() => {
    globalStore.setLoadingStatus();

    request('test.update', {
      params: { testId: 123 },
      data: {
        dataId: '一个不是参数的参数',
      },
      // eslint-disable-next-line no-unused-vars
    }).then((res) => {
      // console.log('---- 请求成功 = ', res);
      globalStore.clearLoadingStatus();
    });
    // .catch((e) => {
    //   console.log('----- 请求失败 = ', e);
    //   globalStore.clearLoadingStatus();
    // });

    // 测试路由鉴权
    // globalStore.clearLoginStatus();
  }, [globalStore]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleIncrementClick = () => {
    testStore.addClick();
  };

  const handleDecrementClick = () => {
    testStore.subClick();
  };

  // if (globalStore.loading) {
  //   console.log('---- 触发了globalStore.loading的pageLoading = ', globalStore.loading);
  //   return <PageLoading />;
  // }

  return (
    <div>
      {globalStore.loading ? (
        <PageLoading />
      ) : (
        <>
          <span>利用React-Hooks改写组件</span>
          <div>当前计数器： {testStore.testSum}</div>
          <button type="button" onClick={handleIncrementClick}>
            增加
          </button>
          <button type="button" onClick={handleDecrementClick}>
            减少
          </button>
        </>
      )}
    </div>
  );
});

export default TestPage;
