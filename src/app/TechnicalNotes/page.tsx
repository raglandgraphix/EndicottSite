'use client';
import React, { useState } from "react";
import { useEffect } from "react";
import Navigate from "../component/navigate";
import ProductBox from "../component/ProductBox";
import Footer from "../component/footer";
import Link from "next/link";


export interface TechnicalNote {
    name: string;
    file: string;
    description: string;
    call: string;
    order: number;
  }


export default function TechnicalNotes(){
    const[Data,setData]=useState<TechnicalNote[]|null>(null);
     useEffect(()=>{
            const fetchData = async () => {
                const res = await fetch('/JSON/TechnicalNotes.json');
                const json = await res.json();
                setData(json); 
                console.log(json);
            };
            fetchData();
        },[]);

return(

<div className="container-fluid">
    <Navigate pageSettings="light"/>
    <ProductBox setDescription='BIA Technotes' productHeadLine='BIA Technical Notes: Essential Resources for Brick Construction' ProductDescription='Access valuable technical information on brick construction with the Brick Industry Association (BIA) Technical Notes, available on the Endicott website. These resources provide in-depth guidance on topics ranging from bricklaying techniques and mortar selection to design considerations and structural performance.' />
<div className="row border-bottom border-black mt-5 mb-5">
    <div className="col ps-5 pe-5">
        <p className="">Technical Notes on Brick Construction are FREE bulletins that contain design, detailing, and construction information based on the latest technical developments in brick masonry. Drawings, photographs, tables, and charts illustrate appropriate topics. Technical Notes on Brick Construction are recommendations on the use of fired clay brick. They are explicitly written for fired clay brick which are manufactured:</p>
        <p className="">1) from clay, shale, or similar naturally-occurring earthy substances, and</p>
        <p className="">2) with a firing process that creates a fired bond between the particles of the brick.</p>
    
    </div>
</div>
    {
        Data?.map((item)=>(
            <div key={item.order} className="row">
                <div className="col ps-5 pe-5">
                <h4 className=""><span className="text-uppercase me-3">{item.call.replace('t','')}: </span> <Link href={item.file} className="ClayText" target="_blank" rel="noopener noreferrer"> {item.name}</Link></h4>
                <p>{item.description}</p>
                </div>
                
            </div>

        ))
    }

<Footer pageSetUp="light"/>
</div>

)


}