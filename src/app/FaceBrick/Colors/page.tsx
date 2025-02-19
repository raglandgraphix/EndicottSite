//Face brick Colors Page
import Navigate from "../../component/navigate";
import Catalog from "../../component/CatalogHead";
import CatalogBody from "../../component/CatalogBody";
import Footer from "../../component/footer";
import React from "react";
export default function Facebrick(){
  return(
    <div className="container-fluid">
        <Navigate pageSettings="light"/> {/*Adds navigation to the page */}
        <Catalog/>{/*Adds Catalog selections to the page */}
        <CatalogBody />{/*Populates the colors on the catalog page */}
        <Footer pageSetUp="light"/>{/*Adds footer to the page */}
     </div>
  )
}
export function generateMetadata() { // Use generateMetadata to set the title
  return {
    title: "Endicott Face Brick Colors",
  };
}