import React from 'react';
import { Layout, Icon, Menu } from 'antd';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from 'react-router-dom';
import styles from './styles.less';

const { Sider } = Layout;

class ProjectSideMenu extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      choosedMenuItem: '/project/electricStat/electricMeter/list',
    };
  }

  handleMenuSelect = (e) => {
    this.setState({
      choosedMenuItem: e.selectedKeys[0],
    });
  };

  renderMenuItem = (menuItemConfigs) => {
    const { choosedMenuItem } = this.state;
    return (
      // 渲染普通层级的menu
      <Menu.Item key={menuItemConfigs.path}>
        <Link to={menuItemConfigs.path}>
          {menuItemConfigs.unSelectedIcon ? (
            <img
              src={
                menuItemConfigs.path === choosedMenuItem
                  ? menuItemConfigs.selectedIcon
                  : menuItemConfigs.unSelectedIcon
              }
              alt="导航图标"
            />
          ) : (
            <Icon type={menuItemConfigs.icon} style={{ width: '16px', height: '16px' }} />
          )}
          <span style={menuItemConfigs.path === choosedMenuItem ? { color: '#5A95F5' } : {}}>
            {menuItemConfigs.name || '默认名字'}
          </span>
        </Link>
      </Menu.Item>
    );
  };

  renderSubMenuItem = (menuItemConfigs) => {
    const { choosedMenuItem } = this.state;
    const isChoosed = choosedMenuItem !== '' && choosedMenuItem.includes(menuItemConfigs.path);
    console.log('----- 专业的sideLayout = ', isChoosed);
    return (
      // 渲染有层级的sideMenu
      <Menu.SubMenu
        key={menuItemConfigs.path}
        title={
          <div>
            {menuItemConfigs.unSelectedIcon ? (
              <img
                src={isChoosed ? menuItemConfigs.selectedIcon : menuItemConfigs.unSelectedIcon}
                alt="导航图标"
              />
            ) : (
              <Icon type={menuItemConfigs.icon} style={{ width: '16px', height: '16px' }} />
            )}
            <span style={isChoosed ? { color: '#5A95F5' } : {}}>
              {menuItemConfigs.name || '默认名字'}
            </span>
          </div>
        }
      >
        {/* eslint-disable-next-line no-shadow */}
        {(menuItemConfigs.children || []).map((menuItemConfigs) => {
          if (menuItemConfigs.children) {
            return this.renderSubMenuItem(menuItemConfigs);
          }
          return this.renderMenuItem(menuItemConfigs);
        })}
      </Menu.SubMenu>
    );
  };

  /**
   * 渲染侧边栏的内容，根据common/menu.config.js的配置，对于侧边栏进行分层渲染
   */
  renderMenuList = (props) => {
    const { menuConfigs } = props;
    return menuConfigs.map((menuItemConfig) => {
      // 根据menuItemConfig包不包含children的属性判断渲染的subMenu还是menuItem
      if (menuItemConfig.children) {
        return this.renderSubMenuItem(menuItemConfig);
      }
      return this.renderMenuItem(menuItemConfig);
    });
  };

  render() {
    return (
      <Sider width="16%" className={styles.sideContainer}>
        <Menu
          key="Menu"
          mode="inline"
          defaultOpenKeys={[
            '/project/electricStat/electricMeter',
            '/project/electricStat/electricMeter/list',
          ]}
          selectedKeys={[this.state.choosedMenuItem]}
          onSelect={this.handleMenuSelect}
          style={{ border: 'none' }}
        >
          {this.renderMenuList(this.props)}
        </Menu>
      </Sider>
    );
  }
}

export default ProjectSideMenu;
