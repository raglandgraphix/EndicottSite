import React from "react";
import { useEffect,useState } from "react";
import Image from "next/image";
import { DataItem} from "../../../Types/ProductTypes";//this is part of the fetch
import { DataItemThin } from "../../../Types/ProductTypesThinbrick";
import { DataItemPaver } from "../../../Types/ProductTypesPaver";
import { FetchProduct } from "../../../Utilities/FetchProduct";
import { SplitPathname } from "../../../Utilities/SplitPathname";
import { FetchProductThin } from "../../../Utilities/FetchProductThin";
import { FetchProductPaver } from "../../../Utilities/FetchProductPaver";
interface ColorDisplayProps {
    DisplayThickness: string | null; // Add the selectedThickness prop
  }
export default function ColorDisplay({ DisplayThickness }: ColorDisplayProps){
    
     //const Thickness = '5/8\" Thick'
    const [Thickness,setThickness]=useState<string | null>(null)
    const [Data,setData]=useState<DataItem[] | null>(null);
    const [DataThin,setDataThin]=useState<DataItemThin[] | null>(null);
    const [DataPaver,setDataPaver]=useState<DataItemPaver[] | null>(null);
    //const [Color,setColor]=useState<string | null>(null);    
    //const [Texture,setTexture]=useState<string | null>('Smooth');
    const [DefaultTexture,setDefaultTexture]=useState<string | null>(null);
    const {Product,Color,Texture}=SplitPathname();
    useEffect(()=>{
        
        // if(selectedThickness){
            //setThickness(selectedThickness);
            
            if(DisplayThickness){
                setThickness(DisplayThickness);
            }else if(DisplayThickness===null){
                setThickness("1/2\" Thick");
            }
           
        // }
        
    })
    useEffect(() => {
        if(Product==='FaceBrick'){
            const getData = async () => {
                if(Product){
                    const result = await FetchProduct(Product);
                    
                    
                    
                    setData(result);
                }
              
              
            };
            getData();
        }else if(Product==='ThinBrick'){
            const getData = async () => {
                const result = await FetchProductThin(Product);
                setDataThin(result);
                if(result){
                  for(const items of result){
                      if(items.fullName===Color){
                          
                          for(const thickness of items.thick){
                              if(thickness.size==='1/2\" Thick'){
                                  setDefaultTexture(thickness.textures[0].texture)
                                  
                              }
                          }
                          
                      }
                  }
                }
              };
              getData();
        }else if(Product==='Paver'){
            const getData = async () => {
                if(Product){
                    const result = await FetchProductPaver(Product);
                    
                    
                    
                    setDataPaver(result);
                }
              
              
            };
        
            getData();
        }
       
    
        
    }, [Product]);
    // useEffect(() => {
    //     const getData = async () => {
    //       const result = await FetchProductThin(Product);
    //       setDataThin(result);
    //       if(result){
    //         for(const items of result){
    //             if(items.fullName===Color){
                    
    //                 for(const thickness of items.thick){
    //                     if(thickness.size==='1/2\" Thick'){
    //                         setDefaultTexture(thickness.textures[0].texture)
                            
    //                     }
    //                 }
                    
    //             }
    //         }
    //       }
    //     };
    
    //     getData();
    // }, [Product]);
    
    // useEffect(() => {
    //     const getData = async () => {
    //         if(Product){
    //             const result = await FetchProductPaver(Product);
                
                
                
    //             setDataPaver(result);
    //         }
          
          
    //     };
    
    //     getData();
    // }, [Product]);
   
    return(
        <div className="col-12 col-md-9  " >
            <div className="card  border-0 ">
                {
                    Product==='FaceBrick'?

                    Data?.map((item) => (
                        item.fullName === Color ? (
                            <div key={item.id}>
                                {Texture ? ( // Check if Texture has a value

                                
                                    item.textures.map((texture,index) => (
                                        texture.texture === Texture ? (
                                        
                                            <div key={index}>
                                                <Image className="card-img-top img-fluid" loader={() => (texture.image)} width={500} height={500} alt={item.altTag} src={texture.image}  />
                                                <div className="card-body">
                                                    <div className="card-title text-center">
                                                        
                                                    <h2 className="text-uppercase univers-45-light fs-5 mt-2">{texture.texture.replace(/~/g,' ')}</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : null
                                    ))
                                ) : (
                                        <div>
                                            
                                            <Image  className="card-img-top img-fluid" loader={() => (item.textures[0].image)} width={500} height={500} alt={item.altTag} src={item.textures[0].image}  />
                                            <div className="card-body">
                                                <div className="card-title text-center">
                                                    <h2 className="text-uppercase univers-45-light fs-5 mt-2">{item.textures[0].texture.replace(/~/g,' ')}</h2>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                        
                            </div>
                        ) : null
                    )):(Product==='ThinBrick'?
                    
                    DataThin?.map((item)=>(
                        item.fullName===Color?
                        <div  key={item.id}>
                            {
                                
                                Texture?
                                item.thick.map((thickness)=>(
                                    
                                   thickness.size===Thickness?
                                        thickness.textures.map((texture,id)=>(
                                            
                                            
                                            texture.texture===Texture?(
                                                <div key={id}>
                                                   
                                                    <Image className="card-img-top img-fluid" loader={() => (texture.image)} width={500} height={500} alt={item.altTag} src={texture.image}  />
                                                    <div className="card-body">
                                                    <div className="card-title text-center">
                                                    <h2 className="text-uppercase univers-45-light fs-5 mt-2">{texture.texture.replace(/~/g,' ')}</h2>
                                                    </div>
                                                    </div>
                                                </div>
                                            ):null
                                        ))
                                   :null 
                                ))
                                :

                            

                                item.thick.map((thickness)=>(
                                    
                                    thickness.size===Thickness?
                                         thickness.textures.map((texture,id)=>(

                                             texture.texture===DefaultTexture?(
                                                
                                                 <div key={id}>

                                                     <Image className="card-img-top img-fluid" loader={() => (texture.image)} width={500} height={500} alt={item.altTag} src={texture.image}  />
                                                    
                                                     <div className="card-body">
                                                     <div className="card-title text-center">
                                                    <h2 className="text-uppercase univers-45-light fs-5 mt-2">{texture.texture.replace(/~/g,' ')}</h2>
                                                    </div>
                                                     </div>
                                                 </div>
                                             ):null
                                         ))
                                    :null
                                 ))



                            }
                        </div>
                        :null
                    )):
                    Product==='Paver'?
                    DataPaver?.map((item)=>(
                        item.fullName===Color &&
                            item.textures.map((textures,index)=>(
                                <Image key={index} src={textures.image} width={1500} height={1500} alt={textures.alt}/>
                            ))
                        
                    ))
                    :""
                    )
                }
            </div>
        </div>
    )
}