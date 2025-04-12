import SearchSection from "../sections/SearchSection"
import MainSection from "../sections/MainSection"
import WhyUsSection from "../sections/WhyUsSection";
import PopularSection from "../sections/PopularSection";

const HomePage = () => {
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