import React from 'react'
import {headerLogo, cart} from "../assets/images"
import { navLinks } from '../constants'
import { hamburger } from '../assets/icons'

const Nav = () => {
  return (
  <header className='padding-x py-8 absolute z-10 w-full'>
    <nav className='flex justify-between items-center max-container'>
       
        <a href="/">
        <img src={headerLogo} alt ="logo" className='max-sm:w-20 max-sm:h-5  w-[139px] h-[29px]' /></a>
      
       
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden '>
               {navLinks.map((link) => (
                <li key={link.label}>
                    <a href={link.href} className='font-montserrat leading-normal text-lg text-slate-gray'>
                    {link.label}</a></li>
               ))}
            </ul>
      
            <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
          <a href='/'>Sign in</a>
          <span>/</span>
          <a href='/'>Explore now</a>
        </div>
        <div className='hidden max-lg:block'>
          <img src={hamburger} alt='hamburger icon' width={25} height={25} />
        </div>
    </nav>
  </header>
  )
}

export default Nav