import React,{useState} from 'react'
import { BadgeCheckIcon, ClockIcon,ArrowCircleRightIcon } from "@heroicons/react/outline";
import Link from 'next/link';
const PlanMonth = ({plansData,plans}) => {
  
  return (
    <>
      <h1 className='block text-center mt-10 text-2xl font-bold text-orange-600'>{plans} Plans</h1>
    
    <div className='mt-3 flex items-center justify-center md:justify-around gap-10 p-12 flex-wrap'>
     
     {plans==="10Mbps" && plansData[0].map((plan,key)=>(
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
     {plans==="20Mbps" && plansData[1].map((plan,key)=>(
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
     {plans==="25Mbps" && plansData[3].map((plan,key)=>(
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
     {plans==="50Mbps" && plansData[4].map((plan,key)=>(
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
     {plans==="100Mbps" && plansData[5].map((plan,key)=>(
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
      {plans==="150Mbps" && plansData[6].map((plan,key)=>(
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
     {plans==="200Mbps" && plansData[7].map((plan,key)=>(
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
      {plans==="300Mbps" && plansData[8].map((plan,key)=>(
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
    <Link  href="/contact"  passHref >
    <button className=" mt-5 lg:mt-5   whitespace-nowrap inline-flex items-center justify-center px-6 py-3 lg:px-8 lg:py-4 border border-transparent rounded-md shadow-sm text-base  lg:text-2xl text-white bg-emerald-600 hover:bg-emerald-700">
               Enquire<ArrowCircleRightIcon className=' h-8 w-8 ml-4 text-white text-lg'/>
               </button>
            </Link>
    </div>
    </>
  )
}

export default PlanMonth