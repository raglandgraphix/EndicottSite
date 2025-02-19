import React, { useState } from "react";
import { useEffect } from "react";
import { SplitPathname } from "../../../Utilities/SplitPathname";

import { FetchProduct } from "../../../Utilities/FetchProduct";
//import { DataItem } from "../../../Types/ProductTypes";
import { DataItem as FacebrickDataItem } from "../../../Types/ProductTypes";
import { DataItem as ThinbrickDataItem } from "../../../Types/ProductTypes";
import Image from "next/image";

export default function TextureLoadFacebrick(){
const {Product,Texture,Color}=SplitPathname();
const [Data, setData] = useState<FacebrickDataItem[] | ThinbrickDataItem[] | null>(null); // Union type for data

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
                    
                    {Texture ? ( // Check if Texture has a value

                    
///This is where we have to decide between products to set up the correct selections like thickness...


                       
                        item.textures.map((texture,index) => (
                            texture.texture === Texture ? (
                                <div key={index}>
                                    <Image className="card-img-top img-fluid" loader={() => (texture.image)} width={500} height={500} alt={item.altTag} src={texture.image}  />
                                    <div className="card-body">
                                        <div className="card-title text-center"></div>
                                    </div>
                                </div>
                            ) : null
                        ))
                    ) : (
                            <div>
                                <Image  className="card-img-top img-fluid" loader={() => (item.textures[0].image)} width={500} height={500} alt={item.altTag} src={item.textures[0].image}  />
                                <div className="card-body">
                                    <div className="card-title text-center">
                                        <h2 className="text-uppercase univers-45-light fs-5 mt-2">{item.textures[0].texture}</h2>
                                    </div>
                                </div>
                            </div>
                        )}
            
                </div>
            ) : null
        ))
        }
        

    </div>
)

}