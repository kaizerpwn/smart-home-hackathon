import { useState } from "react";
import {AiOutlinePoweroff} from "react-icons/ai" 
import { TbDevicesPc } from "react-icons/tb";

const Devices = () => {   

    const [devices, setDevices] = useState([
        {
            id:0,
            ime: "Smart TV - Samsung",
            kategorija: "TV Uređaji",
            prostorija: "Dnevni boravak",
            status: false
        },
        {
            id:1,
            ime: "Frižider - Telefunken",
            kategorija: "Frižideri",
            prostorija: "Kuhinja",
            status: true
        }
    ]); 
    
    const handleSwitcher = (id:number) => {
        setDevices(prevDevices => {
          const newDevices = [...prevDevices];
          newDevices[id] = { ...newDevices[id], status: !newDevices[id].status };
          return newDevices;
        });
      }
      

    return (
        <>
            <div className="flex flex-col text-white bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 rounded-xl">
                <div className="flex mt-4 ml-4 ">
                    <TbDevicesPc className="p-1 text-5xl rounded-full bg-gradient-to-r from-primaryColor to-secondaryColor"/>
                    <span className="items-center my-auto ml-2 text-xl font-bold">Dostupni uređaji</span>
                </div>
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8" id="uredjaji">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="min-w-full text-sm font-light text-left">
                            <thead className="font-medium border-b dark:border-neutral-500">
                                <tr> 
                                    <th scope="col" className="px-6 py-4">Ime uređaja</th>
                                    <th scope="col" className="px-6 py-4">Kategorija</th>
                                    <th scope="col" className="px-6 py-4">Status</th>
                                    <th scope="col" className="px-6 py-4">Prostorija</th>
                                    <th scope="col" className="px-6 py-4">Akcije</th>
                                </tr>
                            </thead>
                            <tbody>
                                {devices.map((device)=>(
                                    <tr className="transition duration-300 ease-in-out border-b hover:bg-gradient-to-r hover:from-gray-700 hover:via-gray-600 hover:to-gray-500" key={device.id}>
                                        <td className="px-6 py-4 whitespace-nowrap">{device.ime}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{device.kategorija}</td>
                                        <td className="px-6 py-4 whitespace-nowrap"> 
                                            <button className="flex items-center w-12 h-6 transition duration-300 bg-white rounded-full shadow focus:outline-none">
                                                <div
                                                    id="switch-toggle"
                                                    onClick={()=> {handleSwitcher(device.id)}}
                                                    className={device.status ? 
                                                            (
                                                                "relative w-7 h-7 p-1 text-white transition duration-500 transform -translate-x-2 bg-red-500 rounded-full" 
                                                            ):(
                                                                "relative w-7 h-7 p-1 text-white transition duration-500 transform translate-x-6 bg-green-500 rounded-full"
                                                                )
                                                            }>
                                                    {device.status ? (
                                                        <AiOutlinePoweroff className="flex items-center mx-auto my-auto text-xl"/>
                                                    ):(
                                                        <div className="flex items-center mx-auto my-auto text-xl"/>
                                                    )}
                                                </div>
                                            </button> 
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">{device.prostorija}</td>
                                        <td className="px-6 py-4 space-x-2 whitespace-nowrap">
                                            <button type="button" className="px-4 py-2 font-semibold text-white duration-200 ease-in bg-blue-500 rounded hover:bg-blue-600">Kontrola</button>
                                            <button type="button" className="px-4 py-2 font-semibold text-white duration-200 ease-in bg-red-500 rounded hover:bg-red-600">Izbriši</button>
                                        </td>
                                    </tr> 
                                ))} 
                            </tbody>
                        </table>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Devices