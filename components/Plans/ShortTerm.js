import React,{useState} from 'react'
import OneMonthPlan from "./OneMonthPlans"
import ThreeMonthPlan from "./ThreeMonthPlan"
const ShortTerm = ({monthData, threeData}) => {
    const [activeBtn, setActiveBtn] = useState('1Month')
    const activeBtns='m-5 text-lg text-bold bg-emerald-600 pt-3 pb-3 pl-6 pr-6 text-white rounded-full '
    const inActiveBtns='m-5 text-lg text-bold bg-white pt-3 pb-3 pl-6 pr-6 text-black rounded-full'
  return (
     <div>
    <div className='flex items-center justify-center mt-10'>
        
            <button onClick={()=>setActiveBtn('1Month')} className={activeBtn==='1Month' ? activeBtns : inActiveBtns}>1 Month Plans</button>
            <button onClick={()=>setActiveBtn('3Month')} className={activeBtn==='3Month' ? activeBtns : inActiveBtns}>3 Month Plans</button>
    </div>
   {activeBtn === '1Month' && <OneMonthPlan monthData={monthData}/>}
   {activeBtn === '3Month' && <ThreeMonthPlan threeData={threeData}/> }
    </div>
  )
}

export default ShortTerm