import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const NavbarContainer=styled.nav`
background-color: #000;
margin:10px auto;
max-width:50vw;
height:${(props)=> props.open ? "100vh" : "80px"};
display: flex;
flex-direction: column;
border-radius: 15px;
`;

export const LeftContainer=styled.div`
flex:70%;
display: flex;
align-items: center;
padding-left: 5%;
border:1px solid white;
/* background-color: red; */
`;
export const RightContainer=styled.div`
flex:30%;
display: flex;
justify-content: center;
align-items:center ;
padding-right: 50px;
/* background-color: salmon; */
`;

export const NavbarLinkContainer=styled.div`
display: flex;
margin:0 auto;
@media screen and (max-width:700px)
{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
`;

export const NavbarLink=styled(Link)`
color:white;
font-size: medium;
list-style: none;
text-decoration: none;
margin:10px;
@media screen and (max-width:700px){
    display: none;
}
`;

export const NavbarExtendedLink=styled(Link)`
color:white;
font-size: x-large;
list-style: none;
text-decoration: none;
margin:10px;
`;

export const NabbarInnerContainer=styled.div`
width:100%;
height: 80px;
display: flex;
`;

export const OpenNavbarLink=styled.button`
width:70px;
height:50px;
background:none;
color:white;
font-size: 45px;
border:none;
cursor: pointer;
@media screen and (min-width: 700px){
display:none;
}
`;

export const ExtendedContainer=styled.div`
display: flex;
flex-direction: column;
`;