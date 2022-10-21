import React from 'react'

const Layout = () => {
  return (
    <div className='flex text-gray-100 h-screen'>
      <div className='bg-gray-900 p-3 space-y-2 overflow-y-scroll'>
        {[...Array(40)].map((_, i) => (
          <div className='bg-white text-gray-800 w-12 h-12 rounded-full flex justify-center items-center'>
            {i}
          </div>
        ))}
      </div>
      <div className='bg-gray-800 w-60 flex flex-col'>
        <div className='px-3 h-12 flex items-center shadow-md flex-shrink-0'>
          Tailwind CSS
        </div>
        <div className='text-gray-300 p-3 flex-1 overflow-y-scroll'>
          <p className='text-white'>Channel (unread)</p>
          {[...Array(40)].map((_, i) => (
            <p>Channel: {i}</p>
          ))}
        </div>
      </div>
      <div className='bg-gray-700 flex-1 flex flex-col'>
        <div className='px-3 h-12 flex items-center shadow-md'>general</div>
        <div className='p-3 flex-1 overflow-y-scroll space-y-4'>
          {[...Array(40)].map((_, i) => (
            <p>
              Message: {i}, Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Amet pariatur facere quod illo, numquam magni velit deleniti
              maiores corporis quia veniam quas vitae veritatis animi. Est, hic
              totam quae ullam iusto id maiores labore ea exercitationem vel
              sint vitae harum nemo vero sed asperiores qui provident officiis,
              fugit amet voluptatibus.
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Layout
