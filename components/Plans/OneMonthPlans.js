import React from 'react'
import Card from '../Card'
const OneMonthPlans = ({monthData}) => {
  return (
    <div className='flex justify-center items-center flex-wrap'>
         {monthData.map((plan,key)=>(
      <Card key={key} plan={plan}/>
    ))}
    </div>
  )
}

export default OneMonthPlans