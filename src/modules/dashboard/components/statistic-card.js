import React, { Component } from 'react';
import Card, {CardContent, CardHeader} from "../../../commons/components/card/card";
import {Progress} from "antd";
import './statistic-card.css';

export default class StatisticCard extends Component {
    render() {
        const data = this.props.data;
        return (
            <Card>
                <CardHeader>
                    {data.label}
                </CardHeader>
                <CardContent>
                    <Progress
                        type='dashboard'
                        percent={data.value} />
                </CardContent>
            </Card>
        );
    };
}