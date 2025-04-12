const MainSection = () => {
    return (
        <div className='bg-[url("/main-img.png")] bg-bottom bg-cover w-full h-screen flex flex-col'>
            <div className="flex flex-col items-center text-center text-light max-w-1/2 m-auto">
                <span className='uppercase text-4xl font-semibol'>Discover</span>
                <h1 className='uppercase text-9xl font-bold'>KUBAN</h1>
                <p className='text-center text-2xl font-normal mt-6 '>
                    Would you explore natur paradise in the world, let’s find the best destination in world with us
                </p>
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