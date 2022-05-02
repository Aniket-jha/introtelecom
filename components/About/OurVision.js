import React from "react";

import Image from "next/image"
const OurVision = () => {
  return (
    <div className="mt-10">
      <div>
        <h2 className="text-center text-5xl  text-teal-600 font-bold">
          Our Vision
        </h2>
        <div className="flex justify-center flex-col md:flex-row lg:pl-52 lg:pr-52  items-center">
          <div className="lg:mr-10">
            <p className=" text-md mt-5 ml-4 mr-4 lg:text-lg text-center md:text-left text-teal-600">
              Our Vision is to Make your Life Better. We are Premium Telecom
              service, based in Mahim, Mumbai. We provide different types of
              plans at the most affordable prices. Checkout our plans and know
              more.
            </p>
          </div>
          <div className="lg:mr-10">
            <Image
              src={process.env.NEXT_PUBLIC_URL + "/assets/vision.svg"}
              width="700"
              height="700"
              alt="vision"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurVision;
