import React from 'react';
// import Link from '../../../link';
import styles from './styles.less';

const RoomInfoDetailCard = (props) => {
  return (
    <div className={styles.roomInfoDetailCardContainer}>
      <div className={styles.headerGroup}>
        <div className={styles.roomInfoIcon} />
        <span>所属房间:</span>
      </div>
      <div className={styles.deviceRoomName}>
        <span>{props.roomName}</span>
      </div>
      <div className={styles.bindDevicehumanNum}>
        绑定人数:
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        {/* <Link name="electricBindUser.detail" params={{ deviceId: props.deviceId }}> */}
        {props.bindedHumanNum < props.totolBindHumanNum ? (
          <span className={styles.normalStatus}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            {/* <Link name="electricBindUser.detail"> */}
            {props.bindedHumanNum}/{props.totolBindHumanNum}
            {/* </Link> */}
          </span>
        ) : (
          <span className={styles.errorStatus}>
            {props.bindedHumanNum}/{props.totolBindHumanNum}(绑定人数已满)
          </span>
        )}
        {/* </Link> */}
      </div>
    </div>
  );
};

RoomInfoDetailCard.defaultProps = {
  deviceId: '',
  bindedHumanNum: 0,
  totolBindHumanNum: 5,
  roomName: '',
};

export default RoomInfoDetailCard;
