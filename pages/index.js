import Head from 'next/head'
import React from 'react'
import LandingSection from '../components/landingcomponents/landing'
import GridSection from '../components/landingcomponents/grid'
import Assessment from '../components/landingcomponents/assessment'
import Join from '../components/landingcomponents/join'
import RequestCurriculum from '../components/landingcomponents/requestcurriculum'
import Practice from '../components/landingcomponents/practice'
import {CurriculumSection} from '../components/landingcomponents/curriculum'
import ContactForm from '../components/globalcomponents/contactform'
import TrySection from '../components/landingcomponents/trynowsection'

// import {Client} from 'next-sanity'


export default function Home(){
    return (
      <>
        <Head>
          <title>Revision Tool</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          
        </Head>
        <main>
          <LandingSection/>
          <GridSection/>
          <CurriculumSection/>
          <TrySection/>
          <Practice/>
          <Assessment/>
          <Join/>
          <RequestCurriculum/>
          <ContactForm/>
        </main>
      </>
    )
  
}

