import React from 'react'
import { fiftyMbpsPlan, hundredMbpsPlan, oneFityMbpsPlan, twoHundredMbpsPlan, threeHundredMbpsPlan } from '../../constants/CommercialData';
import { BadgeCheckIcon, ClockIcon,ArrowCircleRightIcon } from "@heroicons/react/outline";
import Link from 'next/link';
const CommercialPlanMonth = ({plans, commercialPlansData}) => {
  return (
    <>
      <h1 className='block text-center text-2xl mt-5 font-bold text-orange-600'>{plans} Plans</h1>
    
    <div className='mt-3 flex items-center justify-center md:justify-around gap-10 p-12 flex-wrap'>
     
    
    
    
     {plans==="50Mbps" && commercialPlansData[0].map((plan,key)=>(
        // eslint-disable-next-line react/jsx-key
        <div key={key} className='bg-gradient-to-r  from-emerald-600 to-teal-600 rounded-xl shadow-lg'>
        <div className='flex items-center justify-center mt-3'>
        <BadgeCheckIcon className='w-12 h-12 text-white' />
        </div>
        <div className=' flex items-center justify-center' >
            <p className='text-white text-xl p-5 font-bold'>{plan.days}</p>
            <p className='text-white text-xl p-5 font-bold'>Rs. {plan.price}</p>
      </div>
      </div>
     )) }
     {plans==="100Mbps" && commercialPlansData[1].map((plan ,key)=>(
        // eslint-disable-next-line react/jsx-key
       <div key={key} className='bg-gradient-to-r  from-emerald-600 to-teal-600 rounded-xl shadow-lg'>
        <div className='flex items-center justify-center mt-3'>
        <BadgeCheckIcon className='w-12 h-12 text-white' />
        </div>
        <div className=' flex items-center justify-center' >
            <p className='text-white text-xl p-5 font-bold'>{plan.days}</p>
            <p className='text-white text-xl p-5 font-bold'>Rs. {plan.price}</p>
      </div>
      </div>
     )) }
      {plans==="150Mbps" && commercialPlansData[2].map((plan,key)=>(
        // eslint-disable-next-line react/jsx-key
        <div key={key} className='bg-gradient-to-r  from-emerald-600 to-teal-600 rounded-xl shadow-lg'>
        <div className='flex items-center justify-center mt-3'>
        <BadgeCheckIcon className='w-12 h-12 text-white' />
        </div>
        <div className=' flex items-center justify-center' >
            <p className='text-white text-xl p-5 font-bold'>{plan.days}</p>
            <p className='text-white text-xl p-5 font-bold'>Rs. {plan.price}</p>
      </div>
      </div>
     )) }
     {plans==="200Mbps" && commercialPlansData[3].map((plan,key)=>(
        // eslint-disable-next-line react/jsx-key
       <div key={key} className='bg-gradient-to-r  from-emerald-600 to-teal-600 rounded-xl shadow-lg'>
        <div className='flex items-center justify-center mt-3'>
        <BadgeCheckIcon className='w-12 h-12 text-white' />
        </div>
        <div className=' flex items-center justify-center' >
            <p className='text-white text-xl p-5 font-bold'>{plan.days}</p>
            <p className='text-white text-xl p-5 font-bold'>Rs. {plan.price}</p>
      </div>
      </div>
     )) }
      {plans==="300Mbps" && commercialPlansData[4].map((plan,key)=>(
        // eslint-disable-next-line react/jsx-key
       <div key={key} className='bg-gradient-to-r  from-emerald-600 to-teal-600 rounded-xl shadow-lg'>
        <div className='flex items-center justify-center mt-3'>
        <BadgeCheckIcon className='w-12 h-12 text-white' />
        </div>
        <div className=' flex items-center justify-center' >
            <p className='text-white text-xl p-5 font-bold'>{plan.days}</p>
            <p className='text-white text-xl p-5 font-bold'>Rs. {plan.price}</p>
      </div>
      </div>
     )) }
    </div>
    <div className='flex items-center justify-center'>
     <Link passHref  href='./contact' >
     <button className=" mt-5 lg:mt-5  mb-10 whitespace-nowrap inline-flex items-center justify-center px-6 py-3 lg:px-8 lg:py-4 border border-transparent rounded-md shadow-sm text-base  lg:text-2xl text-white bg-emerald-600 hover:bg-emerald-700">
               Enquire<ArrowCircleRightIcon className=' h-8 w-8 ml-4 text-white text-lg'/>
               </button>
            </Link>
    </div>
    </>
  )
}

export default CommercialPlanMonth