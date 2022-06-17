import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clientLogin } from '../../../Redux/Actions/Client.Action';
import { BtnSection, CheckBox, Input, LinkSection, 
    PictureSide, SignuLoginBtn, 
    SignupContainer, SignupForm, 
    SignupLoginDiv, SignupSignin,
     SignupWindow, SwtichLink } from './LoginElements';
// import {Redirect} from 'react-router-dom';

function Login() {
const dispatch = useDispatch();
const client=useSelector(state=>state.Client);
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
useEffect(()=>{
console.log(client.isLogedIn);
},[])
const loginInForm=e=>{
    e.preventDefault();
    dispatch(clientLogin({email:email,password:password}));
}
  return (
   <>
       <SignupContainer>
           <SignupWindow>
               <PictureSide/>
               <SignupSignin>
                   <form onSubmit={loginInForm} encType='multipart/form-data'>                       
                   <SignupForm>
                      <Input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter username or email'/>
                      <Input value={password} onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='Enter password'/>
                      <BtnSection>
                         <SignupLoginDiv>
                             <SignuLoginBtn type='submit'>Login</SignuLoginBtn>
                         </SignupLoginDiv>
                         <SignupLoginDiv>
                             <CheckBox type='checkbox'/> <span style={{width:'80%',fontSize:'smaller',margin:'10px auto'}}>Keep me login?</span>
                         </SignupLoginDiv>
                      </BtnSection>
                      <LinkSection>
                      If you not have an account click <SwtichLink to='/user-signup'>Signup</SwtichLink>
                      </LinkSection>
                   </SignupForm>
                   </form>
               </SignupSignin>
           </SignupWindow>
       </SignupContainer>
   </>
  )
}

export default Login;