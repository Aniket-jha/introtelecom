import React from 'react'
import Card from '../Card'
const ThreeMonthPlan = ({threeData}) => {
  return (
    <div className='flex justify-center items-center flex-wrap'>
         {threeData.map((plan,key)=>(
      <Card key={key} plan={plan}/>
    ))}
    </div>
  )
}

export default ThreeMonthPlan