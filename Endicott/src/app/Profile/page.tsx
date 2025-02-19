import React from "react";
import Navigate from "../component/navigate";
import ProductBox from "../component/ProductBox";
import Image from "next/image";
import Footer from "../component/footer";

export default function Profile(){
    


    return(
        <div className="container-fluid">
 <Navigate pageSettings="light"/>
        <div className="row">
            <div className="col-6">
                <ProductBox setDescription={'Who We Are'} productHeadLine={'About Endicott Clay Products: Building Legacies with Brick'} ProductDescription={'Discover the story of Endicott Clay Products, a family-owned business with a century-long legacy of crafting premium brick products. Learn about our commitment to quality, innovation, and sustainability, and how we empower architects to build enduring legacies, one brick at a time.'}/>
            </div>

        </div>
        <div className="row " >
            <div className="col-md-6">
                <Image className="img-fluid float-start me-3 mb-3" src='https://endicottfiles.com/Oldplant.png' alt="Image of the old Endicott Beehive Kilns" width={1000} height={1000} />
                <h3 className="text-center ">Endicott Clay Products Beehive Kilns</h3>
                <p className="ps-5 pe-5">A glimpse into Endicott's past:  Our original beehive kilns, a testament to our enduring legacy of brickmaking.</p>
            </div>
            <div className="col-md-6 mt-5">
                <p className="fs-6 lh-lg">For over a century, Endicott Clay Products has been a family-owned business dedicated to crafting premium brick products that stand the test of time. Founded in 1920, our legacy is built on a foundation of quality craftsmanship, innovative technology, and a deep commitment to sustainability.

                    As a third-generation family business, we take pride in our heritage and the relationships we've built with architects, builders, and communities across the country. Our passion for brick is evident in every product we create, from the classic elegance of our face brick to the versatile applications of our thin brick and pavers.

                    At Endicott, we believe in the enduring power of brick to shape lasting structures and inspire architectural legacies. We are dedicated to providing architects with the tools and resources they need to bring their visions to life, building structures that stand as testaments to their creativity and craftsmanship.

                    Our motto, "Building Legacies from the Ground Up," reflects our commitment to providing superior brick products that not only meet but exceed industry standards. We are constantly exploring new technologies and sustainable practices to ensure that our brick remains the preferred choice for architects who seek to create enduring and inspiring structures.

                    More than just a brick manufacturer, Endicott is a partner in building the future. We are dedicated to supporting the architectural community and fostering a legacy of excellence in brick construction.  Choose Endicott, and together, let's build legacies that will last for generations to come.
                </p>
            </div>


        </div>
        <div className="row mt-5" >
            <div className="col-md-6">
                <Image className="img-fluid float-start me-3 mb-3" src='https://endicottfiles.com/endicottPlant.jpg' alt="Image of the old Endicott Beehive Kilns" width={1000} height={1000} />
                <h3 className="text-center ">Endicott Today: Where Innovation Meets Legacy</h3>
                <p className="ps-5 pe-5">Our modern manufacturing facility in Endicott, Nebraska, reflects our commitment to innovation and sustainability. Here, we combine cutting-edge technology with time-honored techniques to produce the high-quality brick that Endicott is known for.</p>
            </div>
            <div className="col-md-6 mt-5">
                <p className="fs-6 lh-lg">
                At Endicott, our commitment to crafting exceptional brick products has only grown stronger over the past century. Our current state-of-the-art facility in Endicott, Nebraska, combines cutting-edge technology with time-honored techniques to produce a wide range of high-quality bricks, including classic red brick, elegant gray brick, bold black brick, and many other distinctive colors.  We are dedicated to innovation and sustainability, constantly exploring new ways to improve our manufacturing processes and minimize our environmental impact.  This dedication allows us to provide architects, builders, and homeowners with the finest brick products available, ensuring that their projects stand the test of time and contribute to a legacy of enduring beauty.
                </p>
            </div>


        </div>
        <Footer pageSetUp="light"/>    
        </div>
       )
}