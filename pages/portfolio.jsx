import { useState } from 'react';
import Head from 'next/head';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { AnimatePresence, motion } from "framer-motion";

const data = {
    items: [
        {
            img:
                "https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80",
            category: "web",
            name: "Project 1"
        },
        {
            img:
                "https://images.unsplash.com/photo-1543353071-10c8ba85a904?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            category: "mobil",
            name: "Project 2"
        },
        {
            img:
                "https://images.unsplash.com/photo-1495195129352-aeb325a55b65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
            category: "mobil",
            name: "Project 4"
        },
        {
            img:
                "https://images.unsplash.com/photo-1495195129352-aeb325a55b65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
            category: "web",
            name: "Project 7"
        }
    ]
};

export default function Portfolio() {
    const [displayData, setDisplayData] = useState(data.items);
    const [active, setActive] = useState("all");

    const handleCategoryClick = (category) => {
        if (category === active) return;
        setActive(category);
        setDisplayData([]);

        if (category === "all") {
            setDisplayData(data.items);
            return;
        }

        const filteredData = data.items.filter(
            (item) => item.category === category
        );

        setTimeout(() => {
            setDisplayData(filteredData);
        }, 400);
    };
    return (
        <div>
            <Head>
                <title>Burak Çakır | Portfolio</title>
                <meta name="description" content="Burak Çakır | Personel Web Site | Portgolio Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='w-full bg-mainBg dark:bg-darkSecondary px-5 md:px-[90px] py-[40px] min-h-screen'>
                <div className='mb-10'>
                    <h2 className='bg-secondaryBg dark:bg-darkPrimary dark:text-white inline-flex items-center px-4 py-2 mb-3 text-xs'>Home <MdOutlineKeyboardArrowRight size={20} className="mx-6" /> Creative Portfolio</h2>
                    <h2 className='text-[30px] font-bold tracking-tight dark:text-white'>Portfolio</h2>
                </div>
                <div>
                    <FilterBar active={active} handleClick={handleCategoryClick} />
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-8'>
                    <AnimatePresence>
                        {displayData.map(({ img, category, name }, i) => (
                            <motion.div
                                style={{ overflow: "hidden" }}
                                key={i}
                                layout
                                initial={{ transform: "scale(0)" }}
                                animate={{ transform: "scale(1)" }}
                                exit={{ transform: "scale(0)" }}
                                className="relative group"
                            >
                                <motion.a
                                    href='#/'
                                    className=''
                                >
                                    <motion.div className='absolute inset-0 bg-black/40 group-hover:bg-transparent duration-200'></motion.div>
                                    <motion.img
                                        src={img}
                                        className="rounded object-cover h-full"
                                        alt="nothing"
                                        width="100%"
                                    />
                                    <motion.h1 className='absolute z-10 left-4 -bottom-8 group-hover:bottom-2 duration-200 text-white bg-black px-2 py-1'>{name}</motion.h1>
                                </motion.a>

                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}

function FilterBar({ handleClick, active }) {

    const items = ["All", "Web", "Mobil"];

    return (
        <div className="gap-2" style={{ marginBottom: "1rem" }}>
            {items.map((item) => (
                <button
                    className={`mr-4 text-secondaryTextGray dark:text-darkTertiary ${active === item.toLowerCase() && 'text-black dark:text-white border-b border-black dark:border-white'}`}
                    onClick={() => handleClick(item.toLowerCase())}
                >
                    {item}
                </button>
            ))}
        </div>
    );
}
