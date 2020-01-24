import React from 'react';
import { Row, Col } from 'antd';
import styles from './styles.less';

const errorElectricMeterListTotalStatusCard = (props) => {
  return (
    <div className={styles.errorMeterListTotalStatusCardContainer}>
      <Row gutter={24}>
        <Col span={8}>
          <div className={styles.cardItem}>
            <div className={styles.cardLabel}>异常电量</div>
            <div className={styles.cardDetailInfo}>
              <div style={{ fontSize: '38px' }}>{props.totalKwh}</div>
              <div style={{ position: 'relative', bottom: '10px' }}>&nbsp;&nbsp;kW·h</div>
            </div>
          </div>
        </Col>
        <Col offset={1} span={8}>
          <div className={styles.cardItem}>
            <div className={styles.cardLabel}>异常电表数量</div>
            <div className={styles.cardDetailInfo}>
              <span style={{ fontSize: '38px' }}>{props.totalNum}</span>
              <span style={{ position: 'relative', bottom: '10px' }}>&nbsp;&nbsp;个</span>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default errorElectricMeterListTotalStatusCard;
