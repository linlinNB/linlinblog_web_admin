import React, { useEffect } from 'react';

const ErrorInfo = (props) => {
  useEffect(() => {}, []);

  return (
    <div>
      <h1>这是ErrorInfo组件</h1>
      <h1>{props.type}</h1>
    </div>
  );
};

export default ErrorInfo;
