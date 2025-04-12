import { Dispatch, FC, SetStateAction, useState } from 'react'

interface ISearchSection {
  value: string;
  setValue: Dispatch<SetStateAction<string>>
}

const SearchSection: FC<ISearchSection> = ({ value, setValue }) => {
  return (
    <div className='w-full bg-black py-52 flex flex-col items-center gap-6'>
      <h2 className='text-light font-semibold text-4xl'>
        Enter city, attraction or a category
      </h2>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder='Search...'
        className='w-full max-w-6xl px-9 py-6
                  border-2 border-blue rounded-3xl
                  text-light outline-none'
      />
    </div>
  )
}

export default SearchSection