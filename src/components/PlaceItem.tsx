import React from 'react'

const PlaceItem = () => {
    return (
        <div className=" p-4 bg-light shadow-2xl m-20 w-56 h-56 rounded-2xl">
            <div className=' h-full flex flex-col justify-end p-4 bg-[url("/main-img.png")] bg-cover rounded-2xl'>
                <h3 className='text-light'>Kina Mountain</h3>
                <div className="flex ">
                    <img src="/location-icon.svg" alt="" className='w-4 h-4 object-contain' />
                    <span className='text-light'>Cambodia</span>
                </div>
            </div></div>
    )
}

export default PlaceItem