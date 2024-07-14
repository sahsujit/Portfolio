import React from 'react'
import { Link } from 'react-router-dom'
import weather from "../Image/weather.webp"
import studynotion from "../Image/studynotion.png"
import randomgif from "../Image/randomgif.jpg"
import razorpay from "../Image/razorpay.png"
import coursecard from "../Image/coursecard.webp"
import planwithlove from "../Image/planwithlove.jpg"
import password from "../Image/password.jpg"
import shop from "../Image/shop.jpg"
import modal from "../Image/Modal.png"
import zerocross from "../Image/zerocross.jpg"

const portfolios = [
    {
        id: 1,
        src: studynotion,
        demo:"https://mega-study-notion.vercel.app/",
        code:"https://github.com/sahsujit/Mega-StudyNotion"
    },
    {
        id: 2,
        src: razorpay,
        demo:"https://razorpay-website-clone-rosy.vercel.app/",
        code:"https://github.com/sahsujit/Razorpay-website-clone",
    },
    {
        id: 3,
        src: weather,
        demo:"https://weather-app-indol-psi-88.vercel.app/",
        code:"https://github.com/sahsujit/Weather-app",
    },
    {
        id: 4,
        src: coursecard,
        demo:"https://courses-card.vercel.app/",
        code:"https://github.com/sahsujit/Courses_Card"
    },
    {
        id: 5,
        src: planwithlove,
        demo:"https://plan-with-love-xi.vercel.app/",
        code:"https://github.com/sahsujit/Plan_With_Love"
    },
    {
        id: 6,
        src: password,
        demo:"https://password-generator-bay-five.vercel.app/",
        code:"https://github.com/sahsujit/Password-Generator"
    },
    {
        id: 7,
        src: randomgif,
        demo:"https://random-gifs-mocha.vercel.app/",
        code:"https://github.com/sahsujit/Random_Gifs"
    },
    {
        id: 8,
        src: shop,
        demo:"https://shop-app-two-ruddy.vercel.app/",
        code:"https://github.com/sahsujit/Shop-App"
    },
    {
        id: 9,
        src: modal,
        demo:"https://share-modal-gold.vercel.app/",
        code:"https://github.com/sahsujit/Share_Modal"
    },
    {
        id: 10,
        src: zerocross,
        demo:"https://zero-cross-game.vercel.app/",
        code:"https://github.com/sahsujit/Zero-Cross-Game"
    }
]

const Portfolio = () => {
    return (
        <div name="portfolio"
            className='bg-gradient-to-b   py-20 from-black to-gray-800  text-white w-full   '
        >
           
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Check out some of my work right here</p>
                </div>


                <div className='grid  sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {
                        portfolios.map(({ id, src, demo, code }) => (
                            <div key={id} className='shadow-md duration-200  hover:scale-105 shadow-gray-600 rounded-lg'>
                                <img src={src} alt="" className='rounded-md h-48 w-full' />
                                <div className='flex items-center justify-center'>
                                    <Link to={demo} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</Link>
                                    <Link to={code} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</Link>
                                </div>
                            </div>
                        ))
                    }
                </div>



            </div>
        </div>
    )
}

export default Portfolio



