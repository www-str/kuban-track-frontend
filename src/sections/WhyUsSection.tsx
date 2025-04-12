const WhyUsSection = () => {
    return (
        <div className='w-full max-h-screen px-14 bg-light py-28 grid grid-cols-2 grid-rows-2 gap-8'>
            <img src="/main-img.png" alt="why us image" className='h-full w-full object-cover rounded-4xl' />
            <img src="/main-img.png" alt="why us image" className='h-full w-full object-cover rounded-4xl' />
            <img src="/main-img.png" alt="why us image" className='h-full w-full object-cover rounded-4xl' />
            <div className="flex flex-col justify-center gap-4">
                <h3 className='font-bold text-4xl text-dark'>Why us?</h3>
                <p className='font-normal text-xl'>Krasnodar Region is a vibrant city brimming with culture, history, and natural beauty. Planning your trip to this dynamic region can be overwhelming. That's where we come in. Kuban Track is your dedicated guide to unlocking the best that Krasnodar Region has to offer, simplifying your travel planning and ensuring an unforgettable experience.</p>
            </div>
        </div>
    )
}

export default WhyUsSection