import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const NavLink = ({ to, children }) => {
  const location = useLocation()
  console.log(location.pathname)
  return (
    <div>
      <div className='relative group'>
        <div className='flex items-center h-full absolute -left-3'>
          <div
            className={`${
              location.pathname === '/'
                ? 'h-10'
                : 'h-5 scale-0 opacity-0 group-hover:scale-100  group-hover:opacity-100 '
            } w-1  bg-white rounded-r transition-all duration-200 origin-left`}
          />
        </div>
        <Link
          to='/'
          className={`${
            location.pathname === '/'
              ? 'bg-brand text-white rounded-2xl'
              : 'text-gray-100 bg-gray-700 group-hover:bg-brand group-hover:text-white group-hover:rounded-2xl rounded-3xl'
          }   transition-all duration-200  w-12 h-12  flex justify-center items-center group-active:translate-y-px`}
        >
          {children}
        </Link>
      </div>
    </div>
  )
}

export default NavLink
