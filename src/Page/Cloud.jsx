import React, { useEffect, useState } from 'react'
import { handleScroll} from '../javascript/scrollbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import image9 from '../Images/image9.png'
import { Link } from 'react-router-dom';
import image from '../Images/logo.png'
import image1 from '../Images/image60.png'
import image2 from '../Images/image61.png'
import image3 from '../Images/image62.png'
import image4 from '../Images/image63.png'
import { faPhoneAlt, faStar } from '@fortawesome/free-solid-svg-icons';
const Cloud = () => {
    useEffect(() => {
        handleScroll();
      }, []);
      const [activeNew,newActive]=useState('cloud');
  return (
    <section id='cloud'>
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
            <li><Link className="dropdown-item" to="/voice" >Voice</Link></li>
            <li><Link className="dropdown-item" to="/payment">Payment</Link></li>
            <li><Link className="dropdown-item" to="/energy">Energy</Link></li>
            <li><Link className="dropdown-item" to="/businessmobile">Business Mobile</Link></li>
            <li><Link className="dropdown-item" to="/cloud" style={activeNew === 'cloud'?{color:'red'}:{}}>Cloud,Hosting,Security</Link></li>
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
    <div className="row vh-100">
        <div className="col-md-6 my-md-5 px-md-5 px-3 py-lg-0 py-5 d-flex flex-column justify-content-center">
            <h1 style={{fontSize:'14px',fontFamily:'CerebriSans',fontWeight:700,color:'white',margin:'0px 0px 18px',letterSpacing:'1px'}}>EMPOWERING EVERYTHING AS A SERVICE.</h1>
           <h1 style={{fontSize:'56px',fontFamily:'CerebriSans',fontWeight:500,color:'white',margin:'0px 0px 18px',lineHeight:1.29}}>Get your business in the <span className='text-decoration-underline text-white'>cloud</span></h1>
            <button type='button' className='rounded bg-danger text-white px-5 py-3 d-flex  me-auto border-0' id='button7' style={{fontSize:'14px',fontFamily:'CerebriSans',fontWeight:300}}><FontAwesomeIcon className='mt-1 me-2' icon={faPhoneAlt} size='1x' color='white'/>Speak with Expert</button>
        </div>
    </div>
</div>
      </div>
      <div className="container my-md-5 my-3">
        <div className="row d-flex justify-content-center">
            <div className="col-md-7">
                <h1 style={{fontSize:'14px',fontFamily:'CerebriSans',fontWeight:600,color:'#ababab',letterSpacing:'3px'}}>CLOUD SERVICES, CLOUD HOSTING AND STRATEGY IN THE UK.</h1>
            </div>
            <div className="col-md-11">
            <h1 style={{fontSize:'40px',fontFamily:'CerebriSans',fontWeight:700,color:'#696969'}}>Connect to <span className='text-danger'>limitless possibilities.</span> Limitless opportunities.</h1>
            </div>
        </div>
        <div className="row d-flex justify-content-around my-md-5 my-3">
            <div className="col-md-4">
                <div className='d-flex'>
                    <div className="vh" style={{backgroundColor:'#15376e',opacity:1,width:'15px',height:'160px'}}></div>
                    <h1  style={{fontSize:'24px',fontFamily:'CerebriSans',fontWeight:800,color:'#696969',paddingLeft:'28px',lineHeight:1.67}}>Our relationships with the major <span className='text-danger'>cloud technology providers</span> enable us to continually innovate.</h1>
                </div>
            </div>
            <div className="col-md-7">
                <p style={{fontSize:'18px',fontFamily:'CerebriSans',fontWeight:400,color:'#696969',lineHeight:1.67}}>Bespoke design and implementation of IT and cloud strategies for flexible working, data storage and data security; including desktop support, hosted email services and data back-up.</p>
                <button type='button' className='rounded bg-danger text-white px-5 py-3 d-flex me-auto border-0 justify-content-center mt-md-5 mt-3' id='button10' style={{fontSize:'14px',fontFamily:'CerebriSans',fontWeight:300,width:'50%'}}>Get a Quote</button>
            </div>
        </div>
      </div>
      <div className="container-fluid" style={{backgroundColor:'#E5E5E5'}}>
        <div className="row d-flex justify-content-center">
          <div className="col-md-7  my-md-5 my-3 text-center">
            <h1 style={{fontSize:'40px',fontFamily:'CerebriSans',fontWeight:700,color:'#696969'}}>Why Fidelity for your <span className='text-danger'>Cloud services?</span></h1>
          </div>
        </div>
        <div className="row vh-100 headercardrow">
          <div className="col-12 d-flex flex-wrap justify-content-around">
            <div className='headercard px-5 pt-5' style={{backgroundColor:'white',width:'18rem',height:'35rem'}}>
              <img src={image3} alt="" className='img-fluid'/>
              <h1 className='pt-3' style={{fontSize:'24px',fontFamily:'CerebriSans',fontWeight:500,color:'#696969'}}>Flexible Services</h1>
              <p style={{fontSize:'16px',fontFamily:'CerebriSans',fontWeight:400,color:'#696969',lineHeight:1.76}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt modi officiis aperiam, ex maxime perferendis placeat blanditiis eius numquam sit? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, perferendis et corporis nihil voluptatibus velit voluptatem fugit recusandae quia vitae.</p>
            </div>
            <div className='headercard px-5 pt-5' style={{backgroundColor:'white',width:'18rem',height:'35rem'}}>
              <img src={image2} alt="" className='img-fluid'/>
              <h1 className='pt-3' style={{fontSize:'24px',fontFamily:'CerebriSans',fontWeight:500,color:'#696969'}}>IT Outscouring</h1>
              <p style={{fontSize:'16px',fontFamily:'CerebriSans',fontWeight:400,color:'#696969',lineHeight:1.76}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt modi officiis aperiam, ex maxime perferendis placeat blanditiis eius numquam sit? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, perferendis et corporis nihil voluptatibus velit voluptatem fugit recusandae quia vitae.</p>
            </div>
            <div className='headercard px-5 pt-5' style={{backgroundColor:'white',width:'18rem',height:'35rem'}}>
              <img src={image1} alt="" className='img-fluid'/>
              <h1 className='pt-3' style={{fontSize:'24px',fontFamily:'CerebriSans',fontWeight:500,color:'#696969'}}>Application</h1>
              <p style={{fontSize:'16px',fontFamily:'CerebriSans',fontWeight:400,color:'#696969',lineHeight:1.76}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt modi officiis aperiam, ex maxime perferendis placeat blanditiis eius numquam sit? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, perferendis et corporis nihil voluptatibus velit voluptatem fugit recusandae quia vitae.</p>
            </div>
            <div className='headercard px-5 pt-5' style={{backgroundColor:'white',width:'18rem',height:'35rem'}}>
              <img src={image4} alt="" className='img-fluid'/>
              <h1 className='pt-3' style={{fontSize:'24px',fontFamily:'CerebriSans',fontWeight:500,color:'#696969'}}>Proactive Solution</h1>
              <p style={{fontSize:'16px',fontFamily:'CerebriSans',fontWeight:400,color:'#696969',lineHeight:1.76}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt modi officiis aperiam, ex maxime perferendis placeat blanditiis eius numquam sit? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, perferendis et corporis nihil voluptatibus velit voluptatem fugit recusandae quia vitae.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid" style={{backgroundColor:'#EBEBEB'}}>
        <div className="row d-flex justify-content-around">
          <div className="col-md-7">
            <h1 style={{fontSize:'40px',fontFamily:'CerebriSans',fontWeight:700,color:'#696969',lineHeight:1.76}}>Bespoke design and implementation of <span className='text-danger'>cloud strategies</span></h1>
          </div>
          <div className="col-md-4">
            <div className="d-lg-flex button">
            <button type='button' className='rounded bg-danger text-white px-5 py-3 d-flex me-auto border-0 justify-content-center mt-md-5 mt-3' id='button11' style={{fontSize:'14px',fontFamily:'CerebriSans',fontWeight:300}}>Get a Quote</button>
            <button type='button' className='rounded text-white px-5 py-3 d-flex me-auto border-0 justify-content-center mt-md-5 mt-3' id='button12' style={{fontSize:'14px',fontFamily:'CerebriSans',fontWeight:300,backgroundColor:'#15376e'}}>Call us</button>
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

export default Cloud
