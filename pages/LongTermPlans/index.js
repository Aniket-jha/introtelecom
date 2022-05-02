import React from 'react'
import Head from 'next/head'
import LongTerm from '../../components/Plans/LongTerm'
import { sixMonthData, yearlyData } from '../../constants/data'
const index = ({yearData,halfData}) => {
  return (
    <div>
    <Head>
        <title>Long Term Plans</title>
         <meta charset="utf-8" />
        <meta name="description" content="Love our Service then try out our 6 month and 1 year plans" />
        <link rel="icon" href="/assets/globe.png" />
      </Head>
        <LongTerm yearData={yearData} halfData={halfData} />
    </div>
  )
}

export const getStaticProps = async()=>{
    const yearData=yearlyData
    const halfData= sixMonthData
    return{
        props:{yearData,halfData}
    }
}

export default index