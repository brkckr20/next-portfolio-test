import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Burak Çakır</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='w-full h-screen bg-mainBg items-center flex justify-center px-5 md:px-44'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 w-full'>
          <div className='flex justify-center'>
            <img className='w-[300px] h-[300px] rounded-full object-cover' src='https://brkckr20.github.io/static/media/profile2.3004e90282652fa748c1.png' />
          </div>
          <div className='md:col-span-2 flex flex-col justify-center'>
            <h1 className='text-[55px] uppercase font-bold text-center'>Burak Çakır</h1>
            <p className='mt-4 text-justify'>I am a web developer and I love my job, I am passionate about it. Since my graduation in 2020, I have been doing this profession with love and I am learning new things by updating myself with new information every day. I love learning and researching.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
