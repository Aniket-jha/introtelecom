import React from 'react'
import Card from '../Card'
const YearlyPlans = ({yearData}) => {
  return (
    <div className='flex justify-center items-center flex-wrap'>
         {yearData.map((plan,key)=>(
      <Card key={key} plan={plan}/>
    ))}
    </div>
  )
}

export default YearlyPlans