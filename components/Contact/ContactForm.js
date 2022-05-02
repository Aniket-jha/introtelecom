import React from "react";
import { Fragment, useState } from "react";

import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";




const plans = [
  {
    id: 0,
    name: "Choose Plans",
  },
  {
    id: 1,
    name: "1 Month Plan",
  },
  {
    id: 2,
    name: "1 Year Plan",
  },
  {
    id: 3,
    name: "3 Month Plan",
  },
  {
    id: 4,
    name: "6 Month Plan",
  },
];

const businessType = [
  {
    id: 0,
    name: "Choose a Business Type",
  },
  {
    id: 1,
    name: "Small Business",
  },
  {
    id: 2,
    name: "Personal",
  },
  {
    id: 3,
    name: "Large Family",
  },
  {
    id: 4,
    name: "Corporate",
  },
  {
    id: 5,
    name: "Large Business",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ContactForm = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    company_name: "",
    from_email: "",
    message: "",
    plan: "",
    company_type: "",
    contact: "",
  });
 
  const handleOnSubmit = (e) => {
   e.preventDefault()
    const formData={}
    Array.from(e.currentTarget.elements).forEach(field=>{
      if(!field.name) return;
      formData[field.name] = field.value;
    });
    fetch('/api/mail',{
      method:'post',
      body:JSON.stringify(formData)
    })
    console.log(formData)
    setToSend(
     { from_name: "",
    company_name: "",
    from_email: "",
    message: "",
    plan: "",
    company_type: "",
    contact: "",})
    
  };
  return (
       <form method="post" onSubmit={handleOnSubmit} className=" flex items-center lg:flex-row flex-col justify-around mb-4 mt-4">
    <div className="lg:pt-10 mr-0 lg:pb-12 lg:mr-12">
    <div className=" flex lg:flex-row flex-col items-center justify-around mb-4 mt-4">
        <input
          type="text"
          className="mt-1 lg:mr-4 mt-4 px-5 py-5 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-64 rounded-md sm:text-sm focus:ring-1"
          placeholder="Enter your  name"
          name="from_name"
          value={toSend.from_name}
          
        />

        <input
          type="text"
          className="mt-1 px-5 mt-4  lg:mr-4 py-5 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-64 rounded-md sm:text-sm focus:ring-1"
          placeholder="Company name if any"
          name="company_name"
          value={toSend.company_name}
         
        />
      </div>
      <div className=" flex lg:flex-row flex-col items-center justify-around mb-4 mt-4">
        <input
          type="email"
          name="from_email"
          value={toSend.from_email}
          
          className="mt-1 lg:mr-4 mt-4 px-5 py-5 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-64 rounded-md sm:text-sm focus:ring-1"
          placeholder="Enter your email"
        />
        <input
          type="tel"
          name="contact"
          value={toSend.contact}
          
          className="mt-1 lg:mr-4 mt-4 px-5 py-5 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-64 rounded-md sm:text-sm focus:ring-1"
          placeholder="Enter your phone number"
        />
      </div>
      <div className=" flex lg:flex-row flex-col items-center justify-around mb-4 mt-4">
        <select
          aria-label="Default select example"
          name="plan"
          value={toSend.plan}
          
          className="mt-1 lg:mr-4 mt-4 px-5 py-5 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-64 rounded-md sm:text-sm focus:ring-1"
        >
          {plans.map((plan) => (
            <option key={plan.id}>{plan.name}</option>
          ))}
        </select>
        <select
          aria-label="Default select example"
          name="company_type"
          value={toSend.company_type}
        
          className="mt-1 lg:mr-4 mt-4 px-5 py-5 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-64 rounded-md sm:text-sm focus:ring-1"
        >
          {businessType.map((plan) => (
            <option key={plan.id}>{plan.name}</option>
          ))}
        </select>
      </div>
      <div className="flex align-center justify-center lg:justify-start  ">
        <textarea
          id="message"
          name="message"
          rows={3}
          cols={6}
          value={toSend.message}
          
          className="shadow-sm focus:ring-indigo-500 p-4 focus:border-indigo-500 mt-1 block  w-64 lg:w-10/12 h-36 sm:text-sm border border-gray-300 rounded-md"
          placeholder="Enter your message"
        />
      </div>
      
      <div className="mt-6 flex lg:align-center justify-center">
        <button
          type="submit"
          
          className="p-4 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg text-white text-lg w-36"
        >
          Submit
        </button>
      </div>
      
    </div>
    </form>
  );
};

export default ContactForm;
