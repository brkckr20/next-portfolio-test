import React, { useState } from 'react';
import Link from 'next/link';
import { BsFacebook, BsInstagram, BsGithub } from 'react-icons/bs';
import { ImLinkedin } from 'react-icons/im';
import { Sling as Hamburger } from 'hamburger-react';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../src/contexts/theme/themeSlice'


const Navbar = () => {
    const [isOpen, setOpen] = useState(false);
    const { theme } = useSelector(state => state.theme);

    const dispatch = useDispatch();

    const handleChangeTheme = () => {
        dispatch(changeTheme());
    }

    return (
        <>
            <div className='w-[450px] hidden h-screen fixed lg:flex items-center px-[50px] py-[70px] dark:bg-darkPrimary'>
                <div className='w-full'>
                    <div className='text-4xl tracking-widest uppercase font-semibold pb-28 dark:text-white'><Link href="/">burak</Link></div>
                    <ul className=' pb-28'>
                        <li className='text-[15px] pb-3 dark:text-white'><Link href="/">Home</Link></li>
                        <li className='text-[15px] pb-3 dark:text-white'><Link href="/about">About</Link></li>
                        <li className='text-[15px] pb-3 dark:text-white'><Link href="/portfolio">Portfolio</Link></li>
                        <li className='text-[15px] pb-3 dark:text-white'><Link href="/contact">Contact</Link></li>
                        <li className='text-[15px] pb-3'><button className='bg-black text-white px-2 py-1 dark:bg-white dark:text-black' onClick={handleChangeTheme}>{theme === "dark" ? 'Light Mode' : 'Dark Mode'}</button></li>
                    </ul>
                    <ul className='w-full flex flex-wrap justify-between'>
                        <li className='hover:scale-110 duration-150 cursor-pointer'><a href="#"><BsFacebook size={32} fill={theme === "dark" ? "white" : "#4267B2"} /></a></li>
                        <li className='hover:scale-110 duration-150 cursor-pointer'><a href="#"><ImLinkedin size={32} fill={theme === "dark" ? "white" : "#0072b1"} /></a></li>
                        <li className='hover:scale-110 duration-150 cursor-pointer'><a href="#"><BsInstagram size={32} fill={theme === "dark" ? "white" : "#cd486b"} /></a></li>
                        <li className='hover:scale-110 duration-150 cursor-pointer'><a href="#"><BsGithub size={32} fill={theme === "dark" ? "white" : "#333"} /></a></li>
                    </ul>
                </div>
            </div>
            <nav className='bg-black lg:hidden'>
                <div className='flex justify-between items-center  px-5 py-1'>
                    <h1 className='text-white uppercase text-2xl font-bold tracking-widest'><Link href="/">burak</Link></h1>
                    <Hamburger toggled={isOpen} toggle={setOpen} color="white" duration={0.8} size={25} />
                </div>
                <ul className={`px-5  ${isOpen ? 'h-[215px] pt-5 duration-300 ease-in-out' : 'h-0 duration-300 opacity-0 invisible ease-in-out'}`}>
                    <li onClick={() => setOpen(false)} className='text-white pb-3'><Link href="/">Home</Link></li>
                    <li onClick={() => setOpen(false)} className='text-white pb-3'><Link href="/about">About</Link></li>
                    <li onClick={() => setOpen(false)} className='text-white pb-3'><Link href="/portfolio">Portfolio</Link></li>
                    <li onClick={() => setOpen(false)} className='text-white pb-3'><Link href="/contact">Contact</Link></li>
                    <li onClick={() => setOpen(false)} className='text-white pb-3'><button className=' px-2 py-1 bg-white text-black' onClick={handleChangeTheme}>{theme === "dark" ? 'Light Mode' : 'Dark Mode'}</button></li>
                </ul>

            </nav>
        </>
    )
}

export default Navbar