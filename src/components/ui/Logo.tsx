const Logo = () => {
    return (
        <div className='flex items-center gap-2'>

            <div className="flex flex-col gap-0 w-[30px] h-[46px] border-[3px] border-light rounded">
                <span className="w-full h-1/3 block bg-blue" />
                <span className="w-full h-1/3 block bg-pink" />
                <span className="w-full h-1/3 block bg-green" />
            </div>

            <div className="flex flex-col gap-0">
                <span className="font-medium text-3xl text-light leading-6">Kuban</span>
                <span className="font-medium text-lg text-light leading-6">Track</span>
            </div>

        </div>
    )
}


export default Logo