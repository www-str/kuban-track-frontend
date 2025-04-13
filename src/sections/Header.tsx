import { useLocation, useNavigate } from 'react-router-dom'
import Button from '../components/ui/Button'
import Logo from '../components/ui/Logo'
import { useState } from 'react'
import { useStore } from '../store/useStore'
import { motion } from "motion/react"

const links = [
    {
        name: 'Why Us',
        path: '#whyUs',
    },
    {
        name: 'Popular',
        path: '#popular',
    },
    // {
    //     name: 'Map',
    //     path: '/map',
    // },
    {
        name: 'Events',
        path: '/events',
    },
    {
        name: "Culture",
        path: "/culture",
    },
    // {
    //     name: 'Profile',
    //     path: '/profile',
    // },
]

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { isAuth } = useStore();
    const [isMobileShow, setIsMobileShow] = useState(false);

    const handleNavigate = (link: string) => {
        if (link.includes("#") && location.pathname !== "/") {
            navigate("/");
            return;
        } else if (location.pathname === link) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setIsMobileShow(false);
        } else if (link.includes("#")) {
            document.querySelector(link)?.scrollIntoView({
                behavior: 'smooth',
                inline: 'center'
            });
            return;
        }
        navigate(link)
    }

    const handleMobileClick = (link: string) => {
        setIsMobileShow(false);
        handleNavigate(link);
    }

    return (
        <>

            <motion.header
                initial={{
                    y: -100,
                    opacity: 0
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                    transition: { duration: 1 }
                }}
                className='fixed top-6 left-6 lg:left-14 right-6 lg:right-14 z-20 flex items-center justify-between p-2 rounded-4xl backdrop-blur-2x bg-blue50'>
                <div className="w-14 ml-2" onClick={() => handleNavigate("/")}>
                    <Logo />
                </div>
                <div className="flex items-center gap-4 lg:gap-12">
                    {links.map((link, index) => (
                        <button
                            key={index}
                            onClick={() => handleNavigate(link.path)}
                            className='hidden lg:block text-lg font-semibold text-light cursor-pointer transition hover:opacity-80'
                        >
                            {link.name}
                        </button>
                    ))}
                    {isAuth ? (
                        <Button onclick={() => handleNavigate('/profile')}>Profile</Button>
                    ) : (
                        <Button onclick={() => handleNavigate('/login')}>Sign In</Button>
                    )}
                    <button onClick={() => setIsMobileShow(!isMobileShow)} className='flex flex-col justify-between gap-1 w-10 h-6 mr-4 lg:hidden'>
                        <span className='w-full h-1 rounded-2xl bg-light' />
                        <span className='w-full h-1 rounded-2xl bg-light' />
                        <span className='w-full h-1 rounded-2xl bg-light' />
                    </button>
                </div>
            </motion.header>

            {isMobileShow && (
                <>
                    <div className="fixed bg-none inset-0 z-10" onClick={() => setIsMobileShow(false)} />
                    <motion.div
                        initial={{
                            y: -100,
                            opacity: 0
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,
                            transition: { duration: 0.3 }
                        }}
                        className="fixed top-28 left-6 right-6 z-20 p-10 rounded-4xl backdrop-blur bg-blue50 flex flex-col items-center gap-10">
                        {links.map((link, index) => (
                            <button
                                key={index}
                                onClick={() => handleMobileClick(link.path)}
                                className=' lg:block text-lg font-semibold text-light cursor-pointer transition hover:opacity-80'
                            >
                                {link.name}
                            </button>
                        ))}
                    </motion.div>
                </>
            )
            }

        </>
    )
}

export default Header