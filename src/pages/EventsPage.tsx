const EventsPage = () => {
  const cardsData = [
      {
          image: "https://via.placeholder.com/300x200/4682B4", // Replace with your image URLs
          title: "Kina Mountain",
          location: "Cambodia",
          rating: 3.4,
      },
      {
          image: "https://via.placeholder.com/300x200/B22222",
          title: "Kina Mountain",
          location: "Cambodia",
          rating: 4.5,
      },
      {
          image: "https://via.placeholder.com/300x200/008080",
          title: "Kina Mountain",
          location: "Cambodia",
          rating: 4.2,
      },
      {
          image: "https://via.placeholder.com/300x200/FFD700",
          title: "Kina Mountain",
          location: "Cambodia",
          rating: 3.5,
      },
  ];

  return (
      <div
          className="w-full min-h-screen bg-light px-4 py-16 flex justify-center items-start"
          id="culturalNav"
      >
          <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-8 md:p-12 mt-16">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {cardsData.map((card, index) => (
                      <div
                          key={index}
                          className="bg-white rounded-2xl overflow-hidden shadow-md"
                      >
                          <img
                              src={card.image}
                              alt={card.title}
                              className="w-full h-48 object-cover"
                          />
                          <div className="p-4">
                              <div className="flex justify-end">
                                  <div className="bg-white bg-opacity-70 backdrop-blur-sm text-sm rounded-full px-2 py-1 flex items-center space-x-1">
                                      <svg
                                          className="w-4 h-4 text-yellow-500"
                                          fill="currentColor"
                                          viewBox="0 0 20 20"
                                          xmlns="http://www.w3.org/2000/svg"
                                      >
                                                                                    <path d="M9.049 2.929c.3-.921 1.603-.921 1.903 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.835 2.03a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.835-2.03a1 1 0 00-1.175 0l-2.835 2.03c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.95-.69l1.07-3.292z" />
                                        </svg>
                                        <span>{card.rating}</span>
                                    </div>
                                </div>
                                <h2 className="text-lg font-semibold mt-2">
                                    {card.title}
                                </h2>
                                <p className="text-gray-600 text-sm flex items-center space-x-1">
                                    <svg
                                        className="w-4 h-4"
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
        </div>
    );
};

export default EventsPage