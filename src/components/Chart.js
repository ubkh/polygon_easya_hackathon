import React, { Component } from "react";
import DonutChart from 'react-donut-chart';

import "./App.css";

class Chart extends Component {
    render() {
        return ( 
            <>
            <div align="center" style={{padding:"15em 0 15em 0"}}>
                <DonutChart
                data={[
                    {label: 'Hunger', value: 25,},
                    { label: 'Health', value: 75,},
                    {label: 'Education', value: 25,},
                    { label: 'Environment', value: 75,},
                    {label: 'Animal', value: 25,},
                    { label: 'Human Services', value: 75,},
                ]}
                colors={['#9c27b0', '#673ab7']}
                strokeColor="#fff"
                />
            </div>
            </>
        );
    }
}

export default Chart;