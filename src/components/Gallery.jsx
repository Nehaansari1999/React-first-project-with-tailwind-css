import React from 'react'

const Gallery = () => {
  return (
    <div id='gallery' className='max-w-[1140px] m-auto w-full px-4 py-16'>
      <h2 className='text-center text-gray-700 p-4'>Gallery</h2>
      <div className='grid sm:grid-cols-5 gap-4'>
        <div className='sm:col-span-3 col-span-2 row-span-2'>
            <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1586611292717-f828b167408c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVzb3J0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" />
        </div>
        <div>
            <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60" alt="" />
        </div>
        <div>
            <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt="" />
        </div>
        <div>
            <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1542986386-660ccbbedaf8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hpcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="" />
        </div>
        <div>
            <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Gallery
