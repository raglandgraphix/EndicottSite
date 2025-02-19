'use client';
import React from "react";
import { useState } from "react";
//import { usePathname } from "next/navigation";
import ColorHead from "@/app/component/ColorHead";
import ColorBody from "@/app/component/ColorBody";
import Navigate from "@/app/component/navigate";
import Footer from "@/app/component/footer";

export default function IndividualColor(){
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [runThickness,setRunThickness]=useState<string | null>(null) 

    
    
    return(
       <div className="container-fluid">

        <Navigate pageSettings="light"/>
        <ColorHead setSelectedSize={setSelectedSize} selectedThickness={setRunThickness}/>
        <ColorBody selectedSize={selectedSize} CBThickness={runThickness}/>
        <Footer pageSetUp="light"/>
        

       </div>
    )
}