import React from "react";
import Navigate from "../component/navigate";
import Footer from "../component/footer";
import ProductBox from "../component/ProductBox";
import Image from "next/image";

export default function Specifications(){

    return(
        <div className="container-fluid">
        <Navigate pageSettings="light" />
        <div className="row">
            <div className="col-6">
                <ProductBox setDescription={'Specifications'} productHeadLine={'Endicott Specifications: Technical Information for Brick Construction'} ProductDescription={'Access comprehensive technical specifications for Endicott brick products, including dimensions, ASTM data, Masterformat data, and more. Our detailed specifications provide architects, engineers, and builders with the information they need to confidently specify Endicott brick for their projects.'} />
            </div>

        </div>
        <div className="row d-flex justify-content-center">
            <div className="col-12 col-lg-3">
                <div className="card">
                    <Image src='https://endicottfiles.com/2018-PCI-Convention-Natio.jpg' alt='image of the PCI logo' width={500} height={500}/>
                    <div className="card-body text-center">
                        <h5 className="card-title">Precast Concrete Institute Specifications</h5>
                        <p className="card-text">Specification information for the precast industry. </p>
                        <a href="https://endicottfiles.com/PCI_Thin_Brick_Spec_.pdf" target="_blank" className="btn btn-secondary">View/Download</a>
                    </div>
                </div>
            </div>
            <div className="col-12 col-lg-3">
                <div className="card h-100 d-flex flex-column">
                    <Image src='https://endicottfiles.com/CADdetails-Logo-horizontal.svg' alt='image of the PCI logo' width={500} height={500}/>
                    <div className="card-body text-center">
                        <h5 className="card-title">CADdetails</h5>
                        <p className="card-text">Visit CADdetails for productr specifications and more. </p>
                    </div>
                    <div className=" mt-auto text-center mb-3">    
                        <a href="https://microsite.caddetails.com/main/company/viewlistings?companyID=5647&viewSource=Microsite&isFeatured=False&microsite=1" target="_blank" className="btn btn-secondary">Go to CADdetails</a>
                    </div>
                </div>
            </div>

        </div>
        <div className="row d-flex justify-content-center mt-5 border-bottom ">
            <div className="col-12">
                <h3 className="text-center">
                    3 Part Specifications
                </h3>
            </div>

        </div>
        <div className="row d-flex justify-content-center mt-3">
            <div className="col-12 col-lg-2">
                <div className="card d-flex align-items-center h-100 ">
                    <Image className="image-fluid" src='https://endicottfiles.com/word.png' width={100} height={100} alt="icon for Word documents"/>
                    <div className="card-body text-center">
                        <h5 className="card-title">042100</h5>
                            <p className="card-text">Endicott Clay Unit Masonry</p>
                            <a href="https://endicottfiles.com/3PartCSISpecClayMasonryUnits.docx" target="_blank" className="btn btn-secondary">Download</a>
                        </div>
                </div>
            </div>
            <div className="col-12 col-lg-2">
                <div className="card d-flex align-items-center h-100">
                    <Image className="image-fluid" src='https://endicottfiles.com/word.png' width={100} height={100} alt="icon for Word documents"/>
                    <div className="card-body text-center">
                        <h5 className="card-title">042313</h5>
                            <p className="card-text">Endicott Thin Brick</p>
                            <a href="https://endicottfiles.com/3PartCSISpecThinBrick.docx" target="_blank" className="btn btn-secondary">Download</a>
                        </div>
                </div>
            </div>
            <div className="col-12 col-lg-2">
                <div className="card d-flex align-items-center h-100 ">
                    <Image className="image-fluid" src='https://endicottfiles.com/word.png' width={100} height={100} alt="icon for Word documents"/>
                    <div className="card-body text-center">
                        <h5 className="card-title">321400</h5>
                            <p className="card-text">Endicott Brick Pavers</p>
                            <a href="https://endicottfiles.com/3PartCSIPAVER.docx" target="_blank" className="btn btn-secondary">Download</a>
                        </div>
                </div>
            </div>
        </div>
       
        <Footer pageSetUp="light"/>

        </div>
       )

}