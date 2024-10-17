import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { handleScroll} from '../javascript/scrollbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import image from '../Images/logo.png'
import image1 from '../Images/image40.png'
import image9 from '../Images/image9.png'
import image2 from '../Images/image41.png'
import image3 from '../Images/image42.png'
import image4 from '../Images/image43.png'
import image5 from '../Images/image44.png'
import image6 from '../Images/image45.png'
import image7 from '../Images/image46.png'
import image8 from '../Images/image47.png'
import image10 from '../Images/image48.png'
import image11 from '../Images/image49.png'
import image12 from '../Images/image50.png'
import image14 from '../Images/image51.png'
import image13 from '../Images/image52.png'
import { faArrowRight, faCalendar } from '@fortawesome/free-solid-svg-icons';
const images = [
    image5, 
    image6,
    image7,
    image8,
    image10,
    image11,
    image12
  ];
const Payment = () => {
    useEffect(() => {
        handleScroll();
      }, []);
      const [activeNew,newActive]=useState('payment');
      const [isVisible, setIsVisible] = useState(false);

      useEffect(() => {
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 100); 
    
        return () => clearTimeout(timer);
      }, []);
      const [currentIndex, setCurrentIndex] = useState(0);
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); 
    
        return () => clearInterval(interval); 
      }, []);
    
     
      const getImageIndexes = () => {
        const indexes = [];
        for (let i = 0; i < 6; i++) {
          indexes.push((currentIndex + i) % images.length);
        }
        return indexes;
      };
  return (
    <section id='payment'>
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
            <li><Link className="dropdown-item" to="/payment" style={activeNew === 'payment'?{color:'red'}:{}}>Payment</Link></li>
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
<div className="container-fluid">
    <div className="row">
        <div className="col-md-7 headertext" style={{paddingLeft:'50px'}}>
            <h1 style={{fontFamily:'CerebriSans', fontSize:'14px',fontWeight:700,color:"#696969",letterSpacing:'3px',lineHeight:'25px',marginTop:'70px'}}>PAYMENT-SOLUTIONS-AS-A-SERVICE</h1>
            <h1 style={{fontFamily:'CerebriSans', fontSize:"56px",fontWeight:700,color:"black"
            }} id='headerheading'>Comprehensive Payment Solution <span className='text-danger'>for Businesses of All Sizes:</span></h1>
           <button type='button' className='rounded bg-danger text-white px-5 py-3 d-flex  me-auto border-0' id='button7' style={{fontSize:'14px',fontFamily:'CerebriSans',fontWeight:300,marginTop:'50px'}}>Get a Quote</button>
        </div>
        <div className="col-md-5">
            <img src={image1} alt="" className={`image-slide ${isVisible ? 'active' : ''}`} style={{ width: '100%', height: '100%' }} />
        </div>
    </div>
</div>
      </div>
      <div className="container my-md-5 my-3">
        <div className="row d-flex justify-content-center">
            <div className="col-md-1 d-flex flex-column align-items-center">
                <div className="dot dot1 mb-3" style={{width:'5px',height:'5px',borderRadius:'50%',backgroundColor:'red',opacity:0.3,animationTimeline:'1'}}></div>
                <div className="dot dot2 mb-3" style={{width:'5px',height:'5px',borderRadius:'50%',backgroundColor:'red',opacity:0.3}}></div>
                <div className="dot dot3" style={{width:'5px',height:'5px',borderRadius:'50%',backgroundColor:'red',opacity:0.3}}></div>
            </div>
        </div>
      </div>
      <div className="container-fluid" style={{backgroundColor:'#f5f5f5'}}>
        <div className="row d-flex justify-content-around">
            <div className="col-md-3 bg-white my-md-5 my-3 pt-3 ps-4 paymentcard" style={{borderRadius:'10px',height:'17rem'}}>
                <img src={image2} alt="" style={{width:'50px',height:'50px'}}/>
                <h1 className='mt-3' style={{fontSize:'24px',fontFamily:'CerebriSans',fontWeight:500,color:'#696969'}}>Accept Payments</h1>
                <p style={{fontSize:'15px',fontFamily:'CerebriSans',fontWeight:400,color:'#696969',lineHeight:1.74}} className='text-justify'>Anywhere, anytime with our adaptable fixed, mobile, and portable card machines!</p>
                <a href="#" className='text-decoration-none text-danger link' style={{fontSize:'15px',fontFamily:'CerebriSans',fontWeight:400}}>Get a Quote <FontAwesomeIcon icon={faArrowRight} size='1x' className='icon mt-2'  color='red'/></a>
            </div>
            <div className="col-md-3 bg-white my-md-5 my-3 pt-3 ps-4 paymentcard" style={{borderRadius:'10px',height:'17rem'}}>
                <img src={image3} alt="" style={{width:'50px',height:'50px'}}/>
                <h1 className='mt-3' style={{fontSize:'24px',fontFamily:'CerebriSans',fontWeight:500,color:'#696969'}}>EPOS</h1>
                <p style={{fontSize:'15px',fontFamily:'CerebriSans',fontWeight:400,color:'#696969',lineHeight:1.74}} className='text-justify'>Elevate your customer experience with our feature-packed EPOS</p>
                <a href="#" className='text-decoration-none text-danger link' style={{fontSize:'15px',fontFamily:'CerebriSans',fontWeight:400}}>Get a Quote <FontAwesomeIcon icon={faArrowRight} size='1x' className='icon mt-2' color='red'/></a>
            </div>
            <div className="col-md-3 bg-white my-md-5 my-3 pt-3 ps-4 paymentcard" style={{borderRadius:'10px',height:'17rem'}}>
                <img src={image4} alt="" style={{width:'50px',height:'50px'}}/>
                <h1 className='mt-3' style={{fontSize:'24px',fontFamily:'CerebriSans',fontWeight:500,color:'#696969'}}>E-Commerce</h1>
                <p style={{fontSize:'15px',fontFamily:'CerebriSans',fontWeight:400,color:'#696969',lineHeight:1.74}} className='text-justify'>Boost your online business with a secure and efficient ecommerce online payment system.</p>
                <a href="#" className='text-decoration-none text-danger link' style={{fontSize:'15px',fontFamily:'CerebriSans',fontWeight:400}}>Get a Quote <FontAwesomeIcon icon={faArrowRight} size='1x' className='icon mt-2'  color='red'/></a>
            </div>
        </div>
      </div>
      <div className="container">
        <div className="row d-flex justify-content-center my-md-5 my-3">
            <div className="col-md-10 d-flex flex-column align-items-center">
                <h1  style={{fontSize:'14px',fontFamily:'CerebriSans',fontWeight:700,letterSpacing:'3px',color:'#696969'}}>
                PAYMENT SOLUTIONS: CARD MACHINES | ONLINE PAYMENT GATEWAYS | EPOS | E-COMMERCE
                </h1>
                <h1 style={{fontSize:'40px',fontFamily:'CerebriSans',fontWeight:700,color:'#696969'}}>UK Merchant <span className='text-danger'>Payment Solutions</span> Specialists</h1>
            </div>
        </div>
        <div className="row d-flex justify-content-between">
            <div className="col-md-4">
                <div className='d-flex'>
                    <div className="vh" style={{backgroundColor:'#15376e',height:'80px',width:'5px'}}></div>
                    <h1 style={{fontSize:'24px',fontFamily:'CerebriSans',fontWeight:800,color:'#696969',lineHeight:1.67}} className='ps-3'>Improve efficiency and make savings.</h1>
                </div>
               <div className='ps-lg-5 ps-md-3 ps-0 textlink'> <a href="" className='text-danger text-decoration pb-2'>Pay by Link Solutions <span>&gt;</span></a>
                <div className="hr" style={{width:'100%',height:'1px',backgroundColor:'#696969'}}></div>
                <a href="" className='text-danger  textdecoration2 py-2'>Virtual Terminal Solutions <span>&gt;</span></a>
                <div className="hr"  style={{width:'100%',height:'1px',backgroundColor:'#696969'}}></div>
                <a href="" className='text-danger textdecoration3 pt-2'>Credit Card Terminals <span>&gt;</span></a></div>
            </div>
            <div className="col-md-7">
                <h1 style={{fontSize:'24px',fontFamily:'CerebriSans',fontWeight:800,color:'#696969',lineHeight:1.67}}>Unmatched <span className='text-danger'>Merchant Services</span>: Choice and reliable payment solutions with Fidelity Group</h1>
                <p style={{fontSize:'18px',fontFamily:'CerebriSans',fontWeight:400,color:'#696969',lineHeight:1.67}}>Discover the Fidelity Group difference in payment solutions as we empower our merchant partners with a range of card, ePOS, and other payment solution choices</p>
                <p style={{fontSize:'18px',fontFamily:'CerebriSans',fontWeight:400,color:'#696969',lineHeight:1.67}}>
                By offering a diverse selection of products and services, we ensure the provision of reliable, payment solutions that add value to the entire value chain – banks, our partner network, and, most importantly, the end customers.
                </p>
                <button type='button' className='rounded bg-danger text-white  py-3 d-flex  me-auto border-0' id='button8' style={{fontSize:'14px',fontFamily:'CerebriSans',fontWeight:300,marginTop:'50px',width:'30%',paddingLeft:'60px'}}>Get a Quote</button>
            </div>
        </div>
      </div>
      <div className="container my-md-5 my-3">
        <div className="row d-flex justify-content-center">
            <div className="col-md-1  d-flex flex-column align-items-center">
                <div className="dot dot1 mb-3" style={{width:'5px',height:'5px',borderRadius:'50%',backgroundColor:'red',opacity:0.3}}></div>
                <div className="dot dot2 mb-3" style={{width:'5px',height:'5px',borderRadius:'50%',backgroundColor:'red',opacity:0.3}}></div>
                <div className="dot dot3" style={{width:'5px',height:'5px',borderRadius:'50%',backgroundColor:'red',opacity:0.3}}></div>
            </div>
        </div>
      </div>
      <div className="container">
        <div className="row d-flex justify-content-center">
            <div className="col-md-6 d-flex justify-content-center">
                <h1 style={{fontSize:'14px',fontFamily:'CerebriSans',fontWeight:700,letterSpacing:'3px',color:'#ababab'}}>PAYMENT SOLUTIONS: ACQUIRING BANKS</h1>
            </div>
        </div>
        <div className="row">
        <div className="col-12 d-flex align-items-center">
            <div className="slider-container">
      <div className="slider">
        {getImageIndexes().map((index, i) => (
          <img
            key={index}
            src={images[index]}
            alt={`Slide ${index}`}
            className="slidee"
            style={{
              animation: i === 0 ? "slide-out-left 2s forwards" : i === 5 ? "slide-in-right 2s forwards" : "" 
            }}
          />
        ))}
      </div>
    </div>
            </div>
        </div>
      </div>
      <div className="container-fluid my-md-5 my-3" style={{backgroundColor:'#DCDBDC'}}>
        <div className="row">
            <div className="col-md-7 py-md-5 py-3">
                <h1 style={{fontSize:'40px',fontFamily:'CerebriSans',fontWeight:700,color:'#696969'}}>We can help your business <span className='text-danger'>save money</span> on rates. Book a review today!</h1>
            </div>
            <div className="col-lg-4 d-flex align-items-center">
           <div className='d-flex gap-3 my-lg-0 my-3'>
           <button type='button' className='rounded bg-danger text-white px-md-5 px-3 py-3  border-0' id='button9' style={{fontSize:'14px',fontFamily:'CerebriSans',fontWeight:300}}>Request Review</button>
           <button type='button' className='rounded text-white px-md-5 px-3 py-3  border-0' id='button10' style={{fontSize:'14px',fontFamily:'CerebriSans',fontWeight:300,backgroundColor:'#15376e'}}>Call us Now</button>
           </div>
            </div>
        </div>
      </div>
      <div className="container" style={{backgroundColor:'#FFFFFF'}}>
        <div className="row">
          <div className="col-md-4 ps-3 mt-5">
          <h2 style={{color:'#bfbbbb',fontSize:'14px',fontFamily:'CerebriSans',fontWeight:700}}>PAYMENT SOLUTIONS AS A SERVICE</h2>
                <p className='textchange' style={{fontFamily:'CerebriSans', fontSize:'40px',fontWeight:700,color:'#7a7777'
                }}>Press releases,<span className='text-danger'>blogs</span> and videos about payment solutions.</p>
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
                <img src={image13} alt="" className='img-fluid rounded' style={{width:'100%'}}/>
                <FontAwesomeIcon icon={faCalendar} size='1x' color='grey' className='my-2'/><br/>
                <h3 style={{fontFamily:'CerebriSans', fontSize:'24px',fontWeight:700,color:'#7a7777'}}>Why companies should avoid using mobile phone SIMs in IOT applications</h3>
                <p style={{fontFamily:'CerebriSans', fontSize:'16px',fontWeight:400,color:'#7a7777'}}>It may be tempting to use mobile phone SIMs htmlFor IoT applications but this...</p>
                <button type='button' className='border-0 text-danger px-3 py-2 bg-white' style={{textDecorationColor:'#7a7777',textDecorationLine:'underline'}}>Read More<FontAwesomeIcon icon={faArrowRight} size='1x' className='ms-1'/></button>
              </div>
              <div className="col-md-6" id='questionimage1'>
              <img src={image14} alt="" className='img-fluid rounded' style={{width:'100%'}}/>
                <FontAwesomeIcon icon={faCalendar} size='1x' color='grey' className='my-2'/><br/>
                <h3 style={{fontFamily:'CerebriSans', fontSize:'24px',fontWeight:700,color:'#7a7777'}}>Summer is the best time to sign a new energy contract but time is running out!</h3>
                <p style={{fontFamily:'CerebriSans', fontSize:'16px',fontWeight:400,color:'#7a7777'}}>Energy prices typically drop in the summer months which presents businesses with...</p>
                <button type='button' className='border-0 text-danger px-3 py-2 bg-white' style={{textDecorationColor:'#7a7777',textDecorationLine:'underline'}}>Read More<FontAwesomeIcon icon={faArrowRight} size='1x' className='ms-1'/></button>
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

export default Payment
