'use client'
//This file has been tested for Accessibility on 11-27-24
import React from "react";
import { useState,useEffect } from "react";
import { DataItem} from "../../../Types/ProductTypes";//this is part of the fetch
import { FetchProduct } from "../../../Utilities/FetchProduct";//This is part of the fetch
import { SplitPathname } from "../../../Utilities/SplitPathname";
interface ProductBoxProps {
  setDescription: string | null;
  productHeadLine:string | null;
  ProductDescription:string | null;
}
export default function ProductBox({ setDescription,productHeadLine,ProductDescription }: ProductBoxProps){
  const {Product}=SplitPathname();
 
  const [Data,setData]=useState<DataItem[] | null>(null);
  useEffect(() => {
    const getData = async () => {
      const result = await FetchProduct(Product);
      setData(result);
    };    
    getData();
   }, [Product]);
  if (!Data) {
    return <div></div>;  
  }
return(
  <div className={` col-12  rounded-2  ${Product==='FaceBrick'?'faceBrickBox':(Product==='ThinBrick'?'thinBrickBox':(Product==='Paver'?'paverBox':(Product==='PathwayAggregate'?'PathwayAggregateBox':'StandardBox'))) } ms-0 m-xl-3 text-white ps-3 pt-2 pb-2 `} role="article" aria-label={`${Product} product information`}  >
    <div className="row">
      <div className="col-7">
        <h1 className="univers-55-Oblique d-inline-block ">{Product? Product.replace(/([a-z])([A-Z])/g, '$1 $2'):''}</h1>
      </div>
      <div className="col-5 d-flex justify-content-end">
        <h2 className="museo-light d-inline  fs-6 fst-italic me-2">{setDescription}</h2>
      </div>
    </div>
    <h2 className="museo-light d-none d-md-block" >{productHeadLine}</h2>
    <span className="univers-55-Roman d-none d-md-block">{ProductDescription}</span>
  </div>
)

}