import React from "react";
import Navigate from "@/app/component/navigate";
import Footer from "@/app/component/footer";
import ProductBox from "@/app/component/ProductBox";



export default function Corporate(){
    return(
        <div className="container-fluid">
            <Navigate pageSettings="light"/>
            <ProductBox setDescription='Corporate Video' productHeadLine='Endicott Corporate Video: Building Legacies from the Ground Up' ProductDescription='Explore the enduring impact of Endicott brick through the words and works of renowned architects.  This video showcases stunning projects and shares inspiring insights from visionary architects who have used Endicott brick to create lasting legacies.' />
            <iframe src="https://player.vimeo.com/video/346959894?autoplay=1&title=0&byline=0&portrait=0" title="Endicott Corporate Video" width="1920" height="1080" style={{ height: '90vh' }} allowFullScreen  />
            <Footer pageSetUp="light"/>

        </div>
    )
}