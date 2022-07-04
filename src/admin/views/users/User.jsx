import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux';
import './style.css';
import Layout from '../../components/layout/Layout';
import {FaUsers,FaTrash,FaEye,FaPrint,FaUserAlt,FaUserAltSlash} from 'react-icons/fa';
import {Grid, Table, TableCell, TableContainer, TableHead, TableRow ,TableBody,Button, TextField, Dialog, DialogTitle, DialogContent} from '@mui/material';
import UserCards from '../../components/user/UserCards';
function User() {
   const client=useSelector(state=>state.Client)
const [userInfo,setUserInfo]=useState('');
const [open,setOpen]=useState(false);
const [searchVal,setSearchVal]=useState('');
const [searchedUser,setSearchedUser]=useState([]);
    useEffect(()=>{

    },[])

    const userInfoHandle=(id)=>{
        setUserInfo(client.clients.find(c=>c._id===id))
        setOpen(true);
    }
    const userSearchHandler=(e)=>{
        setSearchVal(e.target.value);
        if(searchVal!='')
        {
         let newArr=client.clients.filter((cl)=>{
             return Object.values(cl)
             .join(' ')
             .toLocaleLowerCase()
             .includes(searchVal.toLocaleLowerCase())
         })
         setSearchedUser(newArr);
        }
        else{
            setSearchedUser(client.clients);
        }
    }
    return (
    <>

<Layout>
   
<div className="user-container">
   <div className="user-inner-container">

   <div className="user-header">
       <div className="user-tags">
       <h1><FaUsers id="user-icon"/></h1>
        <h1><span id="user-text">Users</span></h1>
       </div>
       <div className="user-controlls">
           <div className="user-search">
               <TextField className='user-input-search' value={searchVal} onChange={userSearchHandler} variant={'standard'} placeholder="search..."/>
           </div>
           <div className="other-controlls">
           <Button variant={'contained'} color={'success'}><FaPrint/></Button>
           <input type="radio" style={{margin:'0 5px'}} onClick={(e)=>alert(e.target.value)} name="gender"/> All
           <input type="radio" style={{margin:'0 5px'}} onClick={(e)=>alert(e.target.value)} name="gender"/> Male
           <input type="radio" style={{margin:'0 5px'}} onClick={(e)=>alert(e.target.value)} name="gender"/> Female
           <input type="radio" style={{margin:'0 5px'}} onClick={(e)=>alert(e.target.value)} name="gender"/> Active
           <input type="radio" style={{margin:'0 5px'}} onClick={(e)=>alert(e.target.value)} name="gender"/> Deactive
                {/* <Button variant={'contained'} color={'info'} style={{margin:'0 5px'}}><FaEye/></Button>
                <Button variant={'contained'} color={'info'} style={{margin:'0 0px'}}><FaEye/></Button> */}
           </div>
       </div>
        
    </div>

    <div className="user-table">
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow style={{background:'#0000ff'}}>
                        <TableCell style={{color:'#fff'}}>Sr.No</TableCell>
                        <TableCell style={{color:'#fff'}}>Image</TableCell>
                        <TableCell style={{color:'#fff'}}>Name</TableCell>
                        <TableCell style={{color:'#fff'}}>Username</TableCell>
                        <TableCell style={{color:'#fff'}}>Email</TableCell>
                        <TableCell style={{color:'#fff'}}>Status</TableCell>
                        <TableCell style={{color:'#fff'}}>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        client.clients.map((_client,_index)=>(
                            <>
                            <TableRow>
                                <TableCell>
                                    {++_index}
                                </TableCell>
                                <TableCell></TableCell>
                                <TableCell>{_client.fullname}</TableCell>
                                <TableCell>{_client.username}</TableCell>
                                <TableCell>{_client.email}</TableCell>
                                <TableCell></TableCell>
                                <TableCell><Button variant={'contained'} color={'error'}><FaTrash/></Button>
                                <Button variant={'contained'} color={'info'} style={{margin:'0 5px'}}><FaEye/></Button>
                                </TableCell>
                            </TableRow>
                            </>
                        ))
                    }
                    
                </TableBody>
            </Table>
        </TableContainer>
    </div>


      <div className="user-profiles">

{
    searchedUser.length > 0 ? searchedUser.map((_client)=>(
        <>
          <UserCards _client={_client} userInfoHandle={userInfoHandle}/>
        </>
    ))
    :
    client.clients.map((_client)=>(
        <>
         <UserCards _client={_client} userInfoHandle={userInfoHandle}/>
        </>
    ))
}

      </div>

   </div>
    

</div>
<Dialog open={open} onClose={()=>setOpen(false)} maxWidth={'md'}>
<DialogTitle>User Info</DialogTitle>
   <DialogContent dividers>
         
         <div className="user-info-container">
                <div className="img-content">
                <img src={`http://localhost:5000/public/${userInfo.empPic}`} id="user-info"/>
                </div>
                <div className="info-content">
                   <div className="info-user-box">
                       <p>Status:{userInfo.active ? <span style={{color:'green',margin:'0 5px'}}>Active</span> : <span style={{color:'red',margin:'0 5px'}}>Deactive</span>}</p>
                       <p>Name:<span style={{margin:'0 5px'}}>{userInfo.fullname}</span></p>
                       <p>Username:<span style={{margin:'0 5px'}}>{}</span></p>
                       <p>Email:<span style={{margin:'0 5px'}}>{userInfo.email}</span></p>
                       <p>CNIC:<span style={{margin:'0 5px'}}>{userInfo.cnic}</span></p>
                       <p>Province:<span style={{margin:'0 5px'}}>{userInfo.province}</span></p>
                       <p>City:<span style={{margin:'0 5px'}}>{userInfo.city}</span></p>
                       <p>P.Address:<span style={{margin:'0 5px'}}>{userInfo.permanentAddress}</span></p>

                   </div>
                </div>
         </div>

       </DialogContent>
</Dialog>
</Layout>

    </>
  )
}

export default User