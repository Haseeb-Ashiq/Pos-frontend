import styled from 'styled-components';
export const UserEditProfileContainer=styled.div`
min-height:50vh;
max-width:90%;
margin:20px auto;
box-shadow: 2px 2px 0 0 rgba(0,0,0,0.5);
border: 1px solid black;
display: flex;
flex-direction: column;
`;
export const EditUserProfileRow=styled.div`
min-height: 10vh;
width:95%;
margin:10px auto;
/* border:1px solid black; */
display: flex;
flex-direction: row;
flex-wrap: wrap;
@media screen and (max-width:900px){
    display: flex;
    flex-direction: column;
}
`;
export const EditUserProfileColumn=styled.div`
width:50%;
min-height:10vh;
/* border:1px solid black; */
@media screen and (max-width:900px){
    /* display: flex;
    flex-direction: column; */
    width:100%;
}
`;
export const EditUserTextBox=styled.input`
height:50%;
width:95%;
margin:25px 10px;
position: relative;
transition: all 200ms ease-in;
border:1px solid #c9a73b;
outline:none;
border-radius: 10px;
&:focus{
    border:2px solid #c9a73b;
}
@media screen and (max-width:900px){
    /* display: flex;
    flex-direction: column; */
    height:30px;
}
`;
export const EditUserTextBoxLabel=styled.label`
height:20px;
width:auto;
/* border:1px solid black; */
position:absolute;
margin : 5px 10px;
z-index: 10000;
transition: all 200ms ease-in;

`;
export const EditUserProfileBtn=styled.button`
height:40px;
width:20%;
background-color: #c9a73b;
margin:0 10px;
border:none;
border-radius: 5px;
cursor: pointer;
transition: all .5s ease-in;
&:hover{
    box-shadow: 2px 2px 5px 1px rgba(0,0,0,0.5);
}
`;
export const EditUserProfileImage=styled.img`
height:150px;
width:150px;
border:5px solid #C9A73B;
border-radius: 50%;
position: relative;
`;
export const FileUploadLabel=styled.div`
position:absolute;
display: flex;
justify-content: center;
align-items: center;
height:30px;
width:30px;
border-radius: 50%;
background:#C9A73B;
color:white;
margin:-25px 100px;
cursor: pointer;
transition:all .5s ease-in;
&:hover{
    box-shadow: 2px 2px 5px 1px rgba(0,0,0,0.5);
}
`