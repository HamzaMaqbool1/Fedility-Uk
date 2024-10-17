import React, { useEffect, useState } from 'react'
import image from '../Images/logo.png'
import image1 from '../Images/image1.png'
import image2 from '../Images/image2.png'
import image3 from '../Images/image3.png'
import image4 from '../Images/image4.png'
import image5 from '../Images/image5.png'
import image6 from '../Images/image6.png'
import image7 from '../Images/image7.png'
import image8 from '../Images/image8.png'
import image9 from '../Images/image9.png'
import { handleScroll} from '../javascript/scrollbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faBezierCurve, faBolt, faCalendar, faCloud, faCoins, faExchange, faGlobe, faHeadset, faMobileAndroid, faNetworkWired, faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
const images = [
  image1, 
  image2,
  image3,
  image4,
  image5,
  image6
];
const Home = () => {
    useEffect(() => {
        handleScroll();
      }, []);

      const [currentIndex, setCurrentIndex] = useState(0);
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds
    
        return () => clearInterval(interval); // Cleanup interval on unmount
      }, []);
    
      // Get six consecutive image indexes starting from currentIndex
      const getImageIndexes = () => {
        const indexes = [];
        for (let i = 0; i < 6; i++) {
          indexes.push((currentIndex + i) % images.length);
        }
        return indexes;
      };
      
  return (
    <section id='home'>
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
            <li><Link className="dropdown-item" to="/iot">IOT</Link></li>
            <li><Link className="dropdown-item" to="/voice">Voice</Link></li>
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
    <div className="row vh-100 d-flex flex-column align-items-center justify-content-center" id='headerrow'>
        <div className="col-md-10 d-flex flex-column align-items-center">
            <h1 style={{fontFamily:'CerebriSans', fontSize:'24px',fontWeight:700,color:"white"}}>Business broadband, telecoms, IoT, software, and energy procurement solutions.</h1>
            <h1 style={{fontFamily:'CerebriSans', fontSize:'60px',fontWeight:700,color:"white"
            }} id='headerheading'><span className='text-danger'>Empowering </span>everything as a <span className='text-danger'>service</span></h1>
        </div>
    </div>
</div>
      </div>
      <div className="container">
        <div className="row d-flex justify-content-center">
            <div className="col-md-8 d-flex justify-content-center">
                <h6 style={{fontFamily:'CerebriSans', fontSize:'18px',fontWeight:700}}>Excellent</h6>
                <div className='d-flex ms-3 me-2'>
                    <FontAwesomeIcon icon={faStar} size='1x' color='white' style={{backgroundColor:'green'}}/>
                    <FontAwesomeIcon icon={faStar} size='1x' color='white' style={{backgroundColor:'green'}}/>
                    <FontAwesomeIcon icon={faStar} size='1x' color='white' style={{backgroundColor:'green'}}/>
                    <FontAwesomeIcon icon={faStar} size='1x' color='white' style={{backgroundColor:'green'}}/>
                    <FontAwesomeIcon icon={faStar} size='1x' color='white' style={{backgroundColor:'green'}}/>
                </div>
                <FontAwesomeIcon icon={faStar} size='1x' color='green'/>
                <h6 style={{fontFamily:'CerebriSans', fontSize:'14px',fontWeight:500}} className=' pt-1'>Trustpilot</h6>
            </div>
        </div>
      </div>
      <div className="container">
        <div className="row d-flex justify-content-center">
            <div className="col-md-10 d-flex justify-content-center">
                <p style={{fontFamily:'CerebriSans', fontSize:'40px',fontWeight:700,color:'#7a7777'
                }}>The <span className='text-danger'>X factor</span> htmlFor your business</p>
            </div>
        </div>
        <div className="row d-flex flex-wrap justify-content-around">
            <div className="col-md-4 d-flex flex-column align-items-center" id='card' style={{padding: '36px 10px 26px',marginTop:'10px'}}>
                <FontAwesomeIcon icon={faGlobe} size='5x' color='red'/>
                <h4 style={{color:'#696969'}}>Connectivity</h4>
                <p style={{color:'#696969',fontWeight:400,fontSize:'16px',fontFamily:'CerebriSans'}}>Connect to super fast,reliable business broadband and ethernet connectivity across the uk</p>
                <div className="btn d-flex text-danger">connectivity and data
                    <FontAwesomeIcon icon={faArrowRight} size='1x' className='mt-1 ps-1'/>
                </div>
            </div>
            <div className="col-md-4 d-flex flex-column align-items-center" id='card' style={{padding: '36px 10px 26px',marginTop:'10px'}}>
                <FontAwesomeIcon icon={faBolt} size='5x' color='red'/>
                <h4 style={{color:'#696969'}}>Business Energy</h4>
                <p style={{color:'#696969',fontWeight:400,fontSize:'16px',fontFamily:'CerebriSans'}}>Donot be left in the dark or break the bank with high energy cost.We have the know how.Let us procure and manage energy requirements htmlFor your business.</p>
                <div className="btn d-flex text-danger">Energy
                    <FontAwesomeIcon icon={faArrowRight} size='1x' className='mt-1 ps-1'/>
                </div>
            </div>
            <div className="col-md-4 d-flex flex-column align-items-center" id='card' style={{padding: '36px 10px 26px',marginTop:'10px'}}>
                <FontAwesomeIcon icon={faMobileAndroid} size='5x' color='red'/>
                <h4 style={{color:'#696969'}}>Business Mobile</h4>
                <p style={{color:'#696969',fontWeight:400,fontSize:'16px',fontFamily:'CerebriSans'}}>Let your business roam with us.We have business mobile plans that won't let you down.Connect to the UK's biggest networks through us.</p>
                <div className="btn d-flex text-danger">Business Mobile
                    <FontAwesomeIcon icon={faArrowRight} size='1x' className='mt-1 ps-1'/>
                </div>
            </div>
            <div className="col-md-4 d-flex flex-column align-items-center" id='card' style={{padding: '36px 10px 26px',marginTop:'10px'}}>
                <FontAwesomeIcon icon={faNetworkWired} size='5x' color='red'/>
                <h4 style={{color:'#696969'}}>Internet of Things</h4>
                <p style={{color:'#696969',fontWeight:400,fontSize:'16px',fontFamily:'CerebriSans'}}>With vM2M,a supplier agnostic,easy to use platform making IOt connectivity management supplies as simple as 1..2..3</p>
                <div className="btn d-flex text-danger">IOT
                    <FontAwesomeIcon icon={faArrowRight} size='1x' className='mt-1 ps-1'/>
                </div>
            </div>
            <div className="col-md-4 d-flex flex-column align-items-center" id='card' style={{padding: '36px 10px 26px',marginTop:'10px'}}>
                <FontAwesomeIcon icon={faCloud} size='5x' color='red'/>
                <h4 style={{color:'#696969'}}>Cloud</h4>
                <p style={{color:'#696969',fontWeight:400,fontSize:'16px',fontFamily:'CerebriSans'}}>Lets get your business in cloud.Bespoke design and implementation  of business IT and cloud strtegies is our game.</p>
                <div className="btn d-flex text-danger">Cloud and Hosting
                    <FontAwesomeIcon icon={faArrowRight} size='1x' className='mt-1 ps-1'/>
                </div>
            </div>
            <div className="col-md-4 d-flex flex-column align-items-center" id='card' style={{padding: '36px 10px 26px',marginTop:'10px'}}>
                <FontAwesomeIcon icon={faHeadset} size='5x' color='red'/>
                <h4 style={{color:'#696969'}}>Voice/VOIP & Hosted Telephones</h4>
                <p style={{color:'#696969',fontWeight:400,fontSize:'16px',fontFamily:'CerebriSans'}}>Use the latest VOIP technology.Keep your business and customers connected with unified communication.</p>
                <div className="btn d-flex text-danger">Voice and Hosted Telephony
                    <FontAwesomeIcon icon={faArrowRight} size='1x' className='mt-1 ps-1'/>
                </div>
            </div>
            <div className="col-md-4 d-flex flex-column align-items-center" id='card' style={{padding: '36px 10px 26px',marginTop:'10px'}}>
                <FontAwesomeIcon icon={faExchange} size='5x' color='red'/>
                <h4 style={{color:'#696969'}}>Billing</h4>
                <p style={{color:'#696969',fontWeight:400,fontSize:'16px',fontFamily:'CerebriSans'}}>An award winning billing solution.Empower your business with comprehensive telecomes customer management and billing platform.</p>
                <div className="btn d-flex text-danger">Billing
                    <FontAwesomeIcon icon={faArrowRight} size='1x' className='mt-1 ps-1'/>
                </div>
            </div>
            <div className="col-md-4 d-flex flex-column align-items-center" id='card' style={{padding: '36px 10px 26px',marginTop:'10px'}}>
                <FontAwesomeIcon icon={faCoins} size='5x' color='red'/>
                <h4 style={{color:'#696969'}}>Payments Solution</h4>
                <p style={{color:'#696969',fontWeight:400,fontSize:'16px',fontFamily:'CerebriSans'}}>Improve efficiency and saved.We offer a serviced,consultative,and managed approach to merchants payments solutions.</p>
                <div className="btn d-flex text-danger">Payments
                    <FontAwesomeIcon icon={faArrowRight} size='1x' className='mt-1 ps-1'/>
                </div>
            </div>
            <div className="col-md-4 d-flex flex-column align-items-center" id='card' style={{padding: '36px 10px 26px',marginTop:'10px'}}>
                <FontAwesomeIcon icon={faBezierCurve} size='5x' color='red'/>
                <h4 style={{color:'#696969'}}>Fedility Partner Program</h4>
                <p style={{color:'#696969',fontWeight:400,fontSize:'16px',fontFamily:'CerebriSans'}}>Join club Fedility.The most custiomer centric reseller partner programme in the UK.</p>
                <div className="btn d-flex text-danger">Partner Programm
                    <FontAwesomeIcon icon={faArrowRight} size='1x' className='mt-1 ps-1'/>
                </div>
            </div>
        </div>
        <div className="row d-flex justify-content-center my-md-5 my-3">
            <div className='d-flex col-lg-6 col-md-8 justify-content-around' id='buttons'>
                <button type='button' className='rounded border-0 px-5 py-3 text-white bg-danger' style={{fontSize:'14px',fontFamily:'CerebriSans'}} id='button'>Get a Quote</button>
                <button type='button' id='button1' className='rounded px-5 py-3 text-danger bg-white' style={{fontSize:'14px',fontFamily:'CerebriSans',border:'1px solid #EEE'}}>Call us Today</button>
            </div>
        </div>
      </div>
      <div className="container-fluid" style={{backgroundColor:'#F8F8F8'}}>
        <div className="row d-flex justify-content-center">
            <div className="col-md-10 d-flex flex-column align-items-center my-md-5 my-3">
                <h2 style={{color:'#bfbbbb',fontSize:'14px',fontFamily:'CerebriSans',fontWeight:700,letterSpacing:'3px'}}>DISCOVER FIDELITY GROUP</h2>
                <p style={{fontFamily:'CerebriSans', fontSize:'40px',fontWeight:700,color:'#7a7777'
                }}>We’ve been thriving <span className='text-danger'>since 2008</span></p>
            </div>
        </div>
        <div className="row d-flex justify-content-around my-md-0 my-3">
            <div className="col-md-3 btn bg-white d-flex justify-content-md-center flex-column pt-3" id='button2'>
            <h2 style={{color:'#7a7777',fontSize:'14px',fontFamily:'CerebriSans',fontWeight:500}}>OUR MISSION</h2>
            </div>
            <div className="col-md-3 btn bg-white d-flex justify-content-md-center  flex-column pt-3" id='button3'>
            <h2 style={{color:'#7a7777',fontSize:'14px',fontFamily:'CerebriSans',fontWeight:500}}>TECH AND TELECOM PARTNER</h2>
            </div>
            <div className="col-md-3 btn bg-white d-flex justify-content-md-center  flex-column pt-3" id='button4'>
            <h2 style={{color:'#7a7777',fontSize:'14px',fontFamily:'CerebriSans',fontWeight:500}}>ENERGY PARTNER</h2>
            </div>
        </div>
        <div className='row d-flex justify-content-center py-md-5 py-3'>
            <div className="col-md-8 d-flex justify-content-center">
                <h1 style={{fontSize:'36px',fontFamily:'CerebriSans',fontWeight:500,color:'#7a7777'}}>Fidelity Group – Multi-award winners</h1>
            </div>
        </div>
        <div className="row d-flex justify-content-center">
            <div className="col-lg-10 col-md-12 my-md-5 my-3">
            <div className="slider-container">
      <div className="slider">
        {getImageIndexes().map((index, i) => (
          <img
            key={index}
            src={images[index]}
            alt={`Slide ${index}`}
            className="slidee"
            style={{
              animation: i === 0 ? "slide-out-left 2s forwards" : i === 5 ? "slide-in-right 2s forwards" : "", 
            }}
          />
        ))}
      </div>
    </div>
<button type='button' className='rounded bg-white text-danger px-5 py-3 d-flex ms-auto me-auto mt-md-5 mt-3' id='button5' style={{fontSize:'14px',fontFamily:'CerebriSans',border:'1px solid #EEE',fontWeight:300}}>Find Out More</button>
            </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-md-8 d-flex flex-column align-items-center">
          <h2 style={{color:'#bfbbbb',fontSize:'14px',fontFamily:'CerebriSans',fontWeight:700,letterSpacing:'3px'}}>DISCOVER FIDELITY GROUP</h2>
                <p style={{fontFamily:'CerebriSans', fontSize:'40px',fontWeight:700,color:'#7a7777'
                }}>What our customers have to say.</p>
          </div>
        </div>
        <div className="row d-flex">
          <div className="col-12">
          <div id="carouselExampleIndicators1" data-bs-ride="carousel" data-bs-interval="1000" className="carousel slide" style={{paddingBottom:'50px'}} >
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className='d-flex justify-content-around row' style={{paddingTop:'50px'}}>
        <div style={{height:'50vh',border:'1px solid #eee'}} className='rounded bg-white col-md-5 mb-md-0 mb-3' id='carouseldiv1'>
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
      <div className="container" style={{backgroundColor:'#FFFFFF'}}>
        <div className="row">
          <div className="col-md-4 ps-3 mt-5">
          <h2 style={{color:'#bfbbbb',fontSize:'14px',fontFamily:'CerebriSans',fontWeight:700}}>IN THE MEDIA</h2>
                <p style={{fontFamily:'CerebriSans', fontSize:'40px',fontWeight:700,color:'#7a7777'
                }}>Press releases,<span className='text-danger'>blogs</span> and videos</p>
                <div className='d-flex' id='question1'>
                  <div><FontAwesomeIcon icon={faArrowRight} size='1x' color='red' className='me-2 mt-1' id='arrowin1'/></div>
                  <p style={{fontFamily:'CerebriSans', fontSize:'15px',fontWeight:700,color:'red'}}>Why companies shoukd avoid to use IOT SIMs in applications</p>
                </div>
                <div className='d-flex' id='question2'>
                <div><FontAwesomeIcon icon={faArrowRight} size='1x' color='red' className='me-2 mt-1' id='arrowin2'/></div>
                  <p style={{fontFamily:'CerebriSans', fontSize:'15px',fontWeight:700,color:'red'}}>Summer is the best time to contract but time is running out!</p>
                </div>
                <div className='d-flex' id='question3'>
                <div><FontAwesomeIcon icon={faArrowRight} size='1x' color='red' className='me-2 mt-1' id='arrowin3'/></div>
                  <p style={{fontFamily:'CerebriSans', fontSize:'15px',fontWeight:700,color:'red'}}>What is the fixed IP sim card?</p>
                </div>
                <div className='d-flex' id='question4'>
                <div><FontAwesomeIcon icon={faArrowRight} size='1x' color='red' className='me-2 mt-1' id='arrowin4'/></div>
                  <p style={{fontFamily:'CerebriSans', fontSize:'15px',fontWeight:700,color:'red'}}>Energy drives 300k payment commission</p>
                </div>
                <div className='d-flex' id='question5'>
                <div><FontAwesomeIcon icon={faArrowRight} size='1x' color='red' className='me-2 mt-1' id='arrowin5'/></div>
                  <p style={{fontFamily:'CerebriSans', fontSize:'15px',fontWeight:700,color:'red'}}>NEW-Record Teams and phone calls on one platform</p>
                </div>
          </div>
          <div className="col-md-8 mt-5">
            <div className="row d-flex justify-content-between">
              <div className="col-md-6" id='questionimage'>
                <img src={image7} alt="" className='img-fluid rounded' style={{width:'100%'}}/>
                <FontAwesomeIcon icon={faCalendar} size='1x' color='grey' className='my-2'/><br/>
                <h3 style={{fontFamily:'CerebriSans', fontSize:'24px',fontWeight:700,color:'#7a7777'}}>Why companies should avoid using mobile phone SIMs in IOT applications</h3>
                <p style={{fontFamily:'CerebriSans', fontSize:'16px',fontWeight:400,color:'#7a7777'}}>It may be tempting to use mobile phone SIMs htmlFor IoT applications but this...</p>
                <button type='button' className='border-0 text-danger px-3 py-2 bg-white' style={{textDecorationColor:'#7a7777',textDecorationLine:'underline'}}>Read More<FontAwesomeIcon icon={faArrowRight} size='1x' className='ms-1'/></button>
              </div>
              <div className="col-md-6" id='questionimage1'>
              <img src={image8} alt="" className='img-fluid rounded' style={{width:'100%'}}/>
                <FontAwesomeIcon icon={faCalendar} size='1x' color='grey' className='my-2'/><br/>
                <h3 style={{fontFamily:'CerebriSans', fontSize:'24px',fontWeight:700,color:'#7a7777'}}>Summer is the best time to sign a new energy contract but time is running out!</h3>
                <p style={{fontFamily:'CerebriSans', fontSize:'16px',fontWeight:400,color:'#7a7777'}}>Energy prices typically drop in the summer months which presents businesses with...</p>
                <button type='button' className='border-0 text-danger px-3 py-2 bg-white' style={{textDecorationColor:'#7a7777',textDecorationLine:'underline'}}>Read More<FontAwesomeIcon icon={faArrowRight} size='1x' className='ms-1'/></button>
              </div>
            </div>
          </div>
        </div>
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

export default Home
