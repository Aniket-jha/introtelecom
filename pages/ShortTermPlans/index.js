import React from 'react'
import Head from 'next/head'
import ShortTerm from "../../components/Plans/ShortTerm"
import { monthlyData, threeMonthData } from '../../constants/data'
const index = ({monthData,threeData}) => {
  return (
    <div>
    <Head>
        <title>Short Term Plans</title>
         <meta charset="utf-8" />
        <meta name="description" content="For starters try our 1 month and 3 month pack and become the part of our family" />
        <link rel="icon" href="/assets/globe.png" />
      </Head>
        <ShortTerm monthData={monthData} threeData={threeData} />
    </div>
  )
}

export const getStaticProps = async()=>{
    const monthData=monthlyData
    const threeData= threeMonthData
    return{
        props:{monthData,threeData}
    }
}

export default index