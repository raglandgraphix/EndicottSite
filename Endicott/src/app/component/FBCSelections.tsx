//FBCSelections is the menu to the right of the product description box.
'use client';
import React from "react";
import { useState, useEffect } from "react";
//import {usePathname} from 'next/navigation';
import { DataItem} from "../../../Types/ProductTypes";
import { useRouter } from "next/navigation";
import { FetchProduct } from "../../../Utilities/FetchProduct";

import { SplitPathname } from "../../../Utilities/SplitPathname";

interface FBCSelectionProps {
  
  setSelectedSize: (newSize: string) => void; // Define the type of the callback prop
}
export default function FBCSelections ({setSelectedSize }: FBCSelectionProps){
  const {Product,Color,Texture}=SplitPathname();
 
  const [Data,setData]=useState<DataItem[] | null>(null);
  
  const [BrickSize,setBrickSize]=useState<string | null>(null);
   const [DefaultTexture,setDefaultTexture]=useState<string | null>(null);
   const router= useRouter();
  
   useEffect(() => {
    const getData = async () => {
      const result = await FetchProduct(Product);
      setData(result);
      console.log(`The URL Texture is set to ${Texture}`)
      if(result){
        
        if(!Texture){
          
          result.map((item)=>{
            if(item.fullName===Color){
            
              setDefaultTexture(item.textures[0].texture);
              
              if(BrickSize===null){
                
                item.textures.map((size)=>{
                  
                  setSelectedSize(size.sizes[0]);
                  setBrickSize(size.sizes[0]);
                })
               
              }
              




            }
          })

          
       
        }else if(Texture && !BrickSize){
          result.map((item)=>{
            if(item.fullName===Color){
              item.textures.map((texture)=>{
                setBrickSize(texture.sizes[0]);
                setSelectedSize(texture.sizes[0]);
              })
            }
          })
          

        }else{

        }
      }
    }
    getData();
  },[Product]);


  
    const ChangeSize = (size:string)=>{
    
      
      
      setBrickSize(size);
      setSelectedSize(size);
      
    }
  

// useEffect(()=>{
//   Data?.map((item)=>{
//     if(item.fullName===Color){
      
//       item.textures.map((texture)=>{
//         if(!Texture){
          
//           if(texture.texture===DefaultTexture){
            
//             const thisTexture = item.textures[0].texture;
            
             
//           }
//         }
        
//       })
//     }
//   })
// })



  
  const TextureChange = (TextureValue:string)=>{
    const newUrl = `/FaceBrick/Colors/${Color}-${TextureValue}`;
    Data?.map((item)=>{
      if(item.fullName===Color){
        
      item.textures.map((texture)=>{
        if(texture.texture===TextureValue){
         
          if(BrickSize){
            const compare = texture.sizes.includes(BrickSize);

            
            if(!compare){
              setBrickSize(texture.sizes[0]);
              setSelectedSize(texture.sizes[0]);
            }
         
          }
          
        }
      })
      }
    }) 
    router.replace(newUrl, undefined);
  }        
  return(
    <div className="row univers-55-Roman text-rock h-100  w-100  d-flex justify-content-xl-end justify-content-center   p-0 m-0 pe-1 ">
      <div className="col-2 col-sm-4 col-md-6 col-lg-3 col-xl-3 border-end  text-center   ">
        <div className="row border-bottom ">
          <div className="col  ">
            <h2 className="fs-5 ">Texture</h2>
          </div>
        </div>
        <div className="row ">
          <div className="col-12 text-md-nowrap">
            {
              Data?.map((item)=>(
                item.fullName===Color?
                Texture?
                  item.textures.map((texture,index)=>(
                  
                    <span role="button" key={index} className={`d-block text-uppercase MenuSetByScreenSize   mt-2  pt-2 pb-1.5 text-rock  ${texture.texture===Texture?'bg bg-black rounded-3 text-white':''} `} onClick={()=>{TextureChange(texture.texture)}} >{texture.texture.replace(/~/g," ")}</span>
                    )):

                    item.textures.map((texture,index)=>(
                    <span role="button" key={index} className={`d-block text-uppercase MenuSetByScreenSize   mt-2  pt-2 pb-1.5 text-rock  ${texture.texture===DefaultTexture?'bg bg-black rounded-3 text-white':''} `} onClick={()=>{TextureChange(texture.texture)}} >{texture.texture.replace(/~/g," ")}</span>
                  ))
                :''
              ))
            }
            </div>
        </div>
      </div>
      <div className="col-10 col-sm-8 col-md-6 col-lg-9  text-center  m-0 p-0">
        <div className="row">
          <div className="col border-bottom">
            <h2 className="fs-5 ">Sizes</h2>
          </div>
        </div>
        <div className="row mt-2 MenuSetByScreenSize">
          <div className="col-12 ">
            <table className=" w-100">
              <tbody> 
                {Data?.map((item) => (
                  item.fullName === Color ? (
                    item.textures.map((mytexture) => {

                      if(Texture){
                        if (mytexture.texture === Texture) {
                          const sizes = mytexture.sizes;
                          const rowsCount = Math.ceil(sizes.length / 3);
                          return Array.from({ length: rowsCount }, (_, rowIndex) => (
                            <tr  key={rowIndex} >
                              {sizes.slice(rowIndex * 3, (rowIndex + 1) * 3).map((size, colIndex) => (
                                <td role="button" className={`    pt-2 pb-3 `} key={colIndex} onClick={()=>{ChangeSize(size)}}><span className={`text-uppercase p-2.5 text-rock ${size===BrickSize?'bg bg-dark rounded-2 text-white':''}`} >{size.replace(/_/g,' ')}</span></td>
                              ))}
                            </tr>
                          ));
                        }


                      }else{
                       if(mytexture.texture===DefaultTexture){
                        const sizes = mytexture.sizes;
                        const rowsCount = Math.ceil(sizes.length / 3);
                        return Array.from({ length: rowsCount }, (_, rowIndex) => (
                          <tr  key={rowIndex} >
                            {sizes.slice(rowIndex * 3, (rowIndex + 1) * 3).map((size, colIndex) => (
                              <td role="button" className={`    pt-2 pb-3 `} key={colIndex} onClick={()=>{ChangeSize(size)}}><span className={`text-uppercase p-2.5 text-rock ${size===BrickSize?'bg bg-dark rounded-2 text-white':''}`} >{size.replace(/_/g,' ')}</span></td>
                            ))}
                          </tr>
                        ));
                      }
                    }
                        return "";
                    })
                  ) : ''
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}