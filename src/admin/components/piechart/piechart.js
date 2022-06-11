import React from 'react';
import {Pie,Doughnut} from 'react-chartjs-2';
import {
    Chart as ChartJs,
    ArcElement,
    Legend,
    Tooltip
}
from 'chart.js';
ChartJs.register(
    ArcElement,
    Legend,
    Tooltip
);

const PieChart = () => {
return (<>
<Doughnut
data={{
    labels:['Apple','Bnana','Orange'],
    datasets:[
        {
            label:'Sales of product',
            data:[50,30,20],
    backgroundColor:['red','yello','orange'],
    borderWidth:2
        }
    ]
    
}}
height={200}
width={200}
options={{
    legend:{
        labels:{
            fontSize:25
        }
    }
}}
/>
</>)
}
export default PieChart;