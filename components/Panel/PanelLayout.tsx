import Navbar from "../Panel/Navbar/Navbar"; 
import React, { PropsWithChildren } from "react";

export default function PanelLayout({ children }: PropsWithChildren) {
    return (
        <>
            <main>
                <>
                    <div className="w-full h-full"> 
                        <div className="flex flex-no-wrap"> 
                            <Navbar/>
                            <div className="container w-11/12 h-64 px-6 py-3 mx-auto md:w-4/5"> 
                                <div className="w-full h-full">
                                    {children}
                                </div>
                            </div>
                        </div>  
                    </div> 
                </>
            </main>
        </>
    )
}