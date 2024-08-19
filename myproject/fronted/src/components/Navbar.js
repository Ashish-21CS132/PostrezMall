import React, { useState } from 'react'
import { BsCart2 } from 'react-icons/bs'
import Cart from './Cart'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [opencart, setopencart] = useState(false)
  const navigate = useNavigate()

  return (
    <>
      <div className="navbar h-[80px] bg-[var(--primary-text-color)] z-[99] sticky top-0">
        <div className="container navbar-container flex justify-between items-center text-white">
          <div className="left ">
            <ul className="flex gap-4">
            <Link to={`/collection/${4}`}>
                <li className="inline-block p-4 hover-link">TV SHOWS</li>
              </Link>
              <Link to={`/collection/${1}`}>
                <li className="inline-block p-4 hover-link">ANIME</li>
              </Link>
              <Link to={`/collection/${3}`}>
                <li className="inline-block p-4 hover-link">SPORTS</li>
              </Link>
            </ul>
          </div>
          <div className="middle absolute left-[50%] translate-x-[-50%]">
            <div
              className="text-2xl font-semibold cursor-pointer active:text-purple-300"
              onClick={() => navigate('/')}
            >
              POSTERZ
            </div>
          </div>
          <div className="right">
            
            <div className="cart relative p-6 ">
            <span className="absolute w-[7px] h-[7px] top-[-4p] right-[] bg-[var(--accent-color)] text-white text-[0.6rem] rounded-[20px]">
                
                </span>
              <BsCart2
                className="text-[1.6rem] hover-link"
                onClick={() => setopencart(!opencart)}
              />
             
            </div>
          </div>
        </div>
      </div>
      {opencart && <Cart onClose={() => setopencart(false)} />}
      {/* {console.log(opencart)} */}
    </>
  )
}

export default Navbar
