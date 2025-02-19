'use client';
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Navigate from "../component/navigate";
import ProductBox from "../component/ProductBox";
import { AggregateColor } from "../../../Types/ProductTypesPathwayAggregate";
import Link from "next/link";


export default function PathwayAggregate(){
    const [Data,setData]=useState<AggregateColor[]|null>(null);
    const [Description,setDescription]=useState<string | null>('Colors');
    const [Color,setColor]=useState<string>("Midnight");
    const [UnitTypes,setUnitTypes]=useState<string>('Imperial');
    
    const [Length,setLength]=useState<number>(1);
    const [Width,setWidth]=useState<number>(1);
    const [Depth,setDepth]=useState<number>(4);
    const [Volume,setVolume]=useState<number>(0);
    const [Tons,setTons]=useState<number>(0);
    useEffect(()=>{
        const fetchData = async () => {
            const res = await fetch('/JSON/PathwayAggregate.json');
            const json = await res.json();
            setData(json); 
            
        };
        fetchData();
    },[]);
const calculate = (event: React.ChangeEvent<HTMLInputElement>,Measurement:string)=>{
    const translateString = parseInt(event.target.value, 10);
    if(Measurement==='Length'){
        setLength(isNaN(translateString)?0:translateString);
    }else if(Measurement==='Width'){
        setWidth(isNaN(translateString)?0:translateString);
    }else if(Measurement==='Depth'){
        setDepth(isNaN(translateString)?0:translateString);
    }
    calculations(UnitTypes);
    
}

const handleClick = (value:string) => {
    setColor(value);
    
  };
    // $(function(){
    //     $("#colorSwatch").empty();
    //    $.each(pathwayJson,function(key1,data1){
    //         $("#colorSwatch").append(`
    //         <div  class=" col-4 col-lg-2 p-2 d-flex ">     
    //     <button role="button" class="card colorCards flex-fill" onClick="colorChange('${data1.name}','${data1.copy}','${data1.image}','${data1.altTag}')" >
    //         <img  class="img-fluid" alt="${data1.altTag}" src="${data1.image}"  />
    //         <div class="card-body w-100 p-0">
    //             <p class=" card-title univers-45-light text-rock ">${data1.name}</p>
    //         </div>
    //     </button>  
    //     </div>
    //         `)
    
    
            
    //    })
    //    $("#colorCallout").text(`Midnight Pathway Aggregate`)
    //    window.colorChange = function(colorName,copy,mainImage,altTag){
    //     $("#colorCallout").text(`${colorName} Pathway Aggregate`);
    //     $("#colorDescription").text(`${copy}`);
    //     $("#mainImage").attr('src',mainImage).attr('alt',altTag);
    //    }
    
    //    $('input[name="MeasureGroup"]').change(function() {
    //     if ($(this).is(':checked')) {
    //       const selectedValue = $(this).val();
    //      if(selectedValue === 'Metric'){
    //         $("#lengthLabel").text(`Project Length (Meters)`);
    //         $("#widthLabel").text(`Project Width (Meters)`);
    //         $("#depthLabel").text(`Project Depth (Centimeters)`);
    //         $("#volumeLabel").text(`Volume (Cubic Meter)`);
    //      }else{
    //         $("#lengthLabel").text(`Project Length (Feet)`);
    //         $("#widthLabel").text(`Project Width (Feet)`);
    //         $("#depthLabel").text(`Project Depth (Inches)`);
    //         $("#volumeLabel").text(`Volume (Cubic Yards)`);
    //      }
    //       // Replace the above line with your actual logic to update the data display
    //     }
    //   });
    
     //$(".onChange").on('change',()=>{calculations()});
    const radioChange = (value:string)=>{
        
        setUnitTypes(value);
        calculations(value);
    }
     const calculations = (value:string)=>{
       
        const newVolume = (value==='Imperial'?Depth/12:Depth/100)*Length*Width;
        const newTon = Math.ceil(value==='Imperial'?(newVolume/27)*1.1589:(newVolume*1.515783972)*.907185)
        setVolume(newVolume);
        setTons(newTon);

        
    //     const length = $("#MeasureLength").val();
    //     const width = $("#MeasureWidth").val();
    //     const depth = $("#MeasureDepth").val();
    //     const measureType = $("#Imperial").prop('checked');
    //     //const multiplication = ((measurementType === 'Imperial' ? measureDepth/12:measureDepth/100 )* measureLength * measureWidth);
    //     const multiplication = (measureType===true?depth/12:depth/100)*length*width;
    //     $("#volume").val(multiplication);
    //     if(measureType===true){
    //         const tons = Math.ceil((multiplication/27)*1.1589);
    //         $("#Tons").val(tons);
    //     }else{
    //         const tons = Math.ceil((multiplication*1.515783972)*.907185);
    //         $("#Tons").val(tons);
    //     }
      
        
        
    
    // }
    // calculations();
       
    
     }
     useEffect(()=>{
        calculations(UnitTypes);
     })


return(
    <div>
            <Navigate pageSettings="light" />
            <div className="container-fluid" aria-live="polite">
                
                <div className="row    " >
                    <div className="col-12 col-lg-6  pe-3">
                    <ProductBox setDescription={Description} productHeadLine='Eco-Friendly, Permeable Alternative to Decomposed Granite.'  ProductDescription='Create stunning, sustainable pathways for parks, campuses, and more with our recycled brick aggregate and Organic-Lock™ binder.' />
                    </div>
                    
                    <div className="col-12 col-lg-6   ">
                        <div className="row border-bottom">
                            <div className="col">
                                <h2 className="text-center text-uppercase univers-55-Roman text-rock fs-3 mt-3 mt-lg-0 ">Additional Information</h2>
                            </div>
                        </div>
                        <div className="row mt-auto justify-content-center pt-2"> 
                            <div className="col-6 col-lg-4 ps-lg-5">
                                <a role="button" href="#colorsLocation" onClick={() => setDescription('Colors')} className="d-block text-start mb-2 univers-55-Roman bg text-decoration-none p-md-2 text-rock"  >Colors</a>
                                <a role="button" href="#colorDescription" onClick={() => setDescription('Featured Project')} className="d-block text-start mb-2 univers-55-Roman bg text-decoration-none p-md-2 text-rock "  >Featured Project</a>
                                <a role="button" href="#installationLocation" onClick={() => setDescription('Installation')} className="d-block text-start mb-2 univers-55-Roman bg text-decoration-none p-md-2 text-rock ">Installation</a>
                            </div>
                            <div className="col-6 col-lg-4 ps-lg-5 ">                               
                                    <a role="button" href="#calculatorLocation" onClick={() => setDescription('Product Calculator')} className="d-block text-start mb-2 univers-55-Roman bg text-decoration-none p-md-2 text-rock " >Product Calculator</a>
                                    <a role="button" href="#packageLocation" onClick={() => setDescription('Packaging/Shipment')}className="d-block text-start mb-2 univers-55-Roman bg text-decoration-none p-md-2 text-rock ">Packaging/Shipment</a>
                                    <a role="button" href="#maintenanceLocation" onClick={() => setDescription('Maintenance')} className="d-block text-start mb-2 univers-55-Roman bg text-decoration-none p-md-2 text-rock ">Maintenance</a>    
                                    <a role="button" href="#Literature" onClick={() => setDescription('Literature')} className="d-block text-start mb-2 univers-55-Roman bg text-decoration-none p-md-2 text-rock " >Literature</a>
                            </div>
                            
                        </div>
                    </div>
                </div>
    
                <div className="row text-start mt-3 ps-3 pe-3 d-none d-lg-flex " >
                    <div className="col">
                        <p className="univers-55-Roman text-rock">Endicott Stabilized Pathway Brick Aggregate is the perfect choice for pedestrian traffic areas that need a natural appearance. Our stabilized pathway mix is made from recycled Endicott brick and an organic stabilizing binder from Organic-Lock™. Recycled brick and an organic binder make our pathway material a sustainable eco-friendly choice. In addition, recycled brick pathways are a more affordable alternative to decomposed granite, concrete, asphalt, or other hardscape alternatives. Endicott Stabilized Pathway Brick Aggregate is ideal for greenspaces at corporate campuses, parks, nature paths, and public spaces.</p>
                        <p className="univers-55-Roman text-rock">Endicott Stabilized Pathway Brick Aggregate is screened through a carefully controlled grinding system for precise sieve distribution. Having the proper mix of particle sizing promotes permeability while also allowing for necessary compaction. The Organic-Lock™ binder absorbs excess water through swelling and then gradually releases the water through evaporation into the atmosphere as well as through the base course into the groundwater table. Like our permeable clay paver application, our stabilized pathway has a hydrologic function in addition to providing a desirable aesthetic look.</p>
                    </div>
                </div>
                
               
                <div className="row text-start mt-3 ps-3 pe-3 d-lg-none ">
                    <div className="col">
                        <p className="univers-55-Roman text-rock">Endicott Stabilized Pathway Brick Aggregate is the perfect choice for pedestrian traffic areas that need a natural appearance. Our stabilized pathway mix is made from recycled Endicott brick and an organic stabilizing binder from Organic-Lock™. Recycled brick and an organic binder make our pathway material a sustainable eco-friendly choice. In addition, recycled brick pathways are a more affordable alternative to decomposed granite, concrete, asphalt, or other hardscape alternatives. Endicott Stabilized Pathway Brick Aggregate is ideal for greenspaces at corporate campuses, parks, nature paths, and public spaces.</p>
                        <p id="colorsLocation" className="univers-55-Roman text-rock">Endicott Stabilized Pathway Brick Aggregate is screened through a carefully controlled grinding system for precise sieve distribution. Having the proper mix of particle sizing promotes permeability while also allowing for necessary compaction. The Organic-Lock™ binder absorbs excess water through swelling and then gradually releases the water through evaporation into the atmosphere as well as through the base course into the groundwater table. Like our permeable clay paver application, our stabilized pathway has a hydrologic function in addition to providing a desirable aesthetic look.</p>
                    </div>
                </div>


                <div className="row mt-5" >
                    <div className="col">
                      <div className="row">
                        <div className="col">
                          <h2  className="fs-3 text-uppercase text-center text-rock univers-55-Roman">Colors</h2>
                          <p className="text-start ps-3 pe-3 text-rock univers-55-Roman">Endicott Pathway Aggregate offers a stunning spectrum of colors to enhance any landscape design. From the bold elegance of Midnight black, crafted from recycled brick, to the earthy warmth of Butternut, each hue brings unique character and charm to your pathways and outdoor spaces. Embrace the fiery vibrancy of Burning Sky, the subtle elegance of Dove Gray, or the warm, inviting tones of Coral Red. Whether you seek to create a modern oasis, a tranquil retreat, or a vibrant focal point, Endicott has the perfect aggregate color to complement your vision.</p>
                        </div>
                      </div>
                      <div id="colorSwatch" className="row justify-content-lg-center mt-lg-3  ">
                      {
                        Data?.map((value)=>(
                            <div key={value.index} className=" col-4 col-lg-2 p-2 d-flex ">                      
                                <button role="button" className="card colorCards flex-fill" onClick={() => handleClick(value.name)}  >
                                    <Image src={value.image} alt={value.altTag} width={500} height={500}/>
                                        <div className="card-body w-100 p-0">
                                            <p id="color" className=" card-title univers-45-light text-rock ">{value.name}</p>
                                        </div>
                                </button>               
                            </div>   
                        ))
                      }
                       
                             
                      </div>
                      <div className="row mt-5  ">
                        {
                            Data?.map((item,index)=>(
                                item.name===Color? //start here
                                <div key={index} className="col text-start ps-5 pe-5">
                                    
                                <div className="row">
                                  <div className="col">
                                    <h3 id="colorCallout" className="text-center text-uppercase univers-55-Roman text-rock">{item.name}</h3>
                                    <h4 className="text-center museo-light  ">Bold Elegance from Recycled Brick</h4>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="col-0 col-lg-4" >
                                     
                                    <Image id="mainImage" className="Image width={500} height={500} -fluid " width={500} height={500} src={item.image} alt={item.altTag}/>
                                  </div>
                                  <div  className="col mt-lg-3">
                                    <span id="colorDescription" className="text-start univers-55-Roman text-rock">{item.copy} </span>
                                  </div>
                                </div>
                              </div>:""
                              



                            ))
                        }
                        {/* <div className="col text-start ps-5 pe-5">
                           
                          <div className="row">
                            <div className="col">
                              <h3 id="colorCallout" className="text-center text-uppercase univers-55-Roman text-rock">Pathway Aggregate</h3>
                              <h4 className="text-center museo-light  ">Bold Elegance from Recycled Brick</h4>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-0 col-lg-4" >
                               
                              <Image id="mainImage" className="Image width={500} height={500} -fluid " width={500} height={500} src={MainImage} alt='Endicott Midnight Pathway Aggregate - a dark gray to black aggregate that is mixed with Organic-lock, for architectural landscaping'/>
                            </div>
                            <div  className="col mt-lg-3">
                              <span id="colorDescription" className="text-start univers-55-Roman text-rock">Make a bold statement with the dramatic allure of Midnight aggregate. Crafted from recycled black brick, this deep charcoal material adds an urban edge to any landscape. It’s multi-faceted texture and dramatic obsidian hue create a stunning contrast against greenery, making it the perfect choice for modern designs, minimalist gardens, and any setting where you want a touch of sophistication. Sustainable and stylish, Midnight aggregate will add elegance to your outdoor spaces. </span>
                            </div>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>



                  <div className="row " >
                    
                    <div className="col">
                        <div  className="row mt-5">
                            <div className="col">
                                <div className="row">
                                    <div className="col text-center">
                                        <h2 className="fs-3 text-uppercase  univers-55-Roman text-rock">Featured Project: Endicott Headquarters Lakeside Pathway</h2>
                                        <h3 className="museo-light text-rock ">A Pathway to Progress</h3>
                                    </div>
                                </div>
                                <div className="row d-flex justify-content-center">
                                    <div className="col-10 ">
                                        {/* <video className="w-100 h-auto" title="Endicott Pathway Aggregate Project" aria-label="Endicott Pathway" muted autoPlay loop playsInline className="videoSize "  controls >
                                            <source src="https://endicottfiles.com/endicott_aggregate.mp4" type="video/mp4" ></source>
                                            
                                        </video> */}
                                        
                                       
                                    </div>
                                </div>
                                <div className="row d-flex justify-content-center">
                                    <div className="col-10">
                                        <p id="installationLocation" className="text-start mt-3 text-rock">The Endicott Clay Products corporate office recently transformed its outdoor space with a beautiful and sustainable pathway made from Endicott Stabilized Pathway Brick Aggregate. This eco-friendly material, composed of recycled brick and an organic binder, not only enhances the natural aesthetic of the landscaping but also provides a durable and low-maintenance walking surface. The pathway’s permeable nature helps to manage stormwater runoff, contributing to a healthier environment. This project demonstrates the versatility and benefits of Endicott Stabilized Pathway Brick Aggregate as a sustainable and attractive choice for pedestrian traffic areas.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




                <div  className="row mt-5 " >
                   
                    <div className="col">
                        <div className="row d-flex justify-content-center">
                            <div className="col-10  ">
                                <h2 className="text-uppercase text-center univers-55-Roman text-rock fs-3">Installation Details</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="row d-flex justify-content-center">
                                    <div className="col-10">
                                        <h3 className="text-start univers-55-Roman text-rock">1. Base Preparations</h3>
                                    </div>
                                </div>
                                <div className="row d-flex justify-content-center">
                                    <div className="col-10">
                                        <p className="text-start text-rock univers-55-Roman ">Excavate and prepare the subgrade to the depth required in your specifications (taking into consideration both the depth of compacted base and depth of compacted aggregate).</p>
                                    </div>
                                </div>
                                <div className="row d-flex justify-content-center">
                                    <div className="col-12 col-lg-5 mt-3   text-start">
                                        <span className="text-rock univers-55-Roman">It is important to start with a well-compacted subgrade before the base material is introduced. Compact the subgrade to 95% Modified Proctor Density using a single or double drum roller or vibratory compactor.</span>
                                        <Image width={500} height={500}  className="mt-2 Image width={500} height={500} -fluid w-100" src="https://endicottfiles.com/compacted-subgrade-512.png" alt="image of the compacted subgrade needed for proper installation"/>
                                    </div>
                                    <div className="col-12 col-md-5 mt-3    text-start ">
                                        <span className="text-rock univers-55-Roman">Once the subgrade has been efficiently compacted, you can introduce the base material to the depth required for your installation.</span>
                                        <Image width={500} height={500}  className=" mt-2 Image width={500} height={500} -fluid  bottom-0 w-100 " src="https://endicottfiles.com/compacted-base-512.png" alt="image of the compacted that is properly installed"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row  mt-5">
                            <div className="col">
                                <div className="row d-flex justify-content-center">
                                    <div className="col-10">
                                        <h3 className="text-start text-rock">2. Snowball Test</h3>
                                    </div>
                                </div>
                                <div className="row d-flex justify-content-center">
                                    <div className="col-12 col-md-5 text-start">
                                        <span className="text-rock">Before spreading the Organic-Lock™ Stabilized Aggregate, it is very important to make sure that the proper moisture level of the material has been achieved. The best way to do this is by performing a snowball test.</span>
                                    </div>
                                    <div className="col-12 col-md-5">
                                        <Image width={500} height={500}  className="Image width={500} height={500} -fluid w-100" src="https://endicottfiles.com/ideal-moisture.jpg" alt="Snowball test shows the correct amount of moisture needed when installing the Endicott Pathway Aggregate, mixed with organic-lock"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col">
                                <div className="row d-flex justify-content-center">
                                    <div className="col-10">
                                        <h3 className="text-start univers-55-Roman text-rock">3. Spreading Material</h3>
                                    </div>
                                </div>
                                <div className="row d-flex justify-content-center">
                                    <div className="col-12 col-md-5 text-start">
                                        <p className="univers-55-Roman text-rock">With properly hydrated OLSA, you can begin the installation process.<br/><br/>
                                        Using an Asphalt/Paver installer is the most efficient and effective means of spreading the hydrated Organic-Lock™ Stabilized Aggregate (OLSA) as it provides a consistent depth of placement. Continually feeding the spreader can result in a seamless installation period that is both technically accurate and cost-effective.<br/><br/>
                                        <span className="fw-bold">Spread and compact the OLSA material in 3-4 inch lifts.</span>
                                        </p>
                                    </div>
                                    <div className="col-12 col-md-5">
                                        <Image width={500} height={500}  className="Image width={500} height={500} -fluid w-100" src="https://endicottfiles.com/spreading-material.jpg" alt="image of machinerey spreading aggregate"/>
                                    </div>
        
                                </div>
                                <div className="row d-flex justify-content-center mt-4">
                                    <div className="col-12 col-md-5 justify-content-center text-start">
                                        <Image width={500} height={500}  className="Image width={500} height={500} -fluid w-100" src="https://endicottfiles.com/hand-raking.jpg" alt="Hand raking Endicott Pathway Aggregate allows you to spread the aggregate by hand." />
                                        <span className="univers-55-Roman text-rock">Hand raking can be used in areas where an Asphalt/Paver installer is not possible. In these situations, it’s important to keep a strong focus on depth consistency across the installation.</span>
                                    </div>
                                    <div className="col-12 col-md-5 justify-content-center text-start">
                                        <Image width={500} height={500}  className="Image width={500} height={500} -fluid w-100" src="https://endicottfiles.com/spread-over-height-of-edge.jpg" alt="Making sure that the Endicott Pathway Aggregate is a little higher that its borders to allow for compaction." />
                                        <span className="text-start univers-55-Roman text-rock">Be sure to compensate for the expected depth of compaction when finalizing the end depth.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col">
                                <div className="row d-flex justify-content-center">
                                    <div className="col-10">
                                        <h3 className="text-start text-rock univers-55-Roman">4. Compaction</h3>
                                    </div>
                                </div>
                                <div className="row d-flex justify-content-center">
                                    <div className="col-12 col-md-5 text-start">
                                        <span className="text-rock univers-55-Roman">Compact Endicott Pathway Aggregate with a minimum 1 ton static roller. Make 5-6 passes or continue until visible lines are eliminated.</span>
                                    </div>
                                    <div className="col-12 col-md-5">
                                        <Image width={500} height={500}  className="Image width={500} height={500} -fluid w-100" src="https://endicottfiles.com/compaction.jpg" alt="A 1 ton roller can be used to compact the aggregate thouroughly."/> 
                                    </div>
                                </div>
                                <div className="row mt-4 d-flex justify-content-center">
                                    <div className="col-12 col-md-5 text-start">
                                        <Image width={500} height={500}  className="Image width={500} height={500} -fluid d-block w-100" src="https://endicottfiles.com/compacting-edge33.jpg" alt="Use a hand compactor to compact edges."/>
                                        <span className="text-rock univers-55-Roman"><span className="fw-bold">Be sure to hand compact edges or hard to reach areas prior to compaction.</span> The edges of any pathway will often be prone to the most stress as these are often rainfall collection zones. This is a very strong reason why we recommend non-moveable edges, along with a strong compaction right up to the edge.</span>
                                    </div>
                                    <div className="col-12 col-md-5 text-start">
                                        <Image width={500} height={500}  className="Image width={500} height={500} -fluid d-block w-100" src="https://endicottfiles.com/Compaction-5.jpg" alt="Use a vibrator plate compactor when needed."/>
                                        <span className="text-rock univers-55-Roman">In areas where a one-ton roller is not possible or available, it’s possible to use a vibratory plate compactor. If using a vibratory plate compactor, be sure to add a slight mist of water to ensure dry material is not separated at the surface.</span>
                                    </div>
                                </div>
                             </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col">
                                <div className="row d-flex justify-content-center">
                                    <div className="col-10">
                                       <h3 className="text-start text-rock univers-55-Roman">5. Final Watering</h3>
                                    </div>
                                </div>
                                <div className="row d-flex justify-content-center mt-3">
                                    <div className="col-12 col-md-5 text-start">
                                        <span className="text-rock univers-55-Roman">After compaction is complete, it is recommended to provide a final top-down soaking with a water spray to ensure that the Organic-Lock™ is activated on the surface and all the way throughout its profile, as some areas may be prone to drying throughout the installation process.</span>
                                    </div>
                                    <div id="calculatorLocation" className="col-12 col-md-5">
                                        <Image width={500} height={500}  className="Image width={500} height={500} -fluid w-100 " src="https://endicottfiles.com/compaction-1.jpg" alt="After Endicott Pathway Aggregate is installed and compacted it is good to spray it to make sure the Organic-Lock™ sets."/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="row  d-flex justify-content-center mt-5 " >
                    
                    <div className="col">
                        <div className="row">
                            <div className="col text-center">
                                <h2 className="fs-3 text-uppercase text-rock univers-55-Roman ">Endicott Pathway Aggregate Product Calculator</h2>
                                <h3 className="museo-light text-rock ">Endicott Stabilized Pathway Brick Aggregate - Quantity Calculator</h3>
                            </div>                
                            <div className="row d-flex justify-content-center mx-auto mt-3">                    
                                <div className="col-12 col-md-5 border bg-stone-25 pt-5 pb-5 ps-5 pe-5 rounded-3">
                                    <div className="row text-end d-flex justify-content-center mb-3">
                                        <div className="col-6" >
                                            <input  className="ms-2 "  type="radio" id="Imperial" name="MeasureGroup" value="Imperial"  checked={UnitTypes==='Imperial'} onChange={()=>{radioChange('Imperial')}} />
                                            <label htmlFor="Imperial">Imperial</label> 
                                        </div>
                                        <div className="col-6 text-start" >
                                            <input  className="ms-2 " type="radio" id="Metric" name="MeasureGroup" value="Metric" checked={UnitTypes==='Metric'} onChange={()=>{radioChange('Metric')}} />
                                            <label htmlFor="Metric">Metric</label> 
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col d-flex justify-content-lg-end   ">
                                            <label id="lengthLabel" htmlFor="MeasureLength">Project Length ({UnitTypes==='Imperial'?'Feet':'Meters'})</label>
                                        </div>
                                        <div className="col d-flex justify-content-start">
                                            <input type="number" className="onChange" id="MeasureLength" value={Length} onChange={(event)=>(calculate(event,'Length'))} aria-label="Project Length in Feet or Meter" />
                                            
                                        </div>
                                    </div>
                                    <div className="row  mb-3">
                                        <div className="col d-flex justify-content-lg-end   ">
                                            <label id="widthLabel" htmlFor="MeasureWidth">Project Width ({UnitTypes==='Imperial'?'Feet':'Meters'})</label>
                                        </div>
                                        <div className="col d-flex justify-content-start">
                                            <input type="number" className="onChange" id="MeasureWidth" value={Width} onChange={(event)=>(calculate(event,'Width'))} aria-label="Project Width in Feet/Meters" placeholder="Enter Length"/>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col d-flex justify-content-lg-end  ">
                                            <label id="depthLabel" htmlFor="MeasureDepth">Project Depth ({UnitTypes==='Imperial'?'Inches':'Centimeters'}) </label>
                                        </div>
                                        <div className="col d-flex justify-content-start">
                                            <input type="number" className="onChange" id="MeasureDepth" value={Depth} onChange={(event)=>(calculate(event,'Depth'))} aria-label="Project Depth in Feet/Meters" placeholder="Enter Depth"/>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col d-flex justify-content-lg-end">
                                            <label id="volumeLabel" htmlFor="volume">Volume ({UnitTypes==='Imperial'?'Cubic Feet':'Cubic Meter'})</label>
                                        </div>
                                        <div className="col d-flex justify-content-start">
                                            <input type="number" id="volume" value={Volume} disabled/>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col d-flex justify-content-lg-end">
                                            <label htmlFor="Tons">Weight Needed(U.S. Ton)</label>
                                        </div>
                                        <div className="col d-flex justify-content-start">
                                            <input type="number" id="Tons" value={Tons} disabled />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 text-start">
                                    <p className="text-rock univers-55-Roman">Effortlessly calculate the precise amount of Endicott Pathway Aggregate you need for your project, saving you time and money. Our calculator includes a metric option for quick conversions to U.S. Tons. Please note that all amounts are rounded up to the nearest Ton.
                                        <br />
                                        <br />
                                        Ready to get started? Use our calculator now and bring your project to life with the beauty and durability of Endicott Pathway Aggregate.
                                        <br/><br/><span id="packageLocation" className="fs-4 text-rock">Contact us at 402-729-3315 or email us at endicott@endicott.com</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row mt-5  " >
                   
                    <div className="col ">
                        <div className="row  ">
                            <div className="col text-center ">
                                <h2 className="fs-3 text-uppercase text-rock univers-55-Roman">Endicott Pathway Aggregate - Packaging and Shipping</h2>
                                <h3 className="museo-light text-rock ">Endicott Stabilized Pathway Brick Aggregate - Efficient Packaging and Shipping</h3>
                            </div>
                        </div>  
                                  
                        <div className="row mt-5 d-flex justify-content-center ">
                            <div className="col-12 col-lg-5 text-start ">
                                <h3 className="text-rock">Advantages of Super Sacks</h3>
                                    <ul className="listBullets ">
                                        <li className="text-rock">Lift loops for handling with forklifts or cranes for efficient transport and storage.</li>
                                        <li className="text-rock">Durable and resistant to tearing and moisture.</li>
                                        <li className="text-rock">Efficient space utilization.</li>
                                        <li className="text-rock">Cost-effective</li>
                                        <li className="text-rock">Environmental benefits of reusability and recycling.</li>
                                    </ul>
                                    <span className="museo-light fs-5 ">For an additional charge, the super sacks can be shipped on pallets.</span>
                                </div>
                                <div id="maintenanceLocation" className="col-12 col-lg-7">
                                    <Image width={1500} height={1500}  className="img-fluid" src="https://endicottfiles.com/Super-Sacks.jpg" alt="Truck delivering Endicott Pathway Aggregate in super sacks."/>
                                </div>
                            </div>
                        
                    </div>
                </div>


                <div className="row mt-5"  >
                    
                <div className="col">
                    <div className="row ">
                        <div className="col text-center">
                            <h2 className="fs-3 text-rock univers-55-Roman text-uppercase ">Endicott Pathway Aggregate Maintenance</h2>
                            <h3 className="museo-light">Maintenance analysis program required – catch an issue before it develops.</h3>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="col text-start mb-3 ps-3 pe-3">
                            <h3 className="univers-55-Roman text-rock">Erosion Damage</h3>
                            <span className="univers-55-Roman text-rock">Erosion is often the symptom and not the disease. Ongoing erosion (erosion in the same location) is often the symptom of a flaw in the watershed system surrounding the project area. This issue can often be reduced, and even eliminated, by adjusting the areas surrounding the aggregate surface. Divert water where possible using culverts, berms, and drains. If you do experience erosion damage, first look at ways to get the water away or slow the water down that’s causing the damage. Second, replace the lost aggregate with new blended aggregate material following the guidelines found in the Maintenance Page link below.</span>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="col text-start mb-3 ps-3 pe-3">
                            <h3 className="univers-55-Roman text-rock">Removing Debris</h3>
                            <span className="univers-55-Roman text-rock">Remove grass clippings, soil, debris or organic material by mechanically blowing or hand raking as needed.</span>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="col text-start mb-3 ps-3 pe-3">
                            <h3 className="univers-55-Roman text-rock">Removing Snow</h3>
                            <span className="univers-55-Roman text-rock">When plowing snow, use a shoe lift or rubber baffle on the blade of the plow to lift the blade up ¼” off the surface. Extra precautions should always be taken during the shoulder seasons (i.e. just before and just after winter) while the temperature hovers around freezing, as this is when the material is most prone to damage (i.e.the ground is not yet frozen).</span>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="col text-start mb-3 ps-3 pe-3">
                            <h3 className="univers-55-Roman text-rock">Excess Loose Material</h3>
                            <span className="univers-55-Roman text-rock">As the surface weathers with traffic and time, the larger particles of the aggregate will loosen on the surface to create a natural look that leads to the “crunch underfoot” texture that is often sought after in natural settings. If loose material exceeds a ¼” depth, redistribute the particles over a greater surface, scarify the surface to a depth of 1”, water to a 1” depth, and compact with a roller of no less than 1000 lbs. In areas where a large roller is not available, you can use a vibratory plate tamper or a manual hand tamper if needed. Keep traffic off for 24-72 hours.</span>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="col-12 text-start mb-3 ps-3 pe-3">
                            <h3 className="univers-55-Roman text-rock">Rejuvenation/Fixing Damaged Area</h3>
                            <span className="univers-55-Roman text-rock">Soak, scarify with a rake or nail drag and compact. Consult your dealer if you feel more material is needed to be integrated.</span>
                        </div>
                        <div className="col">
                            <Image width={500} height={500}  id="Literature" src="https://endicottfiles.com/fixing-damaged-areas-600x260.jpg" className="Image width={500} height={500} -fluid" alt="Image for fixing damage. Soak, Rake, Compact"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                
                <div className="col-12">
                    <div className="row">
                        <div className="col">
                            <h2 className="fs-3 text-rock univers-55-Roman text-uppercase mt-5 text-center ">Literature</h2>
                            <h3 className="museo-light text-rock text-center ">Find the perfect pathway aggregate for your project. Explore our literature for inspiration and technical data.</h3>
                        </div>

                    </div>
                    <div className="row d-flex justify-content-center">
                        <div className="col-4" role="button" >
                            <Link href='https://endicottfiles.com/PathwayAggregate.pdf' target="_blank" >
                            <Image width={500} height={500} alt="image of literature"  src="https://endicottfiles.com/PathwayAggregateP1.jpg"/>
                            </Link>
                            
        
                        </div>
                        <div className="col-4" role="button" >
                        <Link href='https://endicottfiles.com/PathwayAggregate.pdf' target="_blank" >
                            <Image width={500} height={500} alt="image of literature"   src="https://endicottfiles.com/PathwayAggregateP2.jpg"/>
                        </Link>
                        </div>
                    </div>

                </div>
               
                
            </div>







                
            </div>

		
  	
		

		
		
</div>
)

}

