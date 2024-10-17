import React, { useEffect, useState } from 'react'
import { handleScroll} from '../javascript/scrollbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import image from '../Images/logo.png'
import image9 from '../Images/image9.png'
import image10 from '../Images/image24.png'
import image11 from '../Images/image25.png'
import image12 from '../Images/image26.png'
import image13 from '../Images/image27.png'
import image14 from '../Images/image28.png'
import image15 from '../Images/image29.png'
import image16 from '../Images/image30.png'
import image17 from '../Images/image31.png'
import { Link } from 'react-router-dom';
import { faAward, faChainSlash, faCloudArrowDown, faCodeMerge, faFileUpload, faHandshakeAlt, faList, faNetworkWired, faShield, faSimCard, faStar, faUserCog } from '@fortawesome/free-solid-svg-icons';
const images = [
    image13, 
    image14,
    image15,
    image15,
    image16,
    image17
  ];
const IOT = () => {
    useEffect(() => {
        handleScroll();
      }, []);
      const [activeNew,newActive]=useState('iot');
      const [currentIndex, setCurrentIndex] = useState(0);
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); 
    
        return () => clearInterval(interval); 
      }, []);
    
     
      const getImageIndexes = () => {
        const indexes = [];
        for (let i = 0; i < 5; i++) {
          indexes.push((currentIndex + i) % images.length);
        }
        return indexes;
      };
  return (
    <section id='iot'>
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
            <li><Link className="dropdown-item" to="/iot" style={activeNew === 'iot'?{color:'red'}:{}}>IOT</Link></li>
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
            <div className="row">
                <div className="col-lg-6 my-md-5 my-3 px-lg-5 px-0 ps-2">
                    <h1 style={{fontSize:'56px',fontFamily:'CerebriSans',fontWeight:700,color:'white'}}>A Global IoT Solution – Data everywhere for everything</h1>
                    <p style={{fontSize:'16px',fontFamily:'CerebriSans',fontWeight:400,color:'white',lineHeight:1.7}}>Our IoT solutions are driving connectivity and growth everywhere, from CCTV cameras to hand held payment devices. And from the UK to the farthest reaches of the globe.</p>
                    <p style={{fontSize:'16px',fontFamily:'CerebriSans',fontWeight:400,color:'white',lineHeight:1.7}}>If your business needs the very best in IoT connectivity, choosing our solution will be the easiest decision you’ll ever make.</p>
                    <button type='button' className='rounded bg-danger text-white px-5 py-3 d-flex  me-auto border-0' id='button7' style={{fontSize:'14px',fontFamily:'CerebriSans',fontWeight:300}}>Find out More</button>
                </div>
                <div className="col-md-6 d-flex flex-column justify-content-center ms-lg-0 me-lg-0 ms-auto me-auto">
                    <div style={{border:'2px solid red',borderRadius:'15px',position:'absolute',width:'50%',backgroundColor:'#e5e5e5',opacity:0.9}} id='absolutediv'>
                        <h3 className='text-center' style={{fontSize:'36px',fontFamily:'CerebriSans',fontWeight:700,color:'red'}}>FREE Starter Pack</h3>
                        <div className='d-sm-flex justify-content-around'>
                            <div className='d-flex align-items-center justify-content-center gap-2 mb-2  mb-sm-0'>
                                <FontAwesomeIcon icon={faSimCard} size='3x' color='red'/>
                                <h1 style={{fontSize:'18px',fontFamily:'CerebriSans',fontWeight:700,color:'red',letterSpacing:1}}>4 SIM CARDS</h1>
                            </div>
                            <div className='d-flex align-items-center justify-content-center gap-2 mb-2  mb-sm-0'>
                                <FontAwesomeIcon icon={faCloudArrowDown} size='3x' color='red'/>
                                <h1 style={{fontSize:'18px',fontFamily:'CerebriSans',fontWeight:700,color:'red',letterSpacing:1}}>250MB SIMS</h1>
                            </div>
                        </div>
                        <div className='d-sm-flex justify-content-around my-md-5 my-3'>
                            <div className='d-flex align-items-center justify-content-center gap-2 mb-2  mb-sm-0'>
                                <FontAwesomeIcon className='ps-3' icon={faNetworkWired} size='3x' color='red'/>
                                <h1 style={{fontSize:'18px',fontFamily:'CerebriSans',fontWeight:700,color:'red',letterSpacing:1}}>UK NETWORK</h1>
                            </div>
                            <div className='d-flex align-items-center justify-content-center gap-2 mb-2 mb-sm-0'>
                                <FontAwesomeIcon icon={faChainSlash} size='3x' color='red'/>
                                <h1 style={{fontSize:'18px',fontFamily:'CerebriSans',fontWeight:700,color:'red',letterSpacing:1}}>VM PLATFORM</h1>
                            </div>
                        </div>
                        <button type='button' className='rounded bg-danger text-white py-3 d-flex ms-lg-5 border-0 my-md-5 my-3' id='button9' style={{fontSize:'14px',fontFamily:'CerebriSans',fontWeight:300,width:'100%'}}>Find out More</button>
                    </div>
                </div>
            </div>
        </div> 
      </div>
      <div className="container">
        <div className="row">
            <div className="col-md-8">
                <h1 style={{fontSize:'36px',fontFamily:'CerebriSans',fontWeight:700,color:'red'}}>Quote, order & manage <span style={{color:'#696969'}}>– ENTIRELY ONLINE!</span></h1>
            </div>
        </div>
        <div className="row my-md-5 my-3">
            <div className="col-md-6">
                <p style={{fontSize:'16px',fontFamily:'CerebriSans',fontWeight:400,color:'#696969',lineHeight:1.7}}>Fidelity’s new platform, named <span className='text-danger'>vM2M</span>, allows you to create your perfect IoT solution and get a quote whenever you need it. No phone calls, no waiting for pricing to come back to you. It’s all in your hands.</p>
                <p style={{fontSize:'16px',fontFamily:'CerebriSans',fontWeight:400,color:'#696969',lineHeight:1.7}} className='pt-3'>And once you have your quote, you can order your IoT SIM cards, entirely online too.</p>
                <p className='pt-3' style={{fontSize:'16px',fontFamily:'CerebriSans',fontWeight:400,color:'#696969',lineHeight:1.7}}>Need more SIM cards or just want to keep track of your data usage? No problem, just log into your vM2M account and you can do that, quickly, simply and easily.</p>
                <p className='pt-3' style={{fontSize:'16px',fontFamily:'CerebriSans',fontWeight:400,color:'#696969',lineHeight:1.7}}>Getting started with IoT has never been easier for you. Find out more about vM2M <span className='text-danger text-decoration-underline'>here</span>.</p>
                <p className='pt-3' style={{fontSize:'16px',fontFamily:'CerebriSans',fontWeight:400,color:'#696969',lineHeight:1.7}}>Or enjoy our outstanding customer service. vM2M is the only totally online IoT management portal but we recognise that for some people, talking directly to one of our IoT specialists is preferable.</p>
                <p className='pt-3' style={{fontSize:'16px',fontFamily:'CerebriSans',fontWeight:400,color:'#696969',lineHeight:1.7}}>With a team of Fidelity’s experts on hand to help you get started on your IoT journey  and answer any questions you may have you can rest assured that we’ll help you get started with vM2M and our leading IoT connectivity technology.</p>
            </div>
            <div className="col-md-6">
            <img src={image9} alt="women" style={{width:'100%',height:'90%'}}/>
            </div>
        </div>
      </div>
      <div className="container mb-md-5 mb-3">
        <div className="row bg-white" style={{borderRadius:'20px',border:'2px solid #EEE',height:'20vh'}} id='containerwidth'>
            <div className="col-md-3 d-flex align-items-center justify-content-center">
                <h3 style={{fontSize:'24px',fontFamily:'CerebriSans',fontWeight:700,color:'#696969'}}>POWERED BY</h3>
            </div>
            <div className="col-md-8 d-flex align-items-center">
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
      <div className="container-fluid" style={{backgroundColor:'#EEEEEE'}}>
        <div className="row d-flex justify-content-center">
            <div className="col-lg-7 col-md-10 text-center">
                <h3 style={{fontSize:'36px',fontFamily:'CerebriSans',fontWeight:700,color:'#696969'}}>IoT SIMs from Fidelity Group with vM2M
                </h3>
                <h3 style={{fontSize:'36px',fontFamily:'CerebriSans',fontWeight:700,color:'#696969'}}>– Data with a difference</h3>
            </div>
        </div>
        <div className="row my-md-5 my-3">
            <div className="container">
                <div className="row d-flex justify-content-around">
                    <div className="col-md-5 d-flex">
                        <FontAwesomeIcon icon={faFileUpload} size='1x'color='red' className='mt-2'/>
                        <div className='ms-3'>
                            <h1 style={{fontSize:'24px',fontFamily:'CerebriSans',fontWeight:600,color:'#696969'}}>24/7 Online Quoting</h1>
                            <p style={{fontSize:'16px',fontFamily:'CerebriSans',fontWeight:400,color:'#696969',lineHeight:1.74}}>You’ve selected your idea IoT SIM options and now you just want to know the cost? No problem, vM2M provides immediate pricing on screen – whenever you need. Get started right away.</p>
                        </div>
                    </div>
                    <div className="col-md-5 d-flex">
                    <FontAwesomeIcon icon={faAward} size='1x'color='red' className='mt-2'/>
                        <div className='ms-3'>
                            <h1 style={{fontSize:'24px',fontFamily:'CerebriSans',fontWeight:600,color:'#696969'}}>Outstanding customer support</h1>
                            <p style={{fontSize:'16px',fontFamily:'CerebriSans',fontWeight:400,color:'#696969',lineHeight:1.74}}>You’ve selected your idea IoT SIM options and now you just want to know the cost? No problem, vM2M provides immediate pricing on screen – whenever you need. Get started right away.</p>
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-around">
                    <div className="col-md-5 d-flex">
                        <FontAwesomeIcon icon={faSimCard} size='1x'color='red' className='mt-2'/>
                        <div className='ms-3'>
                            <h1 style={{fontSize:'24px',fontFamily:'CerebriSans',fontWeight:600,color:'#696969'}}>24/7 Online Ordering</h1>
                            <p style={{fontSize:'16px',fontFamily:'CerebriSans',fontWeight:400,color:'#696969',lineHeight:1.74}}>You’ve selected your idea IoT SIM options and now you just want to know the cost? No problem, vM2M provides immediate pricing on screen – whenever you need. Get started right away.</p>
                        </div>
                    </div>
                    <div className="col-md-5 d-flex">
                    <FontAwesomeIcon icon={faList} size='1x'color='red' className='mt-2'/>
                        <div className='ms-3'>
                            <h1 style={{fontSize:'24px',fontFamily:'CerebriSans',fontWeight:600,color:'#696969'}}>Choose your ideal IoT SIM solution</h1>
                            <p style={{fontSize:'16px',fontFamily:'CerebriSans',fontWeight:400,color:'#696969',lineHeight:1.74}}>You’ve selected your idea IoT SIM options and now you just want to know the cost? No problem, vM2M provides immediate pricing on screen – whenever you need. Get started right away.</p>
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-around">
                    <div className="col-md-5 d-flex">
                        <FontAwesomeIcon icon={faUserCog} size='1x'color='red' className='mt-2'/>
                        <div className='ms-3'>
                            <h1 style={{fontSize:'24px',fontFamily:'CerebriSans',fontWeight:600,color:'#696969'}}>24/7 Online Management</h1>
                            <p style={{fontSize:'16px',fontFamily:'CerebriSans',fontWeight:400,color:'#696969',lineHeight:1.74}}>You’ve selected your idea IoT SIM options and now you just want to know the cost? No problem, vM2M provides immediate pricing on screen – whenever you need. Get started right away.</p>
                        </div>
                    </div>
                    <div className="col-md-5 d-flex">
                    <FontAwesomeIcon icon={faShield} size='1x'color='red' className='mt-2'/>
                        <div className='ms-3'>
                            <h1 style={{fontSize:'24px',fontFamily:'CerebriSans',fontWeight:600,color:'#696969'}}>
                            Secure SIMs</h1>
                            <p style={{fontSize:'16px',fontFamily:'CerebriSans',fontWeight:400,color:'#696969',lineHeight:1.74}}>You’ve selected your idea IoT SIM options and now you just want to know the cost? No problem, vM2M provides immediate pricing on screen – whenever you need. Get started right away.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className="container" style={{backgroundColor:'#FFFFFF'}}>
        <div className="row mt-md-5 mt-3">
            <div className="col-md-4">
                <img src={image11} alt="" className='img-fluid pt-md-5' id='imageheight' />
            </div>
            <div className="col-md-8">
                <h3 style={{fontSize:'36px',fontFamily:'CerebriSans',fontWeight:700,color:'#696969'}}>We’re completely <span className='text-danger'>independent</span>…</h3>
                <p style={{fontSize:'16px',fontFamily:'CerebriSans',fontWeight:400,color:'#696969',lineHeight:1.74}}>There are a huge range of IoT solutions available to you, from a wide range of suppliers. Find the ideal solution for you and your business by using our vM2M platform. Just log in, select the SIM specification of your choice and you’ll get an instant quote. Our independence means that we always ensure that you make the best possible choice.</p>
                <p style={{fontSize:'16px',fontFamily:'CerebriSans',fontWeight:400,color:'#696969',lineHeight:1.74}}>At Fidelity Group, our trusted network provides you with the peace of mind that you will always be making the best choice for you and your business.</p>
            </div>
        </div>
        <div className="row my-md-5 my-3">
            <div className="col-md-8 order-md-1 order-2">
                <h3 style={{fontSize:'36px',fontFamily:'CerebriSans',fontWeight:700,color:'#696969'}}>…trusted in telecoms for over <span className='text-danger'>40</span> years</h3>
                <p style={{fontSize:'16px',fontFamily:'CerebriSans',fontWeight:400,color:'#696969',lineHeight:1.74}}>There are a huge range of IoT solutions available to you, from a wide range of suppliers. Find the ideal solution for you and your business by using our vM2M platform. Just log in, select the SIM specification of your choice and you’ll get an instant quote. Our independence means that we always ensure that you make the best possible choice.</p>
                <p style={{fontSize:'16px',fontFamily:'CerebriSans',fontWeight:400,color:'#696969',lineHeight:1.74}}>At Fidelity Group, our trusted network provides you with the peace of mind that you will always be making the best choice for you and your business.</p>
            </div>
            <div className="col-md-4 order-md-2 order-1">
                <img src={image12} alt="" className='img-fluid pt-md-5' id='imageheight' />
            </div>
        </div>
      </div>
      <div className="container-fluid" style={{backgroundColor:'#F5F5F5'}}>
      <div className="row d-flex justify-content-center py-md-5 py-3">
                    <div className="col-md-8 d-flex flex-column align-items-center">
                      <h3 style={{fontSize:'14px',fontFamily:'CerebriSans',fontWeight:700,color:'#ababab',letterSpacing:'3px'}}>TESTIMONIALS</h3>
                      <h3 style={{fontSize:'40px',fontFamily:'CerebriSans',fontWeight:700,color:'#696969'}} className='mt-3'>What our customers have to say</h3>
                    </div>
                  </div>
        <div className="row d-flex justify-content-around">
            <div className="col-12">
            <div id="carouselExampleIndicators1" className="carousel slide" style={{paddingBottom:'50px'}} >
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className='d-flex justify-content-around row py-5' style={{paddingTop:'50px'}}>
        <div style={{height:'60vh',border:'1px solid #eee',borderRadius:'20px'}} className=' bg-white col-md-3 mb-md-0 mb-3' id='carouselcustomdiv'>
            <h1 style={{fontFamily:'CerebriSans', fontSize:'18px',fontWeight:700,color:'#7a7777'}} className='text-center pt-5'>George/</h1>
          <p style={{fontFamily:'CerebriSans', fontSize:'18px',fontWeight:400,color:'#7a7777'}} className='my-3 ms-5'>Great company,helpful and always available when required. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore fuga esse voluptatum mollitia dolor deserunt optio voluptates explicabo odit quae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, dolorum.</p>
        </div>
        <div style={{height:'60vh',border:'1px solid #eee',paddingTop:'10px',borderRadius:'20px'}} className=' bg-white col-md-3 mb-md-0 mb-3' id='carouselcustomdiv'>
            <h1 style={{fontFamily:'CerebriSans', fontSize:'18px',fontWeight:700,color:'#7a7777'}} className='text-center pt-5'>Jhonny/</h1>
          <p style={{fontFamily:'CerebriSans', fontSize:'18px',fontWeight:400,color:'#7a7777'}} className='my-3 ms-5'>Great company,helpful and always available when required. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore fuga esse voluptatum mollitia dolor deserunt optio voluptates explicabo odit quae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, dolorum.</p>
        </div>
        <div style={{height:'60vh',border:'1px solid #eee',paddingTop:'10px',borderRadius:'20px'}} className=' bg-white col-md-3 mb-md-0 mb-3' id='carouselcustomdiv'>
            <h1 style={{fontFamily:'CerebriSans', fontSize:'18px',fontWeight:700,color:'#7a7777'}} className='text-center pt-5'>KIMNOR/</h1>
          <p style={{fontFamily:'CerebriSans', fontSize:'18px',fontWeight:400,color:'#7a7777'}} className='my-3 ms-5'>Great company,helpful and always available when required. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore fuga esse voluptatum mollitia dolor deserunt optio voluptates explicabo odit quae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, dolorum.</p>
        </div>
        <div>

        </div>
      </div>
    </div>
    <div className="carousel-item">
    <div className='d-flex justify-content-around row py-5' style={{paddingTop:'50px'}}>
        <div style={{height:'60vh',border:'1px solid #eee',paddingTop:'10px',borderRadius:'20px'}} className=' bg-white col-md-3 mb-md-0 mb-3' id='carouselcustomdiv'>
            <h1 style={{fontFamily:'CerebriSans', fontSize:'18px',fontWeight:700,color:'#7a7777'}} className='text-center pt-5'>Brnardshaw/</h1>
          <p style={{fontFamily:'CerebriSans', fontSize:'18px',fontWeight:400,color:'#7a7777'}} className='my-3 ms-5'>Great company,helpful and always available when required. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore fuga esse voluptatum mollitia dolor deserunt optio voluptates explicabo odit quae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, dolorum.</p>
        </div>
        <div style={{height:'60vh',border:'1px solid #eee',paddingTop:'10px',borderRadius:'20px'}} className=' bg-white col-md-3 mb-md-0 mb-3' id='carouselcustomdiv'>
            <h1 style={{fontFamily:'CerebriSans', fontSize:'18px',fontWeight:700,color:'#7a7777'}} className='text-center pt-5'>LimJohn/</h1>
          <p style={{fontFamily:'CerebriSans', fontSize:'18px',fontWeight:400,color:'#7a7777'}} className='my-3 ms-5'>Great company,helpful and always available when required. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore fuga esse voluptatum mollitia dolor deserunt optio voluptates explicabo odit quae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, dolorum.</p>
        </div>
        <div style={{height:'60vh',border:'1px solid #eee',paddingTop:'10px',borderRadius:'20px'}} className=' bg-white col-md-3 mb-md-0 mb-3' id='carouselcustomdiv'>
            <h1 style={{fontFamily:'CerebriSans', fontSize:'18px',fontWeight:700,color:'#7a7777'}} className='text-center pt-5'>BeeteQueen/</h1>
          <p style={{fontFamily:'CerebriSans', fontSize:'18px',fontWeight:400,color:'#7a7777'}} className='my-3 ms-5'>Great company,helpful and always available when required. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore fuga esse voluptatum mollitia dolor deserunt optio voluptates explicabo odit quae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, dolorum.</p>
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
      <div className="container-fluid" style={{backgroundColor:'#EDEDED'}} id='customdiv'>
        <div className="row d-flex justify-content-center">
            <div className="col-md-10 d-flex justify-content-center my-md-5 my-3">
                <h1 style={{fontSize:'40px',fontFamily:'CerebriSans',fontWeight:700,color:'#696969',lineHeight:1.7}}>The future is now and <span className='text-danger'>IoT is changing</span> how business is done</h1>
            </div>
        </div>
        <div className="row d-flex justify-content-around my-md-5 my-3 pb-md-5 pb-3">
            <div className="col-md-3 d-flex flex-column align-items-center bg-white py-5 mb-3" style={{borderRadius:'15px'}} id='customids'>
                <FontAwesomeIcon icon={faSimCard} size='5x' color='red'/>
                <h3 style={{fontSize:'24px',fontFamily:'CerebriSans',fontWeight:500,color:'#696969',lineHeight:1.7}}>IoT connectivity</h3>
                <p style={{fontSize:'16px',fontFamily:'CerebriSans',fontWeight:400,color:'#696969',lineHeight:1.7}} className='text-center'>Our multi-network SIM cards provide optimised network coverage, ensuring you can connect to anything, anywhere, at any time.</p>
            </div>
            <div className="col-md-3 d-flex flex-column align-items-center bg-white py-5 mb-3" style={{borderRadius:'15px'}} id='customids'>
            <FontAwesomeIcon icon={faCodeMerge} size='5x' color='red'/>
                <h3 style={{fontSize:'24px',fontFamily:'CerebriSans',fontWeight:500,color:'#696969',lineHeight:1.7}}>Aggregated Data</h3>
                <p style={{fontSize:'16px',fontFamily:'CerebriSans',fontWeight:400,color:'#696969',lineHeight:1.7}} className='text-center'>Our SIMs can share pooled data allowances across your IoT SIM estate, helping to eliminate unwelcome data overage charges</p>
            </div>
            <div className="col-md-3 d-flex flex-column align-items-center bg-white py-5 mb-3" style={{borderRadius:'15px'}} id='customids'>
            <FontAwesomeIcon icon={faHandshakeAlt} size='5x' color='red'/>
                <h3 style={{fontSize:'24px',fontFamily:'CerebriSans',fontWeight:500,color:'#696969',lineHeight:1.7}}>Partner Programme</h3>
                <p style={{fontSize:'16px',fontFamily:'CerebriSans',fontWeight:400,color:'#696969',lineHeight:1.7}} className='text-center'>Benefit from a compelling margin share by reselling market-disrupting, customer centric IoT connectivity.</p>
            </div>
            <div className="col-md-3 d-flex flex-column align-items-center bg-white py-5 mb-3" style={{borderRadius:'15px'}} id='customids'>
            <img src={image10} alt="" style={{width:'50px', height:'50px'}}/>
                <h3 className='text-center' style={{fontSize:'24px',fontFamily:'CerebriSans',fontWeight:500,color:'#696969',lineHeight:1.7}}>vM2M IOT PLATFORM</h3>
                <p style={{fontSize:'16px',fontFamily:'CerebriSans',fontWeight:400,color:'#696969',lineHeight:1.7}} className='text-center'>In simple terms we've made IOT as easy as;Quote - order-manage-24/7</p>
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

export default IOT
