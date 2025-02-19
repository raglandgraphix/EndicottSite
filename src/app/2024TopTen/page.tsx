'use client';
import React from "react";
import { Carousel } from "react-bootstrap";
import Image from "next/image";
import '../../Styles/2024TopTen.css';
export default function TopTen2024Page() {
  return (
    <div className="container-fluid">
      
        
      <div className="row p-0 fixed-top border border-danger">
        <div className="col-12   ">
        <Carousel className="" style={{'height':'100vh'}} >
          <Carousel.Item>
            <Image className="img-fluid  " style={{objectFit:'cover', objectPosition:'center middle', height:'100vh'}}  src="https://endicottfiles.com/TetonGolf.jpg" alt="First slide" width={1920} height={1080} />
            <Carousel.Caption>
              <h1>Jackson Hole Golf & Tennis Club</h1>
              <p>Often a vacation is not a vacation unless it includes at least 18 holes of golf. The course at Jackson Hole Golf and Tennis Club, designed by Robert Trent Jones Jr., is an award-winning golf center with exquisite views of the Grand Teton Mountains.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image className="img-fluid " style={{objectFit:'cover',height:'100vh'}}   src="https://endicottfiles.com/fishing.jpg" alt="Second slide" width={1920} height={1080} />
          </Carousel.Item>
          <Carousel.Item>
            <Image className="img-fluid " style={{objectFit:'cover',height:'100vh'}}   src="https://endicottfiles.com/tetonSpa.webp" alt="Third slide" width={1920} height={1080} />
          </Carousel.Item>
       </Carousel>
        </div>
        
       
       </div>  
       <div className="row fixed-top z-index-1">
        <div className=" col-12">
          <Image className="img-fluid m-5" style={{width:'150px'}} src="https://endicottfiles.com/logoWhite.png" alt="Endicott Logo" width={300} height={100} />

        </div>

      </div>    
    </div>
  );
}