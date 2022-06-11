import React, { useEffect } from 'react';
const CustomBarChart=()=>{
    useEffect(()=>{
       const drawBar=(l)=>{
         let html='';
         let x=0;
         for(let i=0;i<l.length;i++)
         {
              html+=`<rect x=${x} y=${350-l[i]} width='20' height=${l[i]} fill='orange'/>`;
              x+=25;
         }
         document.getElementById('bar_chart').innerHTML=html;
       }
drawBar([50,25,34,12,120,200,56,23,34,11])
    },[])
    return (<>
    <svg width='500' height='350' id='bar_chart' style={{border:'1px solid black'}}>
       
    </svg>
    </>)
}
export default CustomBarChart;