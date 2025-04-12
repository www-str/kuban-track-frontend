import Slider from "react-slick";
import PlaceItem from "./PlaceItem";

export type placeType = {
    image: string;
    title: string;
    location: string;
}

const places: placeType[] = [
    {
        image: "/rose-farm.png",
        title: "Rose Khutor",
        location: "Sochi",
    },
    {
        image: "/sea.png",
        title: "Yacht trip Victoria",
        location: "Gelendzhik",
    },
    {
        image: "/sochi.png",
        title: "Krasnaya Polyana - Sochi Casino",
        location: "Sochi",
    },
    {
        image: "/attract.png",
        title: "Eurostar Attraction",
        location: "Anapa",
    },
    {
        image: "/krasnodar-park.png",
        title: "Krasnodar Park",
        location: "Krasnodar",
    },
    {
        image: "/horse.png",
        title: "Asimina - horse riding",
        location: "Anapa",
    },
    {
        image: "/red-meadow.png",
        title: "Krasnaya Polyana",
        location: "Sochi",
    },
];

function PopularSlider() {


    const settings = {
        // dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 6000,
        cssEase: "ease",
    };

    return (
        <div className="slider-container max-w-full mx-auto">
            <Slider {...settings}  className="">
                {places.map((place, index) => (
                    <PlaceItem key={index} place={place} />
                ))}
            </Slider>
        </div>
    );
}

export default PopularSlider;