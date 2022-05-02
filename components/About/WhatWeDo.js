import React from 'react'

import Link from 'next/link'
import Image from "next/image"

const WhatWeDo = () => {
  return (
    <div className="mt-5">
      <div>
        <h2 className="text-center text-5xl  text-teal-600 font-bold">
          Why choose us
        </h2>
        
        <div className="flex mt-10 justify-center flex-col md:flex-row lg:pl-52 lg:pr-52  items-center">
        <div className="lg:ml-10">
            <Image src={process.env.NEXT_PUBLIC_URL + "/assets/wedo.svg"} alt="wedo" width="1000" height="700"   />
          </div>
          <div className="lg:ml-10">
            <p className="text-md text-center md:text-left ml-4 mr-4 lg:text-lg text-teal-600">
             Need a Telecom Service that can make your life easy then we are the best option for you. We provide premuim internet services at a affortable price. Choose the best plan for you and starting enjoying our services.
            </p>
            <div className=" flex justify-center items-center md:justify-start md:items-center lg:ml-6  mt-10 lg:mr-12">
            <Link href="/ShortTermPlans" passHref  >
            <button className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 lg:px-5 mb-5 lg:py-4 border border-transparent rounded-md shadow-sm text-white  lg:text-xl  bg-gradient-to-r from-emerald-600 to-teal-700 hover:bg-slate-100">
                  Connect Now
                  </button>
                </Link>
              </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default WhatWeDo