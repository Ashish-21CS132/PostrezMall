import React from 'react'
import posterimg from '../assests/poster.jpeg'
import { useNavigate } from 'react-router-dom'

const Category = ({ item }) => {
  const navigate = useNavigate()
  return (
    <div
      className="w-[32%] mt-4 h-[40vh] ease-in-out cursor-pointer "
      style={{
        backgroundImage: `url(${item?.posters[0]?.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      
    >
      
      <div onClick={() => navigate(`/collection/${item?.id}`)} className="w-full h-full center bg-black bg-opacity-50 text-white text-xl font-semibold ease-in">
        {item?.name}
      </div>
    </div>
  )
}

export default Category
