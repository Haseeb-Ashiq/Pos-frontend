import React from 'react';
import Navbar from '../navbar/navbar';
import './layout.css';
const Layout=(props)=>{
    return (<>
       <div className='main-admin-container'>
         <div className='layout-side-bar'>
            <Navbar/>
         </div>
         <div className='layout-body'>
             {
                 props.children
             }
             </div>     
       </div>

    </>)
}
export default Layout;