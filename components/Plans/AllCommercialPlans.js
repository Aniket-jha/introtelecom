import React,{useState} from 'react'
import CommercialPlanMonth from './CommercialPlanMonth'
import PlanMonth from './PlanMonth'
const AllCommercialPlans = ({commercialPlansData}) => {
     const [plans, setPlans] = useState('50Mbps')

  const activeClass='bg-orange-600 cursor-pointer flex items-center justify-center rounded-full w-16 h-16 lg:w-28 lg:h-28 mr-6 lg:mr-10 hover:bg-orange-600'
  const inActiveClass='bg-emerald-600 cursor-pointer flex items-center justify-center rounded-full w-16 h-16 mr-10 lg:w-28  mr-6 lg:mr-10  lg:h-28 hover:bg-emerald-800'
  return (
     <div className='mt-12'>
        <div>
            <h2 className='text-center text-4xl font-bold text-emerald-700 '>Best Commercial Plans</h2>
            <div className=' ml-3   mt-10 p-0 lg:p-10 flex item-center justify-center flex-wrap gap-4'>
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
        <CommercialPlanMonth commercialPlansData={commercialPlansData} plans={plans}/>
    </div>
  )
}

export default AllCommercialPlans