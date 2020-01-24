import React from 'react';
import moment from 'moment';
import styles from './styles.less';

const YeInfoDetailCard = (props) => {
  return (
    <div className={styles.yeInfoDetailCardContainer}>
      <div className={styles.headerGroup}>
        <div className={styles.yeInfoIcon} />
        <span>剩余金额（元）</span>
      </div>
      <div className={styles.contentGroup}>
        <span>{props.ye}</span>
      </div>
      <div className={styles.footerGroup}>
        <div>最近一次余额同步时间</div>
        <div>{moment(props.updateAt).format('YYYY-MM-DD hh:mm:ss')}</div>
      </div>
    </div>
  );
};

YeInfoDetailCard.defaultProps = {
  ye: 0,
  updateAt: moment(),
};

export default YeInfoDetailCard;
