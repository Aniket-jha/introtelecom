import React from 'react'
import Card from '../Card'
const SixMonth = ({halfData}) => {
  return (
     <div className='flex justify-center items-center flex-wrap'>
         {halfData.map((plan,key)=>(
      <Card key={key} plan={plan}/>
    ))}
    </div>
  )
}

export default SixMonth