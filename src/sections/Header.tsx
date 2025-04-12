import { useLocation, useNavigate } from 'react-router-dom'
import Button from '../components/ui/Button'
import Logo from '../components/ui/Logo'
import { useState } from 'react'

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
    {
        name: 'Profile',
        path: '/profile',
    },
]

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation()

    const [isMobileShow, setIsMobileShow] = useState(true);

    const handleNavigate = (link: string) => {
        if (link.includes("#") && location.pathname !== "/") {
            navigate("/");
            return;
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
            <header className='fixed top-6 left-14 right-14 z-20 flex items-center justify-between p-2 rounded-4xl backdrop-blur-2x bg-blue50'>
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
                    <Button onclick={() => handleNavigate('/profile')}>Sign Up</Button>
                    <button onClick={() => setIsMobileShow(!isMobileShow)} className='flex flex-col justify-between gap-1 w-10 h-6 mr-4 lg:hidden'>
                        <span className='w-full h-1 rounded-2xl bg-light' />
                        <span className='w-full h-1 rounded-2xl bg-light' />
                        <span className='w-full h-1 rounded-2xl bg-light' />
                    </button>
                </div>
            </header>
            {isMobileShow && (
                <>
                    <div className="fixed bg-none inset-0 z-10" onClick={() => setIsMobileShow(false)}>

                    </div>
                    <div className="fixed top-30 left-14 right-14 z-20 p-10 rounded-4xl backdrop-blur bg-blue50 flex flex-col items-center gap-10">
                        {links.map((link, index) => (
                            <button
                                key={index}
                                onClick={() => handleMobileClick(link.path)}
                                className=' lg:block text-lg font-semibold text-light cursor-pointer transition hover:opacity-80'
                            >
                                {link.name}
                            </button>
                        ))}
                    </div>
                </>
            )}

        </>
    )
}

export default Header