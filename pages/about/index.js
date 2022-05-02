import React from 'react'
import Head from 'next/head'
import Banner from '../../components/About/Banner'
import OurVision from '../../components/About/OurVision'
import WhatWeDo from "../../components/About/WhatWeDo"
const index = () => {
  return (
    <div>
     <Head>
        <title>About Us</title>
         <meta charset="utf-8" />
        <meta name="description" content="We are the leading internet providers in mumbai and suburbs." />
        <link rel="icon" href="/assets/globe.png" />
      </Head>
      <Banner/>
      <OurVision/>
      <WhatWeDo/>
    </div>
  )
}

export default index