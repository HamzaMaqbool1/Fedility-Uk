import React, { useEffect, useState } from 'react'
import image9 from '../Images/image9.png'
import image from '../Images/logo.png'
import image11 from '../Images/image32.png'
import image12 from '../Images/image34.png'
import image13 from '../Images/image35.png'
import image14 from '../Images/image36.png'
import image15 from '../Images/image37.png'
import image16 from '../Images/image38.png'
import image17 from '../Images/image15.png'
import { Link } from 'react-router-dom'
import { handleScroll } from '../javascript/scrollbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const BusinessMobile = () => {
  useEffect(() => {
    handleScroll();
  }, []);
  const [activeNew,newActive]=useState('mobile');
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
    <section id='mobile'>
      <div className="container-fluid p-0">
      <nav className="navbar navbar-expand-lg bg-body-tertiary " style={{position:'relative'}} id='navbar'>
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
            <li><Link className="dropdown-item" to="/businessmobile" style={activeNew === 'mobile'?{color:'red'}:{}}>Business Mobile</Link></li>
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
    <div className="row vh-100 d-flex justify-content-center">
        <div className="col-md-10 px-lg-5 d-flex flex-column justify-content-center text-center" style={{paddingTop:'100px'}}>
            <h1 style={{fontSize:'14px',fontFamily:'CerebriSans',fontWeight:700,color:'white',letterSpacing:'3px'}}>BUSINESS MOBILE SERVICES IN THE UK</h1>
            <h1  style={{fontSize:'40px',fontFamily:'CerebriSans',fontWeight:700,color:'white'}}>Competitive deals on bespoke <span className='text-danger'>business mobile plans</span> from all the major UK mobile providers.</h1>
            <div className="d-md-flex justify-content-center gap-5">
            <button type='button' className='rounded bg-danger text-white px-5 py-3    border-0 mb-sm-0 mb-3 me-md-0 me-2' id='button7' style={{fontSize:'14px',fontFamily:'CerebriSans',fontWeight:300}}>Chat to US</button>
            <button type='button' className='rounded bg-danger text-white px-5 py-3   border-0' id='button7' style={{fontSize:'14px',fontFamily:'CerebriSans',fontWeight:300}}>Download our Brounche</button>
            </div>
        </div>
    </div>
</div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
           <div className='d-flex'>
           <div className="vr" style={{backgroundColor:'#15376e',width:'10px',height:'120px',opacity:1}}></div>
           <h1 style={{fontSize:'24px',fontFamily:'CerebriSans',fontWeight:800,color:'#696969',lineHeight:1.67,paddingLeft:'34px'}}>Get <span className='text-danger'>business mobile service and support</span> that won’t let you down.</h1>
           </div>
          </div>
          <div className="col-md-7">
            <h1 style={{fontSize:'18px',fontFamily:'CerebriSans',fontWeight:400,color:'#696969',lineHeight:1.67}}>Business mobile – experience uninterrupted calls and swift data with our bespoke solutions, backed by the strength of the UK’s top network providers, including O2, Vodafone, and Three, powered by Gamma</h1>
            <button type='button' className='rounded bg-danger text-white px-5 py-3    border-0 my-md-5 my-3 button7' id='button7' style={{fontSize:'14px',fontFamily:'CerebriSans',fontWeight:300,width:'40%'}}>Switch Now</button>
          </div>
        </div>
      </div>
      <div className="container-fluid" style={{backgroundColor:'#F5F5F5'}}>
  <div className="row d-flex justify-content-center">
    <div className="col-md-8 text-center py-md-5 py-3">
      <h1 style={{fontSize:'14px',fontFamily:'CerebriSans',fontWeight:700,letterSpacing:'3px',color:'#ababab'}}>FIDELITY GROUP AS YOUR BUSINESS MOBILE PARTNER</h1>
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
<div className="container-fluid" style={{backgroundColor:'rgba(229, 229, 229, 0.5)',backgroundImage:`url(${image17})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
  <div className="row d-flex justify-content-center">
    <div className="col-md-8 text-center">
      <h1  style={{fontSize:'40px',fontFamily:'CerebriSans',fontWeight:700,color:'#696969'}}>Tariffs as adaptable as your Business</h1>
    </div>
  </div>
  <div className="row">
    <div className="container">
      <div className="row my-md-5 my-3">
      <div className="col-12 d-flex justify-content-around flex-wrap">
      <div id='headercard' className='bg-danger'>
        <div className='text-center pt-4 px-3' id='headercard1'>
          <h1 style={{fontSize:'16px',fontFamily:'CerebriSans',fontWeight:700,color:'white'}}>Tailored Solutions</h1>
          <p style={{fontSize:'16px',fontFamily:'CerebriSans',fontWeight:400,color:'white',lineHeight:1.76}}>Understanding the needs of the business mobile user, we offer a comprehensive range of versatile mobile tariffs. Additionally, we can tailor a solution to your specific needs, should you require one</p>
        </div>
      </div>
      <div id='headercard' className='bg-danger'>
        <div className='text-center pt-4 px-3' id='headercard1'>
          <h1 style={{fontSize:'16px',fontFamily:'CerebriSans',fontWeight:700,color:'white'}}>Shared and Pooled Data Bundles</h1>
          <p style={{fontSize:'16px',fontFamily:'CerebriSans',fontWeight:400,color:'white',lineHeight:1.76}}>Effortlessly distribute data throughout your complete business mobile network, or enable colleagues within the company to combine their data quotas to make the very best use of your data.</p>
        </div>
      </div>
      <div id='headercard' className='bg-danger'>
        <div className='text-center pt-4 px-3' id='headercard1'>
          <h1 style={{fontSize:'16px',fontFamily:'CerebriSans',fontWeight:700,color:'white'}}>Data Only, Fast Start, and Backup</h1>
          <p style={{fontSize:'16px',fontFamily:'CerebriSans',fontWeight:400,color:'white',lineHeight:1.76}}>Data-exclusive packages tailored for a range of devices, encompassing routers, USB dongles, MiFi units, laptops, and mobile phones.</p>
        </div>
      </div>
      <div id='headercard' className='bg-danger'>
        <div className='text-center pt-4 px-4' id='headercard1'>
          <h1 style={{fontSize:'16px',fontFamily:'CerebriSans',fontWeight:700,color:'white'}}>Unlimited UK 01, 02, 03, 07 Calls & SMS</h1>
          <p style={{fontSize:'16px',fontFamily:'CerebriSans',fontWeight:400,color:'white',lineHeight:1.76}}>For a consistent and predictable monthly expense, our business mobile plans offer customers unlimited calls and SMS's to a variety of UK numbers.</p>
        </div>
      </div>
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
      <div className="container my-3">
        <div className="row d-flex justify-content-center">
          <div className="col-md-8">
            <p style={{fontFamily:'CerebriSans', fontSize:'14px',fontWeight:400,color:'#696969'}}>If you have any other questions or need further clarification, feel free to reach out to <span><Link to="/" className='text-danger text-decoration-none'>Fidelity Group</Link></span> for more information.</p>
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

export default BusinessMobile
