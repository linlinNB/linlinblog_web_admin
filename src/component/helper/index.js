import React from 'react';
import { helperConfigList } from './config';
import styles from './styles.less';

const HelperList = () => {
  const renderHelperList = () => {
    return helperConfigList.map((helperConfigItem, helperConfigItemIndex) => {
      return (
        <>
          <div className={styles.helperItem}>
            <img src={helperConfigItem.img} alt={helperConfigItem.alt} />
            <div className={styles.descContainer}>
              <div className={styles.stepDesc}>{helperConfigItemIndex + 1}</div>
              {helperConfigItem.desc}
            </div>
          </div>
          <div
            style={
              helperConfigList.length > 1 && helperConfigItemIndex !== helperConfigList.length - 1
                ? {}
                : { display: 'none' }
            }
            className={styles.nextArrow}
          >
            {/* eslint-disable-next-line global-require */}
            <img src={require('../../assets/helper/nextArrow.png')} alt="下一步" />
          </div>
        </>
      );
    });
  };

  return (
    <div className={styles.helperContainer}>
      <div className={styles.helperTitle}>电表绑定操作说明</div>
      <div className={styles.helperList}>{renderHelperList()}</div>
    </div>
  );
};

export default HelperList;
