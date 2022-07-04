import React, { useEffect, useRef } from 'react'
import { UserSideBarBottom, UserSideBarContainer, UserSideBarImage, UserSideBarLinks, UserSideBarUpper } from './asideElement'
import './style.css';
function UserSideBar() {
const ref=useRef();
useEffect(()=>{
    console.log(window.location.pathname)
    // ClickEventHandler();
},[])

const ClickEventHandler=()=>{
let arr=Array.from(ref.current.children)
console.log(arr);
for (const ele in arr) {
   arr[ele].addEventListener('click',function(e){
       for(let j=0;j<arr.length;j++)
       {
           arr[j].classList.remove('active');
       }
    arr[ele].classList.add('active');
   })
   
}
}
const changeHandle=()=>{
    ClickEventHandler();
}
    return (
   <>
   <UserSideBarContainer>
       <UserSideBarUpper>
          <UserSideBarImage src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80'/>
       </UserSideBarUpper>
       <UserSideBarBottom>
          <UserSideBarLinks className={window.location.pathname==='/user-home' ? 'active' : 'deactive'} to={'/user-home'}><span>Home</span></UserSideBarLinks>
          <UserSideBarLinks className={window.location.pathname==='/user-profile' ? 'active' : 'deactive'} to={'/user-profile'}><span>Profile</span></UserSideBarLinks>
          <UserSideBarLinks className={window.location.pathname==='/user-order' ? 'active' : 'deactive'} to={'/user-order'}><span>Order</span></UserSideBarLinks>
          {/* <UserSideBarLinks className={window.location.pathname==='/user-home' ? 'active' : 'deactive'} to={'/user-home'}><span>Settings</span></UserSideBarLinks> */}
       </UserSideBarBottom>
   </UserSideBarContainer>
  
   </>
  )
}

export default UserSideBar