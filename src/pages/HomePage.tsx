import SearchSection from "../sections/SearchSection"
import MainSection from "../sections/MainSection"
import { useState } from "react"

const HomePage = () => {
    const [searchValue, setSearchValue] = useState('');
    return (
        <div className=''>
            <MainSection />
            <SearchSection value={searchValue} setValue={setSearchValue} />
        </div>
    )
}

export default HomePage