import React from 'react';
// 导入跳转Link的链接
// import Link from '../../link';
import styles from './styles.less';

const ErrorElectricMeterStatusCard = (props) => {
  return (
    <div className={styles.errorElectricMeterStatusCardContainer}>
      <div className={styles.cardHeaderGroup}>
        <div className={styles.titleHeaderImg} />
        <div>运行异常电表</div>
      </div>
      <div className={styles.cardDetailGroup}>
        <div className={styles.cardDetailGroupItem}>
          <div className={styles.detailInfoGroup}>
            <span>{props.totalKwh !== -1 ? props.totalKwh : '--'}</span>
            <span>&nbsp;&nbsp;kW·h</span>
          </div>
          <div>
            <span>异常电量</span>
          </div>
        </div>
        <div className={styles.hr} />
        <div className={styles.cardDetailGroupItem}>
          <div className={styles.detailInfoGroup}>
            <span>{props.totalNum !== -1 ? props.totalNum : '--'}</span>
            <span>&nbsp;&nbsp;个</span>
          </div>
          <div>
            <span>异常电表数量</span>
          </div>
        </div>
      </div>
      {/* <div className={styles.messageToDetailGroup}> */}
      {/*  /!* eslint-disable-next-line jsx-a11y/anchor-is-valid *!/ */}
      {/*  <Link */}
      {/*    name="electricStat.electricMeter.error.list" */}
      {/*    query={{ */}
      {/*      startDate: props.startDate, */}
      {/*      endDate: props.endDate, */}
      {/*    }} */}
      {/*    params={{ */}
      {/*      startDate: props.startDate, */}
      {/*      endDate: props.endDate, */}
      {/*    }} */}
      {/*  > */}
      {/*    详情{'>'} */}
      {/*  </Link> */}
      {/* </div> */}
    </div>
  );
};

// 根据React-Hook的写法创建默认数值
ErrorElectricMeterStatusCard.defaultProps = {
  totalNum: -1,
  totalKwh: -1,
};

export default ErrorElectricMeterStatusCard;
