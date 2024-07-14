import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import HeroImage from "../Image/profile1.jpg"

const Home = () => {
  return (
    <div name="home" className='w-full h-screen bg-gradient-to-b from-black via-black  to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col md:flex-row items-center
         justify-center h-full px-4'>
            <div className='flex flex-col justify-center h-full' >
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                    I`m a Full Stack Developer
                </h2>

                <p className='py-4 text-gray-500 max-w-md'>
                    I have 1 years of experience building and desgining website.
                    Currently, I love to work on web application using technologies like
                    React, Node, Express, MongoDB, and more.
                </p>

                <div>
                <button className='group text-white w-fit px-6 py-3 my-2 flex 
                items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 
                cursor-pointer gap-1'>
                Portfolio
                <span className='group-hover:rotate-90 duration-300'>
                    <MdOutlineKeyboardArrowRight size={25}/>
                </span>
            </button>
                </div>
            </div>

            <div>
                <img
                src={HeroImage}
                alt='profile'
                className='mx-auto  md:w-full rounded-2xl '
                />
            </div>
           


           

        </div>
    </div>
  )
}

export default Home