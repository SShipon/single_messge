import React from 'react'
import { Outlet } from 'react-router-dom'
import DiscordIcon from '../assets/DiscordLogo'
import NavLink from './NavLink'
import phLogo from '../assets/logos/ph.png'
import tailwindLogo from '../assets/logos/tailwind.svg.png'
import pythonLogo from '../assets/logos/python.jpg'

let servers = [
  { id: '1', img: phLogo },
  { id: '2', img: pythonLogo },
  { id: '3', img: tailwindLogo },
]

const Layout = () => {
  return (
    <div className='flex text-gray-100 h-screen'>
      <div className='bg-gray-900 p-3 space-y-2 overflow-y-scroll'>
        <NavLink to='/'>
          <DiscordIcon className='w-7 h-5' />
        </NavLink>

        <hr className='border-t-white/[.06] border-t-2 rounded mx-2' />
        {servers.map(({ img, id }) => (
          <NavLink key={id} to={`/server/${id}`}>
            <img src={img} alt='' />
          </NavLink>
        ))}
      </div>
      <Outlet />
    </div>
  )
}

export default Layout
