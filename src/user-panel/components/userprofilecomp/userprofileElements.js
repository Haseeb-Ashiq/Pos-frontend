import styled from 'styled-components';
import {Link} from 'react-router-dom';
export const UserProfileHeaderTwo=styled.div`
min-height:10vh;
max-width:90%;
margin:20px auto;
border: 1px solid black;
background-color: white;
box-shadow: 2px 2px 0 0 rgba(0,0,0,0.5);
display: flex;
flex-direction: row;
`;
export const UserProfileHeaderTwoLeft=styled.div`
flex:50%;
/* border:1px solid black; */
`;
export const UserProfileHeaderTwoRight=styled.div`
flex:50%;
/* border:1px solid black; */
display: flex;
justify-content: right;
align-items: center;
`;
export const UserProfileEditBtn=styled(Link)`
height:30px;
width:150px;
border:2px solid #c9a73b;
border-radius: 5px;
background:#C9312B;
color:white;
margin:0 10px;
cursor: pointer;
list-style: none;
text-decoration: none;
display: flex;
justify-content: center;
align-items: center;
`;
export const UserProfileContainer=styled.div`
min-height:50vh;
max-width:90%;
margin:20px auto;
box-shadow: 2px 2px 0 0 rgba(0,0,0,0.5);
border: 1px solid black;
display: flex;
flex-direction: column;
`;
export const UserProfileHeader=styled.div`
min-height:7vh;
width:100%;
background-color: #c9a73b;
border-bottom: 1px solid black;
text-align: center;
display: flex;
align-items:center;
justify-content: center;
`;
export const UserProfileBody=styled.div`
min-height:43vh;
width:100%;
/* border:2px solid black; */
display: flex;
flex-direction: row;
`;
export const UserProfileLeft=styled.div`
width:50%;
min-height:43vh;
/* border:1px solid brown; */
display: flex;
justify-content: center;
align-items: center;
`;
export const UserProfileLeftPic=styled.img`
height:70%;
width:50%;
border-radius: 5px;
`;
export const UserProfileRight=styled.div`
width:50%;
min-height:43vh;
/* border:1px solid brown; */
`;
export const UserProfileRecord=styled.div`
min-height:40vh;
width:90%;
margin:10px auto;
border-left:2px dotted black;
display: flex;
flex-direction: column;
p{
    margin:10px 10px;
}
`;