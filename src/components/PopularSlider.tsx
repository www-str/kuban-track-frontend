import Slider from "react-slick";
import PlaceItem from "./PlaceItem";

function PopularSlider() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 4000,
        cssEase: "linear",
    };
    return (
        <div className="slider-container max-w-full mx-auto">
            <Slider {...settings} className="" >
                <PlaceItem />
                <PlaceItem />
                <PlaceItem />
                <PlaceItem />
            </Slider>
        </div>
    );
}

export default PopularSlider;
