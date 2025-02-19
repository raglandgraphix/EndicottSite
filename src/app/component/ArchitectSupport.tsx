import React from "react";
//import Image from "next/image";
//import { usePathname } from "next/navigation";
// import Link from "next/link";
//import { FetchProduct } from "../../../Utilities/FetchProduct";
//import { FetchProductThin } from "../../../Utilities/FetchProductThin";
//import { DataItem } from "../../../Types/ProductTypes";
//import { DataItemThin } from "../../../Types/ProductTypesThinbrick";
//import { TextureData } from "../../../Types/TextureTypes";
//import { FetchTexture } from "../../../Utilities/FetchTextures";
import ASFaceBrick from "./ASFaceBrick";
import ASThinBrick from "./ASThinBrick";
import ASFacePaver from "./ASPaver";
import { SplitPathname } from "../../../Utilities/SplitPathname";
interface ColorDisplayProps {
    DisplayThickness: string | null; // Add the selectedThickness prop
  }
export default function ArchitectSupport({DisplayThickness}:ColorDisplayProps){
    //const Thickness = '1/2\" Thick'
    const {Product}=SplitPathname();
    
    //const [Data,setData]=useState<DataItem[] | null>(null);
    //const [DataThin,setDataThin]=useState<DataItemThin[]|null>(null);
    //const [TextureData,setTextureData]=useState<TextureData[] | null>(null);
    //const [Product,setProduct]=useState<string | null>(null);
    //const [Color,setColor]=useState<string | null>(null);
    //const [Texture,setTexture]=useState<string | null>(null);
    //const [DefaultTexture,setDefaultTexture]=useState<string | null>(null);
    
    
    
    
    
    


    
      
      
    //Still need to upload all images to the local server instead of the cloudflare to be downloaded due to protections.
    return(
        <div className="col-12 col-md-3 bg-stone-50 pt-3 " >
            {
                Product==='FaceBrick'?<ASFaceBrick/>:
                (Product==='ThinBrick'? <ASThinBrick ASthickness={DisplayThickness} />:
                (Product==='Paver'&&<ASFacePaver/>))
            }
          
             
        </div>
)
}