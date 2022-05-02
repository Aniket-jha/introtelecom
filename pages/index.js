import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Banner from "../components/Home/Banner"
import Option from "../components/Home/Options"
import AboutSection from "../components/Home/AboutSection"
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Intro Telecom</title>
         <meta charset="utf-8" />
        <meta name="description" content="Get the fastest near you. Contact us today." />
        <link rel="icon" href="/assets/globe.png" />
      </Head>
      <Banner/>
      <Option/>
      <AboutSection/>
      
    </div> 
  )
}
