import React from 'react'
// import './Product.scss'
import narutoimg from '../assests/naruto.jpeg'
import { useNavigate } from 'react-router-dom'

const Product = ({item}) => {
  const navigate=useNavigate();
  const baseurl='http://127.0.0.1:8000'
  return (
    <div onClick={()=>navigate(`/product/${item?.id}`)}>
      <div className="Product cursor-pointer min-w-[280px] grow-0 flex-[1] border align-baseline p-2">
        <div className="product-container flex flex-col">
          <div className="product-img h-[300px] w-full relative">
            <div className="img-container absolute top-0 left-0 w-full h-full">
              <img
                src={ item?.image || `${baseurl}${narutoimg}` }

                alt=""
                id="img"
                className="w-full h-full object-contain ease-[0.2] "
              />
            </div>
          </div>
          <div className="product-info gap-4 text-center">
            <p className="title">{item?.title}</p>
            <p className="price text-[var(--primary-text-color)] font-semibold">
              {item?.price}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
