import React,{useEffect, useState} from "react";
import { FetchProductThin } from "../../../Utilities/FetchProductThin";
import { DataItemThin } from "../../../Types/ProductTypesThinbrick";
import { SplitPathname } from "../../../Utilities/SplitPathname";
import Link from "next/link";
import { useRouter } from "next/navigation";
// interface TBCSelectionProps {
  
//   setSelectedSize: (newSize: string) => void; // Define the type of the callback prop
// }
interface ChildComponentProps {
  passThickness: (newThickness: string) => void;
  setSelectedSize:(newSize: string)=>void;
}
export default function TBCSelections ({passThickness,setSelectedSize}: ChildComponentProps){
  const {Product,Color,Texture,Page}=SplitPathname();//SplitPathname is a function that I created to always split the url and get the values from it
  
  const [Data,setData]=useState<DataItemThin[] | null>(null);
  const [DefaultTexture,setDefaultTexture]=useState<string | null>(null)
  //const Thickness = "5/8\" Thick";
  const [Thickness,setThickness]=useState<string | null>(null)
  //const [DefaultThickness,setDefaultThickness]=useState<string | null>("1/2\" Thick");
  const [Size,setSize]=useState<string | null>(null)
  const router= useRouter();
  
  

  useEffect(() => {
    const getData = async () => {
      const result = await FetchProductThin(Product);
      setData(result);
      if(result){
        result.map((items)=>{   
            
         
            if(items.fullName===Color){
              if(!Thickness){//this portion will only run if thickness is not set
            items.thick.map((thickness) => {
              
              
              if(!Texture){//This is when there is no Texture set in the url. it sets it to the first possible texture
               
                setThickness(items.thick[0].size);
                
                const thisThickness: string = items.thick[0].size;//sets a constant for thickness
                if(thisThickness===thickness.size){
                  setDefaultTexture(thickness.textures[0].texture)
                  const thisTexture = thickness.textures[0].texture;
                  thickness.textures.map((texture)=>{
                    if(texture.texture===thisTexture){
                    
                      setSize(texture.sizes[0])
                      setSelectedSize(texture.sizes[0]);
                    }
                    
                  })
                }
                
                
              }else{
                
                
                thickness.textures.map((textures)=>{
                  if(textures.texture===Texture){
                    // console.log(thickness.size);
                    setThickness(thickness.size);
                    passThickness(thickness.size);
                    setSize(textures.sizes[0])
                    setSelectedSize(textures.sizes[0]);
                    
                      
                    
                  }
                  
                })
              }
          
             
          
              return null; // Add a return statement here
            })
     
          }
        }
        })


      }
    };

    getData();
    
  }, [Product]);



  const ThicknessClick = ((myPath:string,newThickness:string)=>{
    
    //setThickness(newThickness);
    passThickness(newThickness);
    
    Data?.map((items)=>{
      
      if(items.fullName===Color){
      items.thick.map((thickness)=>{
        
        if(thickness.size===newThickness){          
          setDefaultTexture(thickness.textures[0].texture);
          const selectedTexture = thickness.textures[0].texture;
          setThickness(newThickness);

         
            thickness.textures.map((texture)=>{
              
              if(texture.texture==selectedTexture){
                
                setSize(texture.sizes[0]);
                setSelectedSize(texture.sizes[0]);
                // texture.sizes.map((size)=>{
                //   console.log(`Thickness is ${newThickness} Texture is ${selectedTexture} and the sizes are ${size}`);
                // })
              }
            })
         

          
          router.replace(`${myPath}-${selectedTexture}`);
          
        }
      })
    }
    
    })

    
  })

  const TextureClick=((myPath:string,newTexture:string)=>{
    
    router.replace(`${myPath}-${newTexture}`);
    
    setDefaultTexture(newTexture);
  })
const SizeClick=((newSize:string)=>{
  
  setSelectedSize(newSize);
  setSize(newSize);
})

    return(
        <div className="row univers-55-Roman text-rock d-flex justify-content-end  w-100   m-auto    ">
              <div className="col-2 col-md-2 col-xl-2 border-end  text-center   ">
                <div className="row border-bottom ">
                  <div className="col ">
                    <h2 className="fs-5">Thickness</h2>
                  </div>
                </div>
                <div className="row ">
                  <div className="col text-nowrap ">
                    {
                      Data?.map((item)=>(
                        item.fullName===Color && item.thick.map((thick,index)=>(
                          <Link key={index} className="text-decoration-none" href='/ThinBrick/Colors' onClick={(e) => {e.preventDefault(); ThicknessClick(`/${Product}/${Page}/${Color}`,`${thick.size}`);}}>
                            <span className={`d-block text-uppercase text-black fs-6  pt-2 pb-2 bg ${Thickness === thick.size?"bg bg-black text-white rounded-2" :''}`}>{thick.size}</span>
                          </Link>
                        ))
                        
                      ))
                    }
                    {/* <span className="d-block text-uppercase  mt-2  pt-2 pb-2 text-rock ">ALL</span> */}
                    {/* <Link  className="text-decoration-none" href='/ThinBrick/Colors' onClick={(e) => {e.preventDefault(); ThicknessClick(`/${Product}/${Page}/${Color}`,`1/2\" Thick`);}}>
                        <span className={`d-block text-uppercase text-black fs-6  pt-2 pb-2 bg ${Thickness === "1/2\" Thick"?"bg bg-black text-white rounded-2" :''}`}>1/2" Thick</span>
                    </Link>
                    <Link  className="text-decoration-none" href='/ThinBrick/Colors' onClick={(e) => {e.preventDefault(); ThicknessClick(`/${Product}/${Page}/${Color}`,`5/8\" Thick`);}}>
                    <span className={`d-block text-uppercase text-black fs-6  pt-2 pb-2 bg ${Thickness === "5/8\" Thick"?"bg bg-black text-white rounded-2" :''}`}>5/8" Thick</span>
                    </Link>
                    <Link  className="text-decoration-none" href='/ThinBrick/Colors' onClick={(e) => {e.preventDefault(); ThicknessClick(`/${Product}/${Page}/${Color}`,`1\" Thick`);}}>
                    <span className={`d-block text-uppercase text-black fs-6  pt-2 pb-2 bg ${Thickness === "1\" Thick"?"bg bg-black text-white rounded-2" :''}`}>1" Thick</span>
                    </Link> */}
                    
                  </div>
                </div>
                
              </div>
              <div className="col-2  text-center border-end">
                <div className="row">
                  <div className="col border-bottom ">
                    <h2 className="fs-5 ">Texture</h2>
                  </div>
                </div>
                <div className="row  ">
                  <div className="col p-0">
                    {
                      Data?.map((item)=>(
                        item.fullName===Color?
                          item.thick.map((thickness)=>(
                            thickness.size===Thickness?
                            
                              thickness.textures.map((texture,id)=>(
                                <Link key={id} className="text-decoration-none" href='/ThinBrick/Colors' onClick={(e) => {e.preventDefault(); TextureClick(`/${Product}/${Page}/${Color}`,texture.texture);}}>
                                <span className={`d-block text-uppercase p-0 fs-6  pt-2 pb-2 text-rock ${texture.texture===DefaultTexture || texture.texture===Texture?"bg bg-black rounded-2 text-white":""}`} >{texture.texture.replace(/~/g, ' ')}</span>
                                </Link>
                                
                              ))
                            :null
                          ))
                        :null
                        
                      ))
                    }
                     </div>
                </div>
                
              </div>
              <div className="col-7 text-center ">
                <div className="row">
                  <div className="col border-bottom">
                    <h2 className="fs-5">Size</h2>
                  </div>

                </div>
                <div className="row ">
                  <div className="col ">
                    <table className="w-100 ">
              <tbody className="  "> 
                {
                  Data?.map((item)=>(
                    item.fullName===Color?
                      item.thick.map((thickness)=>(
                        thickness.size===Thickness?
                          thickness.textures.map((texture)=>{
                            
                            if (!Texture) {
                             
                              if (texture.texture === DefaultTexture) {
                                const columnNumb = Math.ceil(texture.sizes.length/3);
                                
                                const row = []
                                for (let x = 0; x < columnNumb; x++) { // Assuming you want to loop through sizes
                                  const column = []
                                  for(let j = 0;j<3;j++){
                                    const dataIndex = x*3+j;
                                    if(dataIndex<texture.sizes.length){
                                      
                                      column.push(
                                      <td className={`col-2 pt-2 fs-6  text-uppercase  text-nowrap  pb-2 text-rock ${texture.sizes[dataIndex]===Size?"bg bg-black rounded-2 text-white":null}`} key={dataIndex}>
                                        <Link className={`text-decoration-none text-rock ${texture.sizes[dataIndex]===Size?"bg bg-black rounded-2 text-white":null}`} href='/ThinBrick/Colors' onClick={(e) => {e.preventDefault(); SizeClick(texture.sizes[dataIndex]);}}>
                                        {texture.sizes[dataIndex].replace(/_/g,' ')}
                                        </Link>
                                        </td>
                                      );
                                      
                                    }else {
                                      column.push(<td className="col-2  text-uppercase   pt-2  text-rock " key={dataIndex}></td>); // Add empty cells if needed
                                    }
                                    
                                  }
                                  row.push(<tr className=" " key={x}>{column}</tr>);
                                 
                                }
                                return(
                                  <span key={texture.texture} className=" ">{row}</span>
                                )
                              }
                              
                            }else{
                             if(texture.texture === Texture){
                                 const columnNumb = Math.ceil(texture.sizes.length/3);
                                
                                 const row = []
                                for (let x = 0; x < columnNumb; x++) { // Assuming you want to loop through sizes
                                  const column = []
                                  for(let j = 0;j<3;j++){
                                    const dataIndex = x*3+j;
                                    if(dataIndex<texture.sizes.length){
                                      
                                      column.push(
                                        
                                        <td className={`col-2 pt-2 fs-6  text-uppercase  text-nowrap  pb-2  ${texture.sizes[dataIndex]===Size?"bg bg-black rounded-2 text-white":null}`} key={dataIndex}>
                                          <Link className={`text-decoration-none text-rock ${texture.sizes[dataIndex]===Size?"bg bg-black rounded-2 text-white":null}`} href='/ThinBrick/Colors' onClick={(e) => {e.preventDefault(); SizeClick(texture.sizes[dataIndex]);}}>
                                            {texture.sizes[dataIndex].replace(/_/g,' ')}
                                          </Link></td>
                                        
                                        );
                                      
                                    }else {
                                      column.push(<td className="col-2  text-uppercase   pt-2  text-rock " key={dataIndex}></td>); // Add empty cells if needed
                                    }
                                    
                                   }
                                   row.push(<tr className=" " key={x}>{column}</tr>);
                                 
                                 }
                                return(
                                  <span key={texture.texture} className=" ">{row}</span>
                                )




                               }
                              

                              
                            }

                            
                            
                          
                          
                            })
                        :null///////here
                        
                      ))
                    :null



                  ))
                }
              </tbody>
            </table>
              
                  </div>

                </div>

              </div>
              </div>
            
    )
}