import PopularSlider from '../components/PopularSlider'

const PopularSection = () => {
    return (
        <div className='w-full lg:max-h-screen px-6 lg:px-14 bg-light flex flex-col gap-8 lg:gap-8 mb-12 mt-10 lg:mt-0' id='popular'>
            <h3 className='font-bold text-4xl text-dark mx-auto'>Popular destinations</h3>
            <PopularSlider />
        </div>
    )
}

export default PopularSection