import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'

import Image from "next/image"
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
  OfficeBuildingIcon,
  HomeIcon,
  ClockIcon,
 
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Link from 'next/link'

const solutions = [
   
  {
    name: 'Plans and Services',
    description: 'All the plans at your doorstep.',
    href: './Plans',
    icon: ChartBarIcon,
  },
  {
    name: 'Long Term Plans',
    description: 'Get Started with our 1 year and 6 months plans',
    href: './LongTermPlans',
    icon: CalendarIcon,
  },
  { name: 'Short term Plans', description: "Try our services by taking our 1 and 3 months plans", href: './ShortTermPlans', icon: ClockIcon },
 
]
const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]
const resources = [
  {
    name: 'Contact',
    description: 'All the plans at your doorstep',
    href: './contact',
    icon: SupportIcon,
  },
  {
    name: 'About',
    description: 'Learn how to maximize our platform to get the most out of it.',
    href: './about',
    icon: BookmarkAltIcon,
  },
  {
    name: 'Home',
    description: 'See what meet-ups and other events we might be planning near you.',
    href: './',
    icon: CalendarIcon,
  },{
    name: 'Home',
    description: 'See what meet-ups and other events we might be planning near you.',
    href: './',
    icon: CalendarIcon,
  },
  {
    name: 'Plans',
    description: 'See what meet-ups and other events we might be planning near you.',
    href: './Plans',
    icon: CalendarIcon,
  },
  {
    name: 'Long Term Plans',
    description: 'See what meet-ups and other events we might be planning near you.',
    href: './LongTermPlans',
    icon: CalendarIcon,
  },
  {
    name: 'Short Term Plans',
    description: 'See what meet-ups and other events we might be planning near you.',
    href: './ShortTermPlans',
    icon: CalendarIcon,
  },
 
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Popover className="relative bg-white">
      <div className="max-w-full mx-auto px-2 sm:px-0">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-4 md:justify-start md:space-x-10">
          <div className="flex lg:hidden lg:justify-start justify-center ml-28   lg:ml-0 lg:w-0 lg:flex-1">   
              <span className="sr-only">Workflow</span>
              <a href='./'>
              <Image
                src={process.env.NEXT_PUBLIC_URL + "/assets/NavLogo.svg"}
                placeholder="logo"                
                alt='logo'
               width="120"
               height="80"
               
              />
         </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-emerald-400 hover:emerald-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-8 w-8" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex space-x-10">
        <a href="./" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Home
            </a>
            {/* <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    )}
                  >
                    <span>Home</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {solutions.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                            >
                              <item.icon className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true" />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                          {callsToAction.map((item) => (
                            <div key={item.name} className="flow-root">
                              <a
                                href={item.href}
                                className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                              >
                                <item.icon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                                <span className="ml-3">{item.name}</span>
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover> */}

            <Link passHref href="/contact" >
            <p className="text-base cursor-pointer font-medium text-gray-500 hover:text-gray-900">
              Contact
              </p>
            </Link>
            <Link passHref href="/about" >
            <p className=" cursor-pointer text-base font-medium text-gray-500 hover:text-gray-900">
              About
              </p>
            </Link>


            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    )}
                  >
                    <span>Plans</span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  
                    <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {solutions.map((item) => (
                            // eslint-disable-next-line react/jsx-key
                            <Link
                              key={item.name}
                              href={item.href}
                              passHref
                              
                            >
                             <div className="m-3 cursor-pointer p-3 flex items-start rounded-lg hover:bg-gray-50" >
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                              </div>
                              </div>
                           
                            </Link>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                
                </>
              )}
            </Popover>
          </Popover.Group>
          <div className="flex hidden lg:block items-center  lg:justify-center    lg:pl-64 lg:w-0 lg:flex-1">   
              <a href='./'>
              <Image
                src={process.env.NEXT_PUBLIC_URL + "/assets/NavLogo.svg"}
                placeholder="logo"                
                alt='logo'
                width="120"
                height="70"
              />
        </a>
          </div>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
           <Link passHref  href="/Plans"> 
           <button  className="ml-8 mr-4 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-emerald-500 hover:bg-emerald-700">
               Get Stared
               </button>
            </Link>
          </div>
        </div>
      </div>

     
        <Popover.Panel focus className="absolute z-[999] top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  
                </div>
               
              </div>
             
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                
                {resources.map((item) => (
                  <Link
                    key={item.name}
                    href={  item.href}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                    passHref
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div>
              
              <Link className="ml-auto mr-auto whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-emerald-500 hover:bg-emerald-700"  href="/Plans">
                <button className='ml-auto mr-auto whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-emerald-500 hover:bg-emerald-700'>
               Get Stared
               </button>
            </Link>
              </div>
            </div>
          </div>
        </Popover.Panel>
     
    </Popover>
  )
}