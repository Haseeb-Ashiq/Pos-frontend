import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { Navigate ,Link} from 'react-router-dom';
import { fetchProducts } from '../../../Redux/Actions/Product.Action';
import {
ProductsContainer,
ProductsHeading,
ProductWrapper,
ProductTitle,
ProductImg,
ProductInfo,
ProductButton,
ProductCard,
ProductDesc,
ProductPrice
} from './ProductsElement';
function Products({isLogedIn}) {
  const dispatch=useDispatch();
  const product=useSelector(state=>state.Product);
  useEffect(()=>{
       dispatch(fetchProducts());
  },[])

  return (
    <>
    <ProductsContainer>
      <ProductsHeading>Products</ProductsHeading>
        <ProductWrapper>
          {
            product.products.map((_pro,_index)=>(<>
            <ProductCard>
              <ProductImg src={`http://localhost:5000/public/${_pro.productPictures[0].img}`}/>
                <ProductInfo>
                  <ProductTitle>{_pro.name}</ProductTitle>
                  <ProductDesc>{_pro?.description.substr(1,50)}</ProductDesc>
                  <ProductPrice>${_pro.price}</ProductPrice>
                  <ProductButton>Order now</ProductButton>
                </ProductInfo>
            </ProductCard>
            </>))
          }
        </ProductWrapper>
    </ProductsContainer>
    </>
  )
}

export default Products