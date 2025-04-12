import Button from '../components/ui/Button';

const cities = ['Krasnodar', 'Sochi', 'Adler', 'Gelendzhik', 'Anapa'];

const SearchSection = () => {
  return (
    <div className='w-full bg-black py-28 flex flex-col items-center gap-6'>
      <h2 className='text-light font-semibold text-xl lg:text-4xl'>
        Choose the city for your trip
      </h2>

      <div className="flex items-center justify-center flex-wrap gap-2 px-6">
        {cities.map(city => (
          <Button key={city}>{city}</Button>
        ))}
      </div>
    </div>
  )
}

export default SearchSection