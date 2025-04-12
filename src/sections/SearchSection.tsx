import Button from '../components/ui/Button';

const cities = ['Krasnodar', 'Sochi', 'Adler', 'Gelendzhik', 'Anapa'];

const SearchSection = () => {
  return (
    <div className='w-full bg-black py-28 flex flex-col items-center gap-6'>
      <h2 className='text-light font-semibold text-4xl'>
        Choose the city for your trip
      </h2>

      <div className="flex items-center justify-center gap-2">
        {cities.map(city => (
          <Button>{city}</Button>
        ))}
      </div>

      {/* <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder='Search...'
        className='w-full max-w-6xl px-9 py-6
                  border-2 border-blue rounded-3xl
                  text-light outline-none'
      /> */}
    </div>
  )
}

export default SearchSection