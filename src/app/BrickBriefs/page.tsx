import React from "react";
import Link from "next/link";
import Image from "next/image";
import ProductBox from "../component/ProductBox";
import Navigate from "../component/navigate";
import Footer from "../component/footer";


export default function BrickBriefs(){

    return(
        <div className="container-fluid">
            <Navigate pageSettings="light"/>
            <div className="row">
        <ProductBox setDescription='BIA Brick Briefs' productHeadLine='BIA Brick Briefs: Quick Guides to Brick Masonry' ProductDescription='Access concise and informative guides on brick masonry with the Brick Industry Association (BIA) Brick Briefs, available on the Endicott website. These Brick Briefs cover a variety of topics related to brick construction, providing valuable insights for architects, builders, and homeowners alike.'/>
            </div>
           
            <div className="row">
                <div className="col-12 col-md-6 col-lg-4 mb-5 h-100"><Link className="text-decoration-none text-center" href='https://endicottfiles.com/BB_ManganeseStaining.pdf' target="_blank">
                        <div className="card">
                            <Image src='https://endicottfiles.com/manganeseStaining.jpg' width={500} height={700} alt="Cover image of the Manganese Staining brick brief"/>
                        </div>
                        <div className="card-body">
                            <h5 className="mt-2 text-black">Manganese Staining</h5>
                        </div>
                    </Link>
                </div>
                <div className="col-12 col-md-6 col-lg-4 mb-5 h-100"><Link className="text-decoration-none text-center" href='https://endicottfiles.com/BB_leed-building-product.pdf' target="_blank">
                        <div className="card">
                            <Image src='https://endicottfiles.com/leedBuilding.jpg' width={500} height={700} alt="Cover image of the Manganese Staining brick brief"/>
                        </div>
                        <div className="card-body">
                            <h5 className="mt-2 text-black">Leed V4 Building Product Disclosure Credits for Brick </h5>
                        </div>
                    </Link>
                </div>
                <div className="col-12 col-md-6 col-lg-4 mb-5 h-100"><Link className="text-decoration-none text-center" href='https://endicottfiles.com/BB_Firelanes.pdf' target="_blank">
                        <div className="card">
                            <Image src='https://endicottfiles.com/paversForFireLanes.jpg' width={500} height={700} alt="Cover image of the Manganese Staining brick brief"/>
                        </div>
                        <div className="card-body">
                            <h5 className="mt-2 text-black">Clay Pavers for Fire Lanes and H-20 Loadings</h5>
                        </div>
                    </Link>
                </div>
                <div className="col-12 col-md-6 col-lg-4 mb-5 h-100"><Link className="text-decoration-none text-center" href='https://endicottfiles.com/BB_recycledContent.pdf' target="_blank">
                        <div className="card">
                            <Image src='https://endicottfiles.com/recycledContent.jpg' width={500} height={700} alt="Cover image of the Manganese Staining brick brief"/>
                        </div>
                        <div className="card-body">
                            <h5 className="mt-2 text-black">Recycled Content in Green Building Rating Systems - Certification and Credit </h5>
                        </div>
                    </Link>
                </div>
                <div className="col-12 col-md-6 col-lg-4 mb-5 h-100"><Link className="text-decoration-none text-center" href='https://endicottfiles.com/BB_EfflorescencePrevention.pdf' target="_blank">
                        <div className="card">
                            <Image src='https://endicottfiles.com/efflorescencePrevension.jpg' width={500} height={700} alt="Cover image of the Manganese Staining brick brief"/>
                        </div>
                        <div className="card-body">
                            <h5 className="mt-2 text-black">Efflorescence Prevention and Control</h5>
                        </div>
                    </Link>
                </div>
                <div className="col-12 col-md-6 col-lg-4 mb-5 h-100"><Link className="text-decoration-none text-center" href='https://endicottfiles.com/BB_lipped-brick.pdf' target="_blank">
                        <div className="card">
                            <Image src='https://endicottfiles.com/lippedBrick.jpg' width={500} height={700} alt="Cover image of the Manganese Staining brick brief"/>
                        </div>
                        <div className="card-body">
                            <h5 className="mt-2 text-black">Lipped Brick</h5>
                        </div>
                    </Link>
                </div>
                
                
            </div>
            <Footer pageSetUp="light"/>

        </div>
    )
}