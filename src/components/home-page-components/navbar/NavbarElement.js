import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { FaPizzaSlice ,FaShoppingCart ,FaUserCircle} from 'react-icons/fa';
export const Nav=styled.nav`
background:transparent;
height:80px;
display:flex;
justify-content:center;
font-weight:700;
position:sticky;
top:0;
`;

export const NavLink=styled(Link)`
color:#fff;
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
export const AddToCartIcon=styled(FaShoppingCart)`
position:relative;
font-size:2rem;
`;
export const UserLoginIcon=styled(FaUserCircle)`
position:absolute;
font-size:2rem;
`;
export const CartCounter=styled.span`
position:absolute;
height:20px;
width:20px;
font-size:15px;
top:0;
margin:15px 25px;
background-color:#fff;
color:#000;
border-radius:50%;
text-align:center;
`;
export const NavIcon=styled.div`
display:block;
position:absolute;
top:0;
right:0;
cursor:pointer;
color:#fff;
p{
    transform:translate(-175%,100%);
    font-weight:bold;
}
`;

export const Bars= styled(FaPizzaSlice)`
position:absolute;
font-size:2rem;
 transform:translate(-50%,-15%)
`;