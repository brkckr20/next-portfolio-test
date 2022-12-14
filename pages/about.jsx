import Head from 'next/head';
import Image from 'next/image';
import UserInfoCard from '../components/UserInfoCard';
import profilePic from '../public/assets/profile.jpg';

export default function Portfolio() {
    return (
        <div>
            <Head>
                <title>Burak Çakır | About</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='w-full bg-mainBg px-[90px] py-[40px]'>
                <div>
                    <h2 className='bg-secondaryBg inline-block px-4 py-2 uppercase mb-3 text-xs'>About</h2>
                    <h2 className='text-[30px] font-bold'>About Me</h2>
                </div>
                <div className=''>
                    <Image src={profilePic} />
                </div>
                <div>
                    <h1 className='text-2xl font-semibold pt-8 pb-4'>Burak Çakır</h1>
                    <h2 className='text-secondaryTextGray pb-8'>Web Developer</h2>
                    <hr />
                </div>
                <div className='text-secondaryTextGray text-base my-8'>
                    <p>Hi, my name is Adriano Smith and I began using WordPress when it first began. I’ve spent most of my waking hours for the last ten years designing, programming and operating WordPress sites.</p>
                    <p>One of my specialties is taking an idea from scratch and creating a full-fledged platform. I go beyond to produce sites with a unique, outstanding, contemporary look-and-feel. With extensive knowledge of web mechanics, I’m able to optimize complex integrations to require little-to-no maintenance while running on their own for years.</p>
                </div>
                <hr />
                <div className='grid grid-cols-2 mt-8'>
                    <div>
                        <div>
                            <UserInfoCard data="Birtday : " value="15.06.1992" />
                        </div>
                        <div>
                            <UserInfoCard data="Age : " value="30" />
                        </div>
                        <div>
                            <UserInfoCard data="Address : " value="Gultepe Mah, Denizli, TURKEY" />
                        </div>
                        <div>
                            <UserInfoCard data="Email : " value="burak2043@gmail.com" />
                        </div>
                        <div>
                            <UserInfoCard data="Phone : " value="+90 541 621 50 73" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <UserInfoCard data="Nationality : " value="TURKEY" />
                        </div>
                        <div>
                            <UserInfoCard data="Study : " value="Pamukkale Univercity" />
                        </div>
                        <div>
                            <UserInfoCard data="Degree : " value="Associate Degree" />
                        </div>
                        <div>
                            <UserInfoCard data="Email : " value="Playing Football" />
                        </div>
                        <div>
                            <UserInfoCard data="Freelance : " value="Avaliable" />
                        </div>
                    </div>
                </div>
                <div className='my-8'>
                    <button className='bg-black/80 hover:bg-black duration-300 text-white px-10 py-3'>Download CV</button>
                </div>
            </div>
            <div className='bg-white px-[90px] py-[40px]'>
                <div className='grid grid-cols-2'>
                    <div>
                        <h1 className='font-semibold text-xl'>Education</h1>
                        <div className='border-l border-gray-500 '>
                            <div className='flex w-full mt-10 about-list relative items-center'>
                                <div className='ml-10 bg-tertiaryColor mr-10 px-4 py-1 rounded-3xl'>
                                    1998 - 2006
                                </div>
                                <div>
                                    Kelleci Koyu Primary School
                                </div>
                            </div>
                            <div className='flex w-full mt-5 about-list relative items-center'>
                                <div className='ml-10 bg-tertiaryColor mr-10 px-4 py-1 rounded-3xl'>
                                    2006 - 2010
                                </div>
                                <div>
                                    Haci Mehmet Zorlu High School
                                </div>
                            </div>
                            <div className='flex w-full mt-5 about-list relative items-center'>
                                <div className='ml-10 bg-tertiaryColor mr-10 px-4 py-1 rounded-3xl'>
                                    2010 - 2012
                                </div>
                                <div>
                                    Ali Gaffar Okkan Police Vocational School
                                </div>
                            </div>
                            <div className='flex w-full mt-5 about-list relative items-center'>
                                <div className='ml-10 bg-tertiaryColor mr-10 px-4 py-1 rounded-3xl'>
                                    2018 - 2020
                                </div>
                                <div>
                                    Pamukkale Univercity
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className='font-semibold text-xl'>Experience</h1>
                        <div className='border-l border-gray-500 '>
                            <div className='flex w-full mt-10 about-list relative items-center'>
                                <div className='ml-10 bg-tertiaryColor mr-10 px-4 py-1 rounded-3xl'>
                                    2013 - 2017
                                </div>
                                <div>
                                    Police Officer
                                </div>
                            </div>
                            <div className='flex w-full mt-5 about-list relative items-center'>
                                <div className='ml-10 bg-tertiaryColor mr-10 px-4 py-1 rounded-3xl'>
                                    2020 - 2020
                                </div>
                                <div>
                                    Nt Information Technology (Intern)
                                </div>
                            </div>
                            <div className='flex w-full mt-5 about-list relative items-center'>
                                <div className='ml-10 bg-tertiaryColor mr-10 px-4 py-1 rounded-3xl'>
                                    2020 - 2022
                                </div>
                                <div>
                                    Nakosan Inc. (Responsible for Information Processing)
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
