import { useEffect } from "react";

const info = [
    {
        title: "Legal Foundations",
        items: [
            'Access cultural heritage sites',
            'Participate in cultural life',
            'Freedom of artistic expression',
            'Protection of intellectual property',
        ]
    },
    {
        title: "Citizen Rights",
        items: [
            'Free monthly museum access',
            'Cultural programs for all ages',
            'Traditional crafts support',
            'Legal protection for creatives',
        ]
    },
    {
        title: "Krasnodar Krai Specifics",
        items: [
            'Regional cultural policies feature Cossack heritage preservation programs, multicultural project support, and cultural tourism infrastructure development.',
        ]
    }
]

const CulturePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div className='w-full px-6 lg:px-14 py-40 flex flex-col gap-6'>

            <h3 className='font-bold text-4xl text-center'>
                Cultural Navigator: Legal Aspects
            </h3>

            <p className='text-lg lg:text-2xl text-dark text-center max-w-2/3 m-auto'>
                Modern cultural legislation provides citizens with extensive opportunities
                for access to cultural assets and participation in cultural life.
            </p>

            <div className="flex flex-col lg:flex-row gap-8 max-h-fit lg:mt-8 ">
                <div className="flex flex-col h-fit w-full lg:w-2/4 justify-start gap-18 border-2 border-blue rounded-2xl p-8 md:p-16">
                    {info.map((infoItem, index) => (
                        <div className="" key={index}>
                            <h4 className='text-4xl font-black text-dark text-center lg:text-start mb-3'>
                                {infoItem.title}
                            </h4>
                            <ul className='flex flex-col gap-2'>
                                {infoItem.items.map((item, idx) => (
                                    <li key={idx} className="text-lg font-medium text-center lg:text-start">{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="w-full max-h-[787px] lg:max-h-none lg:max-w-2/4 rounded-xl overflow-hidden shadow-md border-2 border-blue">
                    <img
                        src="/kazak.png"
                        alt="Cultural heritage protection"
                        className="w-full h-full object-cover object-top"
                    />
                </div>
            </div>
        </div>
    )
}

export default CulturePage