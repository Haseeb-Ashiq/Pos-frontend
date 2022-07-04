import styled from 'styled-components';

export const UserLayoutContainer=styled.div`
max-height:100vh;
max-width: 100vw;
display: flex;
/* border:1px solid black; */
`;
export const UserAsideBarSection=styled.div`
min-height: 90vh;
width: 20%;
border-left:1px solid black;
position: fixed;
left:0;
@media screen and (max-width:600px){
    display: none;
}
`;
export const UserPanelContentBody=styled.div`
max-height: 90vh;
width: 80%;
border-left:1px solid black;
position: fixed;
right:0;
margin:0 auto;
overflow-y:auto;
@media screen and (max-width:600px){
    width: 100%;
}
`;
