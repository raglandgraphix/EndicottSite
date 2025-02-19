'use client'
//Accesibility checked 11/27/24
import React from "react";

import Link from "next/link";
import { SplitPathname } from "../../../Utilities/SplitPathname";
import { useRouter } from "next/navigation";


export default function ProductSelection(){
    const {Product,Page}= SplitPathname();
    
    const router = useRouter(); 


const handleLinkClick = (myPath:string) => {
   

 router.replace(myPath);
 
 
};
    
    return(
        <div className="col-12  pb-2 pt-2 ms-xl-3  ">
            <div className="row univers-55-Roman text-rock h-100  w-100  d-flex  justify-content-center ">
                <div className="col-4 col-md-5 col-xl-3  text-center   ">
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
                            {/* There is no Paver because this is used for the textures pages and Pavers only has one texture. */}
                            {
                                Page === 'Sizes' && 
                                <Link role="link" className="text-decoration-none" href='/Paver/Projects' onClick={(e) => {e.preventDefault(); handleLinkClick(`/Paver/${Page}`);}}  >
                                <span className={`d-block text-uppercase pt-2 pb-2 ${Product==='Paver'?'bg bg-black text-stone rounded-2':'text-dark'} `} role="menuitem"  >Paver</span>
                            </Link>
                            }
                            
                            
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}