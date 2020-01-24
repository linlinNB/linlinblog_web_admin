/**
 * 测试: 按照mobx的项目设计方案进行项目的拆分
 */
import { observable, action } from 'mobx';

import { createContext } from 'react';

// 创建对应的store
class TestStore {
  @observable testSum = 0; // eslint-disable

  // 创建对应的动态方法
  // eslint-disable-next-line no-unused-vars
  @action addClick = (params = {}) => {
    this.testSum = this.testSum + 1;
  };

  // eslint-disable-next-line no-unused-vars
  @action subClick = (params = {}) => {
    this.testSum = this.testSum - 1;
  };
}

export default createContext(new TestStore());
