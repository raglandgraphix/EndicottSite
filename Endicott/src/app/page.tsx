//Home Page
'use client';
import Navigate from "./component/navigate";
import { useEffect, useState, useRef } from "react";
import Footer from "./component/footer";
import { Carousel } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
//import Head from "next/head";
//import { Metadata } from "next";
export default function Home() {
  const divRef = useRef<HTMLDivElement>(null);
  const [divHeight, setDivHeight] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null); 
  const [isVideoLoaded,setIsVideoLoaded]=useState(false);

  
  
  const handleCarouselLoad = () => {
    if (divRef.current) {
      const height = divRef.current.clientHeight;
      setDivHeight(height);
    }
  };
  
  useEffect(() => {
    const checkVideoLoad = () => {
      if (videoRef.current && videoRef.current.readyState === 4) {
        handleCarouselLoad();
        setIsVideoLoaded(true);
      } else {
        setTimeout(checkVideoLoad, 100);
      }
    };
    checkVideoLoad(); // Start checking for video load
    const updateHeight = () => {
      if (divRef.current) {
        const height = divRef.current.clientHeight;
        setDivHeight(height);
      }
    };
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []); // Empty dependency array
  return (
    
    <div className="container-fluid">
      <Navigate pageSettings="gradient" /> 
      <main>     
        <div className="row fixed-top " style={{ zIndex: 1 }} ref={divRef} >
          <div className="col p-0" >
            <Carousel className=" p-0  " variant="light" fade interval={null}   >
              <Carousel.Item className="   d-flex justify-content-center " style={{minHeight:'90vh'}} >
                <div className="d-flex justify-content-center vidHold  " >
                  <video id="video1" ref={videoRef}  className="object-fit-cover w-100" aria-label="video of East Prairie Elementary School" muted autoPlay loop playsInline  >
                    <source   src="https://endicottfiles.com/East_Prarie_2024_Montage_V1_Compressed.mp4" type="video/mp4" ></source>
                  </video>
                </div> 
                <Carousel.Caption className="text-white mb-5 text-start  " style={{bottom:'150px'}}>
                  <h2 className="museo-bold d-block fs-1">East Prairie Elementary School</h2>
                  <p className="d-block" >Color: <span> Desert Ironspot Light, Medium Ironspot #77</span></p>
                  <p className="d-block">Size: <span> Utility</span></p>
                  <p className="d-block">Location: <span> Skokie, IL</span></p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className="   d-flex justify-content-center " style={{minHeight:'90vh'}} >
                <div className="d-flex justify-content-center vidHold  " >
                  <video ref={videoRef}  className="object-fit-cover w-100" aria-label="video of East Prairie Elementary School" muted autoPlay loop playsInline  >
                    <source   src="https://endicottfiles.com/BoysTown-Compressed.mp4" type="video/mp4" ></source>
                  </video>
                </div> 
                
                <Carousel.Caption className="text-white mb-5 text-start  " style={{bottom:'150px'}}>
                  <h2 className="museo-bold d-block fs-1">Boys Town Education Center</h2>
                  <p className="d-block" >Color: <span> Ivory Blend, Desert Ironspot Light, Desert Sands</span></p>
                  <p className="d-block">Size: <span> Modular, Norman, Closure, Utility, Triple</span></p>
                  <p className="d-block">Location: <span> Boys Town, NE</span></p>
                </Carousel.Caption>
              </Carousel.Item>
                <Carousel.Item className="   d-flex justify-content-center " style={{minHeight:'90vh'}} >
                  <div className="d-flex justify-content-center vidHold  " >
                    <video ref={videoRef}  className="object-fit-cover w-100" aria-label="video of St. Gregory Catholic Church" muted autoPlay loop playsInline  >
                      <source   src="https://endicottfiles.com/StGregoriesMontage.mp4" type="video/mp4" ></source>
                    </video>
                  </div> 
                  
                  <Carousel.Caption className="text-white mb-5 text-start  " style={{bottom:'150px'}}>
                    <h2 className="museo-bold d-block fs-1">St. Gregory the Great Catholic Church</h2>
                    <p className="d-block" >Color: <span> Medium Ironspot #46</span></p>
                    <p className="d-block">Size: <span> Modular</span></p>
                    <p className="d-block">Location: <span> Marysville, KS</span></p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="   d-flex justify-content-center " style={{minHeight:'90vh'}} >
                  <div className="d-flex justify-content-center vidHold  " >
                    <video ref={videoRef}  className="object-fit-cover w-100" aria-label="video of Dublin Streetscape" muted autoPlay loop playsInline  >
                      <source   src="https://endicottfiles.com/DublinMontage.mp4" type="video/mp4" ></source>
                    </video>
                  </div> 
                  
                  <Carousel.Caption className="text-white mb-5 text-start  " style={{bottom:'150px'}}>
                    <h2 className="museo-bold d-block fs-1">Dublin Streetscape</h2>
                    <p className="d-block" >Color: <span> Medium Ironspot #46, Manganese Ironspot, Dark Irosnpot</span></p>
                    <p className="d-block">Size: <span> 4 X 8 Relieved Lugged, 4 X 8 Square Edge, 4 X 8 Permeable</span></p>
                    <p className="d-block">Location: <span> Dublin, OH</span></p>
                  </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
          </div>
        </div>
        <div id="newsArea" style={{zIndex:3, marginTop:divHeight-125}} className={`row  p-0 ${isVideoLoaded ? '' : 'd-none'} `}  aria-label="A portion of the page that is below the fold and will scroll up over the main view"  >
          <div className=" col bg bg-dark z-3" >
            <div className="row mt-5 border-top border-white pt-5">
              <div className="col-lg-3 col-md-6 ms-lg-5 ">
                <Link className="text-decoration-none" href='/Features/AceHotel'>
                  <div className="card border border-black rounded-lg shadow h-100 " aria-label="a card that is about the ACE HOTEL winning the Best in Class for the Brick in Architecture awards">
                    <Image style={{height:260}}  className="w-100" src='https://endicottfiles.com/AceHotel1.jpg' height={300} width={300} alt="Image of the Ace Hotel in Toronto, with Endicott brick on it."  />
                    <div className="card-body">
                      <h2 className="card-title text-start univers-45-light fs-3 ">Ace Hotel - Best in Class</h2>
                      <p className="card-text text-start univers-45-light fs-6">The Ace Hotel - Toronto, won Best in Class - Commercial and Craftsmanship. Endicott thin brick was used through out the project. See the project here.</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-3 col-md-6 ">
                <Link className="text-decoration-none"  href='/Features/Boystown'>
                  <div className="card border border-black rounded-lg shadow h-100" aria-label="a card that is about the Boys Town in Boys Town Nebraska winning Silver in the Brick in Architecture awards">
                    <Image style={{height:260}}  className="w-100 " src='https://endicottfiles.com/BoysTown1.jpg' width={300} height={300} alt="Image of Boys Town School using Endicott Thin Brick"/>
                    <div className="card-body">
                      <h2 className="card-title text-start univers-45-light fs-3 ">Boys Town - BIA Silver Winner</h2>
                      <p className="card-text text-start univers-45-light fs-6">Boys Town, won silver in the BIA Brick in Architecture Awards. Endicott thin brick was used through out the project. See the project here.</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <Footer pageSetUp="gradient"/>
          </div>
        </div>  
      </main>
    </div>
  );
}