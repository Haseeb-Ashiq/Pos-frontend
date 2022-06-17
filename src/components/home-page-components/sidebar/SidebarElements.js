import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {FaTimes} from 'react-icons/fa';

export const SidebarContainer=styled.aside`
position:fixed;
z-index:999;
height:100%;
width:350px;
background-color:#ffc500;
display:grid;
align-items:center;
top:0;
transition:0.3s ease-in-out;
right:${({isOpen})=>(isOpen ? '0' : '-1000px')};
@media screen and (max-width:400px){
    width:100%;
}
`;

export const CloseIcon=styled(FaTimes)`
color:#000;
`;

export const Icon=styled.div`
position:absolute;
top:1.2rem;
right:1.5rem;
background:transparent;
border:transparent;
font-size:2rem;
cursor:pointer;
outline:none;
`;

export const SidebarMenu=styled.div`
display:grid;
grid-template-columns:1fr;
grid-template-rows;repeat(3,80px);
text-align:center;
@media screen and (max-width:480px){
    grid-template-rows:repeat(3,60px);
}
`;

export const SidebarLink=styled(Link)`
display:flex;
align-items:center;
margin:10px 0;
justify-content:center;
font-size:1.5rem;
text-decoration:none;
list-style:none;
trasition:.2s ease-in-out;
color:#000;
cursor:pointer;
&:hover{
 color:#e31837;
 transition:.2s ease-in-out;   
}
`;

export const SideBtnWrap=styled.div`
display:flex;
flex-direction:column;
justitfy-content:center;
// align-items:center;
`;

export const SidebarRoute=styled(Link)`
background-color:#e31837;
white-space:nowrap;
width:100px;
padding:16px 64px;
margin:5px auto;
color:#fff;
font-size:16px;
outline:none;
border:none;
cursor:pointer;
transition:.2s ease-in-out;
text-decoration:none;
&:hover{
    transition:.2s ease-in-out;
    background:#fff;
    color:#010606;
}
`;