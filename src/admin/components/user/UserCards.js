import React from 'react'
import { useDispatch } from 'react-redux'
import {FaUserAlt,FaUserAltSlash,FaEye} from 'react-icons/fa';
import {clientStatusupdate} from '../../../Redux/Actions/Client.Action';
import {Button} from '@mui/material';
function UserCards({_client,userInfoHandle}) {
    const dispatch=useDispatch();
  return (
    <>
    <div className="user-profile">
{
    _client.active ? <div className="active-circle"></div> : <div className='deactive-circle'></div>
}
             
              <div className="img-box">
              <img id="prof-img" src={`http://localhost:5000/public/${_client.empPic}`}/>
              </div>
              <div className="info-box">
                 <div className="btn-sec">
                       <div className="btn-personal">
                           {
                               _client.active ? 
                               <Button 
                               variant={'contained'} 
                               color={'success'} 
                               onClick={()=>dispatch(clientStatusupdate(false,_client._id))}
                               >
                                   <FaUserAlt/>
                                   </Button>
                                   :
                                   <Button 
                                   variant={'contained'}
                                    color={'success'} 
                                    onClick={()=>dispatch(clientStatusupdate(true,_client._id))}><FaUserAltSlash/></Button>
                           }
                       
                <Button variant={'contained'} color={'info'} style={{margin:'0 5px'}} onClick={()=>userInfoHandle(_client._id)}><FaEye/></Button>
                <Button variant={'contained'} color={'info'} style={{margin:'0 0px'}}><FaEye/></Button>
                       </div>
               
                 </div>
                 <div className="info-detail">
                 <h3>{_client.fullname}</h3>
                  <p>{_client.email}</p>
                 </div>
              </div>
          </div>
    </>
  )
}

export default UserCards