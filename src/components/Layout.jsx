import React from 'react'
import { Outlet } from 'react-router-dom'
import DiscordIcon from '../assets/DiscordLogo'
import NavLink from './NavLink'

const Layout = () => {
  return (
    <div className='flex text-gray-100 h-screen'>
      <div className='bg-gray-900 p-3 space-y-2 overflow-y-scroll'>
        <NavLink to='/'>
          <DiscordIcon className='w-7 h-5' />
        </NavLink>
        {/* {[...Array(40)].map((_, i) => (
          <NavLink>
            <img src='' alt='' />
          </NavLink>
        ))} */}
      </div>
      <Outlet />
    </div>
  )
}

export default Layout
