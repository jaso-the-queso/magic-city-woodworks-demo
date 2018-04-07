import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
    labels: [
        'We Train',
        'We Equip',
        'We Invest'
    ],
    datasets: [{
        data: [150, 150, 150],
        backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ],
        hoverBackgroundColor: [
            '#99FF63',
            '#FFA32E',
            '#4959AE'
        ]
    }]
};

export default class Doughnut_Chart extends Component {
    render() {
        return (
            <div>
                <h2 className="text-center pb-2">Our Approach</h2>
                <Doughnut data={data} />
            </div>
        );
    }
}