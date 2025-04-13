import { useEffect, useState } from "react";
import { useStore } from "../store/useStore";
import { placeType, rubricsType } from "../store/types";
import Button from "../components/ui/Button";
import { cities } from "../utils/data";

const HALAL_VAR = 'Халяль ресторан';

const EventsPage = () => {
  const { isAuth, getPlaces, getRubrics, setAchievement, getHalalPlaces } = useStore();

  const [events, setEvents] = useState<placeType[]>([]);
  const [rubrics, setRubrics] = useState<rubricsType[]>([]);

  const urlParams = new URLSearchParams(window.location.search);
  const [city, setCity] = useState<string>(urlParams.get('city') || '');
  const [query, setQuery] = useState('');

  const fetchRubrics = async () => {
    const res = await getRubrics();
    setRubrics(res);
  }

  useEffect(() => {
    fetchRubrics();
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const fetchEvents = async () => {
    if (city && query) {
      const res = query === HALAL_VAR ? await getHalalPlaces({ city, query }) : await getPlaces({ city, query });
      setEvents(res);
    }
  }

  const handleVisited = async (id: string) => {
    if (isAuth) {
      const res = await setAchievement(id);
      console.log(res);
    }
  }

  return (
    <div className="w-full min-h-screen bg-light px-6 lg:px-14 py-30 md:py-40 flex flex-col gap-12" >
      <h3 className='font-bold text-4xl'>Events</h3>

      <div className="flex flex-col gap-5 border border-blue rounded-2xl p-12">
        <p className="text-2xl text-center font-semibold">Rubrics</p>
        {rubrics ? (
          <div className="flex items-center justify-center flex-wrap gap-2">
            {rubrics.map((rubric, index) => (
              <Button
                key={`${rubric.title}-${index}`}
                onclick={() => setQuery(rubric.content)}
                classname={`${query === rubric.content ? "opacity-90" : ""} w-full sm:w-fit`}
              >
                {rubric.title}
              </Button>
            ))}
            <Button
              onclick={() => setQuery(HALAL_VAR)}
              classname={`${query === HALAL_VAR ? "opacity-90" : ""} w-full sm:w-fit`}
            >
              Halal
            </Button>
          </div>
        ) : (
          <p>loadinng yooo</p>
        )}

        <span className="w-full h-px bg-blue"></span>
        <p className="text-2xl text-center font-semibold">Cities</p>

        <div className="flex items-center justify-center flex-wrap gap-2">
          {cities.map((item, index) => (
            <Button
              key={`${item}-${index}`}
              onclick={() => setCity(item)}
              classname={`${city === item ? "opacity-90" : ""} w-full sm:w-fit`}
            >
              {item}
            </Button>
          ))}
        </div>
      </div>

      <Button onclick={fetchEvents}>Search Events</Button>

      <div className="flex flex-col gap-12">
        {events && events.map(event => (
          <div key={event.id} className="w-full flex flex-col gap-6 border border-blue50 p-10 rounded-4xl">
            <h4 className="text-2xl font-semibold text-dark">{event.name}</h4>
            <p className="text-blue text-lg overflow-hidden">{event.purpose_name}</p>
            <p className="text-blue text-lg overflow-hidden">{event.address_name}</p>
            <Button onclick={() => handleVisited(event.id)}>Visited</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage