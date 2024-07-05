import React, { useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import navlogo from '../assets/NavLogo.png'
import { Link } from 'react-router-dom'
import { FiSearch } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
const Nav_bar = () => {
  const [nav , setNav] = useState(false)
  return (
    <nav className='py-[26px] bg-white relative'>
        <Container>
         <Flex className={`items-center justify-between`}>
          {/* logo */}
         <img src={navlogo} alt="logo" /> 
         {/* logo */}
         {/* menu bar */}
         <RiMenu3Fill onClick={()=>setNav(!nav)} className='text-[24px] text-regal-blue md:hidden' />
          {nav && (
            <div className='absolute p-3 top-[90px] w-[96%] bg-[#5774f8] z-50'>
              <ul>
              <li className='text-[16px] text-white font-semibold font-Urbanist'><Link>Home </Link></li>
            <li className='text-[16px] text-white font-semibold font-Urbanist'><Link>About</Link></li>
            <li className='text-[16px] text-white font-semibold font-Urbanist'><Link>Courses</Link></li>
            <li className='text-[16px] text-white font-semibold font-Urbanist'><Link>Pages</Link></li>
            <li className='text-[16px] text-white font-semibold font-Urbanist'><Link>Blog</Link></li>
            <li className='text-[16px] text-white font-semibold font-Urbanist'><Link>Shop</Link></li>
              </ul>
                {/* icon and btn */}
         <Flex className={`items-center gap-4`}>
         <FiSearch size={20} className='text-white' />
         <FaRegUser size={20} className='text-white' />
         <button className='px-5 py-[14px] bg-custom_orange font-Urbanist font-semibold text-[16px] text-white rounded-[10px]'>Get In Touch</button>
         </Flex>
         {/* icon and btn */}
            </div>
          )}
         {/* menu bar */}
         {/* nav items */}
          <ul className='items-center hidden md:gap-4 lg:gap-10 md:flex'>
            <li className='text-[16px] text-regal-blue font-semibold font-Urbanist'><Link>Home </Link></li>
            <li className='text-[16px] text-regal-blue font-semibold font-Urbanist'><Link>About</Link></li>
            <li className='text-[16px] text-regal-blue font-semibold font-Urbanist'><Link>Courses</Link></li>
            <li className='text-[16px] text-regal-blue font-semibold font-Urbanist'><Link>Pages</Link></li>
            <li className='text-[16px] text-regal-blue font-semibold font-Urbanist'><Link>Blog</Link></li>
            <li className='text-[16px] text-regal-blue font-semibold font-Urbanist'><Link>Shop</Link></li>
          </ul>
           {/* nav items */}
           {/* icon and btn */}
         <Flex className={`items-center gap-4 hidden md:flex`}>
         <FiSearch size={20} className='text-regal-blue' />
         <FaRegUser size={20} className='text-regal-blue' />
         <button className='px-5 py-[14px] bg-custom_orange font-Urbanist font-semibold text-[16px] text-white rounded-[10px]'>Get In Touch</button>
         </Flex>
             {/* icon and btn */}
         </Flex>
        </Container>
    </nav>
  )
}

export default Nav_bar