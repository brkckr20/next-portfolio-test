import Head from 'next/head';
import { BsFacebook, BsInstagram, BsGithub } from 'react-icons/bs';
import { ImLinkedin } from 'react-icons/im';
import { useSelector } from 'react-redux';

export default function Home() {
  const { theme } = useSelector(state => state.theme);
  return (
    <div>
      <Head>
        <title>Burak Çakır</title>
        <meta name="description" content="Burak Çakır | Personel Web Site | Home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='w-full h-screen bg-mainBg dark:bg-darkSecondary items-center flex justify-center px-5 md:px-44'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 w-full'>
          <div className='flex justify-center shrink-0'>
            <img className='w-[300px] h-[300px] rounded-full object-cover shrink-0' src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' />
          </div>
          <div className='md:col-span-2 flex flex-col justify-center'>
            <h1 className='text-[35px] md:text-[55px] uppercase font-bold text-center dark:text-white'>Burak Çakır</h1>
            <p className='mt-4 text-justify dark:text-white'>I am a web developer and I love my job, I am passionate about it. Since my graduation in 2020, I have been doing this profession with love and I am learning new things by updating myself with new information every day. I love learning and researching.</p>
          </div>
          <div className='md:hidden block'>
            <ul className='w-full flex flex-wrap gap-x-5'>
              <li className='hover:scale-110 duration-150 cursor-pointer'><a href="#"><BsFacebook size={24} fill={theme === "dark" ? "white" : "#4267B2"} /></a></li>
              <li className='hover:scale-110 duration-150 cursor-pointer'><a href="#"><ImLinkedin size={24} fill={theme === "dark" ? "white" : "#0072b1"} /></a></li>
              <li className='hover:scale-110 duration-150 cursor-pointer'><a href="#"><BsInstagram size={24} fill={theme === "dark" ? "white" : "#cd486b"} /></a></li>
              <li className='hover:scale-110 duration-150 cursor-pointer'><a href="#"><BsGithub size={24} fill={theme === "dark" ? "white" : "#333"} /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
