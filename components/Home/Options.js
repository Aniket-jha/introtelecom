import React from "react";
import { BadgeCheckIcon, ClockIcon } from "@heroicons/react/outline";
import Link from "next/link";
const Options = () => {
  return (
    <div>
      <div className="mt-12">
        <h1 className="text-center text-3xl lg:text-5xl font-bold ">Choose for youself</h1>
        <div className="flex items-center justify-center p-4 lg:flex-row flex-col ">
          <div className=" pt-10 m-8 pb-10 w-72 pl-4 pr-4 shadow-xl rounded-md bg-gradient-to-r from-emerald-600 to-teal-700 w-full">
            <div className="flex align-center justify-center text-white">
              <BadgeCheckIcon className="w-12 h-12 " />
            </div>
            <div>
              <h1 className="text-center mt-4 text-3xl font-bold text-white ">
                Short Term Plans
              </h1>
              <p className="text-center mt-4 text-sm text-emerald-100">
                Try our services by taking our 1 and 3 months plans
              </p>
              <div className="flex align-center justify-center mt-6">
              
                <Link href="/ShortTermPlans" passHref>
                <button className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 lg:px-4 lg:py-3 border border-transparent rounded-md shadow-sm text-base  lg:text-md text-emerald-600 bg-white hover:bg-slate-100">
                 Know more
                 </button>
                </Link>
              </div>
            </div>
          </div>
          <div className=" pt-10 shadow-xl m-8 pb-10 pl-4 pr-4 w-72 rounded-md bg-gradient-to-r from-emerald-600 to-teal-700 w-full">
            <div className="flex align-center justify-center text-white">
              <BadgeCheckIcon className="w-12 h-12 " />
            </div>
            <div>
              <h1 className="text-center mt-4 text-3xl font-bold text-white ">
                Long Term Plan
              </h1>
              <p className="text-center mt-3 text-sm text-emerald-100">
                Get Started with our 1 year and 6 months plans
              </p>
              <div className="flex align-center justify-center mt-6">
                 <Link href="/LongTermPlans" passHref >
                <button className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 lg:px-4 lg:py-3 border border-transparent rounded-md shadow-sm text-base  lg:text-md text-emerald-600 bg-white hover:bg-slate-100">
                 Know more
                 </button>
                </Link>
              </div>
            </div>
          </div>
          <div className=" pt-10 shadow-xl m-8 pb-10 pl-4 pr-4 w-72 rounded-md bg-gradient-to-r from-emerald-600 to-teal-700 w-full">
            <div className="flex align-center justify-center text-white">
              <BadgeCheckIcon className="w-12 h-12 " />
            </div>
            <div>
              <h1 className="text-center mt-4 text-2xl font-bold text-white ">
                Commercial Plans
              </h1>
              <p className="text-center mt-3 text-sm text-emerald-100">
                Make your business big with our Premium Commercial Plans
              </p>
              <div className="flex align-center justify-center mt-6">
                <Link href="/Plans" passHref >
                <button className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 lg:px-4 lg:py-3 border border-transparent rounded-md shadow-sm text-base  lg:text-md text-emerald-600 bg-white hover:bg-slate-100">
                 Know more
                 </button>
                </Link>
              </div>
            </div>
          </div>
          <div className=" pt-10 shadow-xl m-8 pb-10 pl-4 pr-4 w-72 rounded-md bg-gradient-to-r from-emerald-600 to-teal-700 w-full">
            <div className="flex align-center justify-center text-white">
              <BadgeCheckIcon className="w-12 h-12 " />
            </div>
            <div>
              <h1 className="text-center mt-4 text-2xl font-bold text-white ">
                Personal Plans
              </h1>
              <p className="text-center mt-3 text-sm text-emerald-100">
                Plans for you and your family
              </p>
              <div className="flex align-center justify-center mt-10">
                <Link href="/Plans" passHref >
                <button className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 lg:px-4 lg:py-3 border border-transparent rounded-md shadow-sm text-base  lg:text-md text-emerald-600 bg-white hover:bg-slate-100">
                 Know more
                 </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Options;
