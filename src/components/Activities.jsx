import React from 'react'


const Activities = () => {
  return (
    <div className='max-w-[1140px] m-auto w-full md:flex mt-[-75px]'> 
      <div className='relative p-4'>
        <h3 className='absolute z-10 top-[45%] left-[40%] translate-x-[-50%]translate-y-[-50%] text-white text-2xl font-bold'>Resorts</h3>
      <img className='w-full h-full object-cover relative border-4 border-white shadow-lg'
       src="https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmVzb3J0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="" />
      </div>

      <div className='relative p-4'>
      <h3 className='absolute z-10 top-[45%] left-[40%] translate-x-[-50%]translate-y-[-50%] text-white text-2xl font-bold'>Cruises</h3>
      <img className='w-full h-full object-cover relative border-4 border-white shadow-lg' 
      src="https://images.unsplash.com/photo-1502621737164-fb78cb47e276?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHNoaXB8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt="" />
      </div>

      <div className='relative p-4'>
      <h3 className='absolute z-10 top-[45%] left-[40%] translate-x-[-50%]translate-y-[-50%] text-white text-2xl font-bold'>Excursions</h3>
      <img className='w-full h-full object-cover relative border-4 border-white shadow-lg' 
      src="https://images.unsplash.com/photo-1682687981630-cefe9cd73072?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTJ8fEV4Y3Vyc2lvbnMlMjBmaXNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" />
      </div>
    </div>
  )
}

export default Activities
