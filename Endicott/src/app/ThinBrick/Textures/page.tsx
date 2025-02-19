'use client'
import React from "react";
import { useEffect,useState } from "react";
import { FetchTexture } from "../../../../Utilities/FetchTextures"
import { TextureData } from "../../../../Types/TextureTypes"
import { SplitPathname } from "../../../../Utilities/SplitPathname";
import Navigate from "@/app/component/navigate";
import Footer from "@/app/component/footer";
import TextureHead from "@/app/component/TextureHead";
import Image from "next/image";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Link from "next/link";
import { StaticImport } from "next/dist/shared/lib/get-img-props";



export default function Textures(){
    const {Product}=SplitPathname();
    const [Data,setData]=useState<TextureData[] | null>(null);
    const [Texture,setTexture]=useState<string | StaticImport| null>(null);
    const [LinkTexture,setLinkTexture]=useState<string | null>(null);
    const [showModal, setShowModal] = useState(false);
    const [ColorArray,setColorArray]=useState<string[] | null>(null);
    const [NumberofColumns,setNumberofColumn]=useState<number>(2);
    const NumberofRows = Math.ceil(ColorArray?ColorArray.length/NumberofColumns:0)
    const tableRows: JSX.Element[] = [];
   
    useEffect(()=>{
        const WidthWindow = window.innerWidth;
        if(WidthWindow<=1200){
            setNumberofColumn(2);
        }else{
            setNumberofColumn(4);
        }
    })
        for (let i = 0; i < NumberofRows; i++) {
            const row = [];
            for (let j = 0; j < NumberofColumns; j++) {
                const colorIndex = i * NumberofColumns + j;
                if(ColorArray){
                    if (colorIndex < ColorArray.length) {
                        row.push(
                            
                        <td className="pt-3 ps-3 TextureColor univers-55-Roman" key={colorIndex}  ><Link className="text-decoration-none text-black ms-3 " key={colorIndex} href={`/${Product}/Colors/${ColorArray[colorIndex].replace(/#/g,'')}-${LinkTexture}`}>{ColorArray[colorIndex].replaceAll(/_/g,' ')}</Link></td>
                        
                        );
                    } else {
                        row.push(<td  key={colorIndex}></td>); // Add empty cells if needed
                    }
                }
                    
            }
  tableRows.push(<tr   key={i}>{row}</tr>);
}
    
  const handleClose = () => setShowModal(false);
  const handleShow = (texture:string) => {
    setTexture(texture);
    setLinkTexture(texture.replace(/ /g,'~'));
    setShowModal(true);   
  }
    
        useEffect(() => {
            const getData = async () => {
                if (Product) { // Only fetch data if Product is not null
                  const result = await FetchTexture(Product);
                  setData(result);
                  if(result && result.length>0){
                    for(const item of result){
                        if(item.texture===Texture){
                            setColorArray(item.AvailableColors);
                        }
                        
                    }
                  }
                  
                  
                }
              };
            
              getData();
            
          }, [Product,Texture]);
          
      

    return(
        <div className="container-fluid">
            <Navigate pageSettings="light"/>
            <div className="row">
               <div className="col">
                <TextureHead/>
               </div>
            </div>
            <div className="row">
                {
                    Data?.map((item,index)=>(
                        <div key={index} className="col-12 col-lg-3 d-flex" >
                            <div className="card shadow mt-3 mb-2 flex-fill" role="button" onClick={()=>{handleShow(item.texture)}} >
                                <Image className="card-img-top " src={item.image} alt={item.altTag} width={500} height={500}/>
                                <div className="card-body">
                                    <h2 className="card-title univers-55-Oblique">{item.texture}</h2>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                            
                           </div> 
                        
                    ))
                }

            </div>
            

      <Modal show={showModal} onHide={handleClose} size="lg">
        <Modal.Header className="" closeButton>
            {
                Data?.map((item,index)=>(
                    item.texture===Texture?
<Modal.Title key={index} className="text-uppercase text-center fs-2 univers-55-Oblique ">{item.texture} Texture</Modal.Title>:''
                ))
            }
          
        </Modal.Header>   

        <Modal.Body>
            {
                Data?.map((item, index)=>(
                    item.texture===Texture?(
                        <div className="univers-45-light" key={index}>

                            <Image src={item.image} alt={item.altTag} width={1000} height={1000}/>
                            <p className="d-inline " >Conforms to ASTM C1088 Type: </p>
                            {
                                item.astm1088.map((value, index, arr)=>(
                                    <p className="d-inline" key={index}>{value}{index < arr.length -1?',':''} </p>
                                ))
                            }
                           
                            {
                                item.astm652 && item.astm652.length>0?
                                <div className="d-inline">
                                    <p className="d-inline"> and </p>
                                    {item.astm652.map((value,index,arr)=>(
                                    <p className="d-inline" key={index}>{value}{index < arr.length -1?',':''} </p> 
                                ))}
                                </div>
                                :''
                            }
                            <div className="border">                            
                                <table className="w-100">
                                    <thead> 
                                        <tr>
                                            <th colSpan={4} className="univers-45-light fs-4 bg-rock p-2 text-white ">
                                                Colors Available in this Texture:
                                            </th>
                                        </tr>
                                    </thead>
                                   
                                        {
                                           item.AvailableColors && item.AvailableColors.length>0?
                                           
                                            <tbody>
                                                
                                            {tableRows}
                                            </tbody> 
                                           :''
                                        }

                                    
                                </table>
                            
                            </div>
                         </div>
                         
                    ):null
                ))
            }
            
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
            <Footer pageSetUp="light"/>

        </div>
    )
}