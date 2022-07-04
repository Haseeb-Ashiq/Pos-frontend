import styled from 'styled-components';


export const CartItemCards=styled.div`
height:100px;
width:100%;
border:1px solid whitesmoke;
display: flex;
flex-direction: row;
`;
export const CartItemImg=styled.div`
width:calc( 100% / 3 );
height:100%;
border-right:1px solid whitesmoke;
display: flex;
justify-content: center;
align-items: center;
`;
export const CartItemDesc=styled.div`
width:calc( 100% / 3 );
height:100%;
border-right:1px solid whitesmoke;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
p{
    font-size: smaller;
    color:black;
}
span{
    font-size: smaller;
}
`;
export const CartItemControll=styled.div`
width:calc( 100% / 3 );
height:100%;
/* border:1px solid black; */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`;
export const CartItemImage=styled.img`
width:70%;
height:75%;
border-radius: 50%;
`;
export const CartItemTextBox=styled.input`
height:20px;
width:20px;
text-align: center;
margin:0 2px;
`;
export const CartItemPlus=styled.button`
height:30px;
width:30px;
border-radius:50%;
background-color: green;
color:white;
border:none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
margin:0 2px;
`;
export const CartItemMinus=styled.button`
height:30px;
width:30px;
border-radius:50%;
background-color: red;
color:white;
display: flex;
justify-content: center;
align-items: center;
border:none;
cursor: pointer;
margin:0 2px;
`;