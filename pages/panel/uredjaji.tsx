import Breadcrumb from '@/components/Panel/Breadcrumb/Breadcrumb'
import Devices from '@/components/Panel/Devices/Devices'
import PanelLayout from '@/components/Panel/PanelLayout'
import Head from 'next/head'
import React from 'react'

const Dashboard = () => {
  return (
    <> 
    <Head>
        <title>Uredjaji - HomeLab</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <PanelLayout>  
      <Breadcrumb/>
      <Devices/>
    </PanelLayout>
    </>
  )
}

export default Dashboard