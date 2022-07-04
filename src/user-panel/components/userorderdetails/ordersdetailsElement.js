import styled from 'styled-components';

export const OrderDetailsContainer=styled.div`
min-height:50vh;
max-width:90%;
margin:20px auto;
box-shadow: 2px 2px 0 0 rgba(0,0,0,0.5);
border: 1px solid black;
/* display: flex;
flex-direction: column; */
`;
export const StepContainer=styled.div`
min-height: 20px;
  max-width:70vw;
  margin:10px auto;
  /* border:1px solid red; */
  display: flex;
  justify-content: space-between;
`;
export const StepOne=styled.div`
    height:50px;
    width:50px;
    border:1px solid #c9a73b;
    background-color: white;
    border-radius: 50%;
    position: relative;
    &::before{
        content: '.';
    width:457px;
    height:5px;
    background-color: gray;
    display: block;
    margin:20px 50px;
    }
`;
export const StepTwo=styled.div`
border-radius: 50%;
    height:50px;
    width:50px;
    border:1px solid #c9a73b;
    background-color: white;
   position: relative;
   &::after{
    content: '.';
    width:457px;
    height:5px;
    background-color: gray;
    display: block;
    margin:20px 50px;
   }
`;
export const StepThree=styled.div`
border-radius: 50%;
    height:50px;
    width:50px;
    border:1px solid #c9a73b;
    background-color: white;
   position: relative;
`;
export const StepOneChild=styled.div`
position: absolute;
    background-color:#c9a73b ;
    display: block;
    margin:-25px 50px;
    /* transition: width .8s ease; */
`;
export const StepTwoChild=styled.div`
position: absolute;
    background-color:#c9a73b;
    display: block;
    margin:20px 50px;
    /* transition: width .8s ease; */
`;
export const StepOneIcon=styled.div`
    position: absolute;
    margin:-30px 15px;
    height:20px;
    width:20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const StepTwoIcon=styled.div`
 position: absolute;
    margin:15px 15px;
    height:20px;
    width:20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const StepThreeIcon=styled.div`
 position: absolute;
    margin:15px 15px;
    height:20px;
    width:20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const OrderProcessHeader= styled.div`
 min-height:20%;
    width:100%;
    border-bottom: 1px solid black;
    /* background: #DF7861; */
    /* background-color: #2E0249; */
    background-color: whitesmoke;
    box-shadow: 1px 1px 1px 1px rgba(0, 0,0, 0.5);
    border-radius: 5px;
    display: flex;
`;
export const OrderRecieveInfo= styled.div`
 margin:20px 20px;
    color:black;
    flex:30%;
`;
export const Date=styled.div`
span{
    margin-top:-5px;
}
`;
export const OrderId=styled.div`
 margin:5px 20px;
`;
export const OrderStatusSection=styled.div`
flex:70%;
    /* border:1px solid black; */
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const StatusLabel=styled.div`
height:50px;
width:auto;
padding: 5px 10px;
border:1px dotted black;
display: flex;
justify-content: center;
align-items: center;
`;

export const OrderProcessItems=styled.div`
 max-height:50vh;
    width:80%;
    margin:10px auto;
    overflow-y: auto;
    border-right:1px solid black;
`;