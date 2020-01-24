import React from 'react';
import { Modal } from 'antd';
import styles from './styles.less';

const ProjectModal = (props) => {
  const { title, children, visible, mask } = props;

  const handleCancel = () => {
    props.onCancel();
  };

  return (
    <Modal
      {...props}
      title={title}
      mask={mask}
      visible={visible}
      onCancel={handleCancel}
      className={styles.modalContent}
    >
      {children}
    </Modal>
  );
};

// 设置当前没有边框的默认值
ProjectModal.defalutProps = {
  visible: false,
  mask: true,
};

export default ProjectModal;
