import React,{useEffect, useState} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import { signup } from '../../../Redux/Actions/Client.Action';
import { BtnSection, CheckBox, Input, LinkSection, 
    PictureSide, SignuLoginBtn, 
    SignupContainer, SignupForm, 
    SignupLoginDiv, SignupSignin, SignupWindow, SwtichLink } 
    from './SignupElements';
import {Redirect} from 'react-router-dom';    

function Signup() {
    const [fullname,setFullName]=useState('');
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const [picture,setPicture]=useState('');
const dispatch=useDispatch();
const client=useSelector(state=>state.Client);
useEffect(()=>{
    console.log(client.isRegisterd);
},[])
const submitform=e=>{
    e.preventDefault();
    const form=new FormData();
    form.append('fullname',fullname);
    form.append('email',email);
    form.append('password',password);
    form.append('clientPicture',picture)
    dispatch(signup(form));
}

  return (
    <>
    <SignupContainer>
        <SignupWindow>
            <PictureSide/>
            <SignupSignin>
                <SignupForm>
                    <form onSubmit={submitform} encType='multipart/form-data'>
                   <Input value={fullname} onChange={(e)=>setFullName(e.target.value)} placeholder='Enter fullname (ex:Muhammad Ali)'/>
                   <Input value={email} onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='Enter email forexaple@gmail.com'/>
                   <Input value={password} onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='Enter password'/>
                   <Input onChange={(e)=>setPicture(e.target.files[0])} type='file'/>
                   <BtnSection>
                      <SignupLoginDiv>
                          <SignuLoginBtn type='submit'>Signup</SignuLoginBtn>
                      </SignupLoginDiv>
                   </BtnSection>
                   <LinkSection>
                   If you have already account click <SwtichLink to='/user-login'>Login</SwtichLink>
                   </LinkSection>
                   </form>
                </SignupForm>
            </SignupSignin>
        </SignupWindow>
    </SignupContainer>
</>
  )
}

export default Signup;