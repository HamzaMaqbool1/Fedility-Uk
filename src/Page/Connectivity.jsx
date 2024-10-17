import React, { useEffect, useState } from 'react'
import image from '../Images/logo.png'
import image1 from '../Images/image10.png'
import image9 from '../Images/image9.png'
import image11 from '../Images/image11.png'
import image12 from '../Images/image12.png'
import image13 from '../Images/image13.png'
import image14 from '../Images/image14.png'
import image15 from '../Images/image15.png'
import image7 from '../Images/image22.png'
import image2 from '../Images/image17.png'
import image3 from '../Images/image18.png'
import image4 from '../Images/image19.png'
import image5 from '../Images/image20.png'
import image6 from '../Images/image21.png'
import logo1 from '../Images/image54.png'
import { Link } from 'react-router-dom'
import { handleScroll1} from '../javascript/scrollbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight,faStar } from '@fortawesome/free-solid-svg-icons'
const images = [
  image7, // Use the variables without curly braces
  image2,
  image3,
  image4,
  image5,
  image6
];
const Connectivity = () => {
    useEffect(() => {
        handleScroll1();
      }, []);
      const [activeNew,newActive]=useState('connectivity');

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
    <section id='connectivity'>
       <div className="container-fluid p-0" style={{backgroundImage:`url(${image1})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
        <div className="row">
            <div className="col-md-12">
            <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{position:'relative'}} id='navbar1'>
  <div className="container-fluid">
    <img src={image} alt="logo" className='img-fluid ms-md-5 ms-3' style={{width:'120px',height:'50px'}} />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
      <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-black" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </a>
          <ul className="dropdown-menu rounded-0">
            <li><Link className="dropdown-item" to="/connectivity" style={activeNew === 'connectivity'?{color:'red'}:{}}>Connectivity</Link></li>
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
      <button type='button' className='rounded bg-white text-danger px-5 py-3 d-flex ms-auto d-lg-inline-block d-none' id='button6' style={{fontSize:'14px',fontFamily:'CerebriSans',fontWeight:300,border:'1px solid red'}}>Get a Quote</button>
    </div>
    
  </div>
</nav>
            </div>
        </div>
        <div className="row">
            <div className="col-12">
            <nav className="navbar navbar-expand-lg" style={{position:'relative',backgroundColor:'rgba(255,255,255,0)'}} id='navbar'>
  <div className="container-fluid">
    <img src={logo1} alt="logo" className='img-fluid ms-md-5 ms-3' style={{width:'120px',height:'50px'}} />
    <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
      <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </a>
          <ul className="dropdown-menu rounded-0">
            <li><Link className="dropdown-item" to="/connectivity" style={activeNew === 'connectivity'?{color:'red'}:{}}>Connectivity</Link></li>
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
          <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
          <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
          <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
          <a className="nav-link text-white">Contact</a>
        </li>
      </ul>
      <button type='button' className='rounded bg-white text-danger px-5 py-3 d-flex ms-auto d-lg-inline-block d-none' id='button5' style={{fontSize:'14px',fontFamily:'CerebriSans',fontWeight:300}}>Get a Quote</button>
    </div>
  
  </div>
</nav>
            </div>
        </div>
        <div className="row my-md-5 my-3 mx-md-5 ms-3">
            <div className="col-md-8">
                <h2 style={{color:'white',fontSize:'14px',fontFamily:'CerebriSans',fontWeight:700}}>TRUSTED BUSINESS FIBRE BROADBAND AND ETHERNET CABLE SERVICES.</h2>
                <h1 style={{color:'white',fontSize:'56px',fontFamily:'CerebriSans',fontWeight:500}}>Get the best business fibre broadband</h1>
                <button type='button' className='rounded bg-danger text-white px-5 py-3 d-flex my-md-5 my-3' id='button1' style={{fontSize:'14px',fontFamily:'CerebriSans',fontWeight:300}}>Speak with an Expert</button>
            </div>
        </div>
        </div>   
        <div className="container-fluid my-md-5 my-3">
            <div className="row d-flex justify-content-around">
                <div className="col-md-3 d-flex flex-column align-items-center mb-3">
                <div className="d-flex text-decoration-underline" id='lineslide'>
                <h2 style={{color:'red',fontSize:'17px',fontFamily:'CerebriSans',fontWeight:700}}>Dedicated Fiber Internet</h2>
                <FontAwesomeIcon icon={faArrowRight} size='1x' color='red' className='mt-1 ms-1'/>
                </div>
                <p style={{fontSize:'14px',fontFamily:'CerebriSans',fontWeight:400,color:'#696969',lineHeight:'1.74'}}>The UK’s no.1 dedicated leased line internet access for business. No sharing, unrivalled reliability, and market-leading service availability to help your business thrive. Internet speeds up to 10Gbps</p>
                <button type='button' className='rounded bg-danger text-white px-5 py-3 d-flex ms-auto me-auto border-0' id='button7' style={{fontSize:'14px',fontFamily:'CerebriSans',fontWeight:300}}>Find out More</button>
                </div>
                <div className="col-md-3 d-flex flex-column align-items-center mb-3">
                <div className="d-flex text-decoration-underline" id='lineslide'>
                <h2 style={{color:'red',fontSize:'17px',fontFamily:'CerebriSans',fontWeight:700}}>Fiber to the Permisise(FTTP)</h2>
                <FontAwesomeIcon icon={faArrowRight} size='1x' color='red' className='mt-1 ms-1'/>
                </div>
                <p style={{fontSize:'14px',fontFamily:'CerebriSans',fontWeight:400,color:'#696969',lineHeight:'1.74'}}>Premium business fibre broadband service for businesses demanding high-availability and high-capacity. Internet speeds up to 1Gbps.</p>
                <button type='button' className='rounded bg-danger text-white px-5 py-3 d-flex ms-auto me-auto border-0' id='button7' style={{fontSize:'14px',fontFamily:'CerebriSans',fontWeight:300}}>Find out More</button>
                </div>
                <div className="col-md-3 d-flex flex-column align-items-center mb-md-5 mb-3">
                <div className="d-flex text-decoration-underline" id='lineslide'>
                <h2 style={{color:'red',fontSize:'17px',fontFamily:'CerebriSans',fontWeight:700}}>SoGEA Broadband</h2>
                <FontAwesomeIcon icon={faArrowRight} size='1x' color='red' className='mt-1 ms-1'/>
                </div>
                <p style={{fontSize:'14px',fontFamily:'CerebriSans',fontWeight:400,color:'#696969',lineHeight:'1.74'}}>Business broadband without the need for a traditional phone line. So, everything you require is covered in a single order, with one supplier.</p>
                <button type='button' className='rounded bg-danger text-white px-5 py-3 d-flex ms-auto me-auto border-0' id='button7' style={{fontSize:'14px',fontFamily:'CerebriSans',fontWeight:300}}>Find out More</button>
                </div>
            </div>
            <div className="row d-flex justify-content-between my-md-5 my-3 mx-lg-5">
              <div className="col-lg-3 col-md-5 d-flex gap-3">
                <div className="vr" style={{height:'32vh',width:'20px',backgroundColor:'#15376e',opacity:1}}></div>
                <h2  style={{color:'red',fontWeight:800,fontSize:'24px',fontFamily:'CerebriSans',lineHeight:'1.67'}}>Work smarter and faster, not harder, with the fastest and most reliable business fibre broadband speeds.</h2>
              </div>
              <div className="col-md-6">
                <p  style={{color:'#696969',fontWeight:400,fontSize:'18px',fontFamily:'CerebriSans',lineHeight:'1.67'}}>We have hand-picked specialist suppliers to provide our clients with superfast, business fibre broadband connectivity solutions. Whether you’re looking for a specific product or service that will benefit your team’s productivity and collaboration, or hope to achieve the fastest internet speeds possible, we’ll do the hard work for you and find the best business fibre broadband deals.</p>
                <button type='button' className='rounded bg-danger text-white px-5 py-3 border-0' id='button7' style={{fontSize:'14px',fontFamily:'CerebriSans',fontWeight:300}}>Speak with Expert about Fiber Broadband in your Area</button>
              </div>
            </div>
            </div> 

            <div className="container-fluid my-md-5 my-3">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-10 col-md-12">
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
                </div>
              </div>
            </div>

            <div className="container-fluid p-0" style={{backgroundImage:`url(${image15})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
              <div className="row">
                <div className="col-12">
                <div className="container-fluid" style={{backgroundColor:'rgba(229, 229, 229, 0.5)',zIndex:1,position:'relative'}}>
              <div className="row d-flex justify-content-center">
                <div className="col-md-10 d-flex justify-content-center my-md-5 my-3">
                  <h2 style={{fontSize:'40px',fontFamily:'CerebriSans',fontWeight:700,color:"red"}}><span style={{color:'#B7B7B7'}}>Why Fidelity for your</span> business fibre broadband?</h2>
                </div>
              </div>
              <div className="row mt-md-5 mt-3 d-flex justify-content-around">
                <div className="col-lg-2 bg-white py-5 px-3" id='slidecol'>
                  <img src={image12} alt="" className='img-fluid' style={{width:'50px',height:'50px'}} />
                  <h2 style={{fontSize:'24px',fontFamily:'CerebriSans',fontWeight:500,color:"#696969"}}>Improved Productivity</h2>
                  <p style={{fontSize:'16px',fontFamily:'CerebriSans',fontWeight:400,color:"#696969"}} className='pt-3'>Empower your teams with seamless communication via high-performing applications such as video and voice conferencing.Upgrade to full business fiber broadband for improved internet speeds and increased readability at competitive pricing.</p>
                </div>
                <div className="col-lg-2 bg-white py-5 px-3" id='slidecol'>
                <img src={image11} alt="" className='img-fluid' style={{width:'50px',height:'50px'}} />
                  <h2 style={{fontSize:'24px',fontFamily:'CerebriSans',fontWeight:500,color:"#696969"}}>Scaleable Business Fiber Broadband</h2>
                  <p style={{fontSize:'16px',fontFamily:'CerebriSans',fontWeight:400,color:"#696969"}} className='pt-3'>Empower your teams with seamless communication via high-performing applications such as video and voice conferencing.Upgrade to full business fiber broadband for improved internet speeds and increased readability at competitive pricing.</p>
                </div>
                <div className="col-lg-2 bg-white py-5 px-3" id='slidecol'>
                <img src={image13} alt="" className='img-fluid' style={{width:'50px',height:'50px'}} />
                  <h2 style={{fontSize:'24px',fontFamily:'CerebriSans',fontWeight:500,color:"#696969"}}>Better Security</h2>
                  <p style={{fontSize:'16px',fontFamily:'CerebriSans',fontWeight:400,color:"#696969"}} className='pt-3'>Empower your teams with seamless communication via high-performing applications such as video and voice conferencing.Upgrade to full business fiber broadband for improved internet speeds and increased readability at competitive pricing.</p>
                </div>
                <div className="col-lg-2 bg-white py-5 px-3" id='slidecol'>
                <img src={image14} alt="" className='img-fluid' style={{width:'50px',height:'50px'}} />
                  <h2 style={{fontSize:'24px',fontFamily:'CerebriSans',fontWeight:500,color:"#696969"}}>Award Winning 24/7/7 Business Support</h2>
                  <p style={{fontSize:'16px',fontFamily:'CerebriSans',fontWeight:400,color:"#696969"}} className='pt-3'>Empower your teams with seamless communication via high-performing applications such as video and voice conferencing.Upgrade to full business fiber broadband for improved internet speeds and increased readability at competitive pricing.</p>
                </div>
              </div>
              </div>
                </div>
              </div>
              </div> 
              <div className="container-fluid" style={{backgroundColor:'#b7b7b7'}}>
              <div className="row d-flex justify-content-around py-md-5 py-3">
                  <div className="col-md-7">
                    <h1 style={{fontSize:'40px',fontFamily:'CerebriSans',fontWeight:700,color:"#696969"}}>Connect to our latest <span className='text-danger'> business Fibre Broadband</span> deals</h1>
                  </div>
                  <div className="col-md-4">
                  <div className="d-lg-flex gap-3 mt-3">
                  <button type='button' className='rounded bg-danger text-white px-5 py-3 border-0 mb-lg-0 mb-3 me-md-0 me-3' id='button7' style={{fontSize:'14px',fontFamily:'CerebriSans',fontWeight:300}}>Get Promo</button>
                  <button type='button' className='rounded  text-white px-5 py-3 border-0' id='button9' style={{fontSize:'14px',fontFamily:'CerebriSans',fontWeight:300,backgroundColor:'#15376e'}}>Call us</button>
                  </div>
                  </div>
                </div>
              </div>
                <div className="container-fluid" style={{backgroundColor:'#F5F5F5'}}>
                  <div className="row d-flex justify-content-center">
                    <div className="col-md-8 d-flex flex-column align-items-center">
                      <h3 style={{fontSize:'14px',fontFamily:'CerebriSans',fontWeight:700,color:'#ababab',letterSpacing:'3px'}}>TESTIMONIALS</h3>
                      <h3 style={{fontSize:'40px',fontFamily:'CerebriSans',fontWeight:700,color:'#696969'}} className='mt-3'>What our customers have to say</h3>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                    <div id="carouselExampleIndicators2" className="carousel slide" data-bs-ride="carousel" data-bs-interval="1000" style={{paddingBottom:'50px'}} >
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
    <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" style={{backgroundColor:'#15376e',width:'10px',height:'10px',borderRadius:'50%'}} ></button>
    <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="1" aria-label="Slide 2" className="active" style={{backgroundColor:'#15376e',width:'10px',height:'10px',borderRadius:'50%'}} ></button>
    <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="2" aria-label="Slide 3" className="active" style={{backgroundColor:'#15376e',width:'10px',height:'10px',borderRadius:'50%'}} ></button>
    <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="3" aria-label="Slide 4" className="active" style={{backgroundColor:'#15376e',width:'10px',height:'10px',borderRadius:'50%'}} ></button>
    <button type="button" data-bs-target="#carouselExampleIndicators2" data-bs-slide-to="4" aria-label="Slide 5" className="active" style={{backgroundColor:'#15376e',width:'10px',height:'10px',borderRadius:'50%'}} ></button>
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

export default Connectivity
