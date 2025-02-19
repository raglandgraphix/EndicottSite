'use client'
import React from "react";
import { useState,useEffect } from "react";
import { FetchProjects } from "../../../Utilities/FetchProjects";
import { Job } from "../../../Types/ProjectTypes";
import { SplitPathname } from "../../../Utilities/SplitPathname";
import Image from "next/image";
import { Carousel } from "react-bootstrap";
//import { useRouter } from "next/router";
//import Head from "next/head";
// interface myProps{
//   onData: (data: string[]) => void; 
// }

export default function SingleProject(){
    const { Product,Project } = SplitPathname();
    const ProjectName = Project;//This will become a variable that is passed in by the Parameter list    
    const [ProjectData,setProjectData]=useState<Job[] | null>(null);
    //const [SendArray,setSendArray]=useState<string[] | null>(null);
 
useEffect(() => {
  
    const getProjectData = async () => {
      const result = await FetchProjects(Product);
      setProjectData(result);
      if(result){
        const myArray: string[] = [];
        for(const value of result){
          if(value.jobTitle===ProjectName){
            myArray.push(value.jobTitle);
            
          }
          
        }
      }
      
    };
    
    getProjectData();
    
  }, [Product]);
  //console.log(SendArray);
  return(
    <div className="row  ">
      {/* <Head>
        <title>Rockstar</title>
      </Head> */}
      
<Carousel className=" p-0  " variant="light" fade  >
      
        {
            ProjectData?.map((item)=>(
                item.jobTitle===ProjectName?
                
                item.photoAlbum.map((photo,index)=>(
                   
                    <Carousel.Item className=" border  carousel-height d-flex justify-content-center" key={index}>
                    
                    <Image key={index} className="object-fit-cover w-100" priority  src={photo}  alt={item.altTag} width={1600} height={800}style={{ 
              // width: '100%',
              height: '100vh', // Set height to 100vh
              //objectFit: 'cover' // Use objectFit to cover the area
            }}/>
            
                    <Carousel.Caption className=" text-black w-100 d-flex justify-content-start" style={{ position: 'absolute', left: 0,  }}>
                    <div className="text-start ms-2 bg-white-75 shadow p-2 rounded-3" style = {{display:'inline-block'}}>
                    <h3 className="m-0">{item.jobName}</h3>
                    
                    <p className="m-0 fs-7"><span className="univers-45-light fst-italic d-inline">Color: </span>
                    {
                        Array.from(new Set(item.products?.map(product => product.color))).map((color, index, arr) => (
                        <span className=" d-inline" key={index}>
                        {color}{index < arr.length - 1 ? ", " : ""}
                        </span>
                        ))
                    }
                    
                    </p>
                    <p className="m-0 fs-7"><span className="univers-45-light fst-italic d-inline">Size: </span>
                    {
                       Array.from(new Set(item.products.map(product => product.size))).map((size, index, arr) => (
                        <span className=" d-inline m-0" key={index}>
                          {size}{index < arr.length - 1 ? ", " : ""}
                        </span>
                      ))
                    }
                    </p>
                    {
                      item.location && <p className="m-0 fs-7"><span className="univers-45-light fst-italic ">Location: </span><span >{item.city}, {item.stateShort}</span></p>
                    }
                    
                    {
                      item.architect && item.architect==='Shim - Sutcliffe Architects' && <p className="m-0 fs-7"><span className="univers-45-light fst-italic ">Architect: </span><span >{item.architect}</span></p>
                      
                    }
                    {
                      item.photographer && item.photographer==='Scott Norsworthy' && <p className="m-0 fs-7"><span className="univers-45-light fst-italic ">Photographer: </span><span >{item.photographer}</span></p>
                    }
                    
                    </div>    
                    </Carousel.Caption>
                    
                    </Carousel.Item>
                ))
               
                
                :''
                
            ))
        }



        
       
    </Carousel>

</div>

  )

}
