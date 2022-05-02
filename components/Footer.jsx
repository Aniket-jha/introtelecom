import React from 'react'
import Link from "next/link"
const Footer = () => {
  return (
    <div className="bg-gray-200  rounded-md">
    <div className=' flex justify-evenly '>
      <div className='lg:p-12 p-5'>
        <h1 className='text-2xl '>Internet you need !</h1>
         <div className=" mt-5">
                <Link
                  href="./LongTermPlans"
                passHref
                >
                <button   className="whitespace-nowrap cursor-pointer inline-flex items-center justify-center px-4 py-2 lg:px-4 lg:py-3 border border-transparent rounded-md shadow-sm text-white  lg:text-md  bg-gradient-to-r from-emerald-600 to-teal-700 hover:bg-slate-100">
                  Know more
                  </button>
                </Link>
              </div>
      </div>
       <div className='p-12 lg:block hidden '>
       <h1 className=" text-slate-600 text-2xl font-md">PLANS</h1>
        <div className=" flex flex-col text-slate-500 ">
          <p className=" text-slate-600 text-md mt-3  font-sm">Monthly-Plans</p>
          <p className=" text-slate-600 text-md mt-3 font-sm">Yearly-Plans</p>
          <p className=" text-slate-600 text-md mt-3 font-sm">Quaterly-Plans</p>
        </div>
      </div>
      <div className='p-12 lg:block hidden '>
       <h1 className=" text-slate-600 text-2xl font-md">Services</h1>
        <div className=" flex flex-col text-slate-500 ">
          <p className=" text-slate-600 text-md mt-3  font-sm">Personal</p>
          <p className=" text-slate-600 text-md mt-3 font-sm">Commercial</p>
        </div>
      </div>
      <div className='lg:p-12 p-5 '>
       <h1 className=" text-slate-600 text-2xl font-md">Contact</h1>
        <div className=" flex flex-col text-slate-500 ">
          <p className=" text-slate-600  text-xs lg:text-md mt-3  font-sm">+91 9769688035</p>
          <p className=" text-slate-600 text-xs lg:text-md mt-3 font-sm">+91 8898140120</p>
          <p className=" text-slate-600 text-xs lg:text-md mt-3 font-sm ">introtelecomp@gmail.com</p>
        </div>
      </div>

    </div>
    <h3 className="text-center">©  Intro Telecom Pvt Ltd</h3>
    </div>
  )
}

export default Footer