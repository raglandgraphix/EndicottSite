import React, { useState } from "react";
import { useEffect } from "react";
import { SplitPathname } from "../../../Utilities/SplitPathname";
import { FetchProduct } from "../../../Utilities/FetchProduct";
import { DataItem as FacebrickDataItem } from "../../../Types/ProductTypes";
import { DataItem as ThinbrickDataItem } from "../../../Types/ProductTypes";
//import Image from "next/image";

export default function TextureLoadThinbrick(){
const {Product,Color}=SplitPathname();
const [Data, setData] = useState<FacebrickDataItem[] | ThinbrickDataItem[] | null>(null);
//const [Thickness,setThickness]=useState<string>("1/2\"");

useEffect(() => {
    const getData = async () => {
        if (Product) {
            const result = await FetchProduct(Product);
    
            // Type assertion based on Product
            if (Product === 'FaceBrick') {
              setData(result as FacebrickDataItem[]);
            } else if (Product === 'ThinBrick') {
              setData(result as ThinbrickDataItem[]);
            }
          }
    };

    getData();
}, [Product]);
if (!Data) {
    return <div></div>;  
}
return(

    <div>
        {
           
           Data.map((item) => (
            item.fullName === Color ? (
                <div key={item.id}>
                    
                    
            
                </div>
            ) : null
        ))
        }
        

    </div>
)

}