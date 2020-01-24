import React from 'react';
import styles from './styles.less';

const ProjectToast = (props) => {
  const { visible, icon, message } = props;

  // eslint-disable-next-line consistent-return
  function renderProjectToastIcon() {
    if (typeof icon === 'function') {
      return icon();
    }
    if (typeof icon === 'string') {
      if (icon) {
        return <img src={icon} alt="toast头像" />;
      }
      return null;
    }
  }

  function renderProjectMessage() {
    if (message) {
      return <span>{message}</span>;
    }
    return null;
  }

  return (
    <div style={!visible ? { display: 'none' } : {}} className={styles.projectToastContainer}>
      {renderProjectToastIcon()}
      {renderProjectMessage()}
    </div>
  );
};

ProjectToast.defaultProps = {
  icon: '',
  message: '',
  visible: false,
};

export default ProjectToast;
