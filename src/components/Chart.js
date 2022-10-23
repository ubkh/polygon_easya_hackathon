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
                    {label: '1', value: 25,},
                    { label: '2', value: 75,},
                    {label: '3', value: 25,},
                    { label: '4', value: 75,},
                    {label: '5', value: 25,},
                    { label: '6', value: 75,},
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
