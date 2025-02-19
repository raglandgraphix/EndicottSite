import Image from "next/image";

interface FooterProps{
    pageSetUp:string;
}

export default function footer({pageSetUp}:FooterProps){
    return(
        <div className="container-fluid">
            <div className="row mt-5">
    <div className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-start">
      <a href="https://endicottfiles.com/Privacy_Policy.pdf" target="_blank" className={`${pageSetUp==='light'? 'text-black':'text-white'} d-inline-block me-lg-5 ms-lg-5`}>Privacy and Legal Terms </a>
      {/* <a href="#" className={`${pageSetUp==='light'? 'text-black':'text-white'} d-inline-block  `}>Careers </a> */}
    </div>
    <div className="col d-flex justify-content-center justify-content-lg-end">
    {/* we need to write js that will set the year to the current year */}
      <p className={`${pageSetUp==='light'? 'text-black':'text-white'} me-5 ms-5 mt-5 ms-lg-0 mt-lg-0`}>© Endicott-2025 • 402-729-3315 • endicott@endicott.com</p>
    </div>
  </div>
  <div className="row">
    <div className="col svgWhite d-flex justify-content-center justify-content-md-end mt-5 me-md-5 text-secondary">
      <a href="https://www.linkedin.com/company/1242322" target="_blank" aria-label="An element that includes the Icon for LinkedIn that when clicked will open a tab that goes to the Endicott LinkedIn page">
        <div className={`social-circle ${pageSetUp==='light'?'imageInvert':''}  `}>
          <Image className="SocialIcon " src="/assets/SocialLogos/linkedin.svg" width={25} height={25} aria-label="An image of the LinkedIn logo" alt="LinkedIn Logo"/>
        </div>
      </a>
      <a href="https://www.instagram.com/endicottbrick/" target="_blank" aria-label="An Element that includes the icon for instagram, that when clicked will open a tab that goes to the Endicott Instagram page">
        <div className={`social-circle ${pageSetUp==='light'?'imageInvert':''}  `}>
          <Image className="SocialIcon  " src="/assets/SocialLogos/instagram.svg" width={30} height={30} aria-label="An image of the Intagram logo" alt="Instagram Logo"/>
        </div>
      </a>
      <a href="https://www.facebook.com/endicottbrick/" target="_blank" aria-label="An Element that includes the icon for Facebook, that when clicked will open a tab that goes to the Endicott Facebook page.">
        <div className={`social-circle ${pageSetUp==='light'?'imageInvert':''}  `}>
          <Image className="SocialIcon" src="/assets/SocialLogos/facebook.svg" width={25} height={25} aria-label="An image of the Facebook logo" alt="Facebook logo"/>
        </div>
      </a>
      <a href="https://www.tiktok.com/@endicottbrick" target="_blank" aria-label="An element that includes the icon for TikTok, that when clicked will open a tab that goes to the Endicott TikTok page.">
        <div className={`social-circle ${pageSetUp==='light'?'imageInvert':''}  `}>
          <Image className="SocialIcon" src="/assets/SocialLogos/tiktok.svg" width={25} height={25} aria-label="An image of the TikTok logo" alt="TikTok Logo"/>
        </div>
      </a>
      {/* <a href="https://x.com/EndicottBrick" target="_blank" aria-label="An element that includes the icon for twitter also known as X, that when clicked will open a tab that goes to the Endicott Twitter or X page.">
        <div className={`social-circle ${pageSetUp==='light'?'imageInvert':''}  `}>
          <Image className="SocialIcon" src="/assets/SocialLogos/twitter-x.svg" width={25} height={25} aria-label="An image of the Twitter or X logo" alt="Twitter or X logo"/>
        </div>
      </a> */}
    </div>
  </div>
  <div className="row">
    <p>This site uses cookies to improve your experience </p>
  </div>

        </div>
    )
}