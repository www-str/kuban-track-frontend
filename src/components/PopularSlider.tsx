import React from "react";
import Slider from "react-slick";
import PlaceItem from "./PlaceItem";

function PopularSlider() {
    const settings = {
        // dots: true,
        className: "center",
        centerMode: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="slider-container max-w-4xl mx-auto">
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
