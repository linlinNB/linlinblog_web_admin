import React from 'react';
import styles from './styles.less';

const ProjectMask = (props) => {
  const { visible } = props;
  return (
    <div style={!visible ? { display: 'none' } : {}} className={styles.projectMaskContainer}>
      {props.children}
    </div>
  );
};

ProjectMask.defaultProps = {
  visible: false,
};

export default ProjectMask;
