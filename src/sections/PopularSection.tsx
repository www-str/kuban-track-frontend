import PopularSlider from '../components/PopularSlider'

const PopularSection = () => {
    return (
        <div className='w-full max-h-screen px-14 bg-light py-28 flex flex-col gap-8'>
            <h3 className='font-bold text-4xl text-dark mx-auto'>Popular destinations</h3>
            <PopularSlider />
        </div>
    )
}

export default PopularSection