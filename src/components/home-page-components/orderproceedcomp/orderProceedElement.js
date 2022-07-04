import styled from 'styled-components';

export const OrderProceedContainer=styled.div`

min-height:80vh;
max-width: 90vw;
border:1px solid orange;
box-shadow: 5px 5px 0 0 yellow;
margin:100px auto;
display: flex;
color:white;
`;

export const OrderIntoCart=styled.div`
flex:70%;
min-height:100%;
/* width:50%; */
border-right:1px solid whitesmoke;
display: flex;
justify-content: center;
align-items: center;
`;
export const OrderCalculation=styled.div`
flex:30%;
min-height:100%;
/* width:50%; */
border-right:1px solid whitesmoke;
display: flex;
flex-direction: column;
`;
export const InnerOrderTableBox=styled.div`
max-height:90%;
width:90%;
overflow-y:auto ;
border:1px solid whitesmoke;
&::-webkit-scrollbar{
    width:5px;
    cursor: pointer;
}
&::-webkit-scrollbar-track{
    background-color: whitesmoke;
    cursor: pointer;
}
&::-webkit-scrollbar-thumb{
    background-color: yellow;
    
}

`;
export const HomeCartItemImage=styled.img`
height:50px;
width:50px;
border-radius: 5px;
`;

export const CalculationSection=styled.div`
height:20%;
width:100%;
border:1px solid whitesmoke;
display: flex;
justify-content: center;
align-items: center;
`;
export const CalTable=styled.div`
height:90%;
width: 90%;
border:1px solid whitesmoke;
`;
export const CartFormSection=styled.div`
height:40%;
width:100%;
border:1px solid whitesmoke;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
export const HomeCartForm=styled.div`
height:90%;
width: 90%;
border:1px solid whitesmoke;
`;
export const HomeCartInput=styled.input`
height: 50px;
width:95%;
background-color: whitesmoke;
color:black;
text-align: center;
margin:10px auto;
outline:none;
border-radius: 5px;
position: relative;
z-index: 1;
`;
export const HomeCartLabel=styled.div`
position: absolute;
height:17px;
width:100px;
text-align: center;
font-size:small;
border-top:1px solid black;
background-color: transparent;
color:black;
margin:10px 20px;
z-index: 10000000;
`;
export const HomeOrderConfirmPayment=styled.div`
height:40%;
width:100%;
border:1px solid whitesmoke;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
export const HomeOrderPayment=styled.div`
   height:80%;
   width: 100%;
   border-bottom: 1px solid whitesmoke;
   p{
       text-align: center;
       font-size: medium;
       color:whitesmoke;
   }
`;
export const HomeOrderConfirm=styled.div`
 height:20%;
   width: 100%;
   border-bottom: 1px solid whitesmoke;
   display: flex;
   justify-content: center;
   align-items: center;
`;
export const HomeRadiaBtn=styled.input`
height:15px;
width:15px;
margin:10px 20px;
`;
export const HomeConfirmBtn=styled.button`
height:30px;
width:50%;
background-color: whitesmoke;
color:#fff;
background-color:#e31837;
outline: none;
border:none;
cursor: pointer;
&:hover{
    transition:.2s ease-in-out;
    background:#fff;
    color:#010606;
}
`;
export const HomeCancelBtn=styled.button`
height:30px;
width:50%;
background-color: whitesmoke;
color:#fff;
background-color:#e31837;
outline: none;
border:none;
cursor: pointer;
margin:0 4px;
&:hover{
    transition:.2s ease-in-out;
    background:#fff;
    color:#010606;
}
`;