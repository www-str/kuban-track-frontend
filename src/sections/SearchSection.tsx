import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import { cities } from '../utils/data';

const SearchSection = () => {
  const navigate = useNavigate();

  const handleClick = (city: string) => {
    navigate(`/events/?city=${city}`)
  }

  return (
    <div className='w-full bg-black py-28 flex flex-col items-center gap-6'>
      <h2 className='text-light font-semibold text-xl lg:text-4xl'>
        Choose the city for your trip
      </h2>

      <div className="flex items-center justify-center flex-wrap gap-2 px-6">
        {cities.map((city, index) => (
          <Button key={`${city}-${index}`} onclick={() => handleClick(city)}>{city}</Button>
        ))}
      </div>
    </div>
  )
}

export default SearchSection