import React from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "../component/footer";

export default function InvisLug(){
    return(
        <div className="container-fluid">
            
            <div className="row Invisi-LugNav d-flex justify-content-center bg bg-white" >
                <div className="col-12 col-lg-6   ">
                    <Link className="text-black text-decoration-none" href='/'>
                        <Image className="img-fluid mx-auto d-block" src='https://endicottfiles.com/logoBlack.png' alt="Endicott Clay Products Logo" width={150} height={250}/>
                        <h1 className="text-center fs-4">Invisi-Lug® Clay Pavers</h1> 
                    </Link>                                  
                </div>
            </div>
            <div className="row d-flex justify-content-center ">
                <div className="col-12 col-lg-4 me-3 mx-auto ">
                    <h2>
                    New INVISI-LUG® clay pavers from Endicott give you everything you have wanted in a paver:
                    </h2>
                    <ul className="list-disc list inside">
                        <li >A recessed lug that provides proper joint spacing to eliminate chippage</li>
                        <li>Because its lugs are recessed it leaves a crisp, square edge</li>
                        <li>Eliminates the need for buying plastic spacers, saving substantial cost</li>
                        <li>Improved speed of installation</li>
                        <li>Superior joint line appearance</li>
                        <li>Full and proper joint spacing on sand-set pavers promotes interlock</li>
                    </ul>
                    <div className="row  text-center">
                        <Link  href='/'>
                            <button role="button" className="btn btn-secondary">Learn More</button>
                        </Link>
                    </div>
                    
                </div>
                <div className="col-12 col-lg-7 mx-auto">
                    <video controls width="1000" height="360">
                    <source src="https://endicottfiles.com/invisilug_home720.mp4" type="video/mp4" />
                    </video>

                </div>

            </div>
            <div className="row d-flex justify-content-center mt-5 ">
                <div className="col-12 col-lg-4 me-3 mx-auto ">
                    <h2>
                    INVISI-LUG® Paver benefits are in addition to the traditional benefits of using Endicott clay pavers:
                    </h2>
                    <ul className="list-disc list inside">
                        <li >Vibrant colors, including ironspots, that other materials cannot mimic</li>
                        <li>Colorfast</li>
                        <li>Durable</li>
                        <li>Incredibly high compressive strength</li>
                    </ul>
                    <div className="row  text-center">
                        <Link  href='/'>
                            <button role="button" className="btn btn-secondary">Learn More</button>
                        </Link>
                    </div>
                    
                </div>
                <div className="col-12 col-lg-7 mx-auto">
                    <video controls width="1000" height="360">
                        <source src="https://endicottfiles.com/invisilug_home720.mp4" type="video/mp4" />
                    </video>

                </div>

            </div>
            <Footer pageSetUp="light"/>
        </div>
    )
}