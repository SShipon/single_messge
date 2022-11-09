import React from 'react'
import avatarImg from '../assets/avatar.jpg'

const SingleMessage = ({ i }) => {
  return (
    <div className='bg-gray-700 text-white flex flex-col justify-center items-center'>
      <div className='flex hover:bg-gray-800 hover:bg-opacity-30 px-4 py-1'>
        <img
          src={avatarImg}
          alt='avatar'
          className='w-10 h-10 rounded-full mr-4 cursor-pointer'
        />
        <div>
          <p className='flex items-baseline'>
            <span className='text-green-500 mr-2 text-sm font-medium cursor-pointer'>
              Sujon 
            </span>
            <span className='text-xs text-gray-500'>21/10/2022</span>
          </p>
          <p className='text-gray-300'>
            {i}: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
            voluptate accusantium, sapiente quidem nihil dolore suscipit hic,
            alias vel doloribus corporis minima deserunt earum maxime.
          </p>
        </div>
      </div>
      <div className='mt-1 hover:bg-gray-800 hover:bg-opacity-30 px-4 py-1'>
        <p className='text-gray-300 pl-14'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptate
          accusantium, sapiente quidem nihil dolore suscipit hic, alias vel
          doloribus corporis minima.
        </p>
      </div>
    </div>
  )
}

export default SingleMessage
