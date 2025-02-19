'use client'
//This file has been tested for accessibility on 11-27-24
import React from "react";
import { useState,useEffect } from "react";
import { Job } from "../../../Types/ProjectTypes";
import { FetchProjects } from "../../../Utilities/FetchProjects";
import Image from "next/image";
import { SplitPathname } from "../../../Utilities/SplitPathname";
import Link from "next/link";
//import { useRouter } from "next/navigation";

export default function ProjectBody( ){
    
    
    const { Product,RangeColors } = SplitPathname();
    const [ProjectData,setProjectData]=useState<Job[] | null>(null);
    useEffect(() => {
        const getProjectData = async () => {
            
            const result = await FetchProjects(Product);
            setProjectData(result);
        };
        getProjectData();
    }, [Product]);
    return(
        <div className="row">
            {
                ProjectData?.map((item, index)=>(
                    RangeColors && RangeColors!=='All' ? 
                        item.colorRange.map((items)=>(
                            items===RangeColors?
                                <div key={index} className="col-12 col-md-6 col-lg-3 mb-3 position-relative d-flex justify-content-center project-container ">
                                    <Link href={`/${Product}/${item.jobTitle}`} aria-label={`View details for the ${item.jobName} project`}>
                                        <Image className="rounded-3" src={item.jobThumb} alt={item.altTag} width={500} height={500}/>
                                    </Link>
                                    <div className=" bg-white-75 w-100 position-absolute bottom-0 rounded-bottom-2  text-overlay ">
                                        <h2 className="fs-6 text-center">{item.jobName}</h2>
                                        <h3 className="univers-45-light fs-6 text-center">{item.city},{item.stateShort}</h3>
                                    </div>
                                </div> :''
                                
                        )):
                            <div key={index} className="col-12 col-md-6 col-lg-3 mb-3 position-relative d-flex justify-content-center project-container ">
                                <Link href={`/${Product}/${item.jobTitle}`} aria-label={`View details for the ${item.jobName} project`}>
                                    <Image className="rounded-3" src={item.jobThumb} alt={item.altTag} width={500} height={500}/>
                                </Link>
                                <div className=" bg-white-75 w-100 position-absolute bottom-0 rounded-bottom-2  text-overlay ">
                                    <h2 className="fs-6 text-center">{item.jobName}</h2>
                                    <h3 className="univers-45-light fs-6 text-center">{item.city},{item.stateShort}</h3>
                                </div>
                            </div>
                ))
            }
        </div>
    )
}