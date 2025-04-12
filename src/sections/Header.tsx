import Button from '../components/ui/Button'
import Logo from '../components/ui/Logo'

const links = [
    {
        name: 'About',
        path: '/about',
    },
    {
        name: 'Map',
        path: '/map',
    },
    {
        name: 'Events',
        path: '/events',
    },
    {
        name: 'Profile',
        path: '/profile',
    },
]

const Header = () => {
    return (
        <>
            <header className='fixed top-6 left-14 right-14 z-20 flex items-center justify-between p-2 rounded-4xl backdrop-blur-2x bg-blue50'>
                <div className="w-14 ml-2">
                    <Logo />
                </div>
                <div className="flex items-center gap-12">
                    {links.map((link, index) => (
                        <a
                            key={index}
                            href={link.path}
                            className='text-lg font-semibold text-light cursor-pointer transition hover:opacity-80'
                        >
                            {link.name}
                        </a>
                    ))}
                    <Button>Sign Up</Button>
                </div>
            </header></>
    )
}

export default Header