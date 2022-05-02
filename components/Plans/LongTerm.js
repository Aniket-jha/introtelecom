import React,{useState} from 'react'
import Card from '../Card'
import SixMonth from './SixMonth'
import YearlyPlans from './YearlyPlans'

const LongTerm = ({yearData, halfData}) => {
    const [activeBtn, setActiveBtn] = useState('1Year')
    const activeBtns='m-5 text-lg text-bold bg-emerald-600 pt-3 pb-3 pl-6 pr-6 text-white rounded-full '
    const inActiveBtns='m-5 text-lg text-bold bg-white pt-3 pb-3 pl-6 pr-6 text-black rounded-full'
  return (
    <div>
    <div className='flex items-center justify-center mt-10'>
        
            <button onClick={()=>setActiveBtn('1Year')} className={activeBtn==='1Year' ? activeBtns : inActiveBtns}>1 Year Plans</button>
            <button onClick={()=>setActiveBtn('6month')} className={activeBtn==='6month' ? activeBtns : inActiveBtns}>6 Month Plans</button>
    </div>
   {activeBtn === '1Year' && <YearlyPlans yearData={yearData}/>}
   {activeBtn === '6month' && <SixMonth halfData={halfData}/>}
    </div>
  )
}

export default LongTerm