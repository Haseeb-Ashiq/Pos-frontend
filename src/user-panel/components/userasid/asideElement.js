import styled from 'styled-components';
import {Link} from 'react-router-dom';
export const UserSideBarContainer=styled.div`
min-height:82vh;
width:80%;
/* border:1px solid black; */
margin:25px auto;
display: flex;
flex-direction: column;
`;
export const UserSideBarUpper=styled.div`
min-height:20vh;
width:80%;
margin:0 auto;
border-bottom: 1px solid black;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
export const UserSideBarImage=styled.img`
height:120px;
width:120px;
border:5px solid #C9A73B;
border-radius: 50%;
`;
export const UserSideBarBottom=styled.div`
min-height:60vh;
width:80%;
margin:5px auto;
/* border:1px solid black; */
display: flex;
flex-direction: column;
/* justify-content: center; */
align-items: center;
`;
export const UserSideBarLinks=styled(Link)`
height:40px;
width:95%;
border:2px solid #C9A73B;
/* background:white; */
/* color:black; */
border-radius: 5px;
margin:5px auto;
list-style: none;
text-decoration: none;
display: flex;
justify-content: center;
align-items: center;
`;