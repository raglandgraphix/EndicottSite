'use client'
import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { DataItem} from "../../../Types/ProductTypes";//this is part of the fetch
import { FetchProduct } from "../../../Utilities/FetchProduct";//This is part of the fetch
import { Job } from "../../../Types/ProjectTypes";
import { FetchProjects } from "../../../Utilities/FetchProjects";
import Link from "next/link";


export default function ColorProjects(){
    const [Product,setProduct]=useState<string | null>(null);
    const [Data,setData]=useState<DataItem[] | null>(null);
    const [ProjectData,setProjectData]=useState<Job[] | null>(null);
    const [Color,setColor]=useState<string | null>(null);
    const pathname = usePathname();
   
    useEffect(()=>{

        if(pathname){
        const parts = pathname.split('/');
        
       
        if(parts.length>1){
          
          setProduct(parts[1]);
          
          const getTexture = parts[parts.length-1].split('-');
          setColor( getTexture[0]);
        
          
        }
       
        

    } 
        
      },[pathname]);

    useEffect(() => {
        const getData = async () => {
            if (Product) { // Only fetch data if Product is not null
              const result = await FetchProduct(Product);
              setData(result);
      
              if (result) {
                const projectResult = await FetchProjects(Product);
                setProjectData(projectResult);
                
              }
            }
          };
      
          getData();
      }, [Product]);
       
      
        if (!Data) {
          return <div></div>;  
        }
       
       
    return(
        <div className="row">
            <div className="col ">
        {
            Data.map((item)=>(
                item.fullName===Color?
                    
                    item.projects?.map((photos,id)=>(
                      photos.photo?
                      <div key={id} className="row mt-2 mb-2">
                              <div className="col-12">
                                  <h2 className="text-center">Projects & Videos</h2>
      
                              </div>
                          </div>:null
                              
                        
                        
                    ))

                // item.projects && (
                //     <div className="row mt-2 mb-2">
                //         <div className="col-12">
                //             <h2 className="text-center">Projects & Videos</h2>

                //         </div>
                //     </div>
                // )


                :''
            ))
        }
           
         
           <div className="row">
            {
                Data.map((item)=>(
                    item.fullName===Color?//exmple Desert_Ironspot_Light
                    
                     item.projects?.map((photos)=>(//These are projects listed in the colors
                       
                        photos.photo?photos.photo.map((projects)=>(



                            ProjectData?.map((items,index2)=>(
                                items.jobTitle===projects?
                                <div key={index2} className="col-12 col-md-2">
                                   <div className="card border h-100 ">
                                <Link href={`/${Product}/${items.jobTitle}`}>       
                                <Image src={items.jobThumb} alt={item.altTag} height={500} width={500}/>
                                </Link>
                                <div className="card-body">
                                   <h5 className="card-title fs-6 text-center">{items.jobName}</h5>
                                   <Image className="d-block" src='https://endicottfiles.com/Photo.png' height={25} width={25} alt="icon : This is project photos"/>
   
                               </div>
   </div>
                                </div>:''
                            ))
   
                        )):
                        (photos.video?
                            '':''
                            
                            )

                         

                        
                     ))
                    :''
                ))
            }
            
           </div>
            
           
            </div>
        </div>
    )
}