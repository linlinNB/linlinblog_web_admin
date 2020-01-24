import React from 'react';
import { Form, Button, Row, Col, Input } from 'antd';
import styles from './styles.less';

const PayElectricForm = (props) => {
  const { getFieldDecorator } = props.form;

  const handleSubmit = (e) => {
    e.preventDefault();
    const { validateFields } = props.form;
    validateFields((err, values) => {
      if (!err) {
        props.onSubmit(values);
      }
    });
  };

  const handleCancel = () => {
    if (props.onCancel) {
      props.onCancel();
    }
  };

  const renderMeterContent = () => {
    return (
      <Row gutter={24}>
        <Col offset={2} span={20}>
          <div className={styles.headerGroup}>
            <div className={styles.headerGroupItem}>
              <div className={styles.electricMeterIcon} />
              <span>电表: </span>
              <div className={styles.electricMeterName}>{props.deviceInfo.addr || '暂无信息'}</div>
            </div>
            <div className={styles.headerGroupItem}>
              <span>状态:</span>
              <div
                className={styles.electricMeterStatus}
                style={
                  props.deviceInfo.onoff === 'on' ? { color: '#5797F4' } : { color: '#FF4F48' }
                }
              >
                {props.deviceInfo.onoff === 'on' ? '正常' : '断开'}
              </div>
            </div>
          </div>
          <div className={styles.hr} />
        </Col>
        <Col offset={2} span={20}>
          <div className={styles.middleGroup}>
            <div className={styles.middleGroupItem}>
              <span>房间:</span>
              <span
                className={styles.roomInfo}
                style={
                  props.deviceInfo.onoff === 'on' ? { color: '#5797F4' } : { color: '#FF4F48' }
                }
              >
                {props.deviceInfo.building && props.deviceInfo.building.name
                  ? props.deviceInfo.building.name
                  : '暂无楼号'}
                /
                {props.deviceInfo.room && props.deviceInfo.room.name
                  ? props.deviceInfo.room.name
                  : '暂无房号'}
              </span>
            </div>
            <div className={styles.middleGroupItem}>
              <span>剩余电量（kW.h）:</span>
              <span
                className={styles.kwhInfo}
                style={
                  props.deviceInfo.onoff === 'on' ? { color: '#5797F4' } : { color: '#FF4F48' }
                }
              >
                {props.deviceInfo.kwh ? props.deviceInfo.kwh : '暂无信息'}
              </span>
            </div>
            <div className={styles.middleGroupItem}>
              <span style={{ color: '#9B9DA5' }}>剩余金额（元）:</span>
              <span
                className={styles.moneyInfo}
                style={props.deviceInfo.ye < 20 ? { color: '#FF4F48' } : { color: '#5797F4' }}
              >
                {props.deviceInfo.ye ? props.deviceInfo.ye : '暂无信息'}
              </span>
            </div>
          </div>
        </Col>
        <Col span={24}>
          <div
            style={{
              backgroundColor: 'rgba(241,243,249,1)',
              position: 'absolute',
              bottom: 0,
              height: '10px',
              left: '-12px',
              right: '-12px',
            }}
          />
        </Col>
      </Row>
    );
  };

  return (
    <div className={styles.payFormContent}>
      {renderMeterContent()}
      <Row gutter={24} style={{ marginTop: '30px' }}>
        <Col offset={2} span={20}>
          <Form onSubmit={handleSubmit}>
            <Form.Item label="充值金额(元)" labelCol={{ span: 6 }} wrapperCol={{ span: 24 }}>
              {getFieldDecorator('money', {
                rules: [{ required: true, message: '请输入充值金额' }],
              })(<Input placeholder="充值金额" style={{ height: '48px', margin: '20px 0' }} />)}
            </Form.Item>
            <Form.Item className={styles.payFormBtnGroup}>
              <Button type="primary" htmlType="submit" className={styles.submitBtn}>
                充值
              </Button>
              <Button onClick={handleCancel} className={styles.cancelBtn}>
                取消
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Form.create()(PayElectricForm);
