
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
    ChartOptions,
  } from 'chart.js';
import {FaThermometerQuarter} from "react-icons/fa"
import {BsThermometerSun} from "react-icons/bs"
import {BsFillSunFill} from "react-icons/bs"
import { Line } from 'react-chartjs-2'; 
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );
  
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
            fontColor: '#FFF',
            color: '#FFFFFF'
        },
        position: 'top' as const,
      }, 
    },
  };
  
  const labels = ['01:00 H', '02:00 H', '03:00 H', '04:00 H', '05:00 H', '06:00 H', '07:00 H', '08:00 H', '09:00 H', '10:00 H', '11:00 H', '12:00 H', '13:00 H', '14:00 H', '15:00 H', '16:00 H', '17:00 H', '18:00 H', '19:00 H', '20:00 H', '21:00 H', '22:00 H', '23:00 H', '24:00 H'];
  
  export const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'Temperature po satu',
        data: [1,2,3,4,5,6,7,8,9,2,11,12,13,14,15,3,17,18,19,12,4,22,1],
        borderColor: '#A78BFA',
        backgroundColor: 'rgba(167, 139, 250, 0.5)',
        fontColor : '#FFFFFF',
        color: '#FFFFFF'
      },
    ],
  };

export default function TemperatureGraph () {
  return (
    <>
      	<div className="flex flex-wrap gap-12 lg:flex-nowrap">
          <div className="lg:w-[65%] p-2 mt-10 text-white bg-gradient-to-r from-gray-700 via-gray-600 to-gray-500 rounded-3xl">
              <div className='flex items-center space-x-2'>
                <FaThermometerQuarter className="p-1 text-5xl rounded-full bg-gradient-to-r from-primaryColor to-secondaryColor"/>
                <span className="uppercase opacity-50 ">Temperature po satu</span>
              </div>
              <Line options={options as ChartOptions} data={data} />
          </div>
          <div className="xs:w-full sm:w-full lg:w-[32%] p-2 mt-10 text-white bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 rounded-3xl">
              <div className='flex items-center space-x-2'>
                <BsThermometerSun className="p-1 text-5xl rounded-full bg-gradient-to-r from-primaryColor to-secondaryColor"/> 
                <span className="uppercase opacity-50 ">Vanjska temperatura</span>
              </div> 
              <BsFillSunFill className='flex mx-auto mt-12 text-yellow-400 text-9xl'/>
              <span className='flex justify-center mt-4 text-5xl'>24&deg;</span>
              <span className='flex justify-center text-md'>stepeni celzijusa</span>
              <div className="flex justify-center mt-10"> 
                <span className='mt-[0.7%] text-2xl opacity-50'>Kvalitet zraka :</span>
                <span className='text-3xl text-white opacity-100'>18%</span>
              </div>
          </div>
        </div>
    </>
  )
} 