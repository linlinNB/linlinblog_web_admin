import React, { useState } from 'react';
import { Spin } from 'antd';
import { ProjectNormalModal as ProjectModal } from '../../../modal';
// 导入使用说明书
import HelperList from '../../../helper';
// import ProjectModal from '../../../modal';

import styles from './styles.less';

const QRCode = require('qrcode.react');

const QrCodeDeviceInfoCard = (props) => {
  const [isShowQrCodeModal, setIsShowQrCodeModal] = useState(false);

  const handleShowQrCodeModal = () => {
    setIsShowQrCodeModal(true);
  };

  const handleCancelQrCodeModal = () => {
    setIsShowQrCodeModal(false);
  };
  return (
    <div className={styles.qrcodeDeviceInfoContainer}>
      <div className={styles.qrCodeGroup}>
        {props.loading ? (
          <Spin tip="加载中..." size="small" />
        ) : (
          <>
            {props.qrCode ? (
              <QRCode size={150} value={props.qrCode} />
            ) : (
              <div
                style={{
                  width: '150px',
                  height: '150px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                暂无二维码
              </div>
            )}
            <div style={{ color: '#A4A9B8', marginTop: '10px' }}>
              物业君小程序「扫一扫」完成绑定
            </div>
            <div onClick={handleShowQrCodeModal} style={{ color: '#5897F5' }}>
              {'绑定流程 >'}
            </div>
          </>
        )}
        {/* title={`电表名称: ${props.addr || '暂无设备名'}`} */}
        <ProjectModal
          width={1000}
          centered
          title={
            <div className={styles.modalHeaderContainer}>
              {/* eslint-disable-next-line global-require */}
              <img src={require('../../../../assets/modal/bindElectricMeterIcon.png')} alt="测试" />
              绑定电表
            </div>
          }
          visible={isShowQrCodeModal}
          onCancel={handleCancelQrCodeModal}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'center',
              margin: '20px 0 0 0',
            }}
          >
            <div
              style={{
                border: '1px solid #DEE2F1',
                width: '240px',
                height: '280px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
                padding: '20px 0',
              }}
            >
              {props.loading ? (
                <Spin tip="加载中..." size="small" />
              ) : (
                <QRCode size={200} value={props.qrCode} />
              )}
              <div
                style={{
                  width: '100%',
                  padding: '8px',
                  margin: '20px 0',
                  borderTop: '1px solid #DEE2F1',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: '#000000',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  fontFamily: 'PingFang-SC-Medium,PingFang-SC',
                }}
              >
                {`绑定电表名称: ${props.addr || '暂无设备名'}`}
              </div>
            </div>
            <div style={{ margin: '20px 0' }}>
              <span>使用物业君小程序</span>
              <span style={{ color: '#5797F4', fontSize: '13px' }}>「扫码绑定电表」</span>
            </div>
            <div className={styles.hr} />
            {/* 说明列表 */}
            <HelperList />
          </div>
        </ProjectModal>
      </div>
      <div className={styles.deviceGroup}>
        <div className={styles.electricOnOffStatus}>
          <span>电路状态</span>
          <span className={props.status ? styles.normalStatus : styles.errorStatus}>
            {props.status ? '正常' : '异常'}
          </span>
        </div>
        <div className={styles.electricAddr}>
          <div className={styles.electricAddrIcon} />
          <span>电表名称</span>
          <span>{props.addr || '暂无设备名称'}</span>
        </div>
        {/* <div className={styles.electricId}> */}
        {/*  <span>ID: {props.deviceId || '暂无设备硬件编码'}</span> */}
        {/* </div> */}
      </div>
    </div>
  );
};

QrCodeDeviceInfoCard.defaultProps = {
  loading: true,
  status: true,
  addr: '11111111111',
  deviceId: '5db7b88f087969435ff0bf8f',
};

export default QrCodeDeviceInfoCard;
