import styled from 'styled-components';
import {Link} from 'react-router-dom';
export const SignupContainer=styled.div`
min-height:100vh;
max-width:100vw;
background:#150f0f;
display:flex;
justify-content:center;
align-items:center;
`;

export const SignupWindow=styled.div`
min-height:70vh;
width:70%;
// border:3px solid rgba(255,255,255,0.5);
border-radius:5px;
box-shadow:8px 8px #fdc500,
-8px -8px rgba(255,255,255,0.5);
color:white;
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
transition:.2s ease-in;
&:hover{
    box-shadow:8px 8px 3px 3px #fdc500,
-8px -8px 3px 3px rgba(255,255,255,0.5);
}
@media screen and (max-width:500px)
{
    width: 100%;
}
@media screen and (max-height:600px){
    min-height: 100vh;
}
`;

export const PictureSide=styled.div`
min-height:70vh;
width:50%;
border-right:1px dotted #fff;
border-top-left-radius:5px;
border-bottom-left-radius:5px;
background-image: url('https://flyingdelivery.pk/wp-content/uploads/2021/11/pizza-recipe-pizza-to-make-at-home-quick-and-easy-recipes.jpg');
background-position:center;
background-size:cover;
@media screen and (max-width:500px)
{
    display:none;
}
`;

export const SignupSignin=styled.div`
min-height:70vh;
width:50%;
// border:1px solid #fff;
border-top-right-radius:5px;
border-bottom-right-radius:5px;
@media screen and (max-width:500px)
{
    width:100%;
}

@media screen and (max-height:600px){
    min-height: 100%;
}
`;

export const SignupForm = styled.div`
height:70vh;
width:90%;
// border:1px solid white;
margin:0 auto;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`;

export const Input=styled.input`
width:90%;
height:50px;
margin:10px auto;
outline:none;
border-radius:5px;
border:2px solid #c9a73b;
`;

export const CheckBox=styled.input`
width:100%;
height:20px;
margin:10px auto;
outline:none;
// border:1px solid white;
position:relative;
`;

export const SignuLoginBtn=styled.button`
font-size:1rem;
padding:1rem 4rem;
width:100%;
border:none;
border-radius:3px;
background:#e31837;
display: flex;
justify-content: center;
align-items: center;
color:#fff;
transition:.2s ease-out;
&:hover{
    background:#ffc500;
    cursor:pointer;
    color:#000;
    transition:.2s ease-out;
}
`;

export const BtnSection=styled.div`
display:flex;
flex-direction:row;
// border:1px solid white;
height:10%;
width:90%;
`;

export const LinkSection=styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
// border:1px solid white;
height:10%;
width:90%;

@media screen and (max-height:600px){
    height: 20%;
}
`;

export const SignupLoginDiv= styled.div`
width:50%;
height:100%;
// border:1px solid green;
display:flex;
flex-direction:row;
`;

export const SwtichLink=styled(Link)
`color:#e31837;
font-size:1rem;
margin:0 10px;
text-decoration:none;
list-style: none;
`;