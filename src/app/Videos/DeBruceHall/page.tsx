import React from "react";
import Navigate from "@/app/component/navigate";
import Footer from "@/app/component/footer";
import ProductBox from "@/app/component/ProductBox";



export default function Corporate(){
    return(
        <div className="container-fluid">
            <Navigate pageSettings="light"/>
            
            <div className="row">
                <ProductBox setDescription='DeBruce Hall' productHeadLine='Endicott Videos: Building Legacies from the Ground Up' ProductDescription='Explore the enduring impact of Endicott brick through the words and works of renowned architects.  This video showcases stunning projects and shares inspiring insights from visionary architects who have used Endicott brick to create lasting legacies.' />
            </div>
            <div className="row">
                <iframe src="https://player.vimeo.com/video/514318468?autoplay=1&title=0&byline=0&portrait=0" title="Kansas City Art Institute, Paul and Linda DeBruce Hall" width="1920" height="1080" style={{ height: '90vh' }} allowFullScreen  />
            </div>
            <div className="row pt-5 d-flex justify-content-center">
                <div className="col-9 VideoProjectCopy">
                <p><span className="Univers55Roman fs-5 fw-bold">&#8226;Project Name: </span> Kansas City Art Institute, Paul and Linda DeBruce Hall</p>
                <p><span className="Univers55Roman fs-5 fw-bold">&#8226;Location: </span> Kansas City, MO</p>
                <p><span className="Univers55Roman fs-5 fw-bold">&#8226;Featured Brick color: </span> Manganese Ironspot</p>
                <p><span className="Univers55Roman fs-5 fw-bold">&#8226;Featured Brick Size: </span> Modular</p>
                <p><span className="Univers55Roman fs-5 fw-bold">&#8226;Project Size: </span> 2 story, 18,000 SF</p>
                <p><span className="Univers55Roman fs-5 fw-bold">&#8226;Architect: </span> Hufft Architects - Kansas City, MO</p>
                <p><span className="Univers55Roman fs-5 fw-bold">&#8226;Design Objective: </span>To elevate the profile of KCAI’s academic credentials by designing a visually stunning, environmentally friendly, multi-use facility that maintains design continuity with the campus community and neighboring residents.</p>
                <p><span className="Univers55Roman fs-5 fw-bold">&#8226;Project Details: </span> This state-of-the-art facility is dedicated to teaching and honoring art history, but also houses liberal arts, creative writing and entrepreneurial studies. Inspired by the neighborhood’s use of curved brick and stone walls, the impressive brick structure features a clean, flowing shape punctuated by crisp edges and creative brick masonry for texture and dramatic effect. Endicott’s Manganese Ironspot was the ideal solution for a project that must combine bold artistic expression with hardworking functionality.</p>

                </div>
                
            </div>
            
            
            <Footer pageSetUp="light"/>

        </div>
    )
}