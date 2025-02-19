'use client';
import React from "react";
import { useState } from "react";
import ColorHead from "@/app/component/ColorHead";
import ColorBody from "@/app/component/ColorBody";
import Navigate from "@/app/component/navigate";
import Footer from "@/app/component/footer";
export default function IndividualColor(){
    const [selectedSize, setSelectedSize] = useState<string | null>(null); 
    //const [selectedThickness,setSelectedThickness]=useState<string | null>(null);
    const selectedThickness = null;
   console.log(`What is the selectes size now ${selectedSize}`)
    return(
       <div className="container-fluid">

        <Navigate pageSettings="light"/>
        <ColorHead setSelectedSize={setSelectedSize} /> 
      <ColorBody selectedSize={selectedSize} CBThickness={selectedThickness} />{/*  Pass the selected size */}
        <Footer pageSetUp="light"/>
        

       </div>
    )
}