import React from "react";
import Navigate from "@/app/component/navigate";
import Footer from "@/app/component/footer";
import ProductBox from "@/app/component/ProductBox";



export default function Corporate(){
    return(
        <div className="container-fluid">
        <Navigate pageSettings="light"/>
        
        <div className="row">
            <ProductBox setDescription=' Moody Center for the Arts' productHeadLine='Endicott Videos: Building Legacies from the Ground Up' ProductDescription='Explore the enduring impact of Endicott brick through the words and works of renowned architects.  This video showcases stunning projects and shares inspiring insights from visionary architects who have used Endicott brick to create lasting legacies.' />
        </div>
        <div className="row">
            <iframe src="https://player.vimeo.com/video/224958974?autoplay=1&title=0&byline=0&portrait=0" title="Moody Center For The Arts" width="1920" height="1080" style={{ height: '90vh' }} allowFullScreen  />
        </div>
        <div className="row pt-5 d-flex justify-content-center">
            <div className="col-9 VideoProjectCopy">
            <p><span className="Univers55Roman fs-5 fw-bold">&#8226;Project Name: </span> Moody Center for the Arts, Rice University</p>
            <p><span className="Univers55Roman fs-5 fw-bold">&#8226;Location: </span> Houston, TX</p>
            <p><span className="Univers55Roman fs-5 fw-bold">&#8226;Featured Brick color: </span> Manganese Ironspot</p>
            <p><span className="Univers55Roman fs-5 fw-bold">&#8226;Featured Brick Size: </span> Norman</p>
            <p><span className="Univers55Roman fs-5 fw-bold">&#8226;Project Size: </span> 50,000 sf</p>
            {/* <p><span className="Univers55Roman fs-5 fw-bold">&#8226;Architect: </span> Hufft Architects - Kansas City, MO</p> */}
            <p><span className="Univers55Roman fs-5 fw-bold">&#8226;Design Objective: </span>To build a state-of-the art LEED Silver certified, transdisciplinary academic facility dedicated to conveying a sense of openness and possibility through the use of its strong horizontal sightlines, unique elevated positioning and open weave brick pattern. Visitors of Rice University have taken note of this dramatic brick structure with its unconventional brick screen wall, making it a popular stop on the campus tour.</p>
            <p><span className="Univers55Roman fs-5 fw-bold">&#8226;Project Details: </span> The impressive brick façade of this landmark arts center extends the building’s airy design and bold sightlines to the exterior. Supporting the elevated brick screen wall – the structure’s most notable feature – is a system of stainless steel rods running through the specially cored brick. The brick cladding provides stunning exterior character with dramatic cutouts and articulating patterns made possible by the specially engineered rod system. To accommodate the stainless steel rods, special oversize 1-15/16” coring in the brick was needed without sacrificing load strength, fatigue specifications and other critical performance properties.</p>

            </div>
            
        </div>
        
        
        <Footer pageSetUp="light"/>

    </div>
    )
}