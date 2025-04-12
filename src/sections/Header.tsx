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
        <header className='fixed top-12 left-1/2 -translate-x-1/2 flex items-center justify-between w-screen px-14'>
            <Logo />
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
        </header>
    )
}

export default Header