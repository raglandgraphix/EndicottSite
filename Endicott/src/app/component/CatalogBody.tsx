'use client';
import React from "react";
import { useState,useEffect} from "react";
import Link from 'next/link'
import Image from "next/image";
import {DataItem} from '../../../Types/ProductTypes';
import { FetchProduct } from "../../../Utilities/FetchProduct";
import { SplitPathname } from "../../../Utilities/SplitPathname";

  
 
export default function CatalogBody(){
  
    const {Product,RangeColors}=SplitPathname();
    const [data, setData] = useState<DataItem[] | null>(null); // Correct type
    //const [RangeColors,setRangeColors]=useState<string | null>(null);
    //const [Product,setProduct]= useState<string | null>(null);
    //const [JSONData,setJSONData]=useState<string | null>(null);
     
   
    //  const pathname = usePathname();
    //  useEffect(()=>{
    //    setRangeColors(pathname.includes('-')?pathname.split('-')[1]:null);
    //    const parts = pathname.split('/');
    //   if(parts.length>1){
    //     setProduct(parts[1]);
    //   }
      
    // },[pathname]);

   
   
    useEffect(() => {
      
      
      
      const getData = async () => {
        if(Product){
            const result = await FetchProduct(Product);
            
            
            
            setData(result);
        }
      
      
    };

    getData();
}, [Product]);
    
      if (!data) {
        return <div></div>;  
      }
      return(
        <div className="row d-flex justify-content-center justify-content-md-start">
          {
            data.map((item)=>(
              RangeColors === 'All' || RangeColors === null || item.colorGroup.some(color => (RangeColors ?? '').includes(color)) ? (
                
              <div key={item.id} className=" col-11 col-md-6 col-xl-4 mb-5">
                <Link className="text-decoration-none" href={`/${Product}/Colors/${item.fullName}`} >
                <div className="Card border rounded-bottom-4 m-1 shadow text-rock">
                  <Image className="card-img-top img-fluid" loader={({ width }) => `${item.mainImage}?w=${width}`} width={500} height={500} alt={item.altTag} src={item.mainImage}  />
                    <div className="card-body">
                      <div className="card-title text-center">
                        <h2 className="text-uppercase univers-45-light fs-5 mt-2">{item.fullName.replace(/_/g,' ').replace(/(Medium Ironspot )(\d+)/g,'$1#$2')}</h2>
                      </div>
                    </div>
                </div>
                </Link>
              </div>
              ):null
            ))
          }
        </div>
      )
    }