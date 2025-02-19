'use client'
import React  from "react";
import { useEffect, useState } from "react";
import { SplitPathname } from "../../../Utilities/SplitPathname";
import { DataItem } from "../../../Types/ProductTypes";
import { TextureData } from "../../../Types/TextureTypes";
import { FetchTexture } from "../../../Utilities/FetchTextures";
import { FetchProduct } from "../../../Utilities/FetchProduct";
import Image from "next/image";

export default function ASFacePaver(){
    const {Product,Color,Texture}=SplitPathname();
    const [DefaultTexture,setDefaultTexture]=useState<string | null>(null);
    const [Data,setData]=useState<DataItem[]| null>(null);
    const [TextureData,setTextureData]=useState<TextureData[] | null>(null);
    
    useEffect(() => {
       
        const getData = async () => {
          const result = await FetchProduct(Product);
          setData(result);
          
            if(result && result.length>1){
                for(const x of result){
                    if(x.fullName===Color){
                        
                        setDefaultTexture(x.textures[0].texture);
                        
                    }
                  }
              }
          
          
          
        };
    
        getData();
        
      }, [Product]);
      useEffect(() => {
        const getData = async () => {
            if (Product) { // Only fetch data if Product is not null
              const result = await FetchTexture(Product);
              setTextureData(result);
              
            }
          };
        
          getData();
          
        
      }, [Product]);


return(
    <div>
    <div className="row">
            
            <div className="col">
                {
                    
                        Data?.map((item)=>(                       
                            item.fullName===Color?item.textures.map((texture)=>(
                                texture.image==='https://endicottfiles.com/NotAvailable.jpg'?'':
                                Texture?
                                texture.texture===Texture ? 
                                <></>                       
                                    // <a key={texture.texture} className="text-decoration-none" href={texture.fallbackLargeImage} download>
                                    //     <div className="row mb-2 border-bottom ">
                                    //         <div className="col-3">
                                    //             <Image  src='/assets/MiscImages/RenderableColors.png' width={100} height={100} alt='image that works as a button. click to see renderable images of this color.'/>
                                    //         </div>
                                    //         <div className="col-9">
                                    //             <p className="text-black">This Color is available in a seemless image for rendering. Click to download.</p>
                                    //         </div>
                                    //     </div>
                                    // </a>
                                :null
                                :
                                    texture.texture===DefaultTexture ?  
                                    <></>                      
                                    // <a key={texture.texture} className="text-decoration-none" href={texture.fallbackLargeImage} download>
                                    //     <div className="row mb-2 border-bottom ">
                                    //         <div className="col-3">
                                    //             <Image  src='/assets/MiscImages/RenderableColors.png' width={100} height={100} alt='image that works as a button. click to see renderable images of this color.'/>
                                    //         </div>
                                    //         <div className="col-9">
                                    //             <p className="text-black">This Color is available in a seemless image for rendering. Click to download.</p>
                                    //         </div>
                                    //     </div>
                                    // </a>
                                :null


                                
                                
                            )):''
                    ))
                }
            </div>
        </div>        
        <div className="row ">
            <div className="col">
                {
                    
                        Data?.map((item)=>(
                            item.fullName===Color?
                                item.textures.map((texture)=>(
                                    texture.image==='https://endicottfiles.com/NotAvailable.jpg'?'':
                                   Texture?
                                    texture.texture===Texture?
                                    <></>
                                        // <a className="text-decoration-none" key={texture.texture} href={texture.artx} target="_blank">
                                        //     <div className="row border-bottom">
                                        //         <div className="col-3">
                                        //             <Image className="" src='/assets/MiscImages/artx-logo.svg'  width={50} height={50} alt='image that works as a button. click to see renderable images of this color.'/>
                                        //         </div>
                                        //         <div className="col-9">
                                        //             <p className="text-black">This color and texture is available in Architextures for direct use with Autodesk Revit.</p>
                                        //         </div>
                                        //     </div>
                                        //</a>
                                        :null
                                        :
                                            texture.texture===DefaultTexture?
                                            <></>
                                            // <a className="text-decoration-none" key={texture.texture} href={texture.artx} target="_blank">
                                            //     <div className="row border-bottom">
                                            //         <div className="col-3">
                                            //             <Image className="" src='/assets/MiscImages/artx-logo.svg'  width={50} height={50} alt='image that works as a button. click to see renderable images of this color.'/>
                                            //         </div>
                                            //         <div className="col-9">
                                            //             <p className="text-black">This color and texture is available in Architextures for direct use with Autodesk Revit.</p>
                                            //         </div>
                                            //     </div>
                                            // </a>
                                            
                                            :null


                                        
                                        
                                )):''
                        ))
                }
            </div>
        </div>        
        <div className="row  mt-2 pb-2">
            <div className="col">
                <a href="">
                    <Image src='/assets/MiscImages/CADdetails-Logo-horizontal.svg' width={100} height={100} alt='image that works as a button. click to see renderable images of this color.'/>
                </a>                
            </div>
        </div>
        <div className="row mt-2">
            <div className="col">                
                <p className="museo-light fst-italic fs-4">{Texture?Texture.replace(/~/g,' '):DefaultTexture?.replace(/~/g,' ')} Texture</p>
                <p >Experience the subtle texture and visual depth of wirecut pavers, a classic finish that adds a touch of elegance to any design.</p>
                {
                
                    Data?.map((item)=>(
                        item.fullName===Color?
                        Texture?
                            item.textures.map((texture)=>(
                                texture.texture===Texture?

                                TextureData?.map((info,index)=>(
                                    info.texture===Texture.replace(/~/g,' ')?
                                    <p key={index}>Experience the subtle texture and visual depth of wirecut pavers, a classic finish that adds a touch of elegance to any design.</p>
                                    :null
                                )):null


                            ))

                        :(
                            item.textures.map((texture)=>(

                                texture.texture===DefaultTexture?
                                TextureData?.map((info,index)=>(
                                    info.texture===DefaultTexture?.replace(/~/g,' ')?
                                    <p key={index} >Experience the subtle texture and visual depth of wirecut pavers, a classic finish that adds a touch of elegance to any design.</p>
                                    :null
                                )):null



                            ))
                            )
                        
                        
                        :null

                           
                          
                            
                     ))
                }
            </div>
        </div>
        </div>
)



}