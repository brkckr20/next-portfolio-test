import { useState } from 'react';
import Head from 'next/head';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { AnimatePresence, motion, transform } from "framer-motion";


export default function Contact() {

    return (
        <div>
            <Head>
                <title>Burak Çakır | Contact</title>
                <meta name="description" content="Burak Çakır | Personel Web Site | Contact Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='w-full bg-mainBg dark:bg-darkSecondary px-5 md:px-[90px] py-[40px] min-h-screen'>
                <div className='mb-10'>
                    <h2 className='bg-secondaryBg dark:bg-darkPrimary dark:text-white inline-flex items-center px-4 py-2 mb-3 text-xs'>Home <MdOutlineKeyboardArrowRight size={20} className="mx-6" /> Contact</h2>
                    <h2 className='text-[30px] font-bold tracking-tight dark:text-white'>Contact</h2>
                </div>
                <div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1576.555012462837!2d29.038374629296055!3d37.78746121658356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c7407b76f641c9%3A0xedbc18cb4790f692!2sAlbayrak%20Meydan%C4%B1!5e0!3m2!1str!2str!4v1671021183000!5m2!1str!2str"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                    />
                </div>
                <div className='mt-12'>
                    <form>
                        <input type="text" placeholder='Name' className='w-full p-3 outline-none border border-black/20 mb-7 bg-transparent dark:border-white/20 dark:text-white' />
                        <input type="text" placeholder='E-mail' className='w-full p-3 outline-none border border-black/20 mb-7 bg-transparent dark:border-white/20 dark:text-white' />
                        <textarea placeholder='Message' rows={8} className='w-full p-3 outline-none border border-black/20 mb-7 bg-transparent dark:border-white/20 dark:text-white' />
                        <button className='bg-black text-white h-10 md:h-12 px-3 md:px-6'>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
