import {FaBed} from "react-icons/fa"
import {TbDevicesPc} from "react-icons/tb"
import {VscVmActive} from "react-icons/vsc"

const CurrentStats = () => {
  return (
    <>
    <div className="grid grid-cols-1 grid-rows-3 gap-10 lg:grid-cols-3 lg:grid-rows-1">
        <div className="px-4 py-2 text-white bg-gradient-to-r from-gray-700 via-gray-600 to-gray-500 rounded-3xl">
            <div className="text-4xl font-bold">
                <div className="mb-4 text-lg font-normal uppercase opacity-80">Broj prostorija</div>
                <div className="flex">
                    <FaBed className="p-1 text-5xl rounded-full bg-gradient-to-r from-primaryColor to-secondaryColor"/>
                    <span className="ml-2">13</span>
                </div>
            </div>
        </div>
        <div className="px-4 py-2 text-white bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 rounded-3xl">
            <div className="text-4xl font-bold">
                <div className="mb-4 text-lg font-normal uppercase opacity-80">Broj uređaja</div>
                <div className="flex">
                    <TbDevicesPc className="p-1 text-5xl rounded-full bg-gradient-to-r from-primaryColor to-secondaryColor"/>
                    <span className="ml-2">13</span>
                </div>
            </div>
        </div>
        <div className="px-4 py-2 text-white bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 rounded-3xl">
            <div className="text-4xl font-bold">
                <div className="mb-4 text-lg font-normal uppercase opacity-80">Broj aktivnih uređaja</div>
                <div className="flex">
                    <VscVmActive className="p-2 text-5xl rounded-full bg-gradient-to-r from-primaryColor to-secondaryColor"/>
                    <span className="ml-2">13</span>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default CurrentStats