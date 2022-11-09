import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import SingleMessage from './SingleMessage'

const Home = () => {
  const [showCommunity, setShowCommunity] = useState(false);

  const toggleCommunity = () => {
    setShowCommunity(!showCommunity);
  }
  return (
    <>
      <div className='bg-gray-800 w-60 flex flex-col'>
        <div className='px-3 h-12 flex items-center shadow-md flex-shrink-0'>
          Friends
        </div>
        <div className='text-gray-300 p-3 flex-1 overflow-y-scroll'>
          <p className='text-white'>Friend (unread)</p>
          <div class="col-span-1 border-4 border-green-500 h-screen sticky top-0" >
            <div className="border-4">
            <div>
              <h2 className="text-2xl font-medium mb-2 text-[#444]">Key Features</h2>
              <div className="bg-[#FFFFFF] rounded shadow-sm">
                <div className="flex items-center bg-[#0a66c2] text-white pl-4 py-3 rounded">
                  <i class="fa-solid fa-clapperboard mr-2"></i>
                  <h4 className="">Play</h4>
                </div>
                <hr />
                <div className="flex items-center pl-4 py-3 rounded">
                  <i class="fa-solid fa-video mr-2"></i>
                  <h4><Link to='meet' className="">Meet</Link></h4>
                </div>
                <hr />
                <div className="flex items-center pl-4 py-3 rounded">
                  <i class="fa-solid fa-comment-dots mr-2"></i>
                  <h4>Hangout</h4>
                </div>
                <hr />
                <div className="flex items-center pl-4 py-3 rounded">
                  <i class="fa-solid fa-play mr-2"></i>
                  <h4>Moment</h4>
                </div>
              </div>
            </div>
            <div class="mt-2">
              <h2 className="text-2xl font-medium mb-2 text-[#444]">Account</h2>
              <div className="rounded bg-[#FFFFFF] shadow-sm">
                <div className="flex items-center  text-dark pl-4 py-3 rounded">
                  <i class="fa-solid fa-user mr-2"></i>
                  <h4>My Profile</h4>
                </div>
                <hr />
                <div className="flex items-center text-dark pl-4 py-3 rounded">
                  <i class="fa-solid fa-user-pen mr-2"></i>
                  <h4>Edit Profile</h4>
                </div>
              </div>
            </div>
            <div class="mt-2 ">
              <h2 className="text-2xl font-medium mb-2 text-[#444]">Additional Settings</h2>
              <div className="bg-[#FFFFFF] rounded shadow-sm">
                <div className="flex items-center  text-dark pl-4 py-3 rounded">
                  <i class="fa-solid fa-gear mr-2"></i>
                  <h4>Settings</h4>
                </div>
                <hr />
                <div className="flex items-center text-dark pl-4 py-3 rounded">
                  <i class="fa-solid fa-circle-dot mr-2"></i>
                  <h4>Options</h4>
                </div>
              </div>
            </div>
            <div class="mt-2 ">
              <div className="flex justify-between items-center">
              <h2 className="text-2xl font-medium mb-2 text-[#444]">Community</h2>
              <i onClick={toggleCommunity} class={`fa-solid ${showCommunity ? 'fa-chevron-up ': 'fa-chevron-down'} pr-2`}></i>
              </div>
              <div className={`${showCommunity ? 'block': 'hidden'} bg-[#FFFFFF] rounded shadow-sm py-3 grid grid-cols-3 gap-3`}>
                 <div className="text-center">
                 <i class="fa-solid fa-calendar-day"></i>
                  <p>Events</p>
                 </div>
                 <div className="text-center">
                 <i class="fa-solid fa-file-lines"></i>
                  <p>Blogs</p>
                 </div>
                 <div className="text-center">
                 <i class="fa-solid fa-shop"></i>
                  <p>Markets</p>
                 </div>
                 <div className="text-center">
                 <i class="fa-solid fa-comments"></i>
                  <p>Forum</p>
                 </div>
                 <div className="text-center">
                 <i class="fa-solid fa-file-pen"></i>
                  <p>My Article</p>
                 </div>
                 <div className="text-center">
                 <i class="fa-brands fa-product-hunt"></i>
                  <p>My Products</p>
                 </div>
                 <div className="text-center">
                 <i class="fa-solid fa-people-group"></i>
                  <p>My Groups</p>
                 </div>
                 <div className="text-center">
                 <i class="fa-regular fa-file-lines"></i>
                  <p>My Pages</p>
                 </div>
              </div>
            </div>

            </div>
          
          </div>
        </div>
      </div>
      <div className='bg-gray-700 flex-1 flex flex-col'>
        <div className='px-3 h-12 flex items-center shadow-md'>general</div>
        <div className='p-3 flex-1 overflow-y-scroll space-y-4'>
          {[...Array(40)].map((_, i) => (
            <SingleMessage key={i} i={i} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Home
