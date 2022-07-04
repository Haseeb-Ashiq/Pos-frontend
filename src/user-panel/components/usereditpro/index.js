import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clientProfileUpdate } from '../../../Redux/Actions/Client.Action';
import { EditUserProfileBtn, EditUserProfileColumn, EditUserProfileImage, EditUserProfileRow, EditUserTextBox, EditUserTextBoxLabel, FileUploadLabel, UserEditProfileContainer } from './editprofileElements';
import {FaCamera} from 'react-icons/fa';
function EditUserProfileSection({userRecord}) {
    const [fullname,setFullName]=useState(userRecord.fullname);
    const [username,setUserName]=useState(userRecord.username);
    const [email,setEmail]=useState(userRecord.email);
    const [phone,setPhone]=useState(userRecord.phone);
    const [cnic,setCNIC]=useState(userRecord.cnic);
    const [city,setCity]=useState(userRecord.city);
    const [address,setAddress]=useState(userRecord.permanentAddress);
    const dispatch=useDispatch();
    const client=useSelector(state=>state.Client);
    const [img,setImg]=useState(`http://localhost:5000/public/${userRecord.empPic}`);
    const [fileImg,setFileImg]=useState('')
    useEffect(()=>{
       
    },[])
    const imgWindow=()=>{
       let fileUploadId=document.getElementById('fileUpload');
        fileUploadId.click();
    }

    const imgUploader=(e)=>{
        setFileImg(e.target.files[0])
        setImg(URL.createObjectURL(e.target.files[0]))
    }
    
    const updateHandler=()=>{
        const form=new FormData();
        form.append('fullname',fullname);
        form.append('username',username);
        form.append('email',email);
        form.append('phone',phone);
        form.append('cnic',cnic);
        form.append('city',city);
        form.append('permanentAddress',address);
        form.append('clientPicture',fileImg);
        console.log(typeof fileImg)
        dispatch(clientProfileUpdate(form,userRecord._id))
    }
    return (
        <UserEditProfileContainer>
            {
                client.isClientUpdated ? console.log('updated') : console.log('waiting')
            }
            {
                console.log(img)
            }
            <EditUserProfileRow>
               <EditUserProfileColumn>
                   <EditUserProfileImage src={img}/>
                   <FileUploadLabel onClick={imgWindow}><FaCamera/></FileUploadLabel>
                   <EditUserTextBox type={'file'} id='fileUpload' onChange={imgUploader} hidden/>
               </EditUserProfileColumn>
            </EditUserProfileRow>
            <EditUserProfileRow>
                <EditUserProfileColumn>
                    <EditUserTextBoxLabel>Fullname</EditUserTextBoxLabel>
                    <EditUserTextBox type={'text'} value={fullname} onChange={(e)=>setFullName(e.target.value)}/>
                </EditUserProfileColumn>
                <EditUserProfileColumn>
                    <EditUserTextBoxLabel>Username</EditUserTextBoxLabel>
                    <EditUserTextBox type={'text'} value={username} onChange={(e)=>setUserName(e.target.value)}/>
                </EditUserProfileColumn>
            </EditUserProfileRow>

            <EditUserProfileRow>
                <EditUserProfileColumn>
                    <EditUserTextBoxLabel>Email</EditUserTextBoxLabel>
                    <EditUserTextBox type={'email'} value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </EditUserProfileColumn>
                <EditUserProfileColumn>
                    <EditUserTextBoxLabel>CNIC</EditUserTextBoxLabel>
                    <EditUserTextBox type={'text'} value={cnic} onChange={(e)=>setCNIC(e.target.value)}/>
                </EditUserProfileColumn>
            </EditUserProfileRow>

            <EditUserProfileRow>
                <EditUserProfileColumn>
                    <EditUserTextBoxLabel>Phone</EditUserTextBoxLabel>
                    <EditUserTextBox type={'text'} value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                </EditUserProfileColumn>
                <EditUserProfileColumn>
                    <EditUserTextBoxLabel>City</EditUserTextBoxLabel>
                    <EditUserTextBox type={'text'} value={city} onChange={(e)=>setCity(e.target.value)}/>
                </EditUserProfileColumn>
            </EditUserProfileRow>
            <EditUserProfileRow>
                <EditUserProfileColumn>
                    <EditUserTextBoxLabel>Address</EditUserTextBoxLabel>
                    <EditUserTextBox type={'text'} value={address} onChange={(e)=>setAddress(e.target.value)} multiple />
                </EditUserProfileColumn>
            </EditUserProfileRow>
            <EditUserProfileRow>
                <EditUserProfileBtn onClick={updateHandler}>Update</EditUserProfileBtn>
            </EditUserProfileRow>
        </UserEditProfileContainer>

    )
}

export default EditUserProfileSection;