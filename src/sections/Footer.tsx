import Logo from "../components/ui/Logo";

export const team = ['Elizabeth', 'Artyom', 'Mickhail', 'Georgii'];

const Footer = () => {
    return (
        <div className='w-full px-14 py-16 lg:max-h-12 flex flex-col lg:flex-row items-center gap-6 justify-between rounded-t-4xl backdrop-blur-2x bg-black'>
            <div className="w-14 ml-2">
                <Logo />
            </div>
            <div className="l-auto flex items-center justify-center lg:justify-start flex-wrap gap-6">
                <p className='text-lg font-bold text-light border-r-2 border-light pr-6'>
                    Команда: STR
                </p>

                {team.map((item, index) => (
                    <p key={index} className='text-lg font-medium text-light'>
                        {item}
                    </p>
                ))}
            </div>
        </div>
    )
}

export default Footer