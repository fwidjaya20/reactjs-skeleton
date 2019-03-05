import React, { Component } from 'react';
import {Table, Empty} from "antd";

export default class UserTableContainer extends Component {
    render() {
        const users = this.props.tableSources;

        const columns = [
            {title: 'NAME', dataIndex: 'name'},
            {title: 'EMAIL', dataIndex: 'email'},
            {title: 'PHONE', dataIndex: 'phone'},
            {title: 'WEBSITE', dataIndex: 'website'},
        ];

        return (
            <div>
                {users.length < 1 ? <Empty /> : <Table columns={columns} dataSource={users} />}
            </div>
        );
    };
}
