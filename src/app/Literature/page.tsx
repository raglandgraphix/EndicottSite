import React from "react";
import Link from "next/link";
import Image from "next/image";
import ProductBox from "../component/ProductBox";
import Navigate from "../component/navigate";
import Footer from "../component/footer";


export default function Literature(){

    return(
        <div className="container-fluid">
            <Navigate pageSettings="light"/>
            <div className="row">
        <ProductBox setDescription='Literature' productHeadLine='Endicott Brochures: Your Guide to Beautiful Brick Design' ProductDescription='Explore our collection of Endicott brochures and discover a world of design inspiration for your next project.  Our brochures showcase the diverse colors, textures, and sizes of Endicott brick, providing you with the information you need to create stunning and enduring brickwork.'/>
            </div>
           
            <div className="row">
                <div className="col-12 col-md-6 col-lg-4 mb-5 h-100"><Link className="text-decoration-none text-center" href='https://endicottfiles.com/endicottProductCollections.pdf' target="_blank">
                        <div className="card rounded  p-1">
                            <Image src='https://endicottfiles.com/productCollectionsBrochure.jpg' width={1000} height={1200} alt="Cover image of the Product Collections Brochure"/>
                        </div>
                        <div className="card-body">
                            <h5 className="mt-2 text-black">Collections</h5>
                        </div>
                    </Link>
                </div>
                <div className="col-12 col-md-6 col-lg-4 mb-5 h-100"><Link className="text-decoration-none text-center" href='https://endicottfiles.com/endicottFaceBrick.pdf' target="_blank">
                        <div className="card rounded  p-1">
                            <Image src='https://endicottfiles.com/faceBrickBrochure.jpg' width={1000} height={1200} alt="Cover image of the Face Brick Brochure"/>
                        </div>
                        <div className="card-body">
                            <h5 className="mt-2 text-black">Face Brick </h5>
                        </div>
                    </Link>
                </div>
                <div className="col-12 col-md-6 col-lg-4 mb-5 h-100"><Link className="text-decoration-none text-center" href='https://endicottfiles.com/endicottThinBrick.pdf' target="_blank">
                        <div className="card rounded  p-1">
                            <Image src='https://endicottfiles.com/thinBrickBrochure.jpg' width={1000} height={1200} alt="Cover image of the Thin Brick Brocure"/>
                        </div>
                        <div className="card-body">
                            <h5 className="mt-2 text-black">Thin Brick</h5>
                        </div>
                    </Link>
                </div>
                <div className="col-12 col-md-6 col-lg-4 mb-5 h-100"><Link className="text-decoration-none text-center" href='https://endicottfiles.com/endicottClayPavers.pdf' target="_blank">
                        <div className="card rounded  p-1">
                            <Image src='https://endicottfiles.com/paversBrochure.jpg' width={1000} height={1200} alt="Cover image of the Clay Pavers Brochure"/>
                        </div>
                        <div className="card-body">
                            <h5 className="mt-2 text-black">Clay Pavers</h5>
                        </div>
                    </Link>
                </div>
                <div className="col-12 col-md-6 col-lg-4  mb-5 h-100"><Link className="text-decoration-none text-center" href='https://endicottfiles.com/endicottSpecialShapes.pdf' target="_blank">
                        <div className="card rounded  p-1">
                            <Image src='https://endicottfiles.com/shapes.jpg' width={1000} height={1200} alt="Cover image of the Special Shapes Brochure"/>
                        </div>
                        <div className="card-body">
                            <h5 className="mt-2 text-black">Shapes</h5>
                        </div>
                    </Link>
                </div>
                <div className="col-12 col-md-6 col-lg-4  mb-5 h-100"><Link className="text-decoration-none text-center" href='https://endicottfiles.com/endicottConstructionDetails.pdf' target="_blank">
                        <div className="card rounded  p-1">
                            <Image src='https://endicottfiles.com/endicottConstructionDetails.jpg' width={1000} height={1200} alt="Cover image of the Construction Details Brochure"/>
                        </div>
                        <div className="card-body">
                            <h5 className="mt-2 text-black">Construction Details</h5>
                        </div>
                    </Link>
                </div>
                
                
            </div>
            <Footer pageSetUp="light"/>

        </div>
    )
}