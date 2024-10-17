import React, { useEffect, useState } from 'react'
import image from '../Images/circle.png'
import image1 from '../Images/image64.png'
import image2 from '../Images/image65.png'
import image3 from '../Images/image66.png'
import image4 from '../Images/Bg-4.png'
import image5 from '../Images/ContactCover.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCalendarCheck, faChartLine, faChartPie, faCheck, faChevronUp, faFileAlt, faHandsHelping, faQuoteRight, faStar, faUserFriends, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
const Billing = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

  const handleScroll = () => {
    const scrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
    setShowScrollTop(scrolledToBottom);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    const word=[
        'Workflow','Billing','Quality Management'
    ]
    const [index, setIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const interval = setInterval(() => {
            setIsVisible(true);
            setIndex(prevIndex => (prevIndex + 1) % word.length);
        }, 2000);
    
        return () => clearInterval(interval);
    }, []);   
  return (
    <section id='billing'>
        <div className="container-fluid p-0">
        <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{position:'relative',boxShadow:'0px 0px 20px rgba(0,0,0,0.3)'}}>
  <div className="container">
   <img src="https://anvilhub.com/wp-content/uploads/2024/01/Logo.svg" alt="" className='img-fluid'style={{width:'100px',height:'50px'}}/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
      <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"  style={{fontSize:'1.12rem',fontFamily:'CerebriSans',fontWeight:700,color:'#7A7A7A'}}>
            Products
          </a>
          <ul className="dropdown-menu rounded-0">
            <li><a className="dropdown-item" href="#" style={{fontSize:'1.12rem',fontFamily:'CerebriSans',fontWeight:700,color:'#7A7A7A'}}>WorkFlow|CRM</a></li>
            <li><a className="dropdown-item" href="#" style={{fontSize:'1.12rem',fontFamily:'CerebriSans',fontWeight:700,color:'#7A7A7A'}}>WorkFlow|Operation</a></li>
            <li><a className="dropdown-item" href="#" style={{fontSize:'1.12rem',fontFamily:'CerebriSans',fontWeight:700,color:'#7A7A7A'}}>Billing Platform</a></li>
            <li><a className="dropdown-item" href="#" style={{fontSize:'1.12rem',fontFamily:'CerebriSans',fontWeight:700,color:'#7A7A7A'}}>Quality Assurance</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#"  style={{fontSize:'1.12rem',fontFamily:'CerebriSans',fontWeight:700,color:'#7A7A7A'}}>Insights</a>
        </li>
        <li className="nav-item pt-lg-3 ps-lg-0 ps-md-5">
          <a className="nav-link"  style={{fontSize:'1.12rem',fontFamily:'CerebriSans',fontWeight:700,color:'#7A7A7A'}}>Login</a>
        </li>
        <li className="nav-item">
          <a className="nav-link"  style={{fontSize:'1.12rem',fontFamily:'CerebriSans',fontWeight:700,color:'#7A7A7A'}}>Learn</a>
        </li>
        <li className="nav-item">
          <a className="nav-link"  style={{fontSize:'1.12rem',fontFamily:'CerebriSans',fontWeight:700,color:'#7A7A7A'}}>Contact</a>
        </li>
      </ul>
      <button type='button' className='rounded text-white px-5 py-3   border-0' id='button7' style={{fontSize:'14px',fontFamily:'CerebriSans',fontWeight:300,backgroundImage: 'linear-gradient(150deg, #262262 0%, #467FF7 100%)'}}>Get a Quote</button>
    </div>
  </div>
</nav>
        </div>
        <div className="container-fluid vh-100" style={{backgroundImage:`url(${image})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}} id='heading'>
            <div className="row d-flex justify-content-center flex-column align-items-center" style={{marginTop:'100px'}}>
                <div className="col-md-10 text-center" id='heading1'>
                    <h1 style={{color: '#1C1D1E',fontFamily: 'Roboto, Sans-serif',fontSize: '4rem',fontWeight: 900}}>Forging <span className={`span1 ${isVisible ? 'active' : ''}`} >{word[index]}</span></h1>
                    <h1 style={{color: '#1C1D1E',fontFamily: 'Roboto, Sans-serif',fontSize: '4rem',fontWeight: 900}}>to optimise your business​</h1>
                </div>
            </div>
            <div className="row d-flex justify-content-center flex-column align-items-center">
            <div className="col-lg-6 text-center">
                <h1 className='text' style={{color: '#7A7A7A',fontFamily: 'Roboto, Sans-serif',fontSize: '17px',fontWeight: 500,lineHeight:1.76}}>A powerful SaaS business management software designed to help optimise
                your business at every step, from sales enquiry to customer billing</h1>
                <button type='button' className=' rounded text-white px-5 py-3   border-0 mt-md-3 mt-2' id='button7' style={{fontSize:'1rem',fontFamily:'CerebriSans',fontWeight:500,backgroundImage: 'linear-gradient(150deg, #262262 0%, #467FF7 100%)'}}>Get Started.Click Here<FontAwesomeIcon icon={faArrowRight} size='1x' color='white' className='ms-2'/></button>
                <p className='pt-md-3 pt-2' style={{color: 'black',fontFamily: 'Roboto, Sans-serif',fontSize: '15px',fontWeight: 500,lineHeight:1.76}}>See our <span className='fw-bold'>368</span> reviews on<FontAwesomeIcon icon={faStar} color='green' size='1x'/> Trustpilot</p>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row d-flex justify-content-around">
                <div className="col-md-3 pt-md-2 mb-lg-0 mb-2">
                   <div className="d-flex">
                   <FontAwesomeIcon icon={faChartLine} size='2x' color='#15376e'/>
                   <h1 className='pt-2 ps-2' style={{color: 'black',fontFamily: 'Roboto, Sans-serif',fontSize: '18px',fontWeight: 700}}>Workflow Management</h1>
                   </div>
                </div>
                <div className="col-md-3 mb-lg-0 mb-2">
                    <button className=' border-0 rounded d-flex w-100 justify-content-center py-2' style={{backgroundImage: 'linear-gradient(150deg, #262262 0%, #467FF7 100%)'}}><FontAwesomeIcon icon={faChartPie} size='2x' color='white'/>
                    <h1 className='pt-2 ps-2' style={{color: 'white',fontFamily: 'Roboto, Sans-serif',fontSize: '18px',fontWeight: 700}}>Billing</h1></button>
                </div>
                <div className="col-md-3 mb-lg-0 mb-2">
                <div className="d-flex">
                   <FontAwesomeIcon icon={faUserFriends} size='2x' color='#15376e'/>
                   <h1 className='pt-2 ps-2' style={{color: 'black',fontFamily: 'Roboto, Sans-serif',fontSize: '18px',fontWeight: 700}}>Quality Management</h1>
                   </div>
                </div>
            </div>
        </div>
        <div className="container px-3 my-md-5 my-3">
            <div className="row border" style={{borderRadius:'20px',backgroundImage:`url(${image1})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center'}}>
                <div className="col-lg-9" style={{paddingLeft:'34px',paddingTop:'20px'}}>
                    <h1 style={{color: 'black',fontFamily: 'Roboto, Sans-serif',fontSize: '2.1rem',fontWeight: 900}}>More than just <span style={{color:'yellow'}}>Billing</span></h1>
                    <p style={{color: '#7A7A7A',fontFamily: 'Roboto, Sans-serif'}}>Anvil goes beyond billing providing your business with all the tools needed to streamline operations and boost the bottom line.</p>
                    <div className="d-flex">
                        <h1 className='bill'  style={{color: '#414247',fontFamily: 'Roboto, Sans-serif',fontWeight:600,fontSize:'8.4rem'}}>0%</h1>
                        <h1 className='bill' style={{color: '#414247',fontFamily: 'Roboto, Sans-serif',fontWeight:600,fontSize:'5rem'}}>Billing Fees</h1>
                        <div className="d-block">
                            <div className="d-flex gap-1">
                                <FontAwesomeIcon icon={faCheck} size='1x' color='black'/>
                                <h1 style={{color: '#414247',fontFamily: 'Roboto, Sans-serif',fontWeight:600,fontSize:'1rem'}}>CDR Data</h1>
                            </div>
                            <div className="d-flex gap-1">
                                <FontAwesomeIcon icon={faCheck} size='1x' color='black'/>
                                <h1 style={{color: '#414247',fontFamily: 'Roboto, Sans-serif',fontWeight:600,fontSize:'1rem'}}>Compliance</h1>
                            </div>
                            <div className="d-flex gap-1">
                                <FontAwesomeIcon icon={faCheck} size='1x' color='black'/>
                                <h1 style={{color: '#414247',fontFamily: 'Roboto, Sans-serif',fontWeight:600,fontSize:'1rem'}}>Self-Managed Billings</h1>
                            </div>
                            <div className="d-flex gap-1">
                                <FontAwesomeIcon icon={faCheck} size='1x' color='black'/>
                                <h1 style={{color: '#414247',fontFamily: 'Roboto, Sans-serif',fontWeight:600,fontSize:'1rem'}}>In depth Reporting</h1>
                            </div>
                        </div>
                    </div>
                    <p style={{color: '#7A7A7A',fontFamily: 'Roboto, Sans-serif'}}>Anvil billing includes full revenue assurance, advanced data analytics, real-time monitoring & alerts, end-to-end revenue visibility, secure data handling, and compliance reporting & documentation.</p>
                </div>
                <div className="col-lg-3">
                <ul className="list-group pt-5">
  <li className="list-group-item d-flex">
    <FontAwesomeIcon className='p-2' icon={faChartLine} size='1x' color='grey' style={{backgroundColor:'yellow',borderRadius:'10px'}}/>
    <h1 className='pt-2 ps-2' style={{fontFamily:'Poppins,sans-serif',fontSize:'1.174rem',fontWeight:600,color: '#7A7A7A'}}>Always on reporting</h1>
  </li>
  <li className="list-group-item d-flex">
  <FontAwesomeIcon className='p-2' icon={faCalendarCheck} size='1x' color='grey' style={{backgroundColor:'yellow',borderRadius:'10px'}}/>
  <h1 className='pt-2 ps-2' style={{fontFamily:'Poppins,sans-serif',fontSize:'1.174rem',fontWeight:600,color: '#7A7A7A'}}>Instant bill-runs</h1>
  </li>
  <li className="list-group-item d-flex">
  <FontAwesomeIcon className='p-2' icon={faHandsHelping} size='1x' color='grey' style={{backgroundColor:'yellow',borderRadius:'10px'}}/>
  <h1 className='pt-2 ps-2' style={{fontFamily:'Poppins,sans-serif',fontSize:'1.174rem',fontWeight:600,color: '#7A7A7A'}}>Revenue Assurance</h1>
  </li>
  <li className="list-group-item d-flex">
  <FontAwesomeIcon className='p-2' icon={faUserShield} size='1x' color='grey' style={{backgroundColor:'yellow',borderRadius:'10px'}}/>
  <h1 className='pt-2 ps-2' style={{fontFamily:'Poppins,sans-serif',fontSize:'1.174rem',fontWeight:600,color: '#7A7A7A'}}>Secure Data Handling</h1>
  </li>
</ul>
<button type='button' className='rounded text-white px-5 py-3   border-0 mt-md-3 mt-2 d-flex ms-auto me-auto mb-lg-0 mb-3' id='button7' style={{fontSize:'1rem',fontFamily:'CerebriSans',fontWeight:500,backgroundImage: 'linear-gradient(150deg, #262262 0%, #467FF7 100%)'}}>Click Here<FontAwesomeIcon icon={faArrowRight} size='1x' color='white' className='ms-2 mt-1'/></button>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <img src={image2} alt="" style={{width:'100%',height:'100%'}} className='img-fluid'/>
                </div>
            </div>
            <div className="row" style={{backgroundColor: 'transparent',backgroundImage: 'linear-gradient(150deg, #262262 0%, #467FF7 100%)',borderRadius:'20px'}}>
                <div className="col-md-12 text-center py-md-5 py-3">
                    <h1 style={{fontFamily:'Poppins,sans-serif',fontSize:'2.6rem',fontWeight:700,color: 'white',lineHeight:'3.4rem'}}>Optimise your time and accomplish tasks more efficiently.​ Optimise your time and enhance productivity.​</h1>
                </div>
                <div className="col-md-12 d-flex flex-wrap justify-content-around py-md-5 py-3">
                    <div className='bg-white px-5 py-2 text-center smalldiv' style={{borderRadius:'20px'}}>
                        <h1 style={{fontFamily:'Poppins,sans-serif',fontSize:'2.6rem',fontWeight:700,color: 'black'}}>1900</h1>
                        <h1 style={{color: '#1C1D1E',fontFamily: 'Open Sans, Sans-serif',fontSize: '1rem',fontWeight: 400}}>Active customers</h1>
                    </div>
                    <div className='bg-white px-5 py-2  text-center smalldiv' style={{borderRadius:'20px'}}>
                        <h1 style={{fontFamily:'Poppins,sans-serif',fontSize:'2.6rem',fontWeight:700,color: 'black'}}>200m</h1>
                        <h1 style={{color: '#1C1D1E',fontFamily: 'Open Sans, Sans-serif',fontSize: '1rem',fontWeight: 400}}>Active billing minutes</h1>
                    </div>
                    <div className='bg-white px-5 py-2  text-center smalldiv' style={{borderRadius:'20px'}}>
                        <h1 style={{fontFamily:'Poppins,sans-serif',fontSize:'2.6rem',fontWeight:700,color: 'black'}}>23%</h1>
                        <h1 style={{color: '#1C1D1E',fontFamily: 'Open Sans, Sans-serif',fontSize: '1rem',fontWeight: 400}}>Sales improvement</h1>
                    </div>
                    <div className='bg-white px-5 py-2  text-center smalldiv' style={{borderRadius:'20px'}}>
                        <h1 style={{fontFamily:'Poppins,sans-serif',fontSize:'2.6rem',fontWeight:700,color: 'black'}}>45%</h1>
                        <h1 style={{color: '#1C1D1E',fontFamily: 'Open Sans, Sans-serif',fontSize: '1rem',fontWeight: 400}}>Time reduction in bill runs</h1>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid" style={{backgroundColor:'#f7f3f5'}}>
            <div className="row d-flex justify-content-around">
                <div className="col-md-6 py-5 text-lg-start text-center">
                    <h1 style={{color: '#1C1D1E',fontFamily: 'Open Sans, Sans-serif',fontSize: '2.8rem',fontWeight: 700,lineHeight:'48px'}}>Maximise your ROI through <span style={{color:'yellow'}}>accurate reporting</span></h1>
                    <p style={{color: '#7A7A7A',fontFamily: 'Open Sans, Sans-serif',fontSize: '1rem',fontWeight: 400,lineHeight:1.76}}>Business Intelligence that covers data integration, real-time analysis & reporting, user-managed customisable data views, operational reports, sales performance reporting, and pipeline and opportunity reports.​</p>
                </div>
                <div className="col-md-5 py-lg-5 py-3 ">
                    <img src={image3} alt="" className='img-fluid ibm'/>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h1 style={{fontSize:'2.8rem',fontWeight:700,lineHeight:'48px',color:'#1C1D1E',fontFamily: 'Open Sans, Sans-serif'}}>Comprehensive solutions for managing the heart of your <span style={{color:'yellow'}}>business operations.</span>​</h1>
                </div>
            </div>
            <div className="row d-flex justify-content-around py-md-5 py-3">
                <div className="col-lg-3 billingcard p-1">
                    <div className='border ps-3 py-3 card' style={{borderRadius:'10px',width:'20rem',height:'23rem'}}>
                        <div className="d-flex ">
                            <FontAwesomeIcon className='p-2 icon' icon={faFileAlt} size='1x'color='#7A7A7A' style={{borderRadius:'5px',backgroundColor:'lightgrey'}}/>
                            <h1 className='pt-1 ps-2' style={{fontFamily:'Poppins,sans-serif',fontSize:'1.17rem',fontWeight:700,color: '#4d4d4d'}}>Complete</h1>
                        </div>
                        <p className='pt-3' style={{fontFamily:'Poppins,sans-serif',fontSize:'16px',fontWeight:400,color: '#7A7A7A'}}>Elevate your business operations experience with the Anvil Complete Package.</p>
                        <div className="d-flex">
                            <FontAwesomeIcon icon={faCheck} size='1x' color='#1C1D1E'/>
                            <h1 className='ps-2' style={{fontFamily: 'Roboto, Sans-serif',fontSize: '1rem',fontWeight: 600, color:'#414247'}}>Simplify Milestone Creation</h1>
                        </div>
                        <div className="d-flex">
                            <FontAwesomeIcon icon={faCheck} size='1x' color='#1C1D1E'/>
                            <h1 className='ps-2' style={{fontFamily: 'Roboto, Sans-serif',fontSize: '1rem',fontWeight: 700, color:'#414247'}}>
                            Customer Self-Service</h1>
                        </div>
                        <div className="d-flex">
                            <FontAwesomeIcon icon={faCheck} size='1x' color='#1C1D1E'/>
                            <h1 className='ps-2' style={{fontFamily: 'Roboto, Sans-serif',fontSize: '1rem',fontWeight: 600, color:'#414247'}}>
                            Efficient Milestone Routing</h1>
                        </div>
                        <button type='button' className='button rounded text-white px-3 py-3   border-0 mt-5' id='button7' style={{fontSize:'1rem',fontFamily:'CerebriSans',fontWeight:500}}>Get Started.Click Here<FontAwesomeIcon icon={faArrowRight} size='1x' color='white' className='ms-2 mt-1'/></button>
                    </div>
                </div>
                <div className="col-lg-3 billingcard p-1">
                <div className='border ps-3 py-3 card' style={{borderRadius:'10px',width:'20rem',height:'23rem'}}>
                        <div className="d-flex ">
                            <FontAwesomeIcon className='p-2 icon' icon={faFileAlt} size='1x'color='#7A7A7A' style={{borderRadius:'5px',backgroundColor:'lightgrey'}}/>
                            <h1 className='pt-1 ps-2' style={{fontFamily:'Poppins,sans-serif',fontSize:'1.17rem',fontWeight:700,color: '#4d4d4d'}}>Essentials</h1>
                        </div>
                        <p className='pt-3' style={{fontFamily:'Poppins,sans-serif',fontSize:'16px',fontWeight:400,color: '#7A7A7A'}}>Elevate your business operations experience with the Anvil Complete Package.</p>
                        <div className="d-flex">
                            <FontAwesomeIcon icon={faCheck} size='1x' color='#1C1D1E'/>
                            <h1 className='ps-2' style={{fontFamily: 'Roboto, Sans-serif',fontSize: '1rem',fontWeight: 600, color:'#414247'}}>Simplify Milestone Creation</h1>
                        </div>
                        <div className="d-flex">
                            <FontAwesomeIcon icon={faCheck} size='1x' color='#1C1D1E'/>
                            <h1 className='ps-2' style={{fontFamily: 'Roboto, Sans-serif',fontSize: '1rem',fontWeight: 700, color:'#414247'}}>
                            Customer Self-Service</h1>
                        </div>
                        <div className="d-flex">
                            <FontAwesomeIcon icon={faCheck} size='1x' color='#1C1D1E'/>
                            <h1 className='ps-2' style={{fontFamily: 'Roboto, Sans-serif',fontSize: '1rem',fontWeight: 600, color:'#414247'}}>
                            Efficient Milestone Routing</h1>
                        </div>
                        <button type='button' className='button rounded text-white px-3 py-3   border-0 mt-5' id='button7' style={{fontSize:'1rem',fontFamily:'CerebriSans',fontWeight:500}}>Get Started.Click Here<FontAwesomeIcon icon={faArrowRight} size='1x' color='white' className='ms-2 mt-1'/></button>
                    </div>
                </div>
                <div className="col-lg-3 billingcard p-1">
                <div className='border ps-3 py-3 card' style={{borderRadius:'10px',width:'20rem',height:'23rem'}}>
                        <div className="d-flex ">
                            <FontAwesomeIcon className='p-2 icon' icon={faFileAlt} size='1x'color='#7A7A7A' style={{borderRadius:'5px',backgroundColor:'lightgrey'}}/>
                            <h1 className='pt-1 ps-2' style={{fontFamily:'Poppins,sans-serif',fontSize:'1.17rem',fontWeight:700,color: '#4d4d4d'}}>Modules</h1>
                        </div>
                        <p className='pt-3' style={{fontFamily:'Poppins,sans-serif',fontSize:'16px',fontWeight:400,color: '#7A7A7A'}}>Elevate your business operations experience with the Anvil Complete Package.</p>
                        <div className="d-flex">
                            <FontAwesomeIcon icon={faCheck} size='1x' color='#1C1D1E'/>
                            <h1 className='ps-2' style={{fontFamily: 'Roboto, Sans-serif',fontSize: '1rem',fontWeight: 600, color:'#414247'}}>Simplify Milestone Creation</h1>
                        </div>
                        <div className="d-flex">
                            <FontAwesomeIcon icon={faCheck} size='1x' color='#1C1D1E'/>
                            <h1 className='ps-2' style={{fontFamily: 'Roboto, Sans-serif',fontSize: '1rem',fontWeight: 700, color:'#414247'}}>
                            Customer Self-Service</h1>
                        </div>
                        <div className="d-flex">
                            <FontAwesomeIcon icon={faCheck} size='1x' color='#1C1D1E'/>
                            <h1 className='ps-2' style={{fontFamily: 'Roboto, Sans-serif',fontSize: '1rem',fontWeight: 600, color:'#414247'}}>
                            Efficient Milestone Routing</h1>
                        </div>
                        <button type='button' className='button rounded text-white px-3 py-3   border-0 mt-5' id='button7' style={{fontSize:'1rem',fontFamily:'CerebriSans',fontWeight:500}}>Get Started.Click Here<FontAwesomeIcon icon={faArrowRight} size='1x' color='white' className='ms-2 mt-1'/></button>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid" style={{backgroundColor:'yellow',backgroundImage:`url(${image4})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center top'}}>
            <div className="row d-flex justify-content-center">
                <div className="col-md-8 text-center my-md-5 my-3">
                    <h1  style={{fontFamily: 'Roboto, Sans-serif',fontSize: '3rem',fontWeight: 600, color:'#1C1D1E'}}>What people think about us</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 my-md-5 my-3">
                <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" data-bs-interval='1000'>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="d-flex justify-content-around flex-wrap">
        <div className='bg-white px-3 py-3 carouselcard' style={{backgroundColor:'white',borderRadius:'10px',width:'20rem'}}>
            <div className="d-flex ">
                <h1  style={{fontFamily: 'Roboto, Sans-serif',fontSize: '105%',fontWeight: 700, color:'#272727'}}>Alex/</h1>
                <FontAwesomeIcon className='d-flex ms-auto me-3' icon={faQuoteRight} color='gray' size='2x'/>
            </div>
            <p className='pt-2'  style={{fontFamily: 'Roboto, Sans-serif',fontSize: '100%',fontWeight: 400, color:'#272727'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam nisi at repudiandae tempora eaque accusantium minima? Repellendus, quasi eligendi odit natus eaque non quos qui praesentium error id vero numquam.</p>
        </div>
        <div className='bg-white px-3 py-3  carouselcard' style={{backgroundColor:'white',borderRadius:'10px',width:'20rem'}}>
            <div className="d-flex ">
                <h1  style={{fontFamily: 'Roboto, Sans-serif',fontSize: '105%',fontWeight: 700, color:'#272727'}}>Cathe/</h1>
                <FontAwesomeIcon className='d-flex ms-auto me-3' icon={faQuoteRight} color='gray' size='2x'/>
            </div>
            <p className='pt-2'  style={{fontFamily: 'Roboto, Sans-serif',fontSize: '100%',fontWeight: 400, color:'#272727'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam nisi at repudiandae tempora eaque accusantium minima? Repellendus, quasi eligendi odit natus eaque non quos qui praesentium error id vero numquam.</p>
        </div>
        <div className='bg-white px-3 py-3  carouselcard' style={{backgroundColor:'white',borderRadius:'10px',width:'20rem'}}>
            <div className="d-flex ">
                <h1  style={{fontFamily: 'Roboto, Sans-serif',fontSize: '105%',fontWeight: 700, color:'#272727'}}>Greenwood/</h1>
                <FontAwesomeIcon className='d-flex ms-auto me-3' icon={faQuoteRight} color='gray' size='2x'/>
            </div>
            <p className='pt-2'  style={{fontFamily: 'Roboto, Sans-serif',fontSize: '100%',fontWeight: 400, color:'#272727'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam nisi at repudiandae tempora eaque accusantium minima? Repellendus, quasi eligendi odit natus eaque non quos qui praesentium error id vero numquam.</p>
        </div>
      </div>
    </div>
    <div className="carousel-item">
    <div className="d-flex justify-content-around flex-wrap">
        <div className='bg-white px-3 py-3  carouselcard' style={{backgroundColor:'white',borderRadius:'10px',width:'20rem'}}>
            <div className="d-flex">
                <h1  style={{fontFamily: 'Roboto, Sans-serif',fontSize: '105%',fontWeight: 700, color:'#272727'}}>Norway/</h1>
                <FontAwesomeIcon className='d-flex ms-auto me-3' icon={faQuoteRight} color='gray' size='2x'/>
            </div>
            <p className='pt-2'  style={{fontFamily: 'Roboto, Sans-serif',fontSize: '100%',fontWeight: 400, color:'#272727'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam nisi at repudiandae tempora eaque accusantium minima? Repellendus, quasi eligendi odit natus eaque non quos qui praesentium error id vero numquam.</p>
        </div>
        <div className='bg-white px-3 py-3  carouselcard' style={{backgroundColor:'white',borderRadius:'10px',width:'20rem'}}>
            <div className="d-flex ">
                <h1  style={{fontFamily: 'Roboto, Sans-serif',fontSize: '105%',fontWeight: 700, color:'#272727'}}>Lossin/</h1>
                <FontAwesomeIcon className='d-flex ms-auto me-3' icon={faQuoteRight} color='gray' size='2x'/>
            </div>
            <p className='pt-2'  style={{fontFamily: 'Roboto, Sans-serif',fontSize: '100%',fontWeight: 400, color:'#272727'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam nisi at repudiandae tempora eaque accusantium minima? Repellendus, quasi eligendi odit natus eaque non quos qui praesentium error id vero numquam.</p>
        </div>
        <div className='bg-white px-3 py-3  carouselcard' style={{backgroundColor:'white',borderRadius:'10px',width:'20rem'}}>
            <div className="d-flex ">
                <h1  style={{fontFamily: 'Roboto, Sans-serif',fontSize: '105%',fontWeight: 700, color:'#272727'}}>Greenwich/</h1>
                <FontAwesomeIcon className='d-flex ms-auto me-3' icon={faQuoteRight} color='gray' size='2x'/>
            </div>
            <p className='pt-2'  style={{fontFamily: 'Roboto, Sans-serif',fontSize: '100%',fontWeight: 400, color:'#272727'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam nisi at repudiandae tempora eaque accusantium minima? Repellendus, quasi eligendi odit natus eaque non quos qui praesentium error id vero numquam.</p>
        </div>
      </div>
    </div>
    <div className="carousel-item">
    <div className="d-flex justify-content-around flex-wrap">
        <div className='bg-white px-3 py-3  carouselcard' style={{backgroundColor:'white',borderRadius:'10px',width:'20rem'}}>
            <div className="d-flex">
                <h1  style={{fontFamily: 'Roboto, Sans-serif',fontSize: '105%',fontWeight: 700, color:'#272727'}}>Greenwich/</h1>
                <FontAwesomeIcon className='d-flex ms-auto me-3' icon={faQuoteRight} color='gray' size='2x'/>
            </div>
            <p className='pt-2'  style={{fontFamily: 'Roboto, Sans-serif',fontSize: '100%',fontWeight: 400, color:'#272727'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam nisi at repudiandae tempora eaque accusantium minima? Repellendus, quasi eligendi odit natus eaque non quos qui praesentium error id vero numquam.</p>
        </div>
        <div className='bg-white px-3 py-3  carouselcard' style={{backgroundColor:'white',borderRadius:'10px',width:'20rem'}}>
            <div className="d-flex ">
                <h1  style={{fontFamily: 'Roboto, Sans-serif',fontSize: '105%',fontWeight: 700, color:'#272727'}}>Cathe/</h1>
                <FontAwesomeIcon className='d-flex ms-auto me-3' icon={faQuoteRight} color='gray' size='2x'/>
            </div>
            <p className='pt-2'  style={{fontFamily: 'Roboto, Sans-serif',fontSize: '100%',fontWeight: 400, color:'#272727'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam nisi at repudiandae tempora eaque accusantium minima? Repellendus, quasi eligendi odit natus eaque non quos qui praesentium error id vero numquam.</p>
        </div>
        <div className='bg-white px-3 py-3  carouselcard' style={{backgroundColor:'white',borderRadius:'10px',width:'20rem'}}>
            <div className="d-flex ">
                <h1  style={{fontFamily: 'Roboto, Sans-serif',fontSize: '105%',fontWeight: 700, color:'#272727'}}>Greenwood/</h1>
                <FontAwesomeIcon className='d-flex ms-auto me-3' icon={faQuoteRight} color='gray' size='2x'/>
            </div>
            <p className='pt-2'  style={{fontFamily: 'Roboto, Sans-serif',fontSize: '100%',fontWeight: 400, color:'#272727'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam nisi at repudiandae tempora eaque accusantium minima? Repellendus, quasi eligendi odit natus eaque non quos qui praesentium error id vero numquam.</p>
        </div>
      </div>
    </div>
    <div className="carousel-item">
    <div className="d-flex justify-content-around flex-wrap">
        <div className='bg-white px-3 py-3  carouselcard' style={{backgroundColor:'white',borderRadius:'10px',width:'20rem'}}>
            <div className="d-flex ">
                <h1  style={{fontFamily: 'Roboto, Sans-serif',fontSize: '105%',fontWeight: 700, color:'#272727'}}>Greenwich/</h1>
                <FontAwesomeIcon className='d-flex ms-auto me-3' icon={faQuoteRight} color='gray' size='2x'/>
            </div>
            <p className='pt-2'  style={{fontFamily: 'Roboto, Sans-serif',fontSize: '100%',fontWeight: 400, color:'#272727'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam nisi at repudiandae tempora eaque accusantium minima? Repellendus, quasi eligendi odit natus eaque non quos qui praesentium error id vero numquam.</p>
        </div>
        <div className='bg-white px-3 py-3  carouselcard' style={{backgroundColor:'white',borderRadius:'10px',width:'20rem'}}>
            <div className="d-flex ">
                <h1  style={{fontFamily: 'Roboto, Sans-serif',fontSize: '105%',fontWeight: 700, color:'#272727'}}>Cathe/</h1>
                <FontAwesomeIcon className='d-flex ms-auto me-3' icon={faQuoteRight} color='gray' size='2x'/>
            </div>
            <p className='pt-2'  style={{fontFamily: 'Roboto, Sans-serif',fontSize: '100%',fontWeight: 400, color:'#272727'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam nisi at repudiandae tempora eaque accusantium minima? Repellendus, quasi eligendi odit natus eaque non quos qui praesentium error id vero numquam.</p>
        </div>
        <div className='bg-white px-3 py-3  carouselcard' style={{backgroundColor:'white',borderRadius:'10px',width:'20rem'}}>
            <div className="d-flex ">
                <h1  style={{fontFamily: 'Roboto, Sans-serif',fontSize: '105%',fontWeight: 700, color:'#272727'}}>Lucy/</h1>
                <FontAwesomeIcon className='d-flex ms-auto me-3' icon={faQuoteRight} color='gray' size='2x'/>
            </div>
            <p className='pt-2'  style={{fontFamily: 'Roboto, Sans-serif',fontSize: '100%',fontWeight: 400, color:'#272727'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam nisi at repudiandae tempora eaque accusantium minima? Repellendus, quasi eligendi odit natus eaque non quos qui praesentium error id vero numquam.</p>
        </div>
      </div>
    </div>
  </div>
</div>
                </div>
            </div>
        </div>
        <div className="container-fluid" style={{backgroundImage:`url(${image5})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'left'}}>
            <div className="row d-flex justify-content-end">
                <div className="col-md-6 py-md-5">
                    <h1 className='h1'  style={{fontFamily: 'Roboto, Sans-serif',fontSize: '2.2rem',fontWeight: 600, color:'#272727',lineHeight:2.7}}>
                    Opportunities for business success</h1>
                    <p style={{fontFamily: 'Roboto, Sans-serif',fontSize: '1rem',fontWeight: 400, color:'#7A7A7A'}}>Reach out to the UK’s most customer-centric service provider.</p>
                    <button type='button' className=' rounded text-white px-5 py-3   border-0 mt-md-3 mt-2' id='button7' style={{fontSize:'1rem',fontFamily:'CerebriSans',fontWeight:500,backgroundColor:'#262262'}}>Join us.CLick Here</button>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row my-md-5 my-3">
                <div className="col-md-6">
                <img src="https://anvilhub.com/wp-content/uploads/2024/01/Logo.svg" alt="" className='img-fluid'style={{width:'100px',height:'50px'}}/>
                <h1 className='pt-md-3 pt-2' style={{fontFamily: 'Roboto, Sans-serif',fontSize: '1rem',fontWeight: 700, color:'#7A7A7A'}}>Forging Business Optimisation</h1>
                <div className="d-flex gap-2 pt-2">
                    <FontAwesomeIcon className='p-2' icon={faFacebook} size='1x' color='#15376e' style={{borderRadius:'5px',border:'1px solid #15376e'}}/>
                    <FontAwesomeIcon className='p-2' icon={faLinkedinIn} size='1x' color='#15376e' style={{borderRadius:'5px',border:'1px solid #15376e'}}/>
                </div>
                </div>
                <div className="col-md-6">
                    <div className='row'>
                        <div className="col-md-3 mb-md-0 mb-2">
                            <h1 style={{fontFamily: 'Roboto, Sans-serif',fontSize: '1rem',fontWeight: 700, color:'#7A7A7A'}}>Company</h1>
                            <a href="" className='text-decoration-none link' style={{fontFamily: 'Roboto, Sans-serif',fontSize: '1rem',fontWeight: 500, color:'#7A7A7A'}}>Contact us</a>
                        </div>
                        <div className="col-md-5 mb-md-0 mb-2">
                        <h1 style={{fontFamily: 'Roboto, Sans-serif',fontSize: '1rem',fontWeight: 700, color:'#7A7A7A'}}>Features</h1>
                        <a href="" className='text-decoration-none link' style={{fontFamily: 'Roboto, Sans-serif',fontSize: '1rem',fontWeight: 500, color:'#7A7A7A',lineHeight:2.1}}>Quality Assurance</a><br/>
                        <a href="" className='text-decoration-none link' style={{fontFamily: 'Roboto, Sans-serif',fontSize: '1rem',fontWeight: 500, color:'#7A7A7A',lineHeight:2.1}}>Billing Platform</a><br/>
                        <a href="" className='text-decoration-none link ' style={{fontFamily: 'Roboto, Sans-serif',fontSize: '1rem',fontWeight: 500, color:'#7A7A7A',lineHeight:2.1}}>Workflow|Operations</a><br/>
                        <a href="" className='text-decoration-none link' style={{fontFamily: 'Roboto, Sans-serif',fontSize: '1rem',fontWeight: 500, color:'#7A7A7A',lineHeight:2.1}}>Workflow|CRM</a>
                        </div>
                        <div className="col-md-4 mb-md-0 mb-2">
                        <h1 style={{fontFamily: 'Roboto, Sans-serif',fontSize: '1rem',fontWeight: 700, color:'#7A7A7A'}}>Help</h1>
                        <a href="" className='text-decoration-none link' style={{fontFamily: 'Roboto, Sans-serif',fontSize: '1rem',fontWeight: 500, color:'#7A7A7A',lineHeight:2.1}}>Code of Practice</a><br/>
                        <a href="" className='text-decoration-none link' style={{fontFamily: 'Roboto, Sans-serif',fontSize: '1rem',fontWeight: 500, color:'#7A7A7A',lineHeight:2.1}}>Privacy Policy</a><br/>
                        <a href="" className='text-decoration-none link' style={{fontFamily: 'Roboto, Sans-serif',fontSize: '1rem',fontWeight: 500, color:'#7A7A7A',lineHeight:2.1}}>Terms & Condition</a><br/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
            <div className="col-6">
        {showScrollTop && (
        <button 
          onClick={scrollToTop} 
          className="scroll-top-btn"
        >
          <FontAwesomeIcon icon={faChevronUp} size='1x' color='white'/>
        </button>
      )}
        </div>
            </div>
        </div>
    </section>
  )
}

export default Billing
