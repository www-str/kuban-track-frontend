import { useNavigate } from 'react-router-dom'
import Button from '../components/ui/Button'
import Logo from '../components/ui/Logo'

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

    const handleNavigate = (link: string) => {
        if (link.includes("#")) {
            document.querySelector(link)?.scrollIntoView({
                behavior: 'smooth',
                inline: 'center'
            });
            return;
        }
        navigate(link)
    }

    return (
        <>
            <header className='fixed top-6 left-14 right-14 z-20 flex items-center justify-between p-2 rounded-4xl backdrop-blur-2x bg-blue50'>
                <div className="w-14 ml-2" onClick={() => handleNavigate("/")}>
                    <Logo />
                </div>
                <div className="flex items-center gap-12">
                    {links.map((link, index) => (
                        <button
                            key={index}
                            onClick={() => handleNavigate(link.path)}
                            className='text-lg font-semibold text-light cursor-pointer transition hover:opacity-80'
                        >
                            {link.name}
                        </button>
                    ))}
                    <Button onclick={() => handleNavigate('/profile')}>Sign Up</Button>
                </div>
            </header></>
    )
}

export default Header