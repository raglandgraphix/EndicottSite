'use client'
import React from "react";
import { useState } from "react";
import { Carousel } from "react-bootstrap";
import Image from "next/image";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Navigate from "@/app/component/navigate";
import Footer from "@/app/component/footer";
import ProductBox from "@/app/component/ProductBox";


export default function AceHotel(){
   
    const [ModalImage,setModalImage]=useState<string>('Sorry Image failed to load');
    // const [ModalDescription,setModualDescription]=useState<string | null>(null);
    const [Header,setHeader]=useState<string | null>(null);
    const [ModalAlt,setModalAlt]=useState<string>('Alt Text');
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
    const handleShow = (image:string,header:string,alt:string) => { 
    setModalImage(image);
    setHeader(header);
    setModalAlt(alt);
    
    

    setShowModal(true);   
  }

    return(
        
        <div className="container-fluid">
            <Navigate pageSettings="light"/>
            <ProductBox setDescription="Ace Hotel - Toronto" productHeadLine="Ace Hotel - Toronto: Best in Class" ProductDescription='The Ace Hotel- Toronto: Designed by Shim-Sutcliffe Architects. Endicott Medium Ironspot #46 Smooth. Photography by Scott Norsworthy' />
            <div className="row mt-5 ms-2 me-2">
            <div className="col-6 ">
            <Carousel className=" p-2 border border-black border-1 bg bg-gray-200 shadow "  variant="light" fade interval={null}   >
                <Carousel.Item className="p-2  " style={{'height':'600px'}}  >
                    <Image className=" h-100 " src='https://endicottfiles.com/Ace1.jpg' width={1000} height={1000}   alt="Image of the Ace Hotel in Toronto"/>
                </Carousel.Item>
                <Carousel.Item className=" p-2 d-flex justify-content-center  " style={{'height':'600px'}} >               
                    <Image className="CarouselImage" src='https://endicottfiles.com/Ace2.jpg'  width={1000} height={1000}  alt="Image of the Ace Hotel in Toronto"/>                
                </Carousel.Item>
                <Carousel.Item className=" p-2 d-flex justify-content-center  " style={{'height':'600px'}} >               
                    <Image className="CarouselImage" src='https://endicottfiles.com/Ace3.jpg'  width={1000} height={1000}  alt="Image of the Ace Hotel in Toronto"/>                
                </Carousel.Item>
                <Carousel.Item className=" p-2 d-flex justify-content-center  " style={{'height':'600px'}} >               
                    <Image className="CarouselImage" src='https://endicottfiles.com/Ace4.jpg'  width={1000} height={1000}  alt="Image of the Ace Hotel in Toronto"/>                
                </Carousel.Item>
                <Carousel.Item className=" p-2 d-flex justify-content-center  " style={{'height':'600px'}} >               
                    <Image className="CarouselImage" src='https://endicottfiles.com/Ace5.jpg'  width={1000} height={1000}  alt="Image of the Ace Hotel in Toronto"/>                
                </Carousel.Item>
                <Carousel.Item className=" p-2 d-flex justify-content-center  " style={{'height':'600px'}} >               
                    <Image className="CarouselImage" src='https://endicottfiles.com/Ace6.jpg'  width={1000} height={1000}  alt="Image of the Ace Hotel in Toronto"/>                
                </Carousel.Item>
                <Carousel.Item className=" p-2 d-flex justify-content-center  " style={{'height':'600px'}} >               
                    <Image className="CarouselImage" src='https://endicottfiles.com/Ace7.jpg'  width={1000} height={1000}  alt="Image of the Ace Hotel in Toronto"/>                
                </Carousel.Item>
            </Carousel>
            </div>
            <div className="col-6">
                <h2>ACE HOTEL - Toronto</h2>
                <h3 className="museo-light">Best in Class and Craftsmanship Award Winner, Built with Endicott Brick</h3>
                <p>
                The Ace Hotel Toronto, a stunning testament to modern design and innovative brickwork by Brigitte Shim and Howard Sutcliffe of Shim-Sutcliffe Architects, has been honored with not one, but two Brick in Architecture awards from the Brick Industry Association (BIA): Best in Class - Commercial and the coveted Craftsmanship Award. The hotel's facade, a captivating blend of Endicott's Medium Ironspot #46 in both smooth and velour textures, showcases the versatility and beauty of brick in a contemporary setting. Shim and Sutcliffe drew inspiration from Toronto's rich architectural heritage, using brick to create a visual connection to the city's past while embracing a modern aesthetic. The rhythmic pattern of the brickwork, combined with the subtle variations in color and texture, creates a dynamic and inviting facade that seamlessly integrates with the surrounding urban landscape. These prestigious awards recognize the Ace Hotel Toronto's exceptional use of Endicott brick in achieving a sustainable, aesthetically pleasing, and functional design, with a particular emphasis on the outstanding craftsmanship of the brickwork. The project exemplifies the enduring appeal of brick, showcasing its ability to create spaces that are both timeless and contemporary. The Ace Hotel Toronto stands as a testament to the collaborative vision of Brigitte Shim and Howard Sutcliffe and the quality of Endicott brick, a true embodiment of architectural excellence and innovation.
                </p>

            </div>
            

            </div>
            
            <div className="row me-2 ms-2 mt-5">
                <div className="col-12">
                    <h2 className="mb-3 ms-2">Colors & Sizes</h2>
                    <div className="row">
                    <div className="col-4 d-flex justify-content-center">

                        <div className="card "role="button" onClick={()=>{handleShow("https://endicottfiles.com/Medium-Ironspot-46-Smooth-Facebook-Large.jpg","Medium Ironspot #46","Image of Medium Ironspot #46 Smooth")}}>
                        <Image src="https://endicottfiles.com/Medium-Ironspot-46-Smooth-Facebook-Large.jpg" alt="Image of Medium Ironspot #46 in Smooth Texture" width={500} height={500}/>
                            <div className="card-caption">
                                <h3 className="text-center">Medium Ironspot #46</h3>
                            </div>
                        </div>

                    </div>
                        <div className="col-4">
                        <div className="card " role="button" onClick={()=>{handleShow("https://endicottfiles.com/ModularThinBrick.jpg","Modular Thin Brick","Image drawing of Modular Thin Brick")}}>
                        <Image src="https://endicottfiles.com/ModularThinBrick.jpg" width={600} height={600} alt="Drawing image of a Modular Thin Brick"/>
                        <div className="card-caption">
                            <h3 className="text-center">Modular Thin Brick</h3>
                        </div>

                    </div>
                        </div>
                        <div className="col-4">
                        <div className="card " onClick={()=>{handleShow("https://endicottfiles.com/normanThinBrick.png","Norman Thin Brick","Image drawing of Norman Thin Brick")}}>
                        <Image src="https://endicottfiles.com/NormanThinBrick.jpg" width={600} height={600} alt="Drawing image of a Norman Thin Brick"/>
                        <div className="card-caption">
                            <h3 className="text-center">Norman Thin Brick</h3>
                        </div>

                    </div>
                        </div>
                         
                    </div>
                    
                </div>
            </div>
            <Modal show={showModal} onHide={handleClose} size="lg">
        <Modal.Header className="" closeButton>
           
<Modal.Title  className="text-uppercase text-center fs-2 univers-55-Oblique ">{Header}</Modal.Title>
               
          
        </Modal.Header>   

        <Modal.Body className="d-flex justify-content-center">
            <Image src={ModalImage} height={500} width={500} alt={ModalAlt}/>
            
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