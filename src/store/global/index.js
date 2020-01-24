/**
 * 作用: GlobalProject中的配置的项目信息
 */
import { observable, action, computed } from 'mobx';
import { createContext } from 'react';

class GlobalStore {
  @observable userInfo = {};

  @observable projectBuildingList = [];

  @observable loading = false;

  @observable qrCodeLoading = false;

  @observable isLoginStatus = false;

  @observable loadingBuildingList = false;

  @action setLoadingBuildingList = () => {
    this.loadingBuildingList = true;
  };

  @action clearLoadingBuildingList = () => {
    this.loadingBuildingList = false;
  };

  @computed get getBuildingNameList() {
    return this.projectBuildingList.map((buildingItemInfo) => {
      // eslint-disable-next-line no-unused-expressions
      return buildingItemInfo.name;
    });
  }

  @computed get getBuildingIdList() {
    return this.projectBuildingList.map((buildingItemInfo) => {
      // eslint-disable-next-line no-underscore-dangle
      return buildingItemInfo._id;
    });
  }

  @action setProjectBuildingList = (buildingList = []) => {
    this.projectBuildingList = buildingList;
  };

  @action clearProjectBuildingList = () => {
    this.projectBuildingList = [];
  };

  @action setUserInfo = (params = {}) => {
    this.userInfo = params;
  };

  @action clearUserInfo = () => {
    this.userInfo = {};
  };

  @action setLoginStatus = () => {
    this.isLoginStatus = true;
  };

  @action clearLoginStatus = () => {
    this.isLoginStatus = false;
  };

  @action setLoadingStatus = () => {
    this.loading = true;
  };

  @action clearLoadingStatus = () => {
    this.loading = false;
  };

  @action setQrCodeLoading = () => {
    this.qrCodeLoading = true;
  };

  @action clearQrCodeLoadingStatus = () => {
    this.qrCodeLoading = false;
  };
}

export default createContext(new GlobalStore());
