import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
const Navbar=()=>{
    return (<>
    <div className='nav-container'>
        <div className='pic-portion'>
               <div className='img-box'>
                   <img src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80'/>
               </div>
               <div className='edit-profile'>
                   <EditOutlinedIcon onClick={()=>alert('edit profile')}/>
               </div>
        </div>
        <div className='link-portion'>
             <ul>
                 <li className='active'><Link to={'/'} >Home</Link></li>
                 <li><Link to={'/products'}>Products</Link></li>
                 <li><Link to={'/orders'}>Orders</Link></li>
                 <li><Link to={'/pos'}>POS</Link></li>

             </ul>
        </div>
    </div>
    </>)
}
export default Navbar;