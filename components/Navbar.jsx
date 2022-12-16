import React, { useState } from 'react';
import Link from 'next/link';
import { BsFacebook, BsInstagram, BsGithub } from 'react-icons/bs';
import { ImLinkedin } from 'react-icons/im';
import { Sling as Hamburger } from 'hamburger-react'


const Navbar = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <div className='w-[450px] hidden h-screen fixed lg:flex items-center px-[50px] py-[70px]'>
                <div className='w-full'>
                    <div className='text-4xl tracking-widest uppercase font-semibold pb-28'><Link href="/">burak</Link></div>
                    <ul className=' pb-28'>
                        <li className='text-[15px] pb-3'><Link href="/">Home</Link></li>
                        <li className='text-[15px] pb-3'><Link href="/about">About</Link></li>
                        <li className='text-[15px] pb-3'><Link href="/portfolio">Portfolio</Link></li>
                        <li className='text-[15px] pb-3'><Link href="/contact">Contact</Link></li>
                    </ul>
                    <ul className='w-full flex flex-wrap justify-between'>
                        <li className='hover:scale-110 duration-150 cursor-pointer'><a href="#"><BsFacebook size={32} fill="#4267B2" /></a></li>
                        <li className='hover:scale-110 duration-150 cursor-pointer'><a href="#"><ImLinkedin size={32} fill="#0072b1" /></a></li>
                        <li className='hover:scale-110 duration-150 cursor-pointer'><a href="#"><BsInstagram size={32} fill="#cd486b" /></a></li>
                        <li className='hover:scale-110 duration-150 cursor-pointer'><a href="#"><BsGithub size={32} fill="#333" /></a></li>
                    </ul>
                </div>
            </div>
            <nav className='bg-black lg:hidden'>
                <div className='flex justify-between items-center  px-5 py-1'>
                    <h1 className='text-white uppercase text-2xl font-bold tracking-widest'>burak</h1>
                    <Hamburger toggled={isOpen} toggle={setOpen} color="white" duration={0.8} size={25} />
                </div>
                <ul className={`px-5  ${isOpen ? 'h-[175px] pt-5 duration-300 ease-in-out' : 'h-0 duration-300 opacity-0 invisible ease-in-out'}`}>
                    <li onClick={() => setOpen(false)} className='text-white pb-3'><Link href="/">Home</Link></li>
                    <li onClick={() => setOpen(false)} className='text-white pb-3'><Link href="/about">About</Link></li>
                    <li onClick={() => setOpen(false)} className='text-white pb-3'><Link href="/portfolio">Portfolio</Link></li>
                    <li onClick={() => setOpen(false)} className='text-white pb-3'><Link href="/contact">Contact</Link></li>
                </ul>

            </nav>
        </>
    )
}

export default Navbar