import React from "react";
import Navigate from "@/app/component/navigate";
import Footer from "@/app/component/footer";
import ProductBox from "@/app/component/ProductBox";



export default function Corporate(){
    return(
        <div className="container-fluid">
        <Navigate pageSettings="light"/>
        
        <div className="row">
            <ProductBox setDescription=' BNAACC' productHeadLine='Endicott Videos: Building Legacies from the Ground Up' ProductDescription='Explore the enduring impact of Endicott brick through the words and works of renowned architects.  This video showcases stunning projects and shares inspiring insights from visionary architects who have used Endicott brick to create lasting legacies.' />
        </div>
        <div className="row">
            <iframe src="https://player.vimeo.com/video/507553901?autoplay=1&title=0&byline=0&portrait=0" title="Bruce Nesbitt African American Cultural Center" width="1920" height="1080" style={{ height: '90vh' }} allowFullScreen  />
        </div>
        <div className="row pt-5 d-flex justify-content-center">
            <div className="col-9 VideoProjectCopy">
            <p><span className="Univers55Roman fs-5 fw-bold">&#8226;Project Name: </span> Bruce Nesbitt African American Cultural Center</p>
            <p><span className="Univers55Roman fs-5 fw-bold">&#8226;Location: </span> University of Illinois Urbana-Champaign</p>
            <p><span className="Univers55Roman fs-5 fw-bold">&#8226;Featured Brick color: </span> Manganese Ironspot, Sienna Ironspot, Dark Sandstone, Light Sandstone</p>
            {/* <p><span className="Univers55Roman fs-5 fw-bold">&#8226;Featured Brick Size: </span> Norman</p> */}
            <p><span className="Univers55Roman fs-5 fw-bold">&#8226;Project Size: </span> 2-1/2 story, 8,200 GSF, $5.5 million structure</p>
            {/* <p><span className="Univers55Roman fs-5 fw-bold">&#8226;Architect: </span> Hufft Architects - Kansas City, MO</p> */}
            <p><span className="Univers55Roman fs-5 fw-bold">&#8226;Design Objective: </span>To build a dynamic new multi-use building that makes a bold statement about diversity and inclusion to all who pass by.</p>
            <p><span className="Univers55Roman fs-5 fw-bold">&#8226;Project Details: </span> Designed to support the BNAACC’s goals of inclusion and openness while at the same time being a sanctuary of learning and support. The center was designed to “wear its identity” through the color variations on the brick façade, making it an unmistakable addition to campus. A favorite feature of many passersby, the distinctive multi-colored bricks are a great, subtle way to say that all are welcome.</p>

            </div>
            
        </div>
        
        
        <Footer pageSetUp="light"/>

    </div>
    )
}