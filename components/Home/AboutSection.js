
import Link from "next/link";
import React from "react";

import Image from "next/image"
const AboutSection = () => {
  return (
    <div className="flex flex-col md:flex-row   bg-gradient-to-r  from-emerald-600 to-cyan-600 w-full">
      <div className="m-0 p-0 w-100 h-300 rounded-md bg-emerald-800"></div>
      <div className="  flex-1 p-4 lg:pl-24 lg:pr-24">
        <h1 className="text-white text-center mt-16 font-bold text-4xl ">
          About Us
        </h1>
        <p className="text-emerald-100  text-center text-xs  mt-5 md:text-sm lg:text-lg ">
          We are Premium Telecom service, based in Mahim,Mumbai. We provide
          different types of plans at the most affordable prices. Checkout our
          plans and know more.
        </p>
        <div className="flex items-center justify-center">
          <Link
            href="/about"
            
          >
          <button className="lg:mt-8 mt-4  whitespace-nowrap inline-flex items-center justify-center px-6 py-3 lg:px-8 lg:py-4 border border-transparent rounded-md shadow-sm text-base  lg:text-2xl text-emerald-600 bg-white hover:bg-slate-100" >
            Know More
            </button>
          </Link>
        </div>
      </div>
      <div className=" flex mt-6 hidden md:block items-center justify-center m-0 p-0 w-100 h-300 rounded-md lg:mr-20 ">
        <Image  src={process.env.NEXT_PUBLIC_URL + "/assets/aboutHome.svg" } width="400" height="300" />
      </div>
    </div>
  );
};

export default AboutSection;
