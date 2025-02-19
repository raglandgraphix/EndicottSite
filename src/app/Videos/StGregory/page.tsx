import React from "react";
import Navigate from "@/app/component/navigate";
import Footer from "@/app/component/footer";
import ProductBox from "@/app/component/ProductBox";



export default function Corporate(){
    return(
        <div className="container-fluid">
        <Navigate pageSettings="light"/>
        
        <div className="row">
            <ProductBox setDescription=' St. Gregory Catholic Church' productHeadLine='Endicott Videos: Building Legacies from the Ground Up' ProductDescription='Explore the enduring impact of Endicott brick through the words and works of renowned architects.  This video showcases stunning projects and shares inspiring insights from visionary architects who have used Endicott brick to create lasting legacies.' />
        </div>
        <div className="row">
            <iframe src="https://player.vimeo.com/video/365066928?autoplay=1&title=0&byline=0&portrait=0" title="St. Gregory The Great Catholic Church" width="1920" height="1080" style={{ height: '90vh' }} allowFullScreen  />
        </div>
        <div className="row pt-5 d-flex justify-content-center">
            <div className="col-9 VideoProjectCopy">
            <p><span className="Univers55Roman fs-5 fw-bold">&#8226;Project Name: </span> St. Gregory The Great Catholic Church</p>
            <p><span className="Univers55Roman fs-5 fw-bold">&#8226;Location: </span> Marysville, KS.</p>
            <p><span className="Univers55Roman fs-5 fw-bold">&#8226;Featured Brick color: </span> Medium Ironspot #46</p>
            <p><span className="Univers55Roman fs-5 fw-bold">&#8226;Featured Brick Size: </span> Modular,Shapes</p>
            <p><span className="Univers55Roman fs-5 fw-bold">&#8226;Project Size: </span> 113 feet high, 120,000 bricks, $4.4 million structure.</p>
            {/* <p><span className="Univers55Roman fs-5 fw-bold">&#8226;Architect: </span> Hufft Architects - Kansas City, MO</p> */}
            <p><span className="Univers55Roman fs-5 fw-bold">&#8226;Design Objective: </span>To build a striking new facility reflective of the 150-year-old church’s steadfast commitment to its mission and with the strength and durability to last another 150 years.</p>
            <p><span className="Univers55Roman fs-5 fw-bold">&#8226;Project Details: </span> The nuances and complexities of the of the church’s unique design required building materials that gave the architect the freedom to realize any vision. Endicott was chosen as the exterior material source for its ability to produce a variety of brick shapes such as dentils and soldiers, and for its reputation for visual consistency. The warmth and sheen of the deep reddish-brown bricks correspond nicely with the bold Gothic architecture and materials commonly used throughout the surrounding area.</p>

            </div>
            
        </div>
        
        
        <Footer pageSetUp="light"/>

    </div>
    )
}