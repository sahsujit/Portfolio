import React from 'react'
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa6'
import { HiOutlineMail } from 'react-icons/hi'

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedinIn size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/sujit-sah-619090274/",
      style: "rounded-tr-md"
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/sahsujit"
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:sah.sujit1388@gmail.com"
    },
    {
      id: 4,
      child: (
        <>
          Twitter <FaTwitter size={30} />
        </>
      ),
      href: "https://x.com/sujitsah1388"
    },
    {
      id: 5,
      child: (
        <>
          Instagram <FaInstagram size={30} />
        </>
      ),
      href: "https://www.instagram.com/sujit_sah_18/",
      style: "rounded-br-md"
    }
  ]

  return (
    <div className='hidden  lg:flex flex-col top-[35%] fixed left-0'>
      <ul>
        {
          links.map(({ id, child, href, style }) => (
            <li key={id}
              className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 ${style}`}
            >
              <a href={href}
                className='flex justify-between items-center w-full text-white'
              >
                {child}
              </a>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default SocialLinks
