import styled from 'styled-components';

export const ProductsContainer = styled.div`
min-height:100vh;
max-width:100vw;
padding:5rem calc((100vw - 1300px) /2);
background:#150f0f;
color:#fff;
border:1px solid black;
`;
export const ProductsHeading = styled.h1`
   text-align:center;
   font-size:clamp(2rem,2.5vw,3rem);
   margin-bottom:5rem;
`;

export const ProductWrapper = styled.div`
display:flex;
flex-wrap:wrap;
height:90%;
width:90%;
margin:10px auto;
// border:1px solid whitesmoke;
`;
export const ProductCard=styled.div`
// height:300px;
width:300px;
line-height:2;
margin:0 auto;
border:1px solid black;
`;
export const ProductImg=styled.img`
height:300px;
min-width:300px;
max-width:100%;
box-shadow:8px 8px #fdc500;
`;
export const ProductTitle=styled.h2`
font-weight:400;
font-size:1.5rem;
`;

export const ProductInfo=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
padding:2rem;
`;

export const ProductDesc=styled.p`
margin-bottom:1rem;
`;
export const ProductPrice=styled.p`
margin-bottom:1rem;
font-size:2rem;
`;

export const ProductButton=styled.button`
font-size:1rem;
padding:1rem 4rem;
border:none;
background:#e31837;
color:#fff;
transition:.2s ease-out;
&:hover{
    background:#ffc500;
    cursor:pointer;
    color:#000;
    transition:.2s ease-out;
}
`;