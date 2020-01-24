import React from 'react';
import styles from './styles.less';

const NormalElectricMeterStatusCard = (props) => {
  return (
    <div className={styles.normalElectricMeterStatusCardContainer}>
      <div className={styles.cardHeaderGroup}>
        <div className={styles.titleHeaderImg} />
        <div>运行正常电表</div>
      </div>
      <div className={styles.cardDetailGroup}>
        <div className={styles.cardDetailGroupItem}>
          <div className={styles.detailInfoGroup}>
            <span>{props.totalKwh !== -1 ? props.totalKwh : '--'}</span>
            <span>&nbsp;&nbsp;kW·h</span>
          </div>
          <div>
            <span>用电总量</span>
          </div>
        </div>
        <div className={styles.hr} />
        <div className={styles.cardDetailGroupItem}>
          <div className={styles.detailInfoGroup}>
            <span>{props.totalNum !== -1 ? props.totalNum : '--'}</span>
            <span>&nbsp;&nbsp;个</span>
          </div>
          <div>
            <span>正常运行电表数量</span>
          </div>
        </div>
      </div>
    </div>
  );
};

NormalElectricMeterStatusCard.defaultProps = {
  totalNum: -1,
  totalKwh: -1,
};

export default NormalElectricMeterStatusCard;
