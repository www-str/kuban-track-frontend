
const CulturePage = () => {
    return (
        <div className='w-full min-h-20 bg-light px-4 py-12 flex justify-center items-start' id="culturalNav">
            <div className='max-w-6xl w-full bg-white rounded-2xl shadow-lg px-8 py-10 mt-18 md:px-16'>

                <h1 className='text-3xl md:text-4xl font-bold text-blue mb-6 text-center'>
                    Cultural Navigator: legal aspects
                </h1>
                
                <p className='text-lg text-gray-700 mb-8 text-justify'>
                    Modern cultural legislation provides citizens with extensive opportunities 
                    for access to cultural assets and participation in cultural life. 
                    This overview examines key aspects of cultural law and regulations.
                </p>

                <div className='mb-10'>
                    <h2 className='text-2xl font-semibold text-dark mb-4'>
                        1. Legal Foundations of Cultural Activities
                    </h2>
                    <p className='text-gray-600 mb-4'>
                        According to Article 44 of the Russian Constitution, every citizen has the right to:
                    </p>
                    <ul className='list-disc list-inside space-y-2 text-gray-600 pl-4'>
                        <li>Access cultural heritage sites</li>
                        <li>Participate in cultural life</li>
                        <li>Freedom of artistic expression</li>
                        <li>Protection of intellectual property</li>
                    </ul>
                </div>

                <div className='mb-10'>
                    <h2 className='text-2xl font-semibold text-dark mb-4'>
                        2. Citizen Rights and Opportunities
                    </h2>
                    <p className='text-gray-600 mb-4'>
                        The Federal Law "On Culture" guarantees:
                    </p>
                    <div className='bg-light rounded-lg p-4'>
                        <ul className='space-y-3'>
                            <li>✓ Free monthly access to state museums</li>
                            <li>✓ Participation in cultural programs for all age groups</li>
                            <li>✓ Support for traditional crafts and folk arts</li>
                            <li>✓ Legal protection for creative professionals</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <h2 className='text-2xl font-semibold text-dark mb-4'>
                        3. Krasnodar Krai Specifics
                    </h2>
                    <p className='text-gray-600'>
                        According to the Krasnodar Krai charter, regional cultural policies include 
                        special programs for Cossack heritage preservation, support for multicultural 
                        projects, and development of cultural tourism infrastructure.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CulturePage