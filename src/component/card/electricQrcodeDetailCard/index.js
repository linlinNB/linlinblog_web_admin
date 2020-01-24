import React, { useCallback, useState } from 'react';
import { Button } from 'antd';
import styles from './styles.less';
// 导入展示二维码的栏目的卡片样式
import QrCodeDeviceInfoCard from './qrCodeDeviceInfo';
// 导入展示房间信息的卡片样式
import RoomInfoDetailCard from './roomInfoDetailCard';
// 导入展示剩余金额的卡片样式
import YeInfoDetailCard from './yeInfoDetailCard';
// 导入剩余电量
import KwhInfoDetailCard from './kwhInfoDetailCard';
// 导入支付界面的弹窗
import PayElectricForm from '../../form/payElectricForm';
import ProjectMask from '../../mask';
import ProjectToast from '../../toast';
import { ProjectNormalModal as ProjecElectrictModal } from '../../modal';
import { electricPayService } from '../../../service';

const ElectricQrCodeDetailCard = (props) => {
  // eslint-disable-next-line no-unused-vars
  const [isShowPayDialog, setIsShowPayDialog] = useState(false);
  const [isShowProjectMask, setIsShowProjectMask] = useState(false);
  const [isShowProjectToast, setIsShowProjectToast] = useState(false);
  const [toastConfig, setToastConfig] = useState({});

  const handleShowPayModal = () => {
    setIsShowProjectMask(true);
    setIsShowPayDialog(true);
  };

  const handlePayModalCancel = () => {
    setIsShowPayDialog(false);
    setIsShowProjectMask(false);
  };

  const handlePayModalSubmit = useCallback(
    async (value) => {
      const {
        match: { params },
      } = props;
      setIsShowPayDialog(false);
      await electricPayService
        .payMoneyToElectricOutLine({
          params: {
            ...params,
          },
          data: {
            ...value,
          },
        })
        .then(() => {
          setToastConfig({
            // eslint-disable-next-line global-require
            icon: require('../../../assets/toast/payOutlineSucc.png'),
            message: '充值成功',
          });
          setIsShowProjectToast(true);
          const payOutlineTimeOutID = setTimeout(() => {
            setIsShowProjectToast(false);
            setIsShowProjectMask(false);
            clearTimeout(payOutlineTimeOutID);
          }, 2000);
        })
        .catch(() => {
          setToastConfig({
            // eslint-disable-next-line global-require
            icon: require('../../../assets/toast/payOutlineFailed.png'),
            message: '充值失败',
          });
          setIsShowProjectToast(true);
          const payOutlineTimeOutID = setTimeout(() => {
            setIsShowProjectToast(false);
            setIsShowProjectMask(false);
            clearTimeout(payOutlineTimeOutID);
          }, 2000);
        });
    },
    [props]
  );

  const formatBuildingNameAndRoomName = () => {
    const {
      deviceInfo: { building, room },
    } = props;
    return `${building && building.name ? building.name : '暂无楼号'}/${
      room && room.name ? room.name : '暂无房间信息'
    }`;
  };

  return (
    <div className={styles.electricQrcodeDetailCardContainer}>
      <div className={styles.cardHeaderGroup}>
        <span>电表详情</span>
      </div>
      <div className={styles.cardContentGroup}>
        <div className={styles.qrCodeDeviceGroup}>
          <QrCodeDeviceInfoCard
            qrCode={props.deviceInfo.qrCode}
            deviceId={props.match.params.deviceId}
            addr={props.deviceInfo.addr}
            status={props.deviceInfo.onoff === 'on'}
            loading={props.loading}
          />
        </div>
        <div className={styles.normalCardGroupItem}>
          <RoomInfoDetailCard
            roomName={formatBuildingNameAndRoomName()}
            deviceId={props.match.params.deviceId}
            bindedHumanNum={props.bindUserList ? props.bindUserList.length : 0}
            totolBindHumanNum={5}
          />
        </div>
        <div className={styles.normalCardGroupItem}>
          <YeInfoDetailCard ye={props.deviceInfo.ye} updateAt={props.deviceInfo.ye_at} />
        </div>
        <div className={styles.normalCardGroupItem}>
          <KwhInfoDetailCard kwh={props.deviceInfo.kwh} updateAt={props.deviceInfo.kwh_at} />
        </div>
        {props.isShowPayBtn ? (
          <div className={styles.normalCardGroupItem}>
            <Button
              type="primary"
              onClick={handleShowPayModal}
              className={styles.payMoneyToElectricBtn}
            >
              充值
            </Button>
          </div>
        ) : null}
      </div>
      <ProjectMask visible={isShowProjectMask}>
        <ProjecElectrictModal
          title="电费充值"
          visible={isShowPayDialog}
          onCancel={handlePayModalCancel}
          mask={false}
        >
          <PayElectricForm
            deviceInfo={props.deviceInfo}
            onSubmit={handlePayModalSubmit}
            onCancel={handlePayModalCancel}
          />
        </ProjecElectrictModal>
      </ProjectMask>
      <ProjectToast visible={isShowProjectToast} {...toastConfig} />
    </div>
  );
};

// 设置当前传入的默认信息
ElectricQrCodeDetailCard.defaultProps = {
  ErrorElectricMeterTotalKwh: 0,
  deviceInfo: {}, // 设备信息
  isShowPayBtn: true, // 是否显示支付按钮
  loading: false, // 加载中的状态，等待开发状态
  bindUserList: [],
  maskVisible: false,
  toastVisible: false,
  toastConfig: {},
};

export default ElectricQrCodeDetailCard;
