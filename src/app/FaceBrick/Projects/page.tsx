//Projects page
//This page has been tested for Accessibility on 11-27-24
import React from "react";
import Navigate from "@/app/component/navigate";
import ProjectsHead from "@/app/component/ProjectsHead";
import Footer from "@/app/component/footer";
import ProjectBody from "@/app/component/ProjectsBody";
//import { SplitPathname } from "../../../../Utilities/SplitPathname";
import { Metadata } from "next";
export default function Project(){
  //const {Product,RangeColors,Page,Project}=SplitPathname();
  //const { Product, RangeColors, Page, Project } = SplitPathname();
    return(
      <div className="container-fluid">           
          <Navigate pageSettings="light"/>
          <ProjectsHead />
          <ProjectBody  />
          <Footer pageSetUp="light"/>
      </div>
    )    
}
export const metadata: Metadata = {    
  title: 'Endicott Brick Projects | Inspiring Architectural Designs', 
  description: 'Explore a diverse gallery of projects showcasing the beauty and versatility of Endicott brick in various architectural styles.',
  keywords: 'Endicott, brick, projects, architecture, design, face brick, thin brick, pavers, commercial, residential, inspiration', 
  openGraph: {
    title: 'Endicott Brick Projects',
    description: 'Discover inspiring architectural designs featuring Endicott brick.',
    url: 'https://www.endicott.com/projects', 
    siteName: 'Endicott',
    images: [
      {
        url: 'https://endicottfiles.com/StanleyMuseumBox.jpg', 
        width: 800,
        height: 800,
      },
      {
        url: 'https://endicottfiles.com/EastPrairieBox.jpg',
        width: 800,
        height: 800,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Endicott Brick Projects',
    description: 'Get inspired by these architectural designs featuring Endicott brick.',
    site: 'https://x.com/EndicottBrick', 
    images: [
      'https://endicottfiles.com/StanleyMuseumBox.jpg',
      'https://endicottfiles.com/EastPrairieBox.jpg',
    ],
  },
};
