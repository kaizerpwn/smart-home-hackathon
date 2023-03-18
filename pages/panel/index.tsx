import Footer from '@/components/Panel/Footer/Footer'
import Navbar from '@/components/Panel/Navbar/Navbar'
import React from 'react'

const Dashboard = () => {
  return (
    <>
    <div className="container mx-auto">
        <div className="flex flex-row flex-wrap py-4">
            <aside className="w-full px-2 sm:w-1/3 md:w-1/4">
                <div className="sticky top-0 w-full p-4"> 
                    <Navbar/>
                </div>
            </aside>
            <main role="main" className="w-full px-2 pt-1 sm:w-2/3 md:w-3/4"> 
            test
            </main>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Dashboard