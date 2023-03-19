import Breadcrumb from '@/components/Panel/Breadcrumb/Breadcrumb'
import Devices from '@/components/Panel/Devices/Devices'
import PanelLayout from '@/components/Panel/PanelLayout'
import Axios from '@/lib/Axios'
import { QueryClient, QueryKey } from '@tanstack/react-query'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import React from 'react' 
import  DevicesInterface  from '@/lib/Interfaces/Devices'

const DEVICES_QUERY_KEY: QueryKey = ['devices'];
const AxiosInstance = new Axios();
export const queryClient = new QueryClient();

export const getServerSideProps: GetServerSideProps<{ devices: DevicesInterface[] }> = async (context) => {
    await queryClient.prefetchQuery(DEVICES_QUERY_KEY, AxiosInstance.getAllDevices);

    return {
        props: {
            devices: queryClient.getQueryData(DEVICES_QUERY_KEY) as DevicesInterface[],
        },
    };
}

interface Device {
    id: number;
    name: string;
    status: boolean;
}
export interface DeviceProps {
  devices: Device[];
}

const Dashboard = ({devices}:DeviceProps) => {
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
      <Devices devices={devices}/>
    </PanelLayout>
    </>
  )
}

export default Dashboard