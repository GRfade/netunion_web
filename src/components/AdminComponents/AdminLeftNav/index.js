import React from 'react';
import "./index.css";
import { Layout, Menu, Icon} from 'antd';
import { NavLink } from "react-router-dom"

const { Sider } = Layout;


class LeftNav extends React.Component {
  render() {
    return (
      <div>
        <Layout className="leftNav">
          <Sider theme="light"
            breakpoint="lg"
            collapsedWidth="0"
            defaultCollapsed
            width="150"
            onBreakpoint={(broken) => { /**console.log(broken); */ }}
            onCollapse={(collapsed, type) => {
              /**console.log(collapsed, type); */
            }}
          >
            <div className="logo" />
            <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1"
              >
                <NavLink to="/admin/welcome">
                  <Icon type="user" />
                  <span>
                    欢迎！
                    </span>
                </NavLink>
              </Menu.Item>
              <Menu.Item key="2">
                <NavLink to="/admin/dormFixList">
                  <Icon type="tool" />
                  <span>
                      报修列表
                    </span>
                </NavLink>
              </Menu.Item>
              <Menu.Item key="3">
                <NavLink to="/admin/joinUsList">
                <Icon type="usergroup-add" />
                  <span>
                      报名列表
                    </span>
                </NavLink>
              </Menu.Item>
              <Menu.Item key="4">
                <NavLink to="/admin/feedbackList">
                <Icon type="solution" />
                  <span>
                    反馈列表
                    </span>
                </NavLink>
               </Menu.Item>
            </Menu>
          </Sider>
        </Layout>
      </div>
    );
  }
}

export default LeftNav;
