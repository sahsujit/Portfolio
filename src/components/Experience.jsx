import React from 'react'
import html from "../Image/html.webp"
import css from "../Image/css.webp"
import js from "../Image/js.png"
import react from "../Image/react.png"
import github from "../Image/github.png"
import git from "../Image/Git.png"
import tailwind from "../Image/tailwind.png"
import bootstrap from "../Image/bootstrap.png"
import python from "../Image/python.png"
import node from "../Image/node-removebg-preview.png"
import mongo from "../Image/mongodb.png"


const links = [
    {
        id: 1,
        src: html,
        name: "HTML",
        style:"shadow-orange-500"
    }, {
        id: 2,
        src: css,
        name: "CSS",
        style:"shadow-blue-500"
    },
    {
        id: 3,
        src: js,
        name: "JS",
        style:"shadow-yellow-500"
    },
    {
        id: 4,
        src: react,
        name: "React",
        style:"shadow-blue-600"
    },
    {
        id: 5,
        src: tailwind,
        name: "Tailwind",
        style:"shadow-sky-400"
    },
    {
        id: 6,
        src: bootstrap,
        name: "Bootstrap",
        style:"shadow-purple-500"
    },
    {
        id: 7,
        src: github,
        name: "Github",
        style:"shadow-gray-400"
    },
    {
        id: 8,
        src: git,
        name: "Git",
        style:"shadow-orange-700"
    },
    {
        id: 9,
        src: python,
        name: "Python",
        style:"shadow-yellow-400"

    },
    {
        id: 10,
        src: mongo,
        name: "MongoDB",
        style:"shadow-green-600"
    },
    {
        id: 11,
        src: node,
        name: "Node",
        style:"shadow-green-400"
    }
]

const Experience = () => {
    return (
        <div name="experience"
            className='bg-gradient-to-b py-20 from-gray-800 to-black w-full  '
        >
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col 
        justify-center w-full h-full text-white'>
                <div>
                    <p className='text-4xl font-bold p-2 border-b-4 
                border-gray-500 inline'>
                        Experience</p>
                    <p className='py-6'>These are the technologies I've worked with </p>
                </div>

                <div className='grid  sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {
                        links.map(({ id, src, name, style }) => (
                            <div key={id}
                            className={`shadow-md   rounded-lg py-2 
                            hover:scale-105 duration-500 ${style}`}
                            >
                                <img src={src} alt="" className='w-20 mx-auto'/>
                                <p className='mt-4 text-center'>{name}</p>

                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Experience