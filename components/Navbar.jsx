import React from 'react';
import Link from 'next/link';
import { BsFacebook, BsInstagram, BsGithub } from 'react-icons/bs';
import { ImLinkedin } from 'react-icons/im';

const Navbar = () => {
    return (
        <div className='w-[450px] h-screen fixed flex items-center px-[50px] py-[70px]'>
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
    )
}

export default Navbar