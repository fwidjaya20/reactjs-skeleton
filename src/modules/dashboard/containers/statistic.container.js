import React, { Component } from 'react';
import StatisticCard from "../components/statistic-card";

export default class StatisticContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {
                statistic: [
                    { label: 'Section A', value: 78 },
                    { label: 'Section B', value: 27 },
                    { label: 'Section C', value: 13 },
                    { label: 'Section D', value: 88 }
                ]
            }
        };
    };

    render() {
        const cards = (
            this.state.data.statistic.map((value, index) => {
                return (
                    <div className="col-3" key={index}>
                        <StatisticCard data={value} />
                    </div>
                );
            })
        );

        return (
            <div className='row'>
                {cards}
            </div>
        );
    };
}
