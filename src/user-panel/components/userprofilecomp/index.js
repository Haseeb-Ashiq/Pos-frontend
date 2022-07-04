import React, { useState } from 'react'
// import { useSelector } from 'react-redux';
import { UserProfileBody, UserProfileContainer, UserProfileEditBtn, UserProfileHeader, UserProfileHeaderTwo, UserProfileHeaderTwoLeft, UserProfileHeaderTwoRight, UserProfileLeft, UserProfileLeftPic, UserProfileRecord, UserProfileRight } from './userprofileElements';

function UserProfileSection({userRecord}) {
const [user,setUser]=useState(JSON.parse(window.localStorage.getItem('clientCredentials')))
    return (
    <>
    {
        console.log(userRecord)
    }
    <UserProfileHeaderTwo>
        <UserProfileHeaderTwoLeft>
            <h2>User Profile</h2>
        </UserProfileHeaderTwoLeft>
        <UserProfileHeaderTwoRight>
            <UserProfileEditBtn to={'/edit-user-profile'}>Edit Profile</UserProfileEditBtn>
        </UserProfileHeaderTwoRight>
    </UserProfileHeaderTwo>
        <UserProfileContainer>
            <UserProfileHeader>
                <h3>{userRecord?.fullname}</h3>
            </UserProfileHeader>
            <UserProfileBody>
                <UserProfileLeft>
                    <UserProfileLeftPic src={`https://food-deliver-apis.herokuapp.com/public/${userRecord?.empPic}`}/>
                </UserProfileLeft>
                <UserProfileRight>
                   <UserProfileRecord>
                       <p><b>Username</b>: {userRecord.username}</p>
                       <p><b>Email</b>: {userRecord.email}</p>
                       <p><b>Phone</b>: {userRecord.phone}</p>
                       <p><b>CNIC</b>: {userRecord.cnic}</p>
                       <p><b>City</b>: {userRecord.city}</p>
                       <p><b>Address</b>: {userRecord.permanentAddress}</p>
                       <p><b>Status</b>: {userRecord.active ? <>Active</> : <>N/A</>}</p>
                   </UserProfileRecord>
                </UserProfileRight>
            </UserProfileBody>
        </UserProfileContainer>
    </>
  )
}

export default UserProfileSection;