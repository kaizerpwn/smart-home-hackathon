import Footer from '@/components/Panel/Footer/Footer'
import Navbar from '@/components/Panel/Navbar/Navbar'
import React from 'react'

const Dashboard = () => {
  return (
    <> 
        <div className="w-full h-full"> 
                <div className="flex flex-no-wrap"> 
                    <Navbar/>
                    <div className="container w-11/12 h-64 px-6 py-10 mx-auto md:w-4/5"> 
                        <div className="w-full h-full border-2 border-gray-300 border-dashed rounded">
                            {/* <!-- Place your content here --> */}
                        </div>
                    </div>
                </div>  
        </div>
    </>
  )
}

export default Dashboard