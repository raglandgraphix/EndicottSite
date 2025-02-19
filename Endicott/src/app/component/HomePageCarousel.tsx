'use client';
import {  useRef } from "react";
import { Carousel } from "react-bootstrap";
//import { Metadata } from "next";
// interface CaroProps{
//     onInformationChange:(IsVideoLoaded:boolean, divHeight:number)=> void;
// }

// export default function HomePageCarousel(){
//     const divRef = useRef<HTMLDivElement>(null);
//      const [divHeight, setDivHeight] = useState(0);
//     const videoRef = useRef<HTMLVideoElement>(null); 
//     const [isVideoLoaded,setIsVideoLoaded]=useState(false);
//     const handleCarouselLoad = () => {
//         if (divRef.current) {
//         const height = divRef.current.clientHeight;
//         setDivHeight(height);
//         }
//     };
//     useEffect(() => {
//         const checkVideoLoad = () => {
//         if (videoRef.current && videoRef.current.readyState === 4) {
//             handleCarouselLoad();
//             setIsVideoLoaded(true);
//         } else {
//             setTimeout(checkVideoLoad, 100);
//         }
//         };
//         checkVideoLoad(); // Start checking for video load
//         const updateHeight = () => {
//         if (divRef.current) {
//             const height = divRef.current.clientHeight;
//             setDivHeight(height);
//         }
//         };
//         window.addEventListener('resize', updateHeight);
//         return () => window.removeEventListener('resize', updateHeight);
//     }, []); 
// export default function HomePageCarousel({ onInformationChange }: CaroProps): JSX.Element {
export default function HomePageCarousel(){
    const divRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    // const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    // const [localCarouselHeight, setLocalCarouselHeight] = useState(0);
    // const handleVideoLoad = useCallback(() => {
    //     calculateHeight(); // Call the height calculation function
    // }, []);

    // const calculateHeight = () => {
    //     if (divRef.current) {
    //         const height = divRef.current.clientHeight;
    //         setLocalCarouselHeight(height);
    //         onInformationChange(true, height);
    //         setIsVideoLoaded(true);
    //     }
    // };

    // useEffect(() => {
    //     const video = videoRef.current;
    //     const div = divRef.current;

    //     if (video && div) {
    //         const handleResize = () => {
    //             calculateHeight();
    //         };

    //         video.addEventListener('canplay', handleVideoLoad);
    //         window.addEventListener('resize', handleResize);

    //         // Crucial: Call calculateHeight AFTER the component mounts
    //         // and the ref is attached to the DOM.  We use a setTimeout
    //         // to ensure the DOM is ready.  A zero delay is often sufficient.
    //         setTimeout(calculateHeight, 0);

    //         return () => {
    //             video.removeEventListener('canplay', handleVideoLoad);
    //             window.removeEventListener('resize', handleResize);
    //         };
    //     }
    // }, [handleVideoLoad, onInformationChange]);
  
    // const handleCarouselLoad = () => {
    //   if (divRef.current) {
    //     const height = divRef.current.clientHeight;
    //     onInformationChange(isVideoLoaded, height);
    //   }
    // };
  
    // useEffect(() => {
    //   const checkVideoLoad = () => {
    //     if (videoRef.current && videoRef.current.readyState === 4) {
    //       handleCarouselLoad();
    //       setIsVideoLoaded(true);
    //     } else {
    //       setTimeout(checkVideoLoad, 100);
    //     }
    //   };
  
    //   checkVideoLoad();
  
    //   const updateHeight = () => {
    //     if (divRef.current) {
    //       const height = divRef.current.clientHeight;
    //       onInformationChange(isVideoLoaded, height);
    //     }
    //   };
  
    //   window.addEventListener('resize', updateHeight);
  
    //   return () => window.removeEventListener('resize', updateHeight);
    // }, [isVideoLoaded, onInformationChange]);

    return(
        <div ref={divRef} className="col p-0" >
        <Carousel className=" p-0  " variant="light" fade interval={null}   >
            <Carousel.Item className="   d-flex justify-content-center " style={{minHeight:'110vh'}} >
            <div className="d-flex justify-content-center vidHold  " >
                <video ref={videoRef}  className="object-fit-cover w-100" aria-label="video of East Prairie Elementary School" muted autoPlay loop playsInline  >
                <source   src="https://endicottfiles.com/East_Prarie_2024_Montage_V1_Compressed.mp4" type="video/mp4" ></source>
                </video>
            </div> 
            <Carousel.Caption className="text-white mb-5 text-start  " style={{bottom:'150px'}}>
                <h2 className="museo-light d-block">East Prairie Elementary School</h2>
                <p className="d-block" >Color: <span> Desert Ironspot Light, Medium Ironspot #77</span></p>
                <p className="d-block">Size: <span> Utility</span></p>
                <p className="d-block">Location: <span> Skokie,IL</span></p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="   d-flex justify-content-center " style={{minHeight:'110vh'}} >
            <div className="d-flex justify-content-center vidHold  " >
                <video ref={videoRef}  className="object-fit-cover w-100" aria-label="video of East Prairie Elementary School" muted autoPlay loop playsInline  >
                <source   src="https://endicottfiles.com/BoysTown-Compressed.mp4" type="video/mp4" ></source>
                </video>
            </div> 
            
            <Carousel.Caption className="text-white mb-5 text-start  " style={{bottom:'150px'}}>
                <h2 className="museo-light d-block">Boys Town Education Center</h2>
                <p className="d-block" >Color: <span> Ivory Blend, Desert Ironspot, Desert Sands</span></p>
                <p className="d-block">Size: <span> Modular, Norman, Closure, Utility</span></p>
                <p className="d-block">Location: <span> Boys Town, NE</span></p>
            </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>
    )
}