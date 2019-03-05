import React, { Component } from 'react';
import AppsTemplate from "../../../../templates/apps/apps-template";
import {FETCH_USERS} from "../../../../domains/dashboard/services/dashboard.service";
import UserTableContainer from "../../containers/user-table.container";
import StatisticContainer from "../../containers/statistic.container";
import {Spin} from "antd";

export default class DashboardPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ui: {
                isLoading: false
            },
            data: {
                users: []
            }
        };
    };

    componentDidMount() {
        this.fetchUserExample();
    };

    fetchUserExample = async () => {
        this.setState({ui: {...this.state.ui, isLoading: true}});
        await FETCH_USERS()
            .then((result) => {
                const users = result.data;
                this.setState({ui: {...this.state.ui, isLoading: false}});
                this.setState({data: {...this.state.data, users: users}});
            })
            .catch((error) => {
                this.setState({ui: {...this.state.ui, isLoading: false}});
                return error;
            })
    };

    render() {
        const loading = (<div className="container-fluid text-center"> <Spin/> </div>);
        const dashboard = (
            <div className="container-fluid">
                <div className="row mb-4">
                    <div className="w-100">
                        <StatisticContainer />
                    </div>
                </div>
                <div className="row">
                    <div className="w-100">
                        <UserTableContainer tableSources={this.state.data.users} />
                    </div>
                </div>
            </div>
        );

        return (
            <AppsTemplate>
                <div className='container-fluid'>
                    {
                        this.state.ui.isLoading ? loading : dashboard
                    }
                </div>
            </AppsTemplate>
        );
    };
}