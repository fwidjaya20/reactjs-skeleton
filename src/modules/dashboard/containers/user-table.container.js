import React, { Component } from 'react';
import {Table, Empty} from "antd";

export default class UserTableContainer extends Component {
    render() {
        const users = this.props.tableSources;

        const columns = [
            {title: 'NAME', dataIndex: 'name', key: 'name'},
            {title: 'EMAIL', dataIndex: 'email', key: 'email'},
            {title: 'PHONE', dataIndex: 'phone', key: 'phone'},
            {title: 'WEBSITE', dataIndex: 'website', key: 'website'},
        ];

        return (
            <div>
                {users.length < 1 ? <Empty /> : <Table columns={columns} dataSource={users} rowKey='name' />}
            </div>
        );
    };
}
