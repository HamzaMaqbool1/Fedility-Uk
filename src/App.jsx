import { useState,useEffect } from 'react'
import Home from './Page/Home'
import Connectivity from './Page/Connectivity'
import IOT from './Page/IOT'
import Voice from './Page/Voice'
import image from './Images/logo.png'
import image1 from './Images/isogroup.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router,Routes,Route, Link, useLocation } from 'react-router-dom';
import Payment from './Page/Payment'
import Energy from './Page/Energy'
import BusinessMobile from './Page/BusinessMobile'
import Cloud from './Page/Cloud'
import Billing from './Page/Billing'
function Footer(){
  const location=useLocation();
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
  const [active,activeNew]=useState('');
  const handleActive=(option)=>{
    activeNew(option)
  }
  return(
    <section id='footer'>
    {location.pathname !== '/billing'?(<div className="container-fluid" style={{backgroundColor:'#E8E8E8'}}>
      <div className="row mx-md-5">
        <div className="col-lg-4 col-md-3 my-md-5 my-2">
          <img src={image} alt="Logo" className='img-fluid' style={{width:'120px', height:'50px'}}/>
          <p style={{color:'#75726f', fontSize:'16px', fontFamily:'CerebriSans',fontWeight:400}} className='lh-lg mt-3'>Henley: 14 Station Rd, Henley-on-Thames, RG9 1AY<br/> London: Fox Court, 14 Grays Inn Rd, London WC1X 8HN<br/> Reg. Number: 06765669</p>
          <p><a href="" className='text-danger text-decoration-none texthover' style={{fontSize:'16px',fontFamily:'CerebriSans',fontWeight:400}}>www.fidelity-group.co.uk</a></p>
        </div>
        <div className="col-lg-2 col-md-3 my-md-5 my-2">
          <h5 style={{color:'#75726f'}} className='mb-4'>Services</h5>
          <ul className="list-unstyled" style={{fontSize:'16px',fontFamily:'CerebriSans'}}>
            <li className='mb-3'><Link to="/connectivity" className='text-danger text-decoration-none' id='links'>Connectivity</Link></li>
            <li className='mb-3'> <Link to="/cloud" className='text-danger text-decoration-none' id='links'>Cloud and Hosting</Link></li>
            <li className='mb-3'> <Link to="/energy" className='text-danger text-decoration-none' id='links' >Energy</Link></li>
            <li className='mb-3'> <Link to="/iot" className='text-danger text-decoration-none' id='links'>IOT</Link></li>
            <li className='mb-3'> <Link to="/businessmobile" className='text-danger text-decoration-none' id='links'>Mobile</Link></li>
            <li className='mb-3'> <Link to="/voice" className='text-danger text-decoration-none' id='links'>Voice</Link></li>
            <li className='mb-3'> <Link href="/billing" className='text-danger text-decoration-none' id='links'>Billing</Link></li>
            <li className='mb-3'> <Link to="/payment" className='text-danger text-decoration-none' id='links'>Payments</Link></li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-3 my-md-5 my-2">
        <h5 style={{color:'#75726f'}} className='mb-4'>Quick links</h5>
          <ul className="list-unstyled" style={{fontSize:'16px',fontFamily:'CerebriSans'}}>
            <li className='mb-3'><a href="" className='text-danger text-decoration-none' id='links'>About</a></li>
            <li className='mb-3'> <a href="" className='text-danger text-decoration-none' id='links'>Contact</a></li>
            <li className='mb-3'> <a href="" className='text-danger text-decoration-none' id='links' >Media and News</a></li>
            <li className='mb-3'> <a href="" className='text-danger text-decoration-none' id='links'>Careers</a></li>
            <li className='mb-3'> <a href="" className='text-danger text-decoration-none' id='links'>Terms and Use</a></li>
            <li className='mb-3'> <a href="" className='text-danger text-decoration-none' id='links'>Privacy Policy</a></li>
            <li className='mb-3'> <a href="" className='text-danger text-decoration-none' id='links'>Cookie Policy</a></li>
            <li className='mb-3'> <a href="" className='text-danger text-decoration-none' id='links'>Code of Practice</a></li>
            <li className='mb-3'> <a href="" className='text-danger text-decoration-none' id='links'>KIT Home VoIP</a></li>
          </ul>
        </div>
        <div className="col-lg-2 col-md-3 my-md-5 my-2">
        <h5 style={{color:'#75726f'}} className='mb-4'>Support</h5>
          <ul className="list-unstyled" style={{fontSize:'16px',fontFamily:'CerebriSans'}}>
            <li className='mb-3'><a href="" className='text-danger text-decoration-none' id='links'>Anvil Login</a></li>
            <li className='mb-3'> <a href="" className='text-danger text-decoration-none' id='links'>Remote Support</a></li>
            <li className='mb-3'> <a href="" className='text-danger text-decoration-none' id='links' >Report a Fault</a></li>
            <li className='mb-3'> <a href="" className='text-danger text-decoration-none' id='links'>Emergency Location</a></li>
            <li className='mb-3'> <a href="" className='text-danger text-decoration-none' id='links'>Cloud Fault</a></li>
            <li className='mb-3'> <a href="" className='text-danger text-decoration-none' id='links'>Energy Complaints Procedure</a></li>
          </ul>
        </div>
        <div className="col-lg-2 my-md-5 my-3">
          <img src={image1} alt="ISO" className='img-fluid imgfooter' style={{width:'100%', height:'100px'}}/>
        </div>
      </div>
      <div className="row mx-md-5">
        <div className="col-md-6">
          <p style={{color:'#75726f', fontSize:'16px',fontFamily:'CerebriSans'}} >&copy; 24 Fidelity Group. All Rights Reserved</p>
        </div>
        <div className="col-6">
        {showScrollTop && (
        <button 
          onClick={scrollToTop} 
          className="scroll-top-btn"
        >
          <FontAwesomeIcon icon={faArrowUp} size='1x' color='white'/>
        </button>
      )}
        </div>
      </div>
    </div>):null}
    </section>
  )
}

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/connectivity' element={<Connectivity/>}></Route>
        <Route path='/iot' element={<IOT/>}></Route>
        <Route path='/voice' element={<Voice/>}></Route>
        <Route path='/payment' element={<Payment/>}></Route>
        <Route path='/energy' element={<Energy/>}></Route>
        <Route path='/businessmobile' element={<BusinessMobile/>}></Route>
        <Route path='/cloud' element={<Cloud/>}></Route>
        <Route path='/billing' element={<Billing/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
