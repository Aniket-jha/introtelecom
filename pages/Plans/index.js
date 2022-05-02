import React from 'react'
import Banner from "../../components/Plans/Banner"
import Head from 'next/head'
import AllPlans from "../../components/Plans/AllPlans"
import * as data from "../../constants/data"
import * as commercialData from "../../constants/CommercialData"
import AllCommercialPlans from '../../components/Plans/AllCommercialPlans'
const index = ({plansData, commercialPlansData}) => {
  console.log(plansData)
  return (
    <div>
     <Head>
        <title>Plans and Services</title>
         <meta charset="utf-8" />
        <meta name="description" content="We have a wide range of plans, from personal plans to commercial plans. Checkout our Plans Now" />
        <link rel="icon" href="/assets/globe.png" />
      </Head>
        <Banner/>
        <AllPlans plansData={plansData} />
        <AllCommercialPlans commercialPlansData={commercialPlansData} />
    </div>
  )
}

export const getStaticProps= async ()=>{
    const plansData = [data.tenMbpsPlan, data.twentyMbpsPlan,data.twentyFiveMbpsPlan,data.fiftyMbpsPlan,data.hunderedMbpsPlan,data.oneFiftyMbpsPlan,data.twoHundredMbpsPlan,data.threeHundredMbpsPlan]
    const commercialPlansData = [commercialData.fiftyMbpsPlan , commercialData.hundredMbpsPlan, commercialData.oneFityMbpsPlan, commercialData.twoHundredMbpsPlan, commercialData.threeHundredMbpsPlan]
    return{
       props:{plansData, commercialPlansData},
    }
}

export default index