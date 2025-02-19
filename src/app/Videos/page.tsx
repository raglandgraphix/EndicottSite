import React from "react";
import Navigate from "../component/navigate";
import Footer from "../component/footer";
import ProductBox from "../component/ProductBox";
import Image from "next/image";
import Link from "next/link";

export default function Videos(){


return(
    <div className="container-fluid">
        
        <Navigate pageSettings="light"/>
        <ProductBox setDescription='Videos' productHeadLine=' Endicott Videos:  Where Vision Meets Legacy' ProductDescription='Explore the Endicott legacy and see how our brick helps build enduring structures in our collection of project and product videos. Witness the versatility of Endicott brick in real-world applications, and get inspired to create your own lasting legacy.'/>
        <div className="row ps-3 pe-3" >
            <div className="col-12 col-md-6 col-lg-3 mb-3 position-relative d-flex justify-content-center project-container ">
                <Link href='/Videos/Corporate' aria-label='Details of the Corporate Video by Endicott'>
                    <Image className="rounded-3" src='https://endicottfiles.com/videoCorporate.jpg' alt='Image of a frame from the Corporate video.' width={500} height={500}/>
                </Link>
                <div className=" bg-white-75 w-100 position-absolute bottom-0 rounded-bottom-2  text-overlay ">
                    <h2 className="fs-6 text-center">Corporate Video</h2>
                    <h3 className="univers-45-light fs-6 text-center">"How Do You Want To Be Remembered"</h3>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-3 position-relative d-flex justify-content-center project-container ">
                <Link href='/Videos/Nesbitt' aria-label='Details of the Bruce D. Nesbitt African American Cultural Center  Video by Endicott'>
                    <Image className="rounded-3" src='https://endicottfiles.com/videoNesbitt.jpg' alt='Image of a frame from the Bruce D. Nesbitt African American Cultural Center video.' width={500} height={500}/>
                </Link>
                <div className=" bg-white-75 w-100 position-absolute bottom-0 rounded-bottom-2  text-overlay ">
                    <h2 className="fs-6 text-center">Bruce D. Nesbitt African American Cultural Center</h2>
                    <h3 className="univers-45-light fs-6 text-center">Champaign, Illinois</h3>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-3 position-relative d-flex justify-content-center project-container ">
                <Link href='/Videos/StGregory' aria-label='Details of the Corporate Video by Endicott'>
                    <Image className="rounded-3" src='https://endicottfiles.com/videoStGregory.jpg' alt='Image of a frame from the Corporate video.' width={500} height={500}/>
                </Link>
                <div className=" bg-white-75 w-100 position-absolute bottom-0 rounded-bottom-2  text-overlay ">
                    <h2 className="fs-6 text-center">St. Gregory Catholic Church</h2>
                    <h3 className="univers-45-light fs-6 text-center">"Marysville, Kansas"</h3>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-3 position-relative d-flex justify-content-center project-container ">
                <Link href='/Videos/DeBruceHall' aria-label='Details of the Corporate Video by Endicott'>
                    <Image className="rounded-3" src='https://endicottfiles.com/videoDebruce.jpg' alt='Image of a frame from the Corporate video.' width={500} height={500}/>
                </Link>
                <div className=" bg-white-75 w-100 position-absolute bottom-0 rounded-bottom-2  text-overlay ">
                    <h2 className="fs-6 text-center">Kansas City Art Institute, Paul and Linda DeBruce Hall</h2>
                    <h3 className="univers-45-light fs-6 text-center">"Kansas City, Missouri"</h3>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-3 position-relative d-flex justify-content-center project-container ">
                <Link href='/Videos/ThinBrick' aria-label='Details of the Corporate Video by Endicott'>
                    <Image className="rounded-3" src='https://endicottfiles.com/videoThinbrickManufacturing.jpg' alt='Image of a frame from the Corporate video.' width={500} height={500}/>
                </Link>
                <div className=" bg-white-75 w-100 position-absolute bottom-0 rounded-bottom-2  text-overlay ">
                    <h2 className="fs-6 text-center">Thin Brick Video</h2>
                    <h3 className="univers-45-light fs-6 text-center">"Building Legacies with Endicott Thin Brick"</h3>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-3 position-relative d-flex justify-content-center project-container ">
                <Link href='/Videos/Monumental' aria-label='Details of the Corporate Video by Endicott'>
                    <Image className="rounded-3" src='https://endicottfiles.com/videoMonumentalJourney.jpg' alt='Image of a frame from the Corporate video.' width={500} height={500}/>
                </Link>
                <div className=" bg-white-75 w-100 position-absolute bottom-0 rounded-bottom-2  text-overlay ">
                    <h2 className="fs-6 text-center">Monumental Journey - Sculpture</h2>
                    <h3 className="univers-45-light fs-6 text-center">"Des Moines, Iowa"</h3>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-3 position-relative d-flex justify-content-center project-container ">
                <Link href='/Videos/Paver' aria-label='Details of the Corporate Video by Endicott'>
                    <Image className="rounded-3" src='https://endicottfiles.com/videoPaverManufacturing.jpg' alt='Image of a frame from the Corporate video.' width={500} height={500}/>
                </Link>
                <div className=" bg-white-75 w-100 position-absolute bottom-0 rounded-bottom-2  text-overlay ">
                    <h2 className="fs-6 text-center">Paver Video</h2>
                    <h3 className="univers-45-light fs-6 text-center">"Building Legacies with Endicott Pavers"</h3>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-3 position-relative d-flex justify-content-center project-container ">
                <Link href='/Videos/Moody' aria-label='Details of the Corporate Video by Endicott'>
                    <Image className="rounded-3" src='https://endicottfiles.com/videoMoody.jpg' alt='Image of a frame from the Corporate video.' width={500} height={500}/>
                </Link>
                <div className=" bg-white-75 w-100 position-absolute bottom-0 rounded-bottom-2  text-overlay ">
                    <h2 className="fs-6 text-center">Moody Center for The Arts</h2>
                    <h3 className="univers-45-light fs-6 text-center">"Houston, Texas"</h3>
                </div>
            </div>

        </div>
        <Footer pageSetUp="light"/>

    </div>

)






}