import Head from 'next/head';
import Image from 'next/image';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import Divider from '../components/Divider';
import UserInfoCard from '../components/UserInfoCard';
import profilePic from '../public/assets/profile1.png';

export default function Portfolio() {
    return (
        <div>
            <Head>
                <title>Burak Çakır | About</title>
                <meta name="description" content="Burak Çakır | Personel Web Site | About page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='w-full bg-mainBg dark:bg-darkSecondary px-5 md:px-[90px] py-[40px]'>
                <div>
                    <h2 className='bg-secondaryBg dark:bg-darkPrimary dark:text-white inline-flex px-4 py-2 uppercase mb-3 text-xs'>home <MdOutlineKeyboardArrowRight size={20} className="mx-6" /> about</h2>
                    <h2 className='text-[30px] font-bold dark:text-white mb-7'>About Me</h2>
                </div>
                <div className='overflow-hidden relative'>
                    <div className='absolute inset-0 bg-black opacity-70'>lorem</div>
                    <Image className='w-full object-cover mx-auto max-h-[720px]' src={profilePic} />
                </div>
                <div>
                    <h1 className='text-2xl font-semibold pt-8 pb-4 dark:text-white'>Burak Çakır</h1>
                    <h2 className='text-secondaryTextGray pb-8 dark:text-darkTertiary'>Web Developer</h2>
                    <Divider />
                </div>
                <div className='text-secondaryTextGray text-base my-8 dark:text-darkTertiary'>
                    <p>Hi, my name is Adriano Smith and I began using WordPress when it first began. I’ve spent most of my waking hours for the last ten years designing, programming and operating WordPress sites.</p>
                    <p>One of my specialties is taking an idea from scratch and creating a full-fledged platform. I go beyond to produce sites with a unique, outstanding, contemporary look-and-feel. With extensive knowledge of web mechanics, I’m able to optimize complex integrations to require little-to-no maintenance while running on their own for years.</p>
                </div>
                <Divider />
                <div className='grid grid-cols-2 mt-8'>
                    <div className='border-r border-gray-300 md:border-transparent'>
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
                    <div className='pl-4 md:pl-0'>
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
                    <button className='bg-black/80 hover:bg-black duration-300 text-white px-5 py-2 md:px-10  md:py-3'>Download CV</button>
                </div>
            </div>
            <div className='bg-white dark:bg-darkPrimary px-5 md:px-[90px] py-[40px]'>
                <div className='grid grid-cols-2'>
                    <div>
                        <h1 className='font-semibold text-xl dark:text-white'>Education</h1>
                        <div className='border-l border-gray-500 '>
                            <div className='flex w-full mt-3 md:mt-10 about-list relative items-center'>
                                <div className='ml-2 md:ml-10 bg-tertiaryColor dark:bg-darkSecondary dark:text-white md:mr-10 px-4 py-1 text-xs md:text-base rounded-3xl'>
                                    1998 - 2006
                                </div>
                                <div className='text-[14px] md:text-base dark:text-white'>
                                    Kelleci Koyu Primary School
                                </div>
                            </div>
                            <div className='flex w-full mt-5 about-list relative items-center'>
                                <div className='ml-2 md:ml-10 bg-tertiaryColor dark:bg-darkSecondary dark:text-white md:mr-10 px-4 py-1 text-xs md:text-base rounded-3xl'>
                                    2006 - 2010
                                </div>
                                <div className='text-[14px] md:text-base dark:text-white'>
                                    Haci Mehmet Zorlu High School
                                </div>
                            </div>
                            <div className='flex w-full mt-5 about-list relative items-center'>
                                <div className='ml-2 md:ml-10 bg-tertiaryColor dark:bg-darkSecondary dark:text-white md:mr-10 px-4 py-1 text-xs md:text-base rounded-3xl'>
                                    2010 - 2012
                                </div>
                                <div className='text-[14px] md:text-base dark:text-white'>
                                    Ali Gaffar Okkan Police Vocational School
                                </div>
                            </div>
                            <div className='flex w-full mt-5 about-list relative items-center'>
                                <div className='ml-2 md:ml-10 bg-tertiaryColor dark:bg-darkSecondary dark:text-white md:mr-10 px-4 py-1 text-xs md:text-base rounded-3xl'>
                                    2018 - 2020
                                </div>
                                <div className='text-[14px] md:text-base dark:text-white'>
                                    Pamukkale Univercity
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className='font-semibold text-xl md:ml-0 ml-2 dark:text-white'>Experience</h1>
                        <div className='border-l border-gray-500 md:ml-0 ml-2'>
                            <div className='flex w-full mt-3 md:mt-10  about-list relative items-center'>
                                <div className='ml-2 md:ml-10 bg-tertiaryColor dark:bg-darkSecondary dark:text-white md:mr-10 px-4 py-1 text-xs md:text-base rounded-3xl'>
                                    2013 - 2017
                                </div>
                                <div className='text-[14px] md:text-base dark:text-white'>
                                    Police Officer
                                </div>
                            </div>
                            <div className='flex w-full mt-5 about-list relative items-center'>
                                <div className='ml-2 md:ml-10 bg-tertiaryColor dark:bg-darkSecondary dark:text-white md:mr-10 px-4 py-1 text-xs md:text-base rounded-3xl'>
                                    2020 - 2020
                                </div>
                                <div className='text-[14px] md:text-base dark:text-white'>
                                    Nt Information Technology (Intern)
                                </div>
                            </div>
                            <div className='flex w-full mt-5 about-list relative items-center'>
                                <div className='ml-2 md:ml-10 bg-tertiaryColor dark:bg-darkSecondary dark:text-white md:mr-10 px-4 py-1 text-xs md:text-base rounded-3xl'>
                                    2020 - 2022
                                </div>
                                <div className='text-[14px] md:text-base dark:text-white'>
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
