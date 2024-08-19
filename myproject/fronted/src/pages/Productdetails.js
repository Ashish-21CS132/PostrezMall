import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addtocart, removefromcart } from '../redux/slices/Cartslice';
import { axiosClient } from '../utilis/axiosClient';

const Productdetails = () => {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartslice.cart);
  const productkey = params.productid;
  const quantity = cart.find((item) => item.key === productkey)?.quantity || 0;
 
  

  

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axiosClient.get(`posters/${productkey}/`);
        setProduct(response.data);
      } catch (error) {
        console.error('Failed to fetch product:', error);
      }
    };
    console.log(quantity);

    fetchProduct();
  }, [productkey]);

  const handleAddToCart = () => {
    dispatch(addtocart(product));
  };

  const handleRemoveFromCart = () => {
    dispatch(removefromcart(product));
  };

  return (
    <div className="mt-8">
      <div className="container flex">
        <div className="image">
          <div className="img-container w-[400px]">
            <img src={product?.image} alt={product?.title || 'Product Image'} />
          </div>
        </div>
        <div className="details flex-col gap-10">
          <h1 className="text-xl font-bold">{product?.title}</h1>
          <h1 className="mt-2 font-bold">${product?.price}</h1>
          <h1 className="mt-2">{product?.description}</h1>
          <div className="plus mt-3 w-[100px] border h-8 flex justify-between items-center bg-gray-200">
            <div
              className="- text-xl p-1 cursor-pointer active:bg-gray-300"
              onClick={handleRemoveFromCart}
            >
              -
            </div>
            <div>{quantity}</div>
            <div
              className="+ cursor-pointer p-1 active:bg-gray-300"
              onClick={handleAddToCart}
            >
              +
            </div>
          </div>
          <div className="btn-primary mt-3" onClick={handleAddToCart}>
            Add to Cart
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productdetails;
