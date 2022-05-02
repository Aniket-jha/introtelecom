import React from 'react'
import {
 LocationMarkerIcon,
 PhoneOutgoingIcon
} from '@heroicons/react/solid'
const ContactContent = () => {
  return (
    <div className='pt-36 flex  items-center justify-center flex-col lg:ml-12 pb-12 lg:pr-10'>
        <div>
           <h1 className='text-3xl text-center text-emerald-600  font-bold'>Internet for you</h1>
        </div>
        <div className='flex flex-col'>
            
            <div className='flex items-center lg:ml-4 justify-center'>
                <LocationMarkerIcon className='h-6 w-8 mt-6 text-emerald-600'/>
                <p className='w-72 mt-6 lg:ml-3 text-center text-emerald-400 text-sm'>A/104, Siddheshwar Building, L T Dilip Gupte Marg, Shivaji Park, Mahim, Mumbai - 400016</p>
            </div>
            <div className='flex items-center justify-center lg:mr-16 mt-4'>
                <a
              href="tel:+91 9769688035"
              className=" mt-5 lg:mt-5     lg:ml-24 whitespace-nowrap inline-flex items-center justify-center px-6 py-3 lg:px-8 lg:py-4 border border-transparent rounded-md shadow-sm text-base  lg:text-2xl text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:bg-slate-100"
            >
               <PhoneOutgoingIcon className='h-6 w-6 mr-4'/>Call us today
            </a>
            </div>
            <p className='text-sm text-center lg:ml-10 mt-4 text-emerald-400'>or email at introtelecomp@gmail.com</p>
        </div>
    </div>
  )
}

export default ContactContent