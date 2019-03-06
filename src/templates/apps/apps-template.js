import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

import './apps-template.css';
import SubMenu from "antd/es/menu/SubMenu";

const {Header, Content, Footer, Sider} = Layout;

export default class AppsTemplate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collapsed: false
        };
    };

    toggleSidebar = () => {
        this.setState({collapsed: !this.state.collapsed});
    };

    render() {
        return (
            <Layout>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}>
                    <div className='logo' />
                    <Menu
                        theme='dark'
                        mode='inline'
                        defaultOpenKeys={['dashboard-group']}
                        defaultSelectedKeys={['dashboard-group']}>
                        <SubMenu key='dashboard-group' title={
                            <Link to='/apps/dashboard'>
                                <Icon type='dashboard'/>
                                <span>Dashboard</span>
                            </Link>}>

                            <Menu.Item key='1'>
                                <Link to='/apps/dashboard/wizard'>
                                    <Icon type='dash' />
                                    <span> Wizard </span>
                                </Link>
                            </Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout style={{
                    transition: 'all 200ms ease',
                    transform: this.state.collapsed ? 'translateX(80px)' : 'translateX(200px)',
                    maxWidth: this.state.collapsed ? 'calc(100% - 80px)' : 'calc(100% - 200px)'
                }}>
                    <Header>
                        <Icon
                            className='trigger'
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggleSidebar} />
                    </Header>
                    <Content id='appsTemplate'>
                        {this.props.children}

                        <Footer> Copyrights &copy; 2019 </Footer>
                    </Content>
                </Layout>
            </Layout>
        );
    };
}