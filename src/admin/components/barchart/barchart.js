import React from 'react';
import {Bar,Pie,Line} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    BarElement,
    PointElement,
    Legend,
    Tooltip,
    ArcElement,
    CategoryScale,
    LinearScale,
    LineElement
  } from 'chart.js'
//   import { Chart } from 'react-chartjs-2'
  
  ChartJS.register(
    BarElement,
    LineElement,
    PointElement,
    Legend,
    Tooltip,
    ArcElement,
    CategoryScale,
    LinearScale
  )


const BarChart=()=>{
    return (<>
        
        <Line
        
        data={{
            labels:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
            datasets:[
                {
                   label:'Sales',
                   data:[500,300,444,555,666,777,444,4433,222,3333,555,555],
                   backgroundColor:[
                       'rgba(255,99,132,0.2)',
                    //    'rgba(54,162,235,0.2)'
                   ],
                   borderWidth:2
            }
        ]
        }}
        height={400}
        width={300}
        options={{
            maintainAspectRatio:false,
            legend:{
              labels:{
                fontSize:25,
              }
            }
        }}
        />

    </>)
}
export default BarChart;