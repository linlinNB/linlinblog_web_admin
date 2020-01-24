import React from 'react';
import { Modal, Button } from 'antd';
import styles from './styles.less';

const NoBorderModal = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { visible, mask } = props;

  const handleCancel = () => {
    if (props.onCancel) {
      props.onCancel();
    }
  };

  return (
    <Modal
      {...props}
      visible={visible}
      mask={mask}
      onCancel={handleCancel}
      className={styles.noBorderModalContainer}
      closeIcon
    >
      <Button className={styles.modalCloseBtn} icon="close" onClick={handleCancel} />
      <div className={styles.middleContainer}>{props.children}</div>
    </Modal>
  );
};

// 设置当前没有边框的默认值
NoBorderModal.defalutProps = {
  visible: false,
  mask: true,
};

export default NoBorderModal;
