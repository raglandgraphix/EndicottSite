'use client';
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import "/public/css/navigate.css";
import Link from "next/link";
import { SplitPathname } from "../../../Utilities/SplitPathname";



const linkData = {
    'Projects': [
    // { text: 'All Projects', link: '/FaceBrick/Projects' },
    { text: 'Face Brick', link: '/FaceBrick/Projects' },
    { text: 'Thin Brick', link: '/ThinBrick/Projects' },
    { text: 'Pavers', link: '/Paver/Projects' }
  ],
  'Face Brick':[
    {text:'Colors', link:'/FaceBrick/Colors'},
    {text:'Textures', link:'/FaceBrick/Textures'},
    {text:'Sizes',link:'/FaceBrick/Sizes'}
],
    'Thin Brick':[
        {text:'Colors',link:'/ThinBrick/Colors'},
        {text:'Textures',link:'/ThinBrick/Textures'},
        {text:'Sizes',link:'/ThinBrick/Sizes'}
    ],
     'Pavers':[
        {text:'Colors',link:'/Paver/Colors'},
        {text:'Sizes', link:'/Paver/Sizes'}
    ],
    'Pathway Aggregate':[ 
        
    
    ],
    'Resources':[
        {text:'Literature',link:'/Literature'},
        // {text:'BIM',link:'/BIM'},
        {text:'Specifications', link:'/Specifications'},
        {text:'Technical Notes', link:'/TechnicalNotes'},
        {text:'Brick Briefs',link:'/BrickBriefs'}
    ],
    'Who We Are':[
        {text:'Profile', link:'/Profile'},
        {text:'Videos', link:'/Videos'}
    ],
    'Careers':[
        {text:'Current Openings', link:'/Careers/CurrentOpenings'},
        {text:'Application', link:'https://endicottfiles.com/applicationForEmployment.pdf'},
        {text:'Solicitud', link:'https://endicottfiles.com/applicationForEmploymentSP.pdf'},
        {text:'Apply Online',link:'/Application'}] 
};
type LinkDataKey = keyof typeof linkData;
type PageSettings = 'light'|'dark'|'gradient';//this sets the only options that can be chosen.
interface NavigateProps {
    pageSettings: PageSettings;
}
export default function Navigate({pageSettings}:NavigateProps){
    const {Product,Page}=SplitPathname();
    const router = useRouter();
    const pageSetup = pageSettings;
    const [activeKey,setActiveKey]=useState<LinkDataKey | null>(null);
    const [mainMenuShow,setMainMenuShow]=useState(false);
    const [subShown,setSubShown]=useState(false);
    const navRef = useRef<HTMLElement>(null);
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setMainMenuShow(false);
                setSubShown(false); // Close submenus as well
                setActiveKey(null); // Reset active key
            }
        };
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    const openSub = (key:LinkDataKey)=>{ //the :string is need to tell it what type it is. This i believe is due to type script.
        if(key==='Pathway Aggregate'){
            router.push('/PathwayAggregate');
        }else{
            setActiveKey(key);
        
            if(!activeKey){
                setSubShown(true); 
            }else if(activeKey===key){
                setSubShown(false);
                setActiveKey(null)
            }


        }

        
    }
    
    


    const displayMenu = ()=>{
        setMainMenuShow(!mainMenuShow);
    }
    return(
        <nav ref={navRef} style={{zIndex:3}} role="navigation" className={` row   ${pageSetup==='gradient'? 'text-white':(pageSetup==='dark'?'text-white':(pageSetup==='light'?'text-black':''))}  holdNav  `}>
            <div className="col-12 p-0  ">
                <div className="row pt-2  d-flex justify-content-center justify-content-lg-start ">
                    <div className="col-7  col-md-5  col-xl-3 ">
                        <div className={`row  m-0 z-n1 fixed-top navBG ${pageSetup==='gradient'? 'gradient':(pageSetup==='dark'?'dark':(pageSetup==='light'?'light':''))} `}>
                        </div>
                        <div className="row  ">
                            <div className="col-7 col-md-12 d-flex justify-content-center ms-3 ms-md-0  pt-2  ">
                               {Page || Product?<Link href='/'><Image role="button"  src={pageSetup==='gradient' || pageSetup==='dark' ?'/assets/logoWhite.png':'/assets/logoBlack.png'} width={200} height={75} alt='Endicott logo. Click to go to home page'/></Link>:<Image role="button"  src={pageSetup==='gradient' || pageSetup==='dark' ?'/assets/logoWhite.png':'/assets/logoBlack.png'} width={200} height={75} alt='Endicott logo. Click to go to home page'/>}
                            </div>
                        </div>
                        <div className="row d-none d-md-flex text-center ">
                            <div className="col ">
                               {/* {Page || Product?<Link className={`text-decoration-none ${pageSetup==='gradient'? 'text-white':(pageSetup==='dark'?'text-white':(pageSetup==='light'?'text-black':''))} `} href='/'><span role="button" className="fs-5 logoLetterSpacing" aria-label='Click to go to the "Endicott Clay Products Company" Home Page.'>{Product==='FaceBrick'?'Endicott Face Brick':(Product==='ThinBrick'?'Endicott Thin Brick':(Product==='PathwayAggregate'?'Endicott Pathway Aggregate':(Product==='Paver'?'Endicott Clay Pavers':'Endicott Clay Products')))}</span></Link>:<span role="button" className="fs-5 logoLetterSpacing" aria-label='Click to go to the "Endicott Clay Products Company" Home Page.'>{Product==='FaceBrick'?'Endicott Face Brick':(Product==='ThinBrick'?'Endicott Thin Brick':(Product==='PathwayAggregate'?'Endicott Pathway Aggregate':(Product==='Paver'?'Endicott Clay Pavers':'Endicott Clay Products')))}</span>} */}
                               {Page || Product?<Link className={`text-decoration-none ${pageSetup==='gradient'? 'text-white':(pageSetup==='dark'?'text-white':(pageSetup==='light'?'text-black':''))} `} href='/'><span role="button" className="fs-5 logoLetterSpacing" aria-label='Click to go to the "Endicott Clay Products Company" Home Page.'>{Product==='FaceBrick'?'Endicott Face Brick':(Product==='ThinBrick'?'Endicott Thin Brick':(Product==='PathwayAggregate'?'Endicott Pathway Aggregate':(Product==='Paver'?'Endicott Clay Pavers':'Endicott Clay Products')))}</span></Link>:''}
                            </div>
                        </div>                
                    </div>
                    <div className="col d-flex d-xl-none justify-content-end me-4  ">
                        <Image role="button" className="hamburger" src={`${pageSetup==='gradient' || pageSetup==='dark'?'/assets/Navigation_Menu_Icon-Stone.png':'/assets/Navigation_Menu_Icon_Black.png'}`} width={30} height={30} alt="Hamburger menu button. Click to see options for further navigation"  onClick={()=>{displayMenu()}}/>
                    </div>
                    <div className={`col-12 col-xl-9 border-custom-navigation   d-xl-flex align-items-end justify-content-end text-end ${mainMenuShow?'d-block d-xl-flex ':'d-none'} `}> 
                        {
                            Object.keys(linkData).map((key)=>(
                                <div key={key} className="row d-flex justify-content-end  ">
                                    
                                    <div className="col-10 col-md-5 col-xl-auto   ">
                                        <button aria-label={`Links to go to the page for the option of ${key}  selected`} role="button"  className=" p-2 pb-0 me-2  bg-stone w-button  " onClick={()=>openSub(key as LinkDataKey)} > {key}</button>
                                        {activeKey === key && linkData[key].map((link, index) => ( // Conditional rendering and correct access
                                            <Link role="button" className="text-decoration-none d-flex justify-content-end " key={`${activeKey}-${index}`} href={link.link} target={link.link.includes("pdf")?"_blank":""} >
                                            <span className="p-2 pb-0 me-2 bg-black w-button d-block d-xl-none text-white text-center  " key={index}  >{link.text}</span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className={`row d-none  bg-black text-white p-0 m-auto d-xl-flex justify-content-end   ${subShown?'subMenuOpen':'subMenu'}   `}>
                    <div className="col p-0  m-auto d-inline-flex justify-content-end ">
                        {
                            activeKey &&(
                                linkData[activeKey].map((link,index)=>(
                                    <Link className="text-white" key={`${activeKey}-${index}`} href={link.link} target={link.link.includes("pdf")?"_blank":""} >
                                    <button role="button"  className={`m-0 pt-2 pb-1 me-4 `} aria-label="Links to go to the page for the option selected">{link.text}</button>
                                    </Link>
                                    
                                ))
                            )                            
                        }
                    </div>
                </div>
            </div>
        </nav>
    )

}