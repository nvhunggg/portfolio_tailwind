import { FaGithubSquare, FaLinkedin, FaTwitterSquare} from 'react-icons/fa'
import heroImg from '../assets/hero.svg'

import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div className='bg-emerald-100 py-24'>
    <div className='mx-auto max-w-7xl px-8 grid md:grid-cols-2 items-center gap-8'>
        <article>
            <h1 className='text-7xl font-bold tracking-wider '>I'm John</h1>
            <p className='mt-4 text-3xl text-slate-700 capitalize tracking-wide'> FrontEnd Developer</p>
            <p className='mt-2 text-lg text-slate-700 capitalize tracking-wide'> Turning idea into interactive reality</p>

            <div className="flex gap-x-4 mt-4">
                <a href='#'>
                    <FaGithubSquare className='h-8 w-8 text-sky-500
                     hover:text-black duration-300' />
                </a>
                <a href='#'>
                    <FaLinkedin className='h-8 w-8 text-sky-500
                     hover:text-black duration-300' />
                </a>
                <a href='#'>
                    <FaTwitterSquare className='h-8 w-8 text-sky-500
                     hover:text-black duration-300' />
                </a>
            </div> 
        </article>
        <img src={heroImg} className='h-80 lg:h-96' />
    </div>
    </div>
  )
}

export default Hero