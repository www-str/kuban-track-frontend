import { useEffect } from "react";

const CulturePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className='w-full min-h-20 bg-light px-4 py-12 flex justify-center items-start' id="culturalNav">
            <div className='max-w-6xl w-full bg-white rounded-2xl shadow-lg px-8 py-10 mt-18 md:px-16'>

                <h1 className='text-3xl md:text-4xl font-bold text-dark mb-6 text-center'>
                    Cultural Navigator: Legal Aspects
                </h1>

                <p className='text-lg text-gray-700 mb-6 text-justify'>
                    Modern cultural legislation provides citizens with extensive opportunities
                    for access to cultural assets and participation in cultural life.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="space-y-8">
                        <div>
                            <h2 className='text-2xl font-semibold text-dark mb-3'>
                                1. Legal Foundations
                            </h2>
                            <ul className='list-disc list-inside space-y-1.5 text-gray-600 pl-4'>
                                <li>Access cultural heritage sites</li>
                                <li>Participate in cultural life</li>
                                <li>Freedom of artistic expression</li>
                                <li>Protection of intellectual property</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className='text-2xl font-semibold text-dark mb-3'>
                                2. Citizen Rights
                            </h2>
                            <div className='bg-light rounded-lg p-3'>
                                <ul className='space-y-2'>
                                    <li>✓ Free monthly museum access</li>
                                    <li>✓ Cultural programs for all ages</li>
                                    <li>✓ Traditional crafts support</li>
                                    <li>✓ Legal protection for creatives</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="h-90 w-72 rounded-xl overflow-hidden shadow-md">
                        <img
                            src="/kazak.png"
                            alt="Cultural heritage protection"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <div>
                    <h2 className='text-2xl font-semibold text-dark mb-3'>
                        3. Krasnodar Krai Specifics
                    </h2>
                    <p className='text-gray-600 text-justify'>
                        Regional cultural policies feature Cossack heritage preservation programs,
                        multicultural project support, and cultural tourism infrastructure development.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CulturePage