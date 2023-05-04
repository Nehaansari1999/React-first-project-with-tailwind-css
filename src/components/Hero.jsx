import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-[90vh]'>
      <img src="https://images.unsplash.com/photo-1681756458296-8e1c56d6047c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDc4fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt=""
      className='w-full h-full object-cover'
       />
      <div className='max-w-[1140px] m-auto'>
        <div className='absolute top-[40%] md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
          <h1 className='font-bold text-4xl'>Find Your Special Trip</h1>
          <h2 className='text-4xl py-4 italic'>With Weekaway</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, velit ipsam minima delectus ab, labore quidem veritatis commodi expedita accusantium reiciendis dolorum soluta repellat nobis cum odio sed earum necessitatibus.</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
