import React from 'react';
import moment from 'moment';
import styles from './styles.less';

const KwhInfoDetailCard = (props) => {
  return (
    <div className={styles.kwhInfoDetailCardContainer}>
      <div className={styles.headerGroup}>
        <div className={styles.kwhInfoIcon} />
        <span>剩余电量（kW.h)</span>
      </div>
      <div className={styles.contentGroup}>
        <span>{props.kwh}</span>
      </div>
      <div className={styles.footerGroup}>
        <div>最近一次剩余电量同步时间</div>
        <div>{moment(props.updateAt).format('YYYY-MM-DD hh:mm:ss')}</div>
      </div>
    </div>
  );
};

KwhInfoDetailCard.defaultProps = {
  kwh: 0,
  updateAt: moment(),
};

export default KwhInfoDetailCard;
