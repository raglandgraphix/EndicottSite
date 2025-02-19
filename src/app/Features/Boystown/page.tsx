'use client'
import React from "react";
//import { useState } from "react";
import { Carousel } from "react-bootstrap";
import Image from "next/image";
import Navigate from "@/app/component/navigate";
import Footer from "@/app/component/footer";
import ProductBox from "@/app/component/ProductBox";
import Link from "next/link";


export default function Boystown(){
   // const ColorDescription = 'Endicott Medium Ironspot #46 brick captivates with its rich, burgundy hue, accented by subtle ironspots that add depth and character. This striking color creates a sense of timeless elegance, perfect for making a bold statement in both traditional and contemporary designs.';
    //const [ModalImage,setModalImage]=useState<string>('Sorry Image failed to load');
    // const [ModalDescription,setModualDescription]=useState<string | null>(null);
//     const [Header,setHeader]=useState<string | null>(null);
//     const [ModalAlt,setModalAlt]=useState<string>('Alt Text');
//     const [showModal, setShowModal] = useState(false);
//     const handleClose = () => setShowModal(false);
//     const handleShow = (image:string,header:string,alt:string) => { 
//     setModalImage(image);
//     setHeader(header);
//     setModalAlt(alt);
    
    

//     setShowModal(true);   
//   }

    return(
        
        <div className="container-fluid">
            <Navigate pageSettings="light"/>
            <ProductBox setDescription="Boys Town" productHeadLine='Boys Town : Winner of the PCI Design Award' ProductDescription='Boys Town Education Center: Designed by Designed by DLR Group. Endicott Ivory Blend, Desert Ironspot Light, Desert Sands.' />
            <div className="row ">
            <div id="videoHold" className="col-12">
                <video className="w-100" id="mainVideo" muted loop autoPlay playsInline  >
                    <source src="https://endicottfiles.com/Boys_Town_Landing.mp4" type="video/mp4" ></source>
                    
                    
                </video>
                
               </div>
        </div>
            <div className="row mt-5 ms-2 me-2">
            <div className="col-6 ">
            <Carousel className=" p-2 border border-black border-1 bg bg-gray-200 shadow "  variant="light" fade interval={null}   >
                <Carousel.Item className="p-2  " style={{'height':'600px'}}  >
                    <Image className=" h-100 " src='https://endicottfiles.com/BoysTown1.jpg' width={1000} height={1000}   alt="Image of the Boys Town Education Center"/>
                </Carousel.Item>
                <Carousel.Item className=" p-2 d-flex justify-content-center  " style={{'height':'600px'}} >               
                    <Image className="CarouselImage" src='https://endicottfiles.com/BoysTown2.jpg'  width={1000} height={1000}  alt="Image of the Boys Town Education Center"/>                
                </Carousel.Item>
                <Carousel.Item className=" p-2 d-flex justify-content-center  " style={{'height':'600px'}} >               
                    <Image className="CarouselImage" src='https://endicottfiles.com/BoysTown3.jpg'  width={1000} height={1000}  alt="Image of the Boys Town Education Center"/>                
                </Carousel.Item>
                <Carousel.Item className=" p-2 d-flex justify-content-center  " style={{'height':'600px'}} >               
                    <Image className="CarouselImage" src='https://endicottfiles.com/BoysTown4.jpg'  width={1000} height={1000}  alt="Image of the Boys Town Education Center"/>                
                </Carousel.Item>
                <Carousel.Item className=" p-2 d-flex justify-content-center  " style={{'height':'600px'}} >               
                    <Image className="CarouselImage" src='https://endicottfiles.com/BoysTown5.jpg'  width={1000} height={1000}  alt="Image of the Boys Town Education Center"/>                
                </Carousel.Item>
            </Carousel>
            </div>
            <div className="col-6">
                <h2>Boys Town Educational Center</h2>
                <h3 className="museo-light">Winner of the PCI Design Award for "Best K-12 School Building", and BIA Brick in Architecture Silver. Built with Endicott Thin Brick</h3>
                <h5 className="d-inline">Architect:</h5><span className=""> DLR Group</span><br></br>
                {/* fixe me someday */}
                <h5 className="d-inline">Precaster: </h5><span className="">Enterprise Precast Concrete</span>
                <p className="mt-4">
                After years of collaboration, one of the largest non-profit childcare organizations in the country, Boys Town has opened its Education Center as a beacon of hope for students who have faced adversity. Founded in 1917 by Fr. Edward J. Flanagan as a refuge for homeless boys, Boys Town has grown to be much more. Boys Town now offers services to children and families regardless of gender. In addition to supportive residential care for children, it offers mental health resources, educational services, and vocational training. For the Boys Town Education Center, the architect used twelve staggered playful brick patterns to break up large wall spans. Brick was chosen because of its unique blend of materials that gives them a distinctive texture, pattern, and color yet provides the opportunity for modern design. The brick and design of this three-story, 110,000 square foot facility is meant to convey to students that they are valued and loved. In addition to their symbolic meaning, the practical side of the design provides a sanctuary for students with embedded thin brick precast walls that offer superior insulation and soundproofing. The architect chose precast panels with thin brick due to time constraints, as it was taking the place of an older building that had to be torn down. The new Education Center is a testament to Boys Town's commitment to providing its students with the best possible educational experience. The brick walls are a symbol of that commitment, and they will stand for decades to come, leaving behind a strong legacy of hope and strength.
                </p>

            </div>
            

            </div>
            
            
            <div className="row me-2 ms-2 ">
                <div className="col-12">
                    <h2 className="mb-3 ms-2">Colors & Sizes</h2>
                    <div className="row">
                    <div className="col-4 d-flex justify-content-center mt-5">
                        <Link className="text-decoration-none " role="button" href='/ThinBrick/Colors/Ivory_Blend'>                        
                            <div className="card h-100 ">
                                <Image src="https://endicottfiles.com/Ivory-Blend-Smooth-Thinbrick-Large.jpg" alt="Image of Ivory Blend in Smooth Texture" width={500} height={500}/>
                                <div className="card-caption">
                                    <h3 className="text-center ">Ivory Blend</h3>
                                    <h5 className="museo-light text-center">Click to Get More Information About Ivory Blend</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-4 d-flex justify-content-center mt-5">
                        <Link className="text-decoration-none " role="button" href='/ThinBrick/Colors/Desert_Ironspot_Light-Velour'>                        
                            <div className="card h-100 ">
                                <Image src="https://endicottfiles.com/Desert-Ironspot-Light-Velour-Thinbrick-Large.jpg" alt="Image of Ivory Blend in Smooth Texture" width={500} height={500}/>
                                <div className="card-caption">
                                    <h3 className="text-center ">Desert Ironspot Light</h3>
                                    <h5 className="museo-light text-center">Click to Get More Information About Desert Ironspot Light</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-4 d-flex justify-content-center mt-5">
                        <Link className="text-decoration-none " role="button" href='https://endicottfiles.com/NormanThinBrick.pdf' target="_blank">                        
                            <div className="card h-100 ">
                                <Image src="https://endicottfiles.com/NormanThinBrick.jpg" alt="Image drawing of Endicott Norman Thin Brick" width={500} height={500}/>
                                <div className="card-caption">
                                    <h3 className="text-center ">Norman Thin Brick</h3>
                                    <h5 className="museo-light text-center">Click to Download A Drawing Of Norman Thin Brick</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-4 d-flex justify-content-center mt-5">
                        <Link className="text-decoration-none " role="button" href='https://endicottfiles.com/closureThinBrick.pdf' target="_blank">                        
                            <div className="card h-100 ">
                                <Image src="https://endicottfiles.com/closureThinBrick.png" alt="Image drawing of Endicott Closure Thin Brick" width={500} height={500}/>
                                <div className="card-caption">
                                    <h3 className="text-center ">Closure Thin Brick</h3>
                                    <h5 className="museo-light text-center">Click to Download A Drawing Of Closure Thin Brick</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-4 d-flex justify-content-center mt-5">
                        <Link className="text-decoration-none " role="button" href='https://endicottfiles.com/modularThinBrick.pdf' target="_blank">                        
                            <div className="card h-100 ">
                                <Image src="https://endicottfiles.com/modularThinBrick.png" alt="Image drawing of Endicott Norman Thin Brick" width={500} height={500}/>
                                <div className="card-caption">
                                    <h3 className="text-center ">Modular Thin Brick</h3>
                                    <h5 className="museo-light text-center">Click to Download A Drawing Of Modular Thin Brick</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-4 d-flex justify-content-center mt-5">
                        <Link className="text-decoration-none " role="button" href='https://endicottfiles.com/utilityThinBrick.pdf' target="_blank">                        
                            <div className="card h-100 ">
                                <Image src="https://endicottfiles.com/utilityThinBrick.png" alt="Image drawing of Endicott Norman Thin Brick" width={500} height={500}/>
                                <div className="card-caption">
                                    <h3 className="text-center ">Utility Thin Brick</h3>
                                    <h5 className="museo-light text-center">Click to Download A Drawing Of Utility Thin Brick</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-4 d-flex justify-content-center mt-5">
                        <Link className="text-decoration-none " role="button" href='https://endicottfiles.com/tripleThinBrick.pdf' target="_blank">                        
                            <div className="card h-100 ">
                                <Image src="https://endicottfiles.com/tripleThinBrick.png" alt="Image drawing of Endicott Norman Thin Brick" width={500} height={500}/>
                                <div className="card-caption">
                                    <h3 className="text-center ">Triple Thin Brick</h3>
                                    <h5 className="museo-light text-center">Click to Download A Drawing Of Triple Thin Brick</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                         
                    </div>
                    
                </div>
            </div>
           
            <Footer pageSetUp="light"/>
        </div>
    )


}