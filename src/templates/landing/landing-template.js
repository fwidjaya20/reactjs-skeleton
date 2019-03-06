import React, { Component } from 'react';
import { Layout } from 'antd';
import './landing-template.css';

const { Content } = Layout;

export default class LandingTemplate extends Component {
    render() {
        return (
            <Layout>
                <Content id='landingTemplate'>
                    { this.props.children }
                </Content>
            </Layout>
        );
    }
}
