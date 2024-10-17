import React, { useEffect, useState } from 'react'
import { handleScroll} from '../javascript/scrollbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import image from '../Images/logo.png'
import image9 from '../Images/image9.png'
import image10 from '../Images/image33.png'
import image11 from '../Images/image32.png'
import image12 from '../Images/image34.png'
import image13 from '../Images/image35.png'
import image14 from '../Images/image36.png'
import image15 from '../Images/image37.png'
import image16 from '../Images/image38.png'
import image17 from '../Images/image39.png'
import { Link } from 'react-router-dom';
import { faArrowRight, faCalendar, faCloudArrowDown, faMoneyBillWaveAlt, faShield, faStar } from '@fortawesome/free-solid-svg-icons';
const Voice = () => {
    useEffect(() => {
        handleScroll();
      }, []);
      const [activeNew,newActive]=useState('voice');
      const cardImage=[
        {
            image:image11,
            title:"VoIP PHONE SYSTEM"
        },
        {
            image:image12,
            title:"Sip Turking"
        },
        {
            image:image13,
            title:"Microsoft Teams"
        },
        {
            image:image14,
            title:"Non-Geoprephic Numbers"
        },
        {
            image:image15,
            title:"Contact Center Solutions"
        },
        {
            image:image16,
            title:"Keep-in-Touch"
        }
      ]
  return (
    <section id='voice'>
      <div className="container-fluid p-0">
      <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{position:'relative'}} id='navbar'>
  <div className="container-fluid">
    <img src={image} alt="logo" className='img-fluid ms-md-5 ms-3' style={{width:'120px',height:'50px'}} />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
      <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-black" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </a>
          <ul className="dropdown-menu rounded-0">
            <li><Link className="dropdown-item" to="/connectivity">Connectivity</Link></li>
            <li><Link className="dropdown-item" to="/iot" >IOT</Link></li>
            <li><Link className="dropdown-item" to="/voice" style={activeNew === 'voice'?{color:'red'}:{}}>Voice</Link></li>
            <li><Link className="dropdown-item" to="/payment">Payment</Link></li>
            <li><Link className="dropdown-item" to="/energy">Energy</Link></li>
            <li><Link className="dropdown-item" to="/businessmobile">Business Mobile</Link></li>
            <li><Link className="dropdown-item" to="/cloud">Cloud,Hosting,Security</Link></li>
            <li><Link className="dropdown-item" to="/billing">Billing</Link></li>    
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-black" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Partner Programmes
          </a>
          <ul className="dropdown-menu rounded-0">
            <li><a className="dropdown-item" href="#">Partner Programm</a></li>
            <li><a className="dropdown-item" href="#">IOT Connectivity and Solutions</a></li>
            <li><a className="dropdown-item" href="#">Slling Payments</a></li>
            <li><a className="dropdown-item" href="#">Billing CRM and Provisioning Platform</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-black" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Company
          </a>
          <ul className="dropdown-menu rounded-0">
            <li><a className="dropdown-item" href="#">About Fedility</a></li>
            <li><a className="dropdown-item" href="#">Leadership Team</a></li>
            <li><a className="dropdown-item" href="#">Career</a></li>
            <li><a className="dropdown-item" href="#">Case Studies</a></li>
            <li><a className="dropdown-item" href="#">Insights and News</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-black" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Support
          </a>
          <ul className="dropdown-menu rounded-0">
            <li><a className="dropdown-item" href="#">Report a Fault</a></li>
            <li><a className="dropdown-item" href="#">Emergency Location</a></li>
            <li><a className="dropdown-item" href="#">Cloud Fault</a></li>
            <li><a className="dropdown-item" href="#">Anvil Login</a></li>
            <li><a className="dropdown-item" href="#">Remote Support</a></li>
            <li><a className="dropdown-item" href="#">Terms and Conditions</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link text-black">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div className="container-fluid" id='headerimage'>
    <div className="row ">
        <div className="col-lg-5 my-md-5 px-lg-5 d-flex flex-column justify-content-center">
            <h1 style={{fontSize:'56px',fontFamily:'CerebriSans',fontWeight:700,color:'white',margin:'0px 0px 18px'}}>Hosted Telephony Systems For Business</h1>
            <p style={{fontSize:'16px',fontFamily:'CerebriSans',fontWeight:400,color:'white'}}>Maximise customer satisfaction with VoIP solutions
            customised for your business.</p>
            <button type='button' className='rounded bg-danger text-white px-5 py-3 d-flex  me-auto border-0' id='button7' style={{fontSize:'14px',fontFamily:'CerebriSans',fontWeight:300}}>Speak with Expert</button>
        </div>
    </div>
</div>
      </div>
      <div className="container my-md-3 my-1">
        <div className="row d-flex justify-content-around">
            <div className="col-md-4">
                <img src={image10} alt="" className='img-fluid' id='imageheight' />
            </div>
            <div className="col-md-7 mt-md-0 mt-3">
                <p style={{fontSize:'16px',fontFamily:'CerebriSans',fontWeight:400,color:'#696969',lineHeight:1.74}}>Fidelity Group offers an extensive range of hosted telephony solutions that deliver scalability and exceptional functionality to meet the critical voice service needs of our customers. Enjoy effortless communication with clients, suppliers, and your internal team, all without the hassle and expense of setting up and maintaining a traditional phone system on your business premises.</p>
            </div>
        </div>
      </div>
      <div className="container-fluid" style={{backgroundColor:'#e5e5e5'}}>
        <div className="row d-flex justify-content-center pt-md-5">
            <div className="col-md-8 text-center">
                <h1 style={{fontSize:'40px',fontFamily:'CerebriSans',fontWeight:700,color:'#696969',lineHeight:1.74}}>Business Voice <span className='text-danger'>Features</span></h1>
            </div>
        </div>
        <div className="row pb-md-5">
           <div className="container">
            <div className="row d-flex justify-content-around flex-wrap">
            <div className="col-md-3 d-flex gap-2 justify-content-center">
                    <FontAwesomeIcon icon={faCloudArrowDown} size='1x' color='red' className='mt-1'/>
                    <h1 style={{fontSize:'24px',fontFamily:'CerebriSans',fontWeight:600,color:'#696969'}}>
                    24/7/365 inclusive support</h1>
            </div>
            <div className="col-md-3 d-flex gap-2 justify-content-center">
                    <FontAwesomeIcon icon={faShield} size='1x' color='red' className='mt-1'/>
                    <h1 style={{fontSize:'24px',fontFamily:'CerebriSans',fontWeight:600,color:'#696969'}}>
                    Fraud protection</h1>
            </div>
            <div className="col-md-3 d-flex gap-2 justify-content-center">
                    <FontAwesomeIcon icon={faMoneyBillWaveAlt} size='1x' color='red' className='mt-1'/>
                    <h1 style={{fontSize:'24px',fontFamily:'CerebriSans',fontWeight:600,color:'#696969'}}>
                    Fraud protection</h1>
            </div>
            <div className="col-md-4 d-flex gap-2 justify-content-center">
                    <FontAwesomeIcon icon={faCalendar} size='1x' color='red' className='mt-1'/>
                    <h1 style={{fontSize:'24px',fontFamily:'CerebriSans',fontWeight:600,color:'#696969'}}>
                    Integration with over 200 CRM's</h1>
            </div>
            </div>
           </div>
        </div>
      </div>
      <div className="container-fluid" style={{backgroundColor:'#F8F8F8'}}>
        <div className="row d-flex justify-content-center">
            <div className="col-md-6 text-center my-md-5 my-3">
                <h1 style={{fontSize:'40px',fontFamily:'CerebriSans',fontWeight:700,color:'#696969'}}>Voice services for Business</h1>
            </div>
        </div>
        <div className="row">
           <div className="container">
            <div className="row pb-md-5 pb-3">
            <div className="col-12 d-flex flex-wrap justify-content-around">
                {cardImage.map((card,index)=>(
                    <div className="voicecard">
                        <div className="card border-0 py-md-5 py-3 px-md-5 px-3" style={{width: "22rem",backgroundColor:"#F8F8F8",height:'25rem'}} key={index} id='cardimage'>
                    <img src={card.image} className="card-img-top img-fluid rounded" alt="..." style={{height:'450px'}}/>
                    <div className="card-body text-center">
                      <h5 className="card-title">{card.title}</h5>
                      <div className='d-flex link justify-content-center'>
                      <a href="#" className='text-decoration-none text-danger' style={{fontSize:'14px',fontFamily:'CerebriSans',fontWeight:700}}>Learn More <FontAwesomeIcon icon={faArrowRight} size='1x' color='red' className=' mt-1 ms-1 icon'/></a>
                      </div>
                    </div>
                  </div>
                    </div>
                ))}
            </div>
            </div>
           </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
            <div className="col-12">
                <img src={image17} alt="" className='img-fluid'/>
            </div>
        </div>
      </div>
      <div className="container-fluid" style={{backgroundColor:'#F8F8F8'}}>
      <div className="row d-flex justify-content-center">
          <div className="col-md-10 d-flex flex-column align-items-center">
          <h2 style={{color:'#bfbbbb',fontSize:'14px',fontFamily:'CerebriSans',fontWeight:700,letterSpacing:'3px'}}>TESTIMONIAL</h2>
                <p style={{fontFamily:'CerebriSans', fontSize:'40px',fontWeight:700,color:'#7a7777'
                }}>What our customers have to say.</p>
          </div>
        </div>
        <div className="row d-flex">
          <div className="col-12">
          <div id="carouselExampleIndicators1" className="carousel slide" style={{paddingBottom:'50px'}} >
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className='d-flex justify-content-around row' style={{paddingTop:'50px'}}>
        <div style={{height:'50vh',border:'1px solid #eee',paddingTop:'10px'}} className='rounded bg-white col-md-5 mb-md-0 mb-3' id='carouseldiv1'>
          <div className='d-flex'>
          <FontAwesomeIcon icon={faStar} size='4x' style={{color:'white',backgroundColor:'green',borderRadius:'50%'}} className='mt-3 ms-lg-5 ms-1'/>
         <div className="d-flex flex-column ms-lg-5 ms-1 mt-3">
         <div>
          <FontAwesomeIcon icon={faStar} size='1x' color='yellow'/>
            <FontAwesomeIcon icon={faStar} size='1x' color='yellow'/>
            <FontAwesomeIcon icon={faStar} size='1x' color='yellow'/>
            <FontAwesomeIcon icon={faStar} size='1x' color='yellow'/>
            <FontAwesomeIcon icon={faStar} size='1x' color='yellow'/>
          </div>
            <div className='d-flex pt-2'>
              <h4 style={{fontFamily:'CerebriSans', fontSize:'14px',fontWeight:700,color:'#7a7777'}} className='me-lg-2 me-0'>MIKE HAWKES</h4>
              <h4 style={{fontFamily:'CerebriSans', fontSize:'14px',fontWeight:700,color:'#7a7777'}} className='me-lg-2 me-1'>/</h4>
              <h4 style={{fontFamily:'CerebriSans', fontSize:'14px',fontWeight:300,color:'#7a7777'}}>BUSINESS MANAGER</h4>
            </div>
         </div>
          </div>
          <p style={{fontFamily:'CerebriSans', fontSize:'18px',fontWeight:400,color:'#7a7777'}} className='my-5 ms-5'>Great company,helpful and always available when required.</p>
        </div>
        <div style={{height:'50vh',border:'1px solid #eee',paddingTop:'10px'}} className='rounded bg-white col-md-5' id='carouseldiv2'>
          <div className='d-flex'>
          <FontAwesomeIcon icon={faStar} size='4x' style={{color:'white',backgroundColor:'green',borderRadius:'50%'}} className='mt-3 ms-lg-5 ms-1'/>
         <div className="d-flex flex-column ms-lg-5 ms-1 mt-3">
         <div>
          <FontAwesomeIcon icon={faStar} size='1x' color='yellow'/>
            <FontAwesomeIcon icon={faStar} size='1x' color='yellow'/>
            <FontAwesomeIcon icon={faStar} size='1x' color='yellow'/>
            <FontAwesomeIcon icon={faStar} size='1x' color='yellow'/>
            <FontAwesomeIcon icon={faStar} size='1x' color='yellow'/>
          </div>
            <div className='d-flex pt-2'>
              <h4 style={{fontFamily:'CerebriSans', fontSize:'14px',fontWeight:700,color:'#7a7777'}} className='me-2'>NEETA PATEL</h4>
              <h4 style={{fontFamily:'CerebriSans', fontSize:'14px',fontWeight:700,color:'#7a7777'}} className='me-2'>/</h4>
              <h4 style={{fontFamily:'CerebriSans', fontSize:'14px',fontWeight:300,color:'#7a7777'}}>BUSINESS MANAGER</h4>
            </div>
         </div>
          </div>
          <p style={{fontFamily:'CerebriSans', fontSize:'18px',fontWeight:400,color:'#7a7777'}} className='my-5 ms-5'>Fediltiy is excellent Telecom provider.The level of support we receive pre and post-sale are second to none.</p>
        </div>
        <div>

        </div>
      </div>
    </div>
    <div className="carousel-item">
    <div className='d-flex justify-content-around row' style={{paddingTop:'50px'}}>
        <div style={{height:'50vh',border:'1px solid #eee',paddingTop:'10px'}} className='rounded bg-white col-md-5 mb-md-0 mb-3' id='carouseldiv1'>
          <div className='d-flex'>
          <FontAwesomeIcon icon={faStar} size='4x' style={{color:'white',backgroundColor:'green',borderRadius:'50%'}} className='mt-3 ms-lg-5 ms-1'/>
         <div className="d-flex flex-column ms-lg-5 ms-1 mt-3">
         <div>
          <FontAwesomeIcon icon={faStar} size='1x' color='yellow'/>
            <FontAwesomeIcon icon={faStar} size='1x' color='yellow'/>
            <FontAwesomeIcon icon={faStar} size='1x' color='yellow'/>
            <FontAwesomeIcon icon={faStar} size='1x' color='yellow'/>
            <FontAwesomeIcon icon={faStar} size='1x' color='yellow'/>
          </div>
            <div className='d-flex pt-2'>
              <h4 style={{fontFamily:'CerebriSans', fontSize:'14px',fontWeight:700,color:'#7a7777'}} className='me-2'>MATHEE FINN</h4>
              <h4 style={{fontFamily:'CerebriSans', fontSize:'14px',fontWeight:700,color:'#7a7777'}} className='me-2'>/</h4>
              <h4 style={{fontFamily:'CerebriSans', fontSize:'14px',fontWeight:300,color:'#7a7777'}}>BUSINESS MANAGER</h4>
            </div>
         </div>
          </div>
          <p style={{fontFamily:'CerebriSans', fontSize:'18px',fontWeight:400,color:'#7a7777'}} className='my-5 ms-5'>Great company,helpful and always available when required.</p>
        </div>
        <div style={{height:'50vh',border:'1px solid #eee',paddingTop:'10px'}} className='rounded bg-white col-md-5' id='carouseldiv2'>
          <div className='d-flex'>
          <FontAwesomeIcon icon={faStar} size='4x' style={{color:'white',backgroundColor:'green',borderRadius:'50%'}} className='mt-3 ms-lg-5 ms-1'/>
         <div className="d-flex flex-column ms-lg-5 ms-1 mt-3">
         <div>
          <FontAwesomeIcon icon={faStar} size='1x' color='yellow'/>
            <FontAwesomeIcon icon={faStar} size='1x' color='yellow'/>
            <FontAwesomeIcon icon={faStar} size='1x' color='yellow'/>
            <FontAwesomeIcon icon={faStar} size='1x' color='yellow'/>
            <FontAwesomeIcon icon={faStar} size='1x' color='yellow'/>
          </div>
            <div className='d-flex pt-2'>
              <h4 style={{fontFamily:'CerebriSans', fontSize:'14px',fontWeight:700,color:'#7a7777'}} className='me-2'>KEVIN DOWLING</h4>
              <h4 style={{fontFamily:'CerebriSans', fontSize:'14px',fontWeight:700,color:'#7a7777'}} className='me-2'>/</h4>
              <h4 style={{fontFamily:'CerebriSans', fontSize:'14px',fontWeight:300,color:'#7a7777'}}>BUSINESS MANAGER</h4>
            </div>
         </div>
          </div>
          <p style={{fontFamily:'CerebriSans', fontSize:'18px',fontWeight:400,color:'#7a7777'}} className='my-5 ms-5'>Fediltiy is excellent Telecom provider.The level of support we receive pre and post-sale are second to none.</p>
        </div>
        <div>

        </div>
      </div>
    </div>
  </div>
  <div className="carousel-indicators" style={{bottom:'-10px'}}>
    <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" style={{backgroundColor:'#15376e',width:'10px',height:'10px',borderRadius:'50%'}} ></button>
    <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="1" aria-label="Slide 2" className="active" style={{backgroundColor:'#15376e',width:'10px',height:'10px',borderRadius:'50%'}} ></button>
  </div>
</div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row d-flex justify-content-center mt-md-5 mt-3">
            <div className="col-md-8 text-center">
                <h1 style={{fontFamily:'CerebriSans', fontSize:'40px',fontWeight:700,color:'#696969'}}>Frequently Asked Questions (FAQ)</h1>
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <div className="accordion mb-md-3 mb-2" id="accordionExample">
                <div className="accordion-item">
               <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"   aria-expanded="false" aria-controls="collapseOne" style={{fontFamily:'CerebriSans', fontSize:'18px',fontWeight:500,color:'#696969'}}>
             What is required to enable the integration of Microsoft Teams with Horizon?
             </button>
            </h2>
    <div id="collapseOne" className="accordion-collapse collapse  " data-bs-parent="#accordionExample">
      <div className="accordion-body">
       <p style={{fontFamily:'CerebriSans', fontSize:'18px',fontWeight:500,color:'#696969'}}>1. Office 365 Enterprise subscription: You need an Office 365 Enterprise subscription, specifically E1, E3, or E5. 2. Microsoft Phone system add-on: With E1 or E3 subscriptions, you need to have the Microsoft Phone system add-on. 3. Horizon subscription with Horizon for Microsoft Teams bolt-on: A Horizon subscription is required, along with the Horizon for Microsoft Teams bolt-on. 4. The Gamma Voice app: You need to have the Gamma Voice app installed.
       </p>
      </div>
    </div>
  </div>
                </div>
                <div className="accordion mb-md-3 mb-2" id="accordionExample1">
                <div className="accordion-item">
               <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsetwo"   aria-expanded="false" aria-controls="collapseOne" style={{fontFamily:'CerebriSans', fontSize:'18px',fontWeight:500,color:'#696969'}}>
             Is Horizon Subscription necessary?
             </button>
            </h2>
    <div id="collapsetwo" className="accordion-collapse collapse  " data-bs-parent="#accordionExample1">
      <div className="accordion-body">
       <p style={{fontFamily:'CerebriSans', fontSize:'18px',fontWeight:500,color:'#696969'}}>1. Office 365 Enterprise subscription: You need an Office 365 Enterprise subscription, specifically E1, E3, or E5. 2. Microsoft Phone system add-on: With E1 or E3 subscriptions, you need to have the Microsoft Phone system add-on. 3. Horizon subscription with Horizon for Microsoft Teams bolt-on: A Horizon subscription is required, along with the Horizon for Microsoft Teams bolt-on. 4. The Gamma Voice app: You need to have the Gamma Voice app installed.
       </p>
      </div>
    </div>
  </div>
                </div>
                <div className="accordion mb-md-3 mb-2" id="accordionExample2">
                <div className="accordion-item">
               <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsethree"   aria-expanded="false" aria-controls="collapseOne" style={{fontFamily:'CerebriSans', fontSize:'18px',fontWeight:500,color:'#696969'}}>
             What minute of bundle is available with Horizon of Microsoft Teams?
             </button>
            </h2>
    <div id="collapsethree" className="accordion-collapse collapse  " data-bs-parent="#accordionExample2">
      <div className="accordion-body">
       <p style={{fontFamily:'CerebriSans', fontSize:'18px',fontWeight:500,color:'#696969'}}>1. Office 365 Enterprise subscription: You need an Office 365 Enterprise subscription, specifically E1, E3, or E5. 2. Microsoft Phone system add-on: With E1 or E3 subscriptions, you need to have the Microsoft Phone system add-on. 3. Horizon subscription with Horizon for Microsoft Teams bolt-on: A Horizon subscription is required, along with the Horizon for Microsoft Teams bolt-on. 4. The Gamma Voice app: You need to have the Gamma Voice app installed.
       </p>
      </div>
    </div>
  </div>
                </div>
                <div className="accordion mb-md-3 mb-2" id="accordionExample3">
                <div className="accordion-item">
               <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour"   aria-expanded="false" aria-controls="collapseOne" style={{fontFamily:'CerebriSans', fontSize:'18px',fontWeight:500,color:'#696969'}}>
              If I add the Horizon for Microsoft Teams bolt-on to an existing Horizon subscription, will it initiate a new contract?
             </button>
            </h2>
    <div id="collapsefour" className="accordion-collapse collapse  " data-bs-parent="#accordionExample3">
      <div className="accordion-body">
       <p style={{fontFamily:'CerebriSans', fontSize:'18px',fontWeight:500,color:'#696969'}}>1. Office 365 Enterprise subscription: You need an Office 365 Enterprise subscription, specifically E1, E3, or E5. 2. Microsoft Phone system add-on: With E1 or E3 subscriptions, you need to have the Microsoft Phone system add-on. 3. Horizon subscription with Horizon for Microsoft Teams bolt-on: A Horizon subscription is required, along with the Horizon for Microsoft Teams bolt-on. 4. The Gamma Voice app: You need to have the Gamma Voice app installed.
       </p>
      </div>
    </div>
  </div>
                </div>
                <div className="accordion mb-md-3 mb-2" id="accordionExample4">
                <div className="accordion-item">
               <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive"   aria-expanded="false" aria-controls="collapseOne" style={{fontFamily:'CerebriSans', fontSize:'18px',fontWeight:500,color:'#696969'}}>
              Can Horizon for Microsoft Teams be deployed internationally?
             </button>
            </h2>
    <div id="collapsefive" className="accordion-collapse collapse  " data-bs-parent="#accordionExample4">
      <div className="accordion-body">
       <p style={{fontFamily:'CerebriSans', fontSize:'18px',fontWeight:500,color:'#696969'}}>1. Office 365 Enterprise subscription: You need an Office 365 Enterprise subscription, specifically E1, E3, or E5. 2. Microsoft Phone system add-on: With E1 or E3 subscriptions, you need to have the Microsoft Phone system add-on. 3. Horizon subscription with Horizon for Microsoft Teams bolt-on: A Horizon subscription is required, along with the Horizon for Microsoft Teams bolt-on. 4. The Gamma Voice app: You need to have the Gamma Voice app installed.
       </p>
      </div>
    </div>
  </div>
                </div>
                <div className="accordion mb-md-3 mb-2" id="accordionExample5">
                <div className="accordion-item">
               <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsesix"   aria-expanded="false" aria-controls="collapseOne" style={{fontFamily:'CerebriSans', fontSize:'18px',fontWeight:500,color:'#696969'}}>
              How can phone access be retained in an emergency?
             </button>
            </h2>
    <div id="collapsesix" className="accordion-collapse collapse  " data-bs-parent="#accordionExample5">
      <div className="accordion-body">
       <p style={{fontFamily:'CerebriSans', fontSize:'18px',fontWeight:500,color:'#696969'}}>1. Office 365 Enterprise subscription: You need an Office 365 Enterprise subscription, specifically E1, E3, or E5. 2. Microsoft Phone system add-on: With E1 or E3 subscriptions, you need to have the Microsoft Phone system add-on. 3. Horizon subscription with Horizon for Microsoft Teams bolt-on: A Horizon subscription is required, along with the Horizon for Microsoft Teams bolt-on. 4. The Gamma Voice app: You need to have the Gamma Voice app installed.
       </p>
      </div>
    </div>
  </div>
                </div>
                <div className="accordion mb-md-3 mb-2" id="accordionExample6">
                <div className="accordion-item">
               <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseseven"   aria-expanded="false" aria-controls="collapseOne" style={{fontFamily:'CerebriSans', fontSize:'18px',fontWeight:500,color:'#696969'}}>
              What if there is an office relocation?
             </button>
            </h2>
    <div id="collapseseven" className="accordion-collapse collapse  " data-bs-parent="#accordionExample6">
      <div className="accordion-body">
       <p style={{fontFamily:'CerebriSans', fontSize:'18px',fontWeight:500,color:'#696969'}}>1. Office 365 Enterprise subscription: You need an Office 365 Enterprise subscription, specifically E1, E3, or E5. 2. Microsoft Phone system add-on: With E1 or E3 subscriptions, you need to have the Microsoft Phone system add-on. 3. Horizon subscription with Horizon for Microsoft Teams bolt-on: A Horizon subscription is required, along with the Horizon for Microsoft Teams bolt-on. 4. The Gamma Voice app: You need to have the Gamma Voice app installed.
       </p>
      </div>
    </div>
  </div>
                </div>
                <div className="accordion mb-md-3 mb-2" id="accordionExample7">
                <div className="accordion-item">
               <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseeight"   aria-expanded="false" aria-controls="collapseOne" style={{fontFamily:'CerebriSans', fontSize:'18px',fontWeight:500,color:'#696969'}}>
              Does the quality suffer compared to fixed telephony?
             </button>
            </h2>
    <div id="collapseeight" className="accordion-collapse collapse" data-bs-parent="#accordionExample7">
      <div className="accordion-body">
       <p style={{fontFamily:'CerebriSans', fontSize:'18px',fontWeight:500,color:'#696969'}}>1. Office 365 Enterprise subscription: You need an Office 365 Enterprise subscription, specifically E1, E3, or E5. 2. Microsoft Phone system add-on: With E1 or E3 subscriptions, you need to have the Microsoft Phone system add-on. 3. Horizon subscription with Horizon for Microsoft Teams bolt-on: A Horizon subscription is required, along with the Horizon for Microsoft Teams bolt-on. 4. The Gamma Voice app: You need to have the Gamma Voice app installed.
       </p>
      </div>
    </div>
  </div>
                </div>
                <div className="accordion mb-md-3 mb-2" id="accordionExample8">
                <div className="accordion-item">
               <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsenine"   aria-expanded="false" aria-controls="collapseeight" style={{fontFamily:'CerebriSans', fontSize:'18px',fontWeight:500,color:'#696969'}}>
              What is hosted telephony?
             </button>
            </h2>
    <div id="collapsenine" className="accordion-collapse collapse  " data-bs-parent="#accordionExample8">
      <div className="accordion-body">
       <p style={{fontFamily:'CerebriSans', fontSize:'18px',fontWeight:500,color:'#696969'}}>1. Office 365 Enterprise subscription: You need an Office 365 Enterprise subscription, specifically E1, E3, or E5. 2. Microsoft Phone system add-on: With E1 or E3 subscriptions, you need to have the Microsoft Phone system add-on. 3. Horizon subscription with Horizon for Microsoft Teams bolt-on: A Horizon subscription is required, along with the Horizon for Microsoft Teams bolt-on. 4. The Gamma Voice app: You need to have the Gamma Voice app installed.
       </p>
      </div>
    </div>
  </div>
                </div>
            </div>
        </div>
      </div>
      <div className="container">
            <div className="row mt-md-5 mt-3">
          <div className="col-md-6 order-md-1 order-2" id='form'>
            <h1 style={{fontFamily:'CerebriSans', fontSize:'40px',fontWeight:700,color:'#7a7777'}}>Connect with us</h1>
            <p style={{fontFamily:'CerebriSans', fontSize:'16px',fontWeight:400,color:'#7a7777'}}>If you’d like to find out more, why not call us now on 0800 840 6800 or simply fill in our contact form below and we’ll be in touch.</p>
           <form action="submit">
           <div className="row mt-3">
              <div className="col-md-6 ">
              <div className="form-floating mb-3">
              <input type="text" className="form-control form-control-sm" id="floatingInput" placeholder="Name"  style={{boxShadow:'none'}}/>
              <label htmlFor="floatingInput">Name</label>
              </div>
              </div>
              <div className="col-md-6">
              <div className="form-floating mb-3">
              <input type="text" className="form-control form-control-sm" id="floatingInput" placeholder="Name"  style={{boxShadow:'none'}}/>
              <label htmlFor="floatingInput">Company</label>
              </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6 ">
              <div className="form-floating mb-3">
              <input type="tel" className="form-control form-control-sm" id="floatingInput" placeholder="Name"  style={{boxShadow:'none'}}/>
              <label htmlFor="floatingInput">Contact Number</label>
              </div>
              </div>
              <div className="col-md-6">
              <div className="form-floating mb-3">
              <input type="email" className="form-control form-control-sm" id="floatingInput" placeholder="Name"  style={{boxShadow:'none'}}/>
              <label htmlFor="floatingInput">Email</label>
              </div>
              </div>
            </div>
            <div className="form-floating mb-3 mt-0">
           <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px",boxShadow:'none'}}></textarea>
           <label htmlFor="floatingTextarea2">Message</label></div>
           <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{boxShadow:'none',border:'1px solid red'}} required/>
  <label className="form-check-label" htmlFor="flexCheckDefault">
   I agree to have read Fidelity privacy policy
  </label>
</div>
<button type='submit' className='rounded border-0 bg-danger text-white px-2 py-2 my-md-5 my-3' onSubmit={(event)=>(event.preventDefault())}>Submit Now</button>
           </form>
          </div>
          <div className="col-md-6 mb-md-5 mb-3 order-md-2 order-1">
            <img src={image9} alt="women" style={{width:'100%',height:'100%'}} />
          </div>
        </div>
              </div>
    </section>
  )
}

export default Voice
