import React, { useState } from 'react'
import {FaBars, FaTimes} from "react-icons/fa"
import { Link } from 'react-scroll'



const Navbar = () => {

    const [nav, setNav] = useState(false)

    const links = [
        {
            id:1,
            link:"home"
        },
        {
            id:2,
            link:"about"
        },
        {
            id:3,
            link:"portfolio"
        },
        {
            id:4,
            link:"experience"
        },
        {
            id:5,
            link:"contact"
        },
       
    ]
  return (
    <div className='flex items-center justify-between px-4 bg-black w-full h-20
    text-white fixed'> 
    <div>
        <h1 className='text-5xl ml-2 font-signature'>Sujit</h1>
    </div>

    <ul className='hidden md:flex'>
    {
        links.map((link)=>(
            <li key={link.id} className='cursor-pointer font-medium text-gray-500 
            hover:scale-105 capitalize px-4 duration-200'>
                <Link to={link.link} smooth duration={500}>
                {link.link}
                </Link>
                

            </li>
        ))
    }
    </ul>

    <div
    onClick={()=>setNav(!nav)}
     className='cursor-pointer text-gray-500 pr-4 z-10 md:hidden'>
       {
        nav ? <FaTimes size={30} /> : <FaBars size={30} />
       }


    </div>

    {
        nav && (
            <ul className='flex flex-col justify-center items-center top-0 
            left-0 w-full h-screen absolute bg-gradient-to-b from-black to-gray-800 *:text-gray-500'>
            {
                links.map((link)=>(
                    <li key={link.id} className='cursor-pointer text-4xl text-gray-500 
                  capitalize px-4 py-6'>
                       <Link onClick={()=>setNav(!nav)} to={link.link} smooth duration={500}>
                {link.link}
                </Link>
        
                    </li>
                ))
            }
            </ul>
        )
    }

    </div>
  )
}

export default Navbar