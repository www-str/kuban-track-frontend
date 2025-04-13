import { motion } from "motion/react"

const MainSection = () => {
    return (
        <div className='bg-[url("/main-img.png")] bg-bottom bg-cover w-full h-screen flex flex-col'>
            <div className="flex flex-col items-center text-center text-light m-auto px-6">
                <motion.span
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: 1,
                        transition: { duration: 4 }
                    }}
                    className='uppercase text-xl lg:text-3xl font-medium opacity-90 tracking-widest'
                >
                    Discover
                </motion.span>
                <motion.h1
                    className='uppercase text-7xl lg:text-9xl font-bold'
                    initial={{
                        y: "-200%",
                        opacity: 0
                    }}
                    animate={{
                        y: 0,
                        opacity: 1,
                        transition: { duration: 1 }
                    }}
                >KUBAN</motion.h1>
                <motion.p
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: 1,
                        transition: { duration: 4 }
                    }}
                    className='text-center text-lg lg:text-2xl font-normal mt-3 lg:mt-6 opacity-90'
                >
                    Ready to experience the best of the Krasnodar region? <br /> Find your place to enjoy with us
                </motion.p>
            </div>

            <div className="mb-10 mx-auto animate-bounce">
                <svg width="25" height="25" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.875 0V22.7811L27.3752 12.2809L30 15L15 30L0 15L2.62491 12.3753L13.125 22.7811V0H16.875Z" fill="#F7FFF7" />
                </svg>
            </div>
        </div>
    )
}

export default MainSection