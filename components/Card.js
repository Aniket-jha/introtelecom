import React from 'react'
import {CheckIcon } from "@heroicons/react/outline";
import Link from "next/link"
const Card = ({plan}) => {
  return (
    <div className='m-6 shadow-lg rounded-lg w-64'>
        <div className='bg-emerald-600 rounded-lg rounded-b-none p-6'>
            <h3 className='text-emerald-200 text-center font-bold text-lg '>{plan.subTitle}</h3>
            <p className='text-center text-slate-300 text-sm'>{plan.plan}</p>
            <div>
            <h1 className='text-center text-white text-2xl mt-6 font-bold'>Rs. {plan.price}</h1>
            </div>
        </div>
        <div className='m-5 ' >
        <div className='flex items-center justify-center'>
        <Link passHref  href='./contact'>
        <button  className='border-solid border-emerald-400 border-2 p-3 text-emerald-500 hover:bg-emerald-400 hover:text-white'>
             Enquire Now
             </button>
              </Link>
        </div>
        </div>
        <div className='m-5'>
          <p className='text-sm text-gray-500 font-bold'>What you will get?</p>
          <div className='mt-5'>
            <div className='flex '>
           <CheckIcon className='w-6 h-6 mr-2 text-emerald-400'/>
           <p className='text-emerald-400'>High Speed Internet</p>
            </div>
          </div>
          <div className='mt-5'>
            <div className='flex '>
           <CheckIcon className='w-6 h-6 mr-2 text-emerald-400'/>
           <p className='text-emerald-400'>On time Service</p>
            </div>
          </div>
          <div className='mt-5'>
            <div className='flex '>
           <CheckIcon className='w-6 h-6 mr-2 text-emerald-400'/>
           <p className='text-emerald-400'>Affordable Prices</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Card