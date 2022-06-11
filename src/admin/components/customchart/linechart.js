import React from "react";
import './c.css';
const CustomLineChart=()=>{
    return (<>
    <svg viewBox="0 0 500 100" class="chart" >
  
  <polyline
     fill="lightblue"
     stroke="#0074d9"
     stroke-width="2"
     points="
       00,120
       20,60
       40,80
       60,20
       80,80
       100,80
       120,60
       140,100
       160,90
       180,80
       200, 110
       220, 10
       240, 70
       260, 100
       280, 100
       300, 40
       320, 0
       340, 100
       360, 100
       380, 120
       400, 60
       420, 70
       440, 80
     "
   />
  
</svg>
    </>)
}
export default CustomLineChart;