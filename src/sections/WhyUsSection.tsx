const WhyUsSection = () => {
    return (
        <div className='w-full lg:max-h-screen px-6 lg:px-14 py-12 lg:py-28 bg-light flex flex-col-reverse lg:grid lg:grid-cols-2 lg:grid-rows-2 gap-8' id="whyUs">
            <img src="/why-us1.png" alt="why us image" className='h-full w-full object-cover rounded-4xl' />
            <img src="/why-us2.png" alt="why us image" className='h-full w-full object-cover rounded-4xl' />
            <img src="/why-us3.png" alt="why us image" className='h-full w-full object-cover rounded-4xl' />
            <div className="flex flex-col justify-center gap-4">
                <h3 className='font-bold text-4xl text-dark'>Why us?</h3>
                <p className='font-normal text-md lg:text-xl'>Krasnodar Region is a vibrant city brimming with culture, history, and natural beauty. Planning your trip to this dynamic region can be overwhelming. That's where we come in. Kuban Track is your dedicated guide to unlocking the best that Krasnodar Region has to offer, simplifying your travel planning and ensuring an unforgettable experience.</p>
            </div>
        </div>
    )
}

export default WhyUsSection