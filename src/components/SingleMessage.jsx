import React from 'react'
import avatarImg from '../assets/avatar.jpg'

const SingleMessage = () => {
  return (
    <div className='bg-gray-700 min-h-screen text-white flex flex-col justify-center items-center'>
      <h1 className='text-2xl text-gray-200 underline'>
        Discord Message Component
      </h1>
      <div className='max-w-lg border rounded-md p-5 mt-5'>
        <div className='flex hover:bg-gray-800 hover:bg-opacity-30 px-4 py-1'>
          <img
            src={avatarImg}
            alt='avatar'
            className='w-10 h-10 rounded-full mr-4'
          />
          <div>
            <p className='flex items-baseline'>
              <span className='text-green-500 mr-2 text-sm font-medium'>
                shakilatik
              </span>
              <span className='text-xs text-gray-500'>21/10/2022</span>
            </p>
            <p className='text-gray-300'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              voluptate accusantium, sapiente quidem nihil dolore suscipit hic,
              alias vel doloribus corporis minima deserunt earum maxime.
            </p>
          </div>
        </div>
        <div className='mt-1 hover:bg-gray-800 hover:bg-opacity-30 px-4 py-1'>
          <p className='text-gray-300 pl-14'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
            voluptate accusantium, sapiente quidem nihil dolore suscipit hic,
            alias vel doloribus corporis minima.
          </p>
        </div>
        <div className='mt-1 hover:bg-gray-800 hover:bg-opacity-30 px-4 py-1'>
          <p className='text-gray-300 pl-14'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
            voluptate accusantium, sapiente quidem nihil dolore suscipit hic.
          </p>
        </div>
      </div>
    </div>
  )
}

export default SingleMessage
