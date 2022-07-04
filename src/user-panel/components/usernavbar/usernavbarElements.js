import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const NavContainer=styled.div`
min-height:10vh;
max-width:100vw;
border-bottom:1px solid black;
position: sticky;
top:0;
background-color: whitesmoke;
display: flex;
flex-direction: row;
`;
export const UserNavWrap=styled.div`
width:90%;
height:auto;
margin:0 auto;
display: flex;
flex-direction: row;
`;
export const UserNavLeftSide=styled.div`
flex:50%;
/* display: flex; */
/* border:1px solid black; */
`;
export const UserNavRightSide=styled.div`
flex:50%;
/* border:1px solid black; */
`;
export const UserLogoImg=styled.img`
width:100px;
height:auto;
`;