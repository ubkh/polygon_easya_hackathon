import React, { Component } from "react";
import DonutChart from 'react-donut-chart';

class Chart extends Component {
    render() {
        return ( 
            <>
            <div align="center" style={{margin:"10em 0 0 0"}}>
            <h1>Current Votes</h1>

            <div class="chart">
                <br/>
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
            </div>

            <br/><br/>
            </>
        );
    }
}

export default Chart;
