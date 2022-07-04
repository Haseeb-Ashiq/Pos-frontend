import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { Navigate ,Link, useNavigate} from 'react-router-dom';
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
import {FaShoppingCart } from 'react-icons/fa';
import { addToCart } from '../../../Redux/Actions/Cart.Action';
function Products({isLogedIn}) {
  const dispatch=useDispatch();
  const product=useSelector(state=>state.Product);
  const navigate=useNavigate();
  useEffect(()=>{
       dispatch(fetchProducts());
       console.log(isLogedIn)
  },[])

  return (
    <>
    <ProductsContainer>
      <ProductsHeading>Products</ProductsHeading>
        <ProductWrapper>
          {
            product.products.map((_pro,_index)=>(<>
            {
                 <ProductCard>
              <ProductImg src={`https://food-deliver-apis.herokuapp.com/public/${_pro.productPictures[0].img}`}/>
                <ProductInfo>
                  <ProductTitle>{_pro.name}</ProductTitle>
                  {/* <ProductDesc>{_pro?.description.substr(1,50)}</ProductDesc> */}
                  <ProductPrice>${_pro.price}</ProductPrice>
                  <ProductButton onClick={() => isLogedIn ? dispatch(addToCart(_pro)) : navigate('/user-login')}><FaShoppingCart/> Add to cart</ProductButton>
                </ProductInfo>
            </ProductCard>
            }
          
            </>))
          }
        </ProductWrapper>
    </ProductsContainer>
    </>
  )
}

export default Products