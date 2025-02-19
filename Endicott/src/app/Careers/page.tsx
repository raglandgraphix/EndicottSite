'use client'
import React from "react";
import { useState } from "react";
import Navigate from "../component/navigate";
import Footer from "../component/footer";
import ProductBox from "../component/ProductBox";

export default function Careers(){
    const [firstName, setFirstName] = useState<string>('');
    const [middleName,setMiddleName]= useState<string>('');
    const [lastName,setLastName]= useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [position,setPosition]=useState<string>('');
    const [startDate,setStartDate]=useState<string>('');
    const [StreetAddress,setStreetAddress]=useState<string>('');
    const [City,setCity]=useState<string>('');
    const [State,setState]=useState<string>('');
    const [Zipcode,setZipcode]=useState<string>('');
    const [MainPhone,setMainPhone]=useState<string>('');
    const [OtherPhone,setOtherPhone]=useState<string>('');
    const [Fulltime,setFulltime]=useState<boolean>(false);
    const [Parttime,setParttime]=useState<boolean>(false);
    const [Temporary,setTemporary]=useState<boolean>(false);
    const [FirstShift,setFirstShift]=useState<boolean>(false);
    const [SecondShift,setSecondShift]=useState<boolean>(false);
    const [ThirdShift,setThirdShift]=useState<boolean>(false);
    //const [message, setMessage] = useState<string>('');
    //const [status, setStatus] = useState<string>('');
    const [PEYes,setPEYes] = useState<boolean>(false);
    const [PENo,setPENo] = useState<boolean>(false);
    const [CBYes,setCBYes] = useState<boolean>(false);
    const [CBNo,setCBNo] = useState<boolean>(false);
    const [AgeYes,setAgeYes] = useState<boolean>(false);
    const [AgeNo,setAgeNo] = useState<boolean>(false);
    // const [PEChecked, setPEChecked] = useState<boolean | null>(null);
    // const [CBChecked, setCBChecked] = useState<boolean | null>(null);
    // const [AgeChecked, setAgeChecked] = useState<boolean |  null>(null);
    const [CitizenYes, setCitizenYes] = useState<boolean>(false);
    const [CitizenNo, setCitizenNo] = useState<boolean>(false);
    //const [CitizenChecked, setCitizenChecked] = useState<boolean |  null>(null);
    const [Signature,setSignature]=useState<string>('')
    const [Agree,setAgree]=useState<boolean>(false);
    const [Language,setLanguage]=useState<string>('eng')//esp for spanish and eng for english

    const [showModal, setShowModal] = useState(false); // State for modal visibility
  
  const closeModal = () => {
    setShowModal(false);
    window.location.href = "/";
  };

    // const PECheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setPEChecked(event.target.id === 'Yes'); 
    //   };
    //   const CBCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setCBChecked(event.target.id === 'Yes'); 
    //   };
    //   const AgeCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setAgeChecked(event.target.id === 'Yes'); 
    //   };
    //   const CitizenCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setCitizenChecked(event.target.id === 'Yes'); 
    //   };
      const CitizenYesCheck = () => {
        setCitizenYes(true);
        setCitizenNo(false); // Uncheck "No" when "Yes" is checked
      };
    
      const CitizenNoCheck = () => {
        setCitizenNo(true);
        setCitizenYes(false); // Uncheck "Yes" when "No" is checked
      };

      const PEYesCheck = () => {
        setPEYes(true);
        setPENo(false); // Uncheck "No" when "Yes" is checked
      };
    
      const PENoCheck = () => {
        setPENo(true);
        setPEYes(false); // Uncheck "Yes" when "No" is checked
      };
      const AgeYesCheck = () => {
        setAgeYes(true);
        setAgeNo(false); // Uncheck "No" when "Yes" is checked
      };
    
      const AgeNoCheck = () => {
        setAgeNo(true);
        setAgeYes(false); // Uncheck "Yes" when "No" is checked
      };

      const CBYesCheck = () => {
        setCBYes(true);
        setCBNo(false); // Uncheck "No" when "Yes" is checked
      };
    
      const CBNoCheck = () => {
        setCBNo(true);
        setCBYes(false); // Uncheck "Yes" when "No" is checked
      };




      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //setStatus('Sending...');

        // if (e.target instanceof HTMLFormElement) { // Type guard
        //     const formData = new FormData(e.target);

            try {
                const response = await fetch('/api/send-email', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                      },
                    body: JSON.stringify({ position,firstName,middleName,lastName, StreetAddress,City,State,Zipcode,MainPhone,OtherPhone,email,startDate,Fulltime,Parttime,Temporary,FirstShift,SecondShift,ThirdShift,PEYes,AgeYes,CBYes,CitizenYes}),
                });

                //const data = await response.json();
                //setMessage(data.message);
                if (response.ok) {
                   
                    setShowModal(true); // Show the modal
                    //setStatus(data.message || 'Email sent!');
                    setFirstName('') // Clear the form
                    setMiddleName('');
                    setLastName('');
                    setStreetAddress('');
                    setCity('');
                    setState('');
                    setZipcode('');
                    setMainPhone('');
                    setOtherPhone('');
                    setEmail('');
                    setPosition('');
                    setStartDate('');
                    setFulltime(false);
                    setParttime(false);
                    setTemporary(false);
                    setFirstShift(false)
                    setSecondShift(false);
                    setThirdShift(false);
                    // setPEChecked(false);
                    // setAgeChecked(false);
                    // setCBChecked(false);
                    // setCitizenChecked(false);
                    setPEYes(false);
                    setPENo(false);
                    setAgeYes(false);
                    setAgeNo(false);
                    setCBYes(false);
                    setCBNo(false);
                    setCitizenYes(false);
                    setCitizenNo(false);
                    setSignature('');
                    setAgree(false);

                    



                
                  
                }
               
            } catch (error) {
                console.error('Error submitting form:', error);
                
            }
        
    };


    // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault(); 
    //     setStatus('Sending...');
    
    //     try {
    //       const response = await fetch('/api/send-email', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({ name, email, message }),
    //       });
    
    //       if (response.ok) {
    //         setStatus('Email sent!');
    //         setName('');
    //         setEmail('');
    //         setMessage('');
    //       } else {
    //         setStatus('Error sending email.');
    //       }
    //     } catch (error) {
    //       console.error('Error submitting form:', error);
    //       setStatus('Error submitting form.');
    //     }
    //   };

      const changeLanguage = ()=>{
        if(Language==='eng'){
            setLanguage('esp');
        }else{
            setLanguage('eng');
        }
      }
      
      
return(


    <div className="container-fluid">

<Navigate pageSettings="light"/>
<div className="row">
    <div className="col-6">
    <ProductBox setDescription={Language==='eng'?'Online Application':'Solicitud en línea'} productHeadLine={Language==='eng'?'Join the Endicott Team: Build Your Career with Us':'Únete al equipo de Endicott: construye tu carrera con nosotros'} ProductDescription={Language==='eng'?'Become a part of the Endicott legacy. We offer rewarding career opportunities in a variety of fields. Explore our open positions and discover how you can contribute to our mission of building legacies from the ground up.':'Conviértase en parte del legado de Endicott. Ofrecemos oportunidades profesionales gratificantes en una variedad de campos. Explore nuestros puestos vacantes y descubra cómo puede contribuir a nuestra misión de construir legados desde cero.'}/>
    </div>

</div>

    <div className="row d-flex justify-content-center">
        <div className="col-3 text-center">
        <button type="button" className="btn btn-secondary" role="button" name="Language" onClick={(()=>(changeLanguage()))} >
            {Language==='eng'?'Establecer en español':'Set to English'}
        </button>
        </div>
        
    
    </div>
    <form onSubmit={handleSubmit}>
    <div className="row p-2 ms-3 me-3 d-flex justify-content-center">
        <div className="col-8 border border-black rounded-2 p-3 ">
            <div className="row ">
                <h2 className="fs-6 text-center text-uppercase ">{Language==='eng'?'Position':'Posición'}</h2>
            </div>
           
            <div className="row">
                <div className="col-6">
                    <div className="input-group d-flex align-items-baseline">
                        <label className="form-label me-2 " htmlFor="position" >{Language==="eng"?'Position applied for':'Posicione solicitadas'}  </label>
                        <select id="position" value={position} name='position' onChange={(e) => setPosition(e.target.value)}  className="form-select rounded-2" aria-label={Language==="eng"?'Position applied for':'Posicione solicitadas'}>
                            <option value='null' selected >{Language==="eng"?'Select One':'Seleccione uno'}</option>
                            <option value='Operator'>{Language==="eng"?'Operator':'Operador/Operadora'}</option>
                            <option value='General'>{Language==="eng"?'General Labor':'Trabajador General'}</option>
                            <option value='Maintenance'>{Language==="eng"?'Maintenance':'Maintenimiento'}</option>
                            <option value='Electrician'>{Language==="eng"?'Electrician':'Electricista'}</option>
                            <option value='Heavy Equipment'>{Language==="eng"?'Heavy Equipment Operator/Dozer Operator':'Operador de equipo pesado/Operador de bulldozer'}</option>
                        </select>
                    </div>
                </div>
                <div className="col-4">
                    <div className=" input-group d-flex align-items-baseline">
                        <label className="form-label me-2" htmlFor="StartDate" >{Language==="eng"?'Date you can start':'Fecha en que usted puede comenzar'}</label>
                        <input className="form-control rounded-2" type="date"value={startDate} onChange={(e) => setStartDate(e.target.value)}  id="StartDate" aria-label={Language==="eng"?'Start Date' : 'Fecha de inicio'} />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="row p-2 ms-3 me-3 d-flex justify-content-center">
        <div className="col-8 border border-black rounded-2 p-3 ">
            <div className="row  ">
                <h2 className="fs-6 text-center text-uppercase ">{Language==="eng"?'Personal Information':'Informacion Personal'}</h2>
            </div>
            <div className="row mt-5 mb-2">
                <div>
                    <h3 className="fs-7  text-uppercase ">{Language==="eng"?'Name':'Nombre'}</h3>
                </div>
            </div>
            <div className="row ">
                <div className="col-4 ">
                    <div className="input-group d-flex align-items-baseline">
                        <label className="form-label me-2" htmlFor="firstName" >{Language==="eng"?'First':'Primero'}</label>
                        <input name='firstName' className="form-control rounded-2" value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" id="firstName" aria-label={Language==="eng"?'First Name':'nombre de pila'} />
                    </div>
                </div>
                <div className="col-4">
                    <div className="input-group d-flex align-items-baseline">
                        <label className="form-label me-2" htmlFor="middleName" >{Language==="eng"?'Middle':'Medio'}</label>
                        <input className="form-control rounded-2" value={middleName} onChange={(e) => setMiddleName(e.target.value)} type="text" id="middleName" aria-label={Language==="eng"?'Middle Name':'segundo nombre'} />
                    </div>
                </div>
                <div className="col-4">
                    <div className="input-group d-flex align-items-baseline">
                        <label className="form-label me-2" htmlFor="lastName" >{Language==="eng"?'Last':'Ultimo'}</label>
                        <input className="form-control rounded-2" value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" id="lastName" aria-label={Language==="eng"?'Last Name':'apellido'} />
                    </div>
                </div>
            </div>
            <div className="row mt-5 mb-2">
                <div>
                    <h3 className="fs-7  text-uppercase ">{Language==="eng"?'Home Address':'Direccion De Casa'}</h3>
                </div>
            </div>
            <div className="row ">
                <div className="col-10 mb-2">
                    <div className="input-group d-flex align-items-baseline">
                        <label className="form-label me-2" htmlFor="StreetAddress" >{Language==="eng"?'Street Address':'dirección postal'}</label>
                        <input className="form-control rounded-2" value={StreetAddress} onChange={(e) => setStreetAddress(e.target.value)} type="text" id="StreetAddress" aria-label={Language==="eng"?'Street Address':'dirección postal'} />
                    </div>
                </div>
                <div className="col-4">
                    <div className="input-group d-flex align-items-baseline">
                        <label className="form-label me-2" htmlFor="City" >{Language==="eng"?'City':'Ciudad'}</label>
                        <input className="form-control rounded-2" value={City} onChange={(e) => setCity(e.target.value)} type="text" id="City" aria-label={Language==="eng"?'City':'Ciudad'} />
                    </div>
                </div>
                <div className="col-4">
                    <div className="input-group d-flex align-items-baseline">
                        <label className="form-label me-2" htmlFor="State" >{Language==="eng"?'State':'Estado'}</label>
                        <select id="State" value={State} name='State' onChange={(e) => setState(e.target.value)} className="form-select rounded-2" aria-label={Language==="eng"?'State':'Estado'}>
                            <option selected >{Language==="eng"?'Select State':'Seleccionar Estado'}</option>
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="DC">District Of Columbia</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>
                                                    
                        </select>                       
                    </div>
                </div>
                <div className="col-4">
                    <div className="input-group d-flex align-items-baseline">
                        <label className="form-label me-2" htmlFor="ZipCode" >{Language==="eng"?'Zip Code':'Código Postal'}</label>
                        <input className="form-control rounded-2" value={Zipcode} onChange={(e) => setZipcode(e.target.value)} type="text" id="ZipCode" aria-label={Language==="eng"?'Zip Code':'Código Postal'} />                     
                    </div>
                </div>
            </div>
            <div className="row mt-5 mb-2">
                <div>
                    <h3 className="fs-7  text-uppercase ">{Language==="eng"?'Contact Information':'Información Del Contacto'}</h3>
                </div>
            </div>
            <div className="row ">
                <div className="col-4 mb-2">
                    <div className="input-group d-flex align-items-baseline">
                        <label className="form-label me-2" htmlFor="MainPhone" >{Language==="eng"?'Main Phone':'Teléfono Principal'}</label>
                        <input className="form-control rounded-2" value={MainPhone} onChange={(e) => setMainPhone(e.target.value)} type="tel" id="MainPhone" />
                    </div>
                </div>
                <div className="col-4">
                    <div className="input-group d-flex align-items-baseline">
                        <label className="form-label me-2" htmlFor="OtherPhone" >{Language==="eng"?'Other Phone':'Otro Teléfono'}</label>
                        <input className="form-control rounded-2" value={OtherPhone} onChange={(e) => setOtherPhone(e.target.value)} type="tel" id="OtherPhone" aria-label={Language==="eng"?'Other Phone':'Otro Teléfono'} />
                    </div>
                </div>
                <div className="col-4">
                    <div className="input-group d-flex align-items-baseline">
                        <label className="form-label me-2" htmlFor="Email" >{Language==="eng"?'email':'Correo Electrónico'}</label>
                        <input className="form-control rounded-2" value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="Email" aria-label={Language==="eng"?'email':'Correo Electrónico'}/>                      
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    <div className="row p-2 ms-3 me-3 d-flex justify-content-center">
        <div className="col-8 border border-black rounded-2 p-3 ">
            <div className="row  ">
                <h2 className="fs-6 text-center text-uppercase ">{Language==="eng"?'Application Information':'información Del Aplicante'}</h2>
            </div>
            <div className="row mt-5 mb-2">
                <div>
                    <h3 className="fs-6 font-bold text-uppercase ">{Language==="eng"?'Availability':'Disponibilidad'} </h3>
                </div>
            </div>
            <div className="row ">
                <div className="col-4">
                    <label className="me-5">{Language==="eng"?'Employment Type':'Tipo De Empleo'} </label>
                </div>
                <div className="col-6">
                    <input className="me-2" type="checkbox" id="Fulltime" checked={Fulltime}  onChange={(e) => setFulltime(e.target.checked)}/><label htmlFor="Fulltime" className="me-5">{Language==="eng"?'Full Time':'Tiempo-Completo'}</label>
                    <input className="me-2" type="checkbox" id="Parttime" checked={Parttime} onChange={(e) => setParttime(e.target.checked)}/><label htmlFor="Parttime" className="me-5">{Language==="eng"?'Part Time':'Medio-Tiempo'}</label>
                    <input className="me-2" type="checkbox" id="Temporary" checked={Temporary} onChange={(e) => setTemporary(e.target.checked)}/><label htmlFor="Temporary">{Language==="eng"?'Temporary':'Temporal'}</label>
                </div>
            </div>
            <div className="row mt-5 mb-2">
                <div className="col-4">
                <label className="">{Language==="eng"?'Prefered Shifts':'Turnos preferidos'}</label>
                </div>
                
                <div className="col-6">
                    <div>
                        <input className="me-2" type="checkbox" id="FirstShift" checked={FirstShift}  onChange={(e) => setFirstShift(e.target.checked)}/><label htmlFor="FirstShift" className="me-5 ">{Language==="eng"?(<>First  <span className="fs-7">(5:30AM to 3PM Monday - Friday)</span></>):(<>Primero   <span className="fs-7">(5:30AM to 3PM Lunes a Viernes)</span></>)}</label>
                    </div>
                    <div>
                        <input className="me-2" type="checkbox" id="SecondShift" checked={SecondShift} onChange={(e) => setSecondShift(e.target.checked)}/><label htmlFor="SecondShift" className="me-5">{Language==="eng"?(<>Second  <span className="fs-7">(3PM to 12:30AM Monday - Friday)</span></>):(<>Segundo   <span className="fs-7">(3PM to 12:30AM Lunes a Viernes)</span></>)}</label>
                    </div>
                    <div>
                        <input className="me-2" type="checkbox" id="ThirdShift" checked={ThirdShift} onChange={(e) => setThirdShift(e.target.checked)}/><label htmlFor="ThirdShift">{Language==="eng"?(<>Third  <span className="fs-7">(9PM to 6:30AM Monday - Friday)</span></>):(<>Tecero    <span className="fs-7">(9PM to 6:30AM Lunes a Viernes)</span></>)}</label>
                    </div>
                </div>
            </div>
            <div className="row mt-5 ">
                <div className="col-4 mb-2">
                    <label className="">{Language==="eng"?'Have you worked for Endicott before?':'¿Has sido empleado por nosotros antes?'}</label>
                </div>
                <div className="col-4">
                    <div>
                    <input className="me-2" type="checkbox" id="PEYes" checked={PEYes} onChange={PEYesCheck}/><label htmlFor="PEYes">{Language==="eng"?'Yes':'Si'}</label>                    
                    </div>                    
                    <div>
                    <input className="me-2" type="checkbox" id="PENo" checked={PENo} onChange={PENoCheck}/><label htmlFor="PENo">{Language==="eng"?'No':'No'}</label>                    
                    </div> 
                </div>
                
            </div>
            <div className="row mt-5 ">
                <div className="col-4 mb-2">
                    <label className="">{Language==="eng"?'Are you at least 18 Years Old?':'Tienes al menos 18 años de edad?'}</label>
                </div>
                <div className="col-4">
                    <div>
                    <input className="me-2" type="checkbox" id="AgeYes" checked={AgeYes} onChange={AgeYesCheck}/><label htmlFor="AgeYes">{Language==="eng"?'Yes':'Si'}</label>                    
                    </div>                    
                    <div>
                    <input className="me-2" type="checkbox" id="AgeNo" checked={AgeNo} onChange={AgeNoCheck}/><label htmlFor="AgeNo">{Language==="eng"?'No':'No'}</label>                    
                    </div> 
                </div>
                
            </div>
            <div className="row mt-5 ">
                <div className="col-4 mb-2">
                    <label className="">{Language==="eng"?'Are you color blind?':'¿Eres daltónico?'}</label>
                </div>
                <div className="col-4">
                    <div>
                    <input className="me-2" type="checkbox" id="CBYes" checked={CBYes} onChange={CBYesCheck}/><label htmlFor="CBYes">{Language==="eng"?'Yes':'Si'}</label>                    
                    </div>                    
                    <div>
                    <input className="me-2" type="checkbox" id="CBNo" checked={CBNo} onChange={CBNoCheck}/><label htmlFor="CBNo">{Language==="eng"?'No':'No'}</label>                    
                    </div> 
                </div>
                
            </div>
            <div className="row  mt-5">
                <h2 className="fs-6 text-center text-uppercase ">{Language==="eng"?'Citizenship':'Ciudadanía'}</h2>
            </div>
            <div className="row mt-5 ">
                <div className="col-4 mb-2">
                    <label className="">{Language==="eng"?'Are you a citizen of the United States or have work autherization?':'¿Es ciudadano de los Estados Unidos o tiene autorización de trabajo?'}</label>
                </div>
                <div className="col-4">
                    <div>
                    <input className="me-2" type="checkbox" id="CitizenYes" checked={CitizenYes} onChange={CitizenYesCheck}/><label htmlFor="CitizenYes">{Language==="eng"?'Yes':'Si'}</label>                    
                    </div>                    
                    <div>
                    <input className="me-2" type="checkbox" id="CitizenNo" checked={CitizenNo} onChange={CitizenNoCheck}/><label htmlFor="CitizenNo">{Language==="eng"?'No':'No'}</label>                    
                    </div> 
                </div>
                
            </div>
            <div className="row mt-5">
                <p className="fs-7">{Language==="eng"?'Note: the law requires that you provide evidence and a sworn statement of your citizenship or work authorization if you are hired. Any offer of employment which you receive is contingent upon your providing the documentation and statement which we will request from you.':'Nota: la ley requiere que proporcione evidencia y una declaración jurada de su ciudadanía o autorización de trabajo si es contratado. Cualquier oferta de empleo que reciba depende de que proporcione la documentación y la declaración que le solicitaremos.'}</p>

            </div>
            
        </div>
    </div>

    <div className="row d-flex justify-content-center mt-5 ">
        <div className="col-8 border-top-dashed p-5" >
            <div className="row">
                <p>{Language==="eng"?'By signing below, I certify that the answers and information set out above are true, accurate and complete to the best of my knowledge. I acknowledge that if any answer or information is not true, accurate or complete, I may not be hired, or if hired, I may be discharged. I authorize Endicott Clay Products Co. to investigate all statements contained in this application for employment and to investigate my character and qualifications. I understand that this application is not a contract of employment. I also acknowledge that no oral representations have been made, and that no one within Endicott Clay Products Co. has the authority to make oral contracts of employment. If hired, my employment relationship with Endicott Clay Products Co. is terminable at-will, with or without cause, by either myself or Endicott Clay Products Co. I also understand that my employment will be conditioned upon successfully completing a drug/alcohol test. I understand and agree to all of the conditions and statements set forth above, and throughout this application. Attached to this job application is a job description of the duties of the job for which I am applying. I certify I have read the attached job description and can meet all of the essential duties of this job.':'Al firmar a continuación, certifico que las respuestas y la información establecidas anteriormente son verdaderas, precisas y completas a mi leal saber y entender. Si alguna respuesta o información no es verdadera, precisa o completa, puedo no ser contratado, o si lo hago, podría ser despedido. Autorizo ​​a Endicott Clay Products Co. a investigar todas las declaraciones contenidas en esta solicitud de empleo e investigar mi carácter y calificaciones. Entiendo que esta solicitud no es un contrato de trabajo. También reconozco que no se han realizado declaraciones orales, y que nadie dentro de Endicott Clay Products Co. tiene la autoridad para hacer contratos orales de empleo. Si es contratado, mi relación laboral con Endicott Clay Products Co. es rescindible a voluntad, con o sin causa, por mí mismo o por Endicott Clay Products Co. También entiendo que mi empleo estará condicionado a completar con éxito una prueba de drogas / alcohol. Entiendo y acepto todas las condiciones Iciones y declaraciones establecidas anteriormente, y a lo largo de esta solicitud. Adjunto a esta solicitud de empleo hay una descripción del trabajo de los deberes del trabajo para el que estoy postulando. Certifico que he leído la descripción del trabajo adjunta y que puedo cumplir con todos los deberes esenciales de este trabajo'}</p>
            </div>
            <div className="row" >

                <h5 className="text-center">{Language==="eng"?'Signature':'Firma'}</h5>
                <p className="text-center">{Language==="eng"?'Type Full Name':'Escriba el nombre completo'}</p>
                

            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-6">
                    <input className="form-control" value={Signature} onChange={(e) => setSignature(e.target.value)}  type="text" required id="Signature"/>
                </div>

            </div>
            <div className="row d-flex justify-content-center mt-5">
                <div className="col-6">
                    <div className="input-group ">
                        <label className="me-3 " >{Language==="eng"?'I agree to the terms listed above.':'Estoy de acuerdo con los términos anteriores'}</label><input type="checkbox" id="Agree" checked={Agree} onChange={(e) => setAgree(e.target.checked)}/>
                    </div>
                </div>
                

            </div>
            <div className="row mt-5">
                <p className="text-center">
                {Language==="eng"?'By electronically entering your name and selecting the terms of agreement, you are officially signing this application.':'Al ingresar electrónicamente su nombre y seleccionar los términos del acuerdo, está firmando oficialmente esta solicitud.'}
                </p>

            </div>
            
        </div>
    </div>
    <div className="row d-flex justify-content-center mt-5">
        <div className=" col-8 d-flex justify-content-center ">
        <button type="submit" className="btn btn-secondary">{Language==="eng"?'Submit':'Enviar'}</button>
        </div>
    </div>
    

    {showModal && (
        <div className="modal fade show" style={{ display: 'block' }}> {/* Added 'show' and inline style */}
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Application Submission</h5>
                <button type="button" className="btn-close" onClick={closeModal}>Close</button>
              </div>
              <div className="modal-body">
                <p>Thank you for applying to Endicott Clay Products Company. Your application has been submitted. We will reach out to you soon.<br/> If you have any questions please contact us as 402-729-3315.</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    
    
  </form>
  <Footer pageSetUp="light"/>
  </div>
)
}