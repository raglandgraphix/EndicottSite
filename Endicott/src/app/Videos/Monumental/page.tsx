import React from "react";
import Navigate from "@/app/component/navigate";
import Footer from "@/app/component/footer";
import ProductBox from "@/app/component/ProductBox";



export default function Corporate(){
    return(
        <div className="container-fluid">
            <Navigate pageSettings="light"/>
            
            <div className="row">
                <ProductBox setDescription='Monumental Journey' productHeadLine='Endicott Videos: Building Legacies from the Ground Up' ProductDescription='Explore the enduring impact of Endicott brick through the words and works of renowned architects.  This video showcases stunning projects and shares inspiring insights from visionary architects who have used Endicott brick to create lasting legacies.' />
            </div>
            <div className="row">
                <iframe src="https://player.vimeo.com/video/294599668?autoplay=1&title=0&byline=0&portrait=0" title="Monumental Journey Sculpture" width="1920" height="1080" style={{ height: '90vh' }} allowFullScreen  />
            </div>
            <div className="row pt-5 d-flex justify-content-center">
                <div className="col-9 VideoProjectCopy">
                <p><span className="Univers55Roman fs-5 fw-bold">&#8226;Project Name: </span> A Monumental Journey</p>
                <p><span className="Univers55Roman fs-5 fw-bold">&#8226;Location: </span> Des Moines, IA</p>
                <p><span className="Univers55Roman fs-5 fw-bold">&#8226;Featured Brick color: </span> Manganese Ironspot</p>
                <p><span className="Univers55Roman fs-5 fw-bold">&#8226;Featured Brick Size: </span> Custom Shapes</p>
                <p><span className="Univers55Roman fs-5 fw-bold">&#8226;Project Size: </span> 30-ft-high x 16-ft-dia., weighing 25 tons</p>
                {/* <p><span className="Univers55Roman fs-5 fw-bold">&#8226;Architect: </span> Hufft Architects - Kansas City, MO</p> */}
                <p><span className="Univers55Roman fs-5 fw-bold">&#8226;Design Objective: </span>To honor the founding of the National Bar Association and the 12 courageous African American attorneys who established this important legal organization in Des Moines in 1925.</p>
                <p><span className="Univers55Roman fs-5 fw-bold">&#8226;Project Details: </span> The renowned artist, Kerry James Marshall, took his inspiration from the talking drum of West Africa, where communities communicated complex messages over vast distances simply by varying pitch or tone to mimic patterns of speech. He clad this massive sculpture in Endicott Manganese Ironspot brick to add a dark, elegant sheen to his masterpiece. Iron ore additives in this classic material mirror the blue, gray or golden colors of the sky, further adding to the monument’s dynamic design.</p>

                </div>
                
            </div>
            
            
            <Footer pageSetUp="light"/>

        </div>
    )
}