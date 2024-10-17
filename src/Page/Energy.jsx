import React, { useEffect, useState } from 'react'
import logo from '../Images/image54.png'
import logo1 from '../Images/logo.png'
import image from '../Images/image53.png'
import image1 from '../Images/image55.png'
import image2 from '../Images/image56.png'
import image3 from '../Images/image57.png'
import image4 from '../Images/image58.png'
import image5 from '../Images/image59.png'
import image9 from '../Images/image9.png'
import { Link } from 'react-router-dom'
import { handleScroll1 } from '../javascript/scrollbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const Energy = () => {
    useEffect(() => {
        handleScroll1();
      }, []);
      const [activeNew,newActive]=useState('energy');
  return (
    <section id='energy'>
        <div className="container-fluid p-0">
        <div className="row">
            <div className="col-md-12" >
            <nav className="navbar navbar-expand-lg bg-body-tertiary " style={{position:'relative'}} id='navbar1'>
  <div className="container-fluid">
    <img src={logo1} alt="logo" className='img-fluid ms-md-5 ms-3' style={{width:'120px',height:'50px'}} />
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
            <li><Link className="dropdown-item" to="/connectivity" >Connectivity</Link></li>
            <li><Link className="dropdown-item" to="/iot">IOT</Link></li>
            <li><Link className="dropdown-item" to="/voice">Voice</Link></li>
            <li><Link className="dropdown-item" to="/payment">Payment</Link></li>
            <li><Link className="dropdown-item" to="/energy" style={activeNew === 'energy'?{color:'red'}:{}}>Energy</Link></li>
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
        </div>
        <div className="container-fluid p-0 header" style={{backgroundImage:`url(${image})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
        <div className="row">
            <div className="col-12">
            <nav className="navbar navbar-expand-lg" style={{position:'relative',backgroundColor:'rgba(255,255,255,0)'}} id='navbar'>
  <div className="container-fluid">
    <img src={logo} alt="logo" className='img-fluid ms-md-5 ms-3' style={{width:'120px',height:'50px'}} />
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
            <li><Link className="dropdown-item" to="/connectivity" style={activeNew === 'connectivity'?{color:'red',textDecoration:'underline',textDecorationColor:'red'}:{}}>Connectivity</Link></li>
            <li><Link className="dropdown-item" to="/iot">IOT</Link></li>
            <li><Link className="dropdown-item" to="/voice">Voice</Link></li>
            <li><Link className="dropdown-item" to="/payment">Payment</Link></li>
            <li><Link className="dropdown-item" to="/energy" style={activeNew === 'energy'?{color:'red',textDecoration:'underline',textDecorationColor:'red'}:{}}>Energy</Link></li>
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
      <button type='button' className=' border-0 rounded bg-white text-danger px-5 py-3 d-flex ms-auto  d-lg-inline-block d-none' id='button5' style={{fontSize:'14px',fontFamily:'CerebriSans',fontWeight:300}}>Get a Quote</button>
    </div>
   
  </div>
</nav>
            </div>
        </div>
        <div className="row d-flex justify-content-center my-md-5 my-3">
            <div className="col-md-10 d-flex flex-column align-items-center">
                <h2 className='text-center' style={{color:'white',fontSize:'40px',fontFamily:'CerebriSans',fontWeight:700}}>Stop paying more for your</h2>
                <h1 style={{color:'white',fontSize:'120px',fontFamily:'CerebriSans',fontWeight:700}} className='text-center energyheader'>Business Energy Solutions.</h1>
                <h1 className='text-center' style={{color:'white',fontSize:'16px',fontFamily:'CerebriSans',fontWeight:400}}>We work for you to get your business energy costs reduced, while you focus on your customers.</h1>
                <div className="d-md-flex gap-5">
                <button type='button' className='rounded border-0 bg-danger text-white px-5 py-3 d-flex my-md-5 my-3' id='button1' style={{fontSize:'14px',fontFamily:'CerebriSans',fontWeight:300}}>Book a free Review</button>
                <button type='button' className='rounded border-0 bg-white text-danger px-5 py-3 d-flex my-md-5 my-3' id='button2' style={{fontSize:'14px',fontFamily:'CerebriSans',fontWeight:300}}>Call us</button>
                </div>
            </div>
        </div>
        </div>
        <div className="container">
            <div className="row d-flex justify-content-center my-md-5 my-3">
                <div className="col-md-10">
                    <h1 className='text-center' style={{fontSize:'14px',fontFamily:'CerebriSans',fontWeight:700,letterSpacing:'3px',color:'#ababab'}}>BUSINESS ENERGY SOLUTIONS IN THE UK.</h1>
                    <h1 className='text-center' style={{fontSize:'40px',fontFamily:'CerebriSans',fontWeight:700,color:'#ababab'}}>We work for you to get your <span className='text-danger'>business energy costs reduced</span> , while you focus on your customers.</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className='d-flex'>
                        <div className="hr" style={{width:'7px',height:'125px',backgroundColor:'#15376e'}}></div>
                        <h1 style={{fontSize:'24px',fontFamily:'CerebriSans',fontWeight:400,color:'#696969',lineHeight:1.67,paddingLeft:'34px'}}>
                        Affordable business energy doesn’t have to be difficult to procure</h1>
                    </div>
                </div>
                <div className="col-md-7">
                    <p style={{fontSize:'18px',fontFamily:'CerebriSans',fontWeight:400,color:'#696969',lineHeight:1.67}}>Discover the unparalleled advantages of choosing Fidelity Group for your Business Energy Procurement needs. Take the first step towards a transformative business energy management experience.</p>
                    <p style={{fontSize:'18px',fontFamily:'CerebriSans',fontWeight:400,color:'#696969',lineHeight:1.67}}>At Fidelity Group, we are not just another energy procurement service provider. We are pioneers in the UK’s business energy procurement sector, setting the industry standard for excellence. Our holistic approach combines cutting-edge technology with deep industry knowledge, resulting in tailor-made business energy solutions that surpass your expectations.</p>
                    <p style={{fontSize:'18px',fontFamily:'CerebriSans',fontWeight:400,color:'#696969',lineHeight:1.67}}>From the very first consultation, we focus on understanding your unique requirements, challenges, and goals. This personalised attention ensures that we develop a bespoke business energy solution that perfectly aligns with your business objectives.</p>
                    <p  style={{fontSize:'18px',fontFamily:'CerebriSans',fontWeight:400,color:'#696969',lineHeight:1.67}}>But our commitment doesn’t stop there. We are your trusted energy ally throughout the entire lifecycle of your account. Our experts handle the intricate process of managing businss energy contracts, leaving you free to concentrate on what truly matters – your customers, and growing your business. With our meticulous oversight, you can rest easy knowing that every detail is taken care of, right from negotiating the most advantageous energy rates to ensuring accurate billing.</p>
                    <p style={{fontSize:'18px',fontFamily:'CerebriSans',fontWeight:400,color:'#696969',lineHeight:1.67}}>What truly sets us apart is our unwavering dedication to delivering maximum value to our customers. We go beyond procurement, actively assisting you in reducing business energy consumption and minimising your carbon footprint. By optimising your energy usage, we help you achieve cost savings and sustainability goals simultaneously.</p>
                    <button type='button' className='rounded border-0 bg-danger text-white px-5 py-3 d-flex my-md-5 my-3' id='button1' style={{fontSize:'14px',fontFamily:'CerebriSans',fontWeight:300}}>Book a free Review</button>
                </div>
            </div>
        </div>
        <div className="container my-md-5 my-3">
            <div className="row d-flex justify-content-center">
                <div className="col-md-12 text-center">
                    <h1 style={{fontSize:'24px',fontFamily:'CerebriSans',fontWeight:400,color:'#696969',lineHeight:1.67}}>We have established strong partnerships with a wide network of trusted suppliers to ensure we find you the most competitive business energy rates available.</h1>
                </div>
            </div>
            <div className="row my-md-5 my-3">
                <div className="col-12">
                    <img src={image1} alt="" className='img-fluid'/>
                </div>
            </div>
        </div>
        <div className="container-fluid" style={{backgroundColor:'#E5E5E5'}}>
            <div className="row d-flex justify-content-center">
                <div className="col-md-8 text-center my-md-5 my-3">
                    <h1 style={{fontSize:'40px',fontFamily:'CerebriSans',fontWeight:700,color:'#696969',lineHeight:1.67}}>We’ll make <span className='text-danger'>switching your business energy</span> easy.</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12 d-flex justify-content-around flex-wrap py-md-5 py-3">
                    <div className='energy-header px-md-5 px-3 pt-3'>
                        <img src={image4} alt="" className='img-fluid' style={{width:'50px',height:'50px'}} />
                        <h1 style={{fontSize:'24px',fontFamily:'CerebriSans',fontWeight:500,color:'#696969'}} className='mt-3'>Gas</h1>
                        <p style={{fontSize:'16px',fontFamily:'CerebriSans',fontWeight:400,color:'#696969',lineHeight:1.76}}>Say goodbye to confusing gas tariffs and time-consuming paperwork. We’ll support you with everything from metre reading to understanding your bill.</p>
                        <a href="#" className='text-decoration-none'  style={{fontSize:'16px',fontFamily:'CerebriSans',fontWeight:400,color:'red',lineHeight:1.76}}>Fint out More<FontAwesomeIcon icon={faArrowRight} size='1x' color='red' className='pt-3 ps-2 icon'/></a>
                    </div>
                    <div className='energy-header px-md-5 px-3 pt-3'>
                        <img src={image2} alt="" className='img-fluid' style={{width:'50px',height:'50px'}} />
                        <h1 style={{fontSize:'24px',fontFamily:'CerebriSans',fontWeight:500,color:'#696969'}} className='mt-3'>Electricity</h1>
                        <p style={{fontSize:'16px',fontFamily:'CerebriSans',fontWeight:400,color:'#696969',lineHeight:1.76}}>Say goodbye to confusing gas tariffs and time-consuming paperwork. We’ll support you with everything from metre reading to understanding your bill.</p>
                        <a href="#" className='text-decoration-none'  style={{fontSize:'16px',fontFamily:'CerebriSans',fontWeight:400,color:'red',lineHeight:1.76}}>Fint out More<FontAwesomeIcon icon={faArrowRight} size='1x' color='red' className='pt-3 ps-2 icon'/></a>
                    </div>
                    <div className='energy-header px-md-5 px-3 pt-3'>
                        <img src={image3} alt="" className='img-fluid' style={{width:'50px',height:'50px'}} />
                        <h1 style={{fontSize:'24px',fontFamily:'CerebriSans',fontWeight:500,color:'#696969'}} className='mt-3'>EV Charging</h1>
                        <p style={{fontSize:'16px',fontFamily:'CerebriSans',fontWeight:400,color:'#696969',lineHeight:1.76}}>Say goodbye to confusing gas tariffs and time-consuming paperwork. We’ll support you with everything from metre reading to understanding your bill.</p>
                        <a href="#" className='text-decoration-none'  style={{fontSize:'16px',fontFamily:'CerebriSans',fontWeight:400,color:'red',lineHeight:1.76}}>Fint out More<FontAwesomeIcon icon={faArrowRight} size='1x' color='red' className='pt-3 ps-2 icon'/></a>
                    </div>
                    <div className='energy-header px-md-5 px-3 pt-3'>
                        <img src={image5} alt="" className='img-fluid' style={{width:'50px',height:'50px'}} />
                        <h1 style={{fontSize:'24px',fontFamily:'CerebriSans',fontWeight:500,color:'#696969'}} className='mt-3'>Green Energy</h1>
                        <p style={{fontSize:'16px',fontFamily:'CerebriSans',fontWeight:400,color:'#696969',lineHeight:1.76}}>Say goodbye to confusing gas tariffs and time-consuming paperwork. We’ll support you with everything from metre reading to understanding your bill.</p>
                        <a href="#" className='text-decoration-none'  style={{fontSize:'16px',fontFamily:'CerebriSans',fontWeight:400,color:'red',lineHeight:1.76}}>Fint out More<FontAwesomeIcon icon={faArrowRight} size='1x' color='red' className='pt-3 ps-2 icon'/></a>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row d-flex justify-content-around">
                <div className="col-md-8">
                    <h1  style={{fontSize:'36px',fontFamily:'CerebriSans',fontWeight:700,color:'#696969',lineHeight:1.4}}>Experience the financial and environmental benefits of our comprehensive approach to business energy management.</h1>
                    <p style={{fontSize:'18px',fontFamily:'CerebriSans',fontWeight:400,color:'#696969',lineHeight:1.67}}>Contact Fidelity Group today for a free review of your Business Energy bill. Together, we can create a brighter, greener future while boosting your bottom line.</p>
                </div>
                <div className="col-md-4">
                    <div className='d-lg-flex gap-3 pt-lg-5 pt-3'>
                    <button type='button' className='rounded border-0 bg-danger text-white px-5 py-3 d-flex my-md-5 my-3' id='button1' style={{fontSize:'14px',fontFamily:'CerebriSans',fontWeight:300}}>Switch Now</button>
                    <button type='button' className='rounded border-0 text-white px-5 py-3 d-flex my-md-5 my-3' id='button7' style={{fontSize:'14px',fontFamily:'CerebriSans',fontWeight:300,backgroundColor:'#15376e '}}>Call us</button>
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

export default Energy
