import React from 'react'
import Head from 'next/head'
import ContactForm from "../../components/Contact/ContactForm"
import ContactContent from "../../components/Contact/ContactContent"
const index = () => {
  return (
    <div>
     <Head>
        <title>Contact</title>
         <meta charset="utf-8" />
        <meta name="description" content="For enquiry or for any assistance contact us today." />
        <link rel="icon" href="/assets/globe.png" />
      </Head>
         <div className="flex justify-center  items-center p-3 lg:p-12 bg-gradient-to-r from-emerald-400 to-teal-300">
        <div className=" bg-white p-0 lg:p-6 rounded-lg  shadow-xl">
          <h1 className="text-3xl text-center lg:text-left mt-8 font-bold">
            Contact us today.
          </h1>
          <h1 className="text-3xl text-center lg:text-left font-bold">
            and enjoy.
          </h1>
          <div className="flex align-center lg:flex-row flex-col justify-between">
            {" "}
            <ContactForm />
            <ContactContent />
          </div>
        </div>
      </div>
    </div>
  )
}

export default index