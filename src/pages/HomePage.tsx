import SearchSection from "../sections/SearchSection"
import MainSection from "../sections/MainSection"
import WhyUsSection from "../sections/WhyUsSection";
import PopularSection from "../sections/PopularSection";
import { useEffect } from "react";

const HomePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div className=''>
            <MainSection />
            <SearchSection />
            <WhyUsSection />
            <PopularSection />
        </div>
    )
}

export default HomePage