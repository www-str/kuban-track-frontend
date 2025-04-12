import { useEffect } from "react";

const categoriesData = [
  {
    category: "Отели",
    cards: [
      { title: "Kina Mountain", location: "Cambodia", rating: 4.5 },
      { title: "Kina Mountain", location: "Cambodia", rating: 4.5 },
      { title: "Kina Mountain", location: "Cambodia", rating: 4.5 },
      { title: "Kina Mountain", location: "Cambodia", rating: 4.5 },
    ],
  },
  {
    category: "Рестораны",
    cards: [
      { title: "Kina Mountain", location: "Cambodia", rating: 4.2 },
      { title: "Kina Mountain", location: "Cambodia", rating: 4.2 },
      { title: "Kina Mountain", location: "Cambodia", rating: 4.2 },
      { title: "Kina Mountain", location: "Cambodia", rating: 4.2 },
    ],
  },
  {
    category: "Караоке",
    cards: [
      { title: "Kina Mountain", location: "Cambodia", rating: 4.0 },
      { title: "Kina Mountain", location: "Cambodia", rating: 4.0 },
      { title: "Kina Mountain", location: "Cambodia", rating: 4.0 },
      { title: "Kina Mountain", location: "Cambodia", rating: 4.0 },
    ],
  },
  {
    category: "Казино",
    cards: [
      { title: "Kina Mountain", location: "Cambodia", rating: 4.8 },
      { title: "Kina Mountain", location: "Cambodia", rating: 4.8 },
      { title: "Kina Mountain", location: "Cambodia", rating: 4.8 },
      { title: "Kina Mountain", location: "Cambodia", rating: 4.8 },
    ],
  },
  {
    category: "Бары",
    cards: [
      { title: "Kina Mountain", location: "Cambodia", rating: 3.4 },
      { title: "Kina Mountain", location: "Cambodia", rating: 3.4 },
      { title: "Kina Mountain", location: "Cambodia", rating: 3.4 },
      { title: "Kina Mountain", location: "Cambodia", rating: 3.4 },
    ],
  },
  {
    category: "Ипподромы",
    cards: [
      { title: "Kina Mountain", location: "Cambodia", rating: 3.7 },
      { title: "Kina Mountain", location: "Cambodia", rating: 3.7 },
      { title: "Kina Mountain", location: "Cambodia", rating: 3.7 },
      { title: "Kina Mountain", location: "Cambodia", rating: 3.7 },
    ],
  },
];


const EventsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])


  return (
    <div className="w-full min-h-screen bg-light px-4 py-16 flex justify-center items-start" id="culturalNav">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-8 md:p-12 mt-16">
        {categoriesData.map((categoryData, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{categoryData.category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {categoryData.cards.map((card, cardIndex) => (
                <div
                  key={cardIndex}
                  className="bg-white rounded-2xl overflow-hidden shadow-md"
                >
                  <div className="p-2">
                    <div className="flex justify-between items-center">
                      <h3 className="text-sm font-semibold">{card.title}</h3>
                      <div className="bg-white bg-opacity-70 backdrop-blur-sm text-xs rounded-full px-2 py-0.5 flex items-center space-x-1">
                        <svg
                          className="w-3 h-3 text-yellow-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.929c.3-.921 1.603-.921 1.903 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.835 2.03a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.835-2.03a1 1 0 00-1.175 0l-2.835 2.03c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.95-.69l1.07-3.292z" />
                        </svg>
                        <span>{card.rating}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-xs flex items-center space-x-1">
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {card.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage