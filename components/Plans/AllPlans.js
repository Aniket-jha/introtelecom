import React,{useState} from 'react'
import PlanMonth from './PlanMonth'

const AllPlans = ({plansData}) => {
  const [plans, setPlans] = useState('10Mbps')

  const activeClass='bg-orange-600 cursor-pointer flex items-center justify-center m-2 rounded-full w-20 h-20 lg:w-28 lg:h-28 mr-6 lg:mr-10 hover:bg-orange-600'
  const inActiveClass='bg-emerald-600 cursor-pointer flex items-center justify-center m-2 rounded-full w-20 h-20 mr-6 lg:w-28  mr-6 lg:mr-10  lg:h-28 hover:bg-emerald-800'

  return (
    <div className='mt-12'>
        <div>
            <h2 className='text-center text-4xl font-bold text-emerald-700 '>Best Personal Plans</h2>
            <div className=' ml-6 lg:ml-3   mt-10 p-0 lg:p-10 flex item-center  justify-center flex-wrap gap-2'>
              <button onClick={()=>setPlans('10Mbps')} className={plans==='10Mbps' ? activeClass : inActiveClass}>
                <p    className='text-center font-bold  text-white text-xs lg:text-lg'>10 Mbps</p>
              </button>
              <button onClick={()=>setPlans('20Mbps')} className={plans==='20Mbps' ? activeClass : inActiveClass}>
                <p  className='text-center font-bold text-white  text-xs lg:text-lg  '>20 Mbps</p>
              </button>
              <button onClick={()=>setPlans('25Mbps')} className={plans==='25Mbps' ? activeClass : inActiveClass}>
                <p  className='text-center font-bold text-white text-xs lg:text-lg  '>25 Mbps</p>
              </button>
              <button onClick={()=>setPlans('50Mbps')} className={plans==='50Mbps' ? activeClass : inActiveClass}>
                <p  className='text-center font-bold text-white  text-xs lg:text-lg'>50 Mbps</p>
              </button>
               <button onClick={()=>setPlans('100Mbps')} className={plans==='100Mbps' ? activeClass : inActiveClass}>
                <p  className='text-center font-bold text-white text-xs lg:text-lg'>100 Mbps</p>
              </button>
              <button onClick={()=>setPlans('150Mbps')} className={plans==='150Mbps' ? activeClass : inActiveClass}>
                <p  className='text-center font-bold text-white text-xs lg:text-lg'>150 Mbps</p>
              </button>
               <button onClick={()=>setPlans('200Mbps')} className={plans==='200Mbps' ? activeClass : inActiveClass}>
                <p  className='text-center font-bold text-white text-xs lg:text-lg'>200 Mbps</p>
              </button>
               <button onClick={()=>setPlans('300Mbps')} className={plans==='300Mbps' ? activeClass : inActiveClass}>
                <p  className='text-center font-bold text-white text-xs lg:text-lg'>300 Mbps</p>
              </button>
            </div>
        </div>
        <PlanMonth plansData={plansData} plans={plans}/>
    </div>
  )
}



export default AllPlans