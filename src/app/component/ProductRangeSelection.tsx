'use client'
//Accesibility checked 11/27/24
import React from "react";
import { useState,useEffect } from "react";
import Link from "next/link";
import { SplitPathname } from "../../../Utilities/SplitPathname";
import { useRouter } from "next/navigation";
// interface childProps {
//     Product: string | null;
//     RangeColors:string | null;
//     Page:string | null;
//     Project:string | null;
// }
export default function ProductRangeSelection(){
    const {Product,Page,RangeColors}= SplitPathname();
    const [ProductRange,setProductRange]=useState<string[] | null>(null);
    const router = useRouter(); 


const handleLinkClick = (myPath:string) => {
    //console.log(Product);
//   if (pathname === path) {
    
// setTimeout(() => {
//     router.refresh();
//   }, 500); 
 // }

 router.replace(myPath);
 
 // }
};
    useEffect(()=>{
        if(Product==='FaceBrick'){
          setProductRange(["All","Red/Burgundy","Black/Plum","Gray/White/Cream/Buff","Tan/Brown/Orange"]);       
        }else if(Product==='ThinBrick'){
          setProductRange(["All","Red/Burgundy","Black/Plum","Gray/White/Cream/Buff","Tan/Brown/Orange"]);      
        }else if(Product==='Paver'){
          setProductRange(["All","Red/Burgundy","Black/Plum","Tan/Brown/Orange"]);        
        }else{
          setProductRange(null);
        }
    },[Product]);
    return(
        <div className="col-12  pb-2 pt-2 ms-xl-3 ">
            <div className="row univers-55-Roman text-rock h-100  w-100  d-flex justify-content-xl-end justify-content-center ">
                <div className="col-4 col-md-5 col-xl-3 border-end  text-center   ">
                    <div className="row border-bottom ">
                        <div className="col ">
                            <h2 className="fs-5 ">Product</h2>
                        </div>
                    </div>
                    <div className="row" role="menu">
                        <div className="col text-nowrap mt-2 mb-1 text-dark">
                            <Link role="link" className="text-decoration-none" href='/FaceBrick/Projects' onClick={(e) => {e.preventDefault(); handleLinkClick(`/FaceBrick/${Page}`);}}  >
                                <span className={`d-block text-uppercase pt-2 pb-2 ${Product==='FaceBrick'?'bg bg-black text-stone rounded-2':'text-dark'} `} role="menuitem"  >Face Brick</span>
                            </Link>
                            
                            <Link role="link" className="text-decoration-none" href='/ThinBrick/Projects' onClick={(e) => {e.preventDefault(); handleLinkClick(`/ThinBrick/${Page}`);}}  >
                                <span className={`d-block text-uppercase pt-2 pb-2 ${Product==='ThinBrick'?'bg bg-black text-stone rounded-2':'text-dark'} `} role="menuitem"  >Thin Brick</span>
                            </Link>
                            <Link role="link" className="text-decoration-none" href='/Paver/Projects' onClick={(e) => {e.preventDefault(); handleLinkClick(`/Paver/${Page}`);}}  >
                                <span className={`d-block text-uppercase pt-2 pb-2 ${Product==='Paver'?'bg bg-black text-stone rounded-2':'text-dark'} `} role="menuitem"  >Pavers</span>
                            </Link>
                            
                            
                            
                        </div>
                    </div>
                </div>
                <div className="col-7 col-md-5 col-xl-6 text-center">
                    <div className="row">
                        <div className="col border-bottom">
                            <h2 className="fs-5 ">Color Range</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            {
                                ProductRange?.map((ranger,index)=>(
                                    <Link role="link" key={index}  className="text-decoration-none text-rock" href={`/${Product}/${Page}-${ranger.split("/")[0]}`} ><span className={`d-block text-uppercase   pt-2 pb-2 ${index===0 && (RangeColors===null || RangeColors===ranger.split('/')[0])?'mt-2 bg bg-black text-stone rounded-2':RangeColors === ranger.split('/')[0] ? 'mt-2 bg bg-black text-stone rounded-2' : ''}  `} >{ranger}</span></Link>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}