import React from 'react'
import { useParams } from 'react-router-dom'
import SingleMessage from './SingleMessage'

const Server = () => {
  const { id } = useParams()
  return (
    <>
      <div className='bg-gray-800 w-60 flex flex-col'>
        <div className='px-3 h-12 flex items-center shadow-md flex-shrink-0'>
          <p>Server: {id}</p>
        </div>
        <div className='text-gray-300 p-3 flex-1 overflow-y-scroll'>
          {[...Array(40)].map((_, i) => (
            <p key={i}>Channel: {i}</p>
          ))}
        </div>
      </div>
      <div className='bg-gray-700 flex-1 flex flex-col'>
        <div className='px-3 h-12 flex items-center shadow-md'>general</div>
        <div className='p-3 flex-1 overflow-y-scroll space-y-4'>
          {[...Array(parseInt(id) + 1)].map((_, i) => (
            <SingleMessage key={i} i={i} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Server
