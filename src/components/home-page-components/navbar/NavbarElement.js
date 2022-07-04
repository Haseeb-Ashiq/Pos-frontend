import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { FaPizzaSlice ,FaShoppingCart ,FaUserCircle} from 'react-icons/fa';
export const Nav=styled.nav`
background-color: rgba(255,255,255,0.9);
position:fixed; 
 top:0;
margin:10px 350px;
width:50%;
height:${(props)=> props.open ? "100vh" : "80px"};
display: flex;
flex-direction: column;
z-index: 100000;
border-radius: 15px;
@media screen and (min-width:90vw)
{
    width:100%;
    margin:0px 0px;
    border-radius: 0;
}
`;
export const LeftContainer=styled.div`
flex:80%;
display: flex;
align-items: center;
padding-left: 5%;
@media screen and (max-width:800px)
{
    flex:50%;
}
/* border:1px solid white; */
/* background-color: red; */
`;
export const RightContainer=styled.div`
flex:20%;
display: flex;
justify-content: center;
align-items:center ;
padding-right: 50px;
@media screen and (max-width:800px)
{
    flex:50%;
}
/* background-color: salmon; */
`;

export const NavbarInnerContainer=styled.div`
width:100%;
height: 80px;
display: flex;
`;

export const NavbarLinkContainer=styled.div`
display: flex;
margin:0 auto;
@media screen and (max-width:700px)
{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
`;
export const NavbarLink=styled(Link)`
color:#e31837;
font-size: medium;
list-style: none;
text-decoration: none;
margin:10px;
@media screen and (max-width:700px){
    display: block;
}
`;
export const OpenNavbarLink=styled.button`
width:70px;
height:50px;
background:none;
color:#e31837;
font-size: 45px;
border:none;
cursor: pointer;
/* @media screen and (min-width: 700px){
display:none;
} */
`;
export const LogoImg=styled.img`
width:100px;
height:auto;
`;



export const NavLink=styled(Link)`
color:#e31837;
font-size:2rem;
display:flex;
margin:0 10px;
align-items:center;
text-decoration:none;
cursor:pointer;
@media screen and (max-width:400px){
    position:absolute;
    top:10px;
    left:25px;
}
`;

export const NavCart=styled.div`
color:#e31837;
font-size:2rem;
display:flex;
margin:0 10px;
align-items:center;
text-decoration:none;
cursor:pointer;
@media screen and (max-width:400px){
    position:absolute;
    top:10px;
    left:25px;
}
`;

export const UserIcon=styled(FaUserCircle)`
font-size: 1.5rem;
`;
export const UserProfilePicLogo=styled.img`
width:40px;
height:40px;
border:1px solid #e31837;
position:relative;
border-radius: 50%;
margin:2px 10px;
cursor: pointer;
`;

export const SubMenu=styled.div`
position:absolute;
top:0;
margin:80px auto;
height: 150px;
width:200px;
border:1px solid whitesmoke;
background-color: rgba(255,255,255,0.7);
display: ${(props)=> props.isMenuOpen ? "block" : "none"};
transition:height .8s ease-in;
border-bottom-left-radius: 5px;
border-bottom-right-radius: 5px;
`;
export const SubMenuInner=styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height:100%;
width:100%;
padding: 0;
margin:0;
/* border:1px solid black; */
`;
export const MenuItemLink=styled(Link)`
width:100%;
height:50px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: large;
/* margin:10px 0; */
list-style: none;
text-decoration: none;
color:#e31837;
border-top:1px solid whitesmoke;
text-align: center;
span{
    /* margin:0 50px; */
    text-align: center;
}
`;
export const AddToCartIcon=styled(FaShoppingCart)`
position:relative;
font-size:2rem;
`;
export const CartCounter=styled.span`
position:absolute;
height:20px;
width:20px;
font-size:15px;
top:0;
margin:12px -5px;
background-color:#e31837;
color:#FFF;
border-radius:50%;
text-align:center;
`;
export const CartItemMenu=styled.div`
position:absolute;
height:300px;
width:350px;
display: flex;
flex-direction: column;
justify-content: space-between;
background-color: white;
top:${(props)=>props.isCartOpen ? '80px;' : '-400px'};
margin:0 -150px;
transition: all .8s ease-in-out;
@media screen and (max-width:700px){
    margin:0 -200px;
}
`;
export const CartItemMenuOne=styled.div`
max-height: 270px;
width:100%;
overflow-y: auto;
overflow-x: hidden;
&::-webkit-scrollbar{
    width:5px;
}
&::-webkit-scrollbar-track{
    background:white;
}
&::-webkit-scrollbar-thumb{
    background:orangered;
    border-radius: 5px;
}
`;
export const CartItemMenuTwo=styled.div`
min-height:30px;
width:100%;
display: flex;
border:1px solid whitesmoke;
align-items: center;
`;
export const CartItems=styled.div`
height:100%;
width:100%;
display: flex;
flex-direction: column;
`;
export const CartProcessBtn=styled(Link)`
height:100%;
width:100%;
text-decoration: none;
list-style: none;
background-color:#e31837;
color:#fff;
border:none;
outline: none;
cursor: pointer;
border-radius: 5px;
display: flex;
justify-content: center;
align-items: center;
`;
export const Bars= styled(FaPizzaSlice)`
margin:5px 5px;
color:#e31837;
font-size:3rem;
`;