const PlaceItem = () => {
    return (
        <div className="mx-auto p-2 bg-light shadow my-6 w-full h-[500px] rounded-2xl">
            <div className='h-full flex flex-col gap-2 justify-end p-10 bg-[url("/main-img.png")] bg-cover rounded-2xl'>
                <h3 className='text-light text-6xl font-semibold'>Kina Mountain</h3>
                <div className="flex items-baseline gap-2">
                    <svg width="12" height="19" viewBox="0 0 40 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.3357 26.125C18.4887 26.125 16.7173 25.4007 15.4112 24.1114C14.1051 22.822 13.3714 21.0734 13.3714 19.25C13.3714 17.4266 14.1051 15.678 15.4112 14.3886C16.7173 13.0993 18.4887 12.375 20.3357 12.375C22.1827 12.375 23.9541 13.0993 25.2602 14.3886C26.5662 15.678 27.3 17.4266 27.3 19.25C27.3 20.1528 27.1198 21.0468 26.7699 21.8809C26.4199 22.7151 25.9069 23.473 25.2602 24.1114C24.6135 24.7498 23.8458 25.2562 23.0008 25.6017C22.1559 25.9472 21.2503 26.125 20.3357 26.125ZM20.3357 0C15.164 0 10.2041 2.02812 6.54711 5.63819C2.89015 9.24827 0.835693 14.1446 0.835693 19.25C0.835693 33.6875 20.3357 55 20.3357 55C20.3357 55 39.8357 33.6875 39.8357 19.25C39.8357 14.1446 37.7812 9.24827 34.1243 5.63819C30.4673 2.02812 25.5074 0 20.3357 0Z" fill="white" />
                    </svg>

                    <span className='text-light text-2xl '>Cambodia</span>
                </div>
            </div></div>
    )
}

export default PlaceItem