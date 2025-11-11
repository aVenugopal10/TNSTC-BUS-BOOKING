import React from 'react'
import Tamil from './asset/image.png'
import './page.css'
import { CgProfile } from "react-icons/cg";
import Bus from './asset/homeBg.gif'
import { FaBus } from "react-icons/fa";
import { FaSuitcase } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Chennai from './asset/td-3.jpg'
import banglore from './asset/td-4.jpg'
import thirupati from './asset/td-6.jpg'
import madurai from './asset/td-1.jpg'
import kanya from './asset/td-5.jpg'
import kumba from './asset/td-2.jpg'
import and from './asset/Android_round.png'
import app from './asset/ios_round.png'
import vis from './asset/VisitorsCount_round.png'
import add from './asset/tn_ad.jpg'
import arrow from './asset/li.png'
import phone from './asset/phone-icon.png'
import radio from './asset/radiantinfo_logo.gif'
import banner1 from './asset/small-banner-1.jpg'
import banner2 from './asset/small-banner-2.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ModalLogin from './popup';
import { useState } from 'react';
import PopupLogin from './popup'
import { useEffect } from 'react';

import Popup from './popup';




export default function Page() {
  const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,     
      slidesToScroll: 1,  
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true
    };
    const images=[Chennai,banglore,thirupati,madurai,kanya,kumba]
    const [showLoginPopup, setShowLoginPopup] = useState(false);
    
    const [userEmail, setUserEmail] = useState("");
    const [loggedIn, setLoggedIn] = useState(true);



    const handleLoginClick = () => {
  if (userEmail) {
    
    localStorage.removeItem("logedInUser");
    
    setUserEmail("");
    setShowLoginPopup(false); 
  } else {
    
    setShowLoginPopup(true);
  }
};

useEffect(() => {
  const email = localStorage.getItem("logedInUser");
  if (email) {
    setUserEmail(email);
    
  }
}, []);

const handleLoginSuccess = (email) => {
    
    setUserEmail(email);
    setShowLoginPopup(false);
    setLoggedIn(true)
  };


    
  return (

    
    <div className='container' style={{height:'1000px',
        width:'100%',
        backgroundColor:'#e7e9ed',
    }}>
    {/* <div className='row' >
            <ul style={{listStyleType:'none',
            display:'flex',
            left:'1200px',
            marginRight:'20px',
            color:'blue',
            flexWrap:'wrap',
            }}>
            <li style={{padding:'8px',fontFamily:'Poppins,sans-serif',position:'absolute',top:'2px', left:'1237px'}}>
              English  </li>
              <li style={{padding:'5px',top:'2px', left:'1234px',position:'absolute'
              } } >|</li>
              <li style={{padding:'8px',fontFamily:'Poppins,sans-serif',position:'absolute',top:'2px', left:'1190px'}}>Tamil</li>
            </ul>
     </div> */}

    <div className='header' style={{height:'120px',
        width:'100%',
        backgroundColor:'#fff',
        // position:'static',
        top:'35px'
    }}>
        
      <div className='logo' >
        <img src={Tamil} alt='' style={{
            position:'absolute',
            left:'150px',
            top:'9px'
        }}/>
      </div>
      
      <div className='Nav'>
        <ul style={{listStyleType:'none',
            display:'flex',
            position:'absolute',
            left:'700px',
            top:'20px'}}>
          <li style={{padding:'10px',fontFamily:'Poppins,sans-serif', color:'#077bff'}}>operator Login</li>
          <li style={{padding:'10px',fontFamily:'Poppins,sans-serif',  }}>Hire a Bus</li>
          <li style={{padding:'10px',fontFamily:'Poppins,sans-serif'}}>Services</li>
          <li style={{padding:'10px',fontFamily:'Poppins,sans-serif', color:'grey'}}>|</li>
          <li style={{padding:'10px',fontFamily:'Poppins,sans-serif'}}>Track Ticket</li>
          <li style={{padding:'10px',fontFamily:'Poppins,sans-serif', color:'grey'}}>|</li>
          
        <li onClick={ handleLoginClick} style={{padding:'10px',fontFamily:'Poppins,sans-serif', color:''}}>
          Login/SignUp
        </li>
         <li>
  {  loggedIn && userEmail ? (
    <span
      style={{
        width: '35px',
        height: '35px',
        borderRadius: '50%',
        backgroundColor: '#ccc',
        color: '#000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: '18px'
      }}
    >
      {userEmail.charAt(0).toUpperCase()}
    </span>
  ) : (
    <CgProfile style={{ width: '40px', height: '35px', color: 'grey' }} />
  )}
</li>

        </ul>
        <div className='popup'>

        {showLoginPopup && <PopupLogin onClose={() => setShowLoginPopup(false)}
  onLoginSuccess={handleLoginSuccess} />}
          
            </div>
      </div>

      </div>
    <div className='header2' style={{height:'500px', width:'100%', backgroundColor:'#90bee4',
      position:'absolute',top:'135px'
    }}>

      <div style={{textAlign: 'center',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#474788',
    fontFamily: 'Poppins, sans-serif',
    position:'absolute',
    top:'30px',
    left:'550px'}}>Online Ticket Reservation System (OTRS)   </div>
      <img src={Bus} alt='' style={{}}/>
     <div className='ticket' style={{height:'80px',width:'550px', backgroundColor:'#fff', position:'absolute', top:'90px',left:'470px',borderRadius:'8px'}}>
      <ul className='bus-ti' style={{listStyle:'none',
        
        
      }}>
        <li><FaBus style={{height:'30px',width:'40px', position:'absolute', left:'200px',top:'10px',color:'#2196f3'}} /></li>
        <li><FaSuitcase style={{ height:'30px',width:'40px',position:'absolute', left:'320px',top:'10px',color:'#2196f3',zIndex: 1}}/></li>
        <li></li>
        <li className='bus-io' style={{position:'absolute', left:'180px',top:'50px',fontFamily: 'Poppins, sans-serif',fontWeight:'400',zIndex: 2,color:'#2196f3'}}>Bus Booking </li>
        <li className='bus-io' style={{ position:'absolute', left:'295px',top:'50px',fontFamily: 'Poppins, sans-serif',fontWeight:'400',zIndex: 2,}}> Package Tour</li>
      </ul>
     </div>
      
     <div className='boooked' style={{
      height:'250px',
       width:'1150px', 
       alignItems:'center',
       position:'absolute', top:'170px'
       , left:'180px'
       ,backgroundColor:'#f8f9fa'
       ,opacity:'0.7',
       borderRadius:'16px'}}></div>

     <h2 style={{color:'#0c2f54',position:'absolute',left:'200px',top:'170px',fontSize:'24px',fontFamily: 'Poppins, sans-serif',fontWeight:'500'}}>Book Bus Tickets</h2>
    <hr style={{width:'105px',
                      position:'absolute',
                      left:'640px',
                      top:'160px',
                      border: '2px solid #077bff'}}></hr>
      <div className='place' style={{paddingRight:'5px',
        paddingLeft:'5px'
      }}>  <label 
      style={{color:'#535b61',
        position:'absolute',
        top:'230px',
        left:'200px',
        fontFamily: 'Poppins, sans-serif',
        fontWeight:'400',
        fontSize:'18px',
        display:'inline-block'
      }}>Source</label> 
      <input type='text' placeholder='From Place' 
      style={{borderColor:'#03a9f4',
               height:'40px',
               width:'270px',
               fontFamily: 'Poppins, sans-serif',
               fontWeight:'400',
               alignItems:'center',
               marginLeft:'195px',
               position:'absolute',
               top:'260px',
               borderRadius:'4px',
               color:'#777',
               opacity:'0.4',
              }}></input>
              <ul style={{listStyleType:'none',
                color:'#c4c3c3',
                position:'absolute',
                left:'410px',
                top:'255px'
              }}>
              <li><FaLocationDot/></li>
              </ul>

              <label 
      style={{color:'#535b61',
        position:'absolute',
        top:'230px',
        left:'490px',
        fontFamily: 'Poppins, sans-serif',
        fontWeight:'400',
        fontSize:'18px',
        display:'inline-block'
      }}>Destination</label> 
      <input type='text' placeholder='To Destination' 
      style={{borderColor:'#03a9f4',
               height:'40px',
               width:'270px',
               fontFamily: 'Poppins, sans-serif',
               fontWeight:'400',
               alignItems:'center',
               marginLeft:'480px',
               position:'absolute',
               top:'260px',
               borderRadius:'4px',
               color:'#777',
               opacity:'0.4',
              }}></input>
              <ul style={{listStyleType:'none',
                color:'#c4c3c3',
                position:'absolute',
                left:'690px',
                top:'255px'
              }}>
              <li><FaLocationDot/></li>
              </ul>
              <label 
      style={{color:'#535b61',
        position:'absolute',
        top:'230px',
        left:'770px',
        fontFamily: 'Poppins, sans-serif',
        fontWeight:'400',
        fontSize:'18px',
        display:'inline-block'
      }}>On Board</label> 
      <input type='DD/MM/YYYY' placeholder='DD/MM/YYYY' 
      style={{borderColor:'#03a9f4',
               height:'40px',
               width:'200px',
               fontFamily: 'Poppins, sans-serif',
               fontWeight:'700',
               alignItems:'center',
               marginLeft:'765px',
               position:'absolute',
               top:'260px',
               borderRadius:'4px',
               backgroundColor:'#e9ecef',
               opacity: 0.8
              
              }}></input>
              <ul style={{listStyleType:'none',
                color:'#c4c3c3',
                position:'absolute',
                left:'890px',
                top:'255px'
              }}>
              <li><FaCalendarAlt/></li>
              </ul>

              <label 
      style={{color:'#535b61',
        position:'absolute',
        top:'230px',
        left:'990px',
        fontFamily: 'Poppins, sans-serif',
        fontWeight:'400',
        fontSize:'18px',
        display:'inline-block'
      }}>Return</label> 
      <input type='DD/MM/YYYY' placeholder='DD/MM/YYYY' 
      style={{borderColor:'#03a9f4',
               height:'40px',
               width:'200px',
               fontFamily: 'Poppins, sans-serif',
               fontWeight:'700',
               alignItems:'center',
               marginLeft:'980px',
               position:'absolute',
               top:'260px',
               borderRadius:'4px',
               backgroundColor:'#e9ecef',
               opacity: 0.8
              
              }}></input>
              <ul style={{listStyleType:'none',
                color:'#c4c3c3',
                position:'absolute',
                left:'1110px',
                top:'255px'
              }}>
              <li><FaCalendarAlt/></li>
              </ul>
               <input type='checkbox' style={{width: '22px',
                height: '22px',
                marginTop: '10px',
                position:'absolute',
                top:'260px',
                left:'1200px',
                opacity:'0.5'}}></input>
                <span style={{position:'absolute',
                top:'270px',
                left:'1230px',color: '#888',
                fontWeight: 'bold',
                fontSize: '14px',opacity:'1'}}>Single Lady</span>
                <button style={{width:'170px',height:'50px',position:'absolute',left:'680px',top:'320px',backgroundColor: '#0071cc',
                borderColor: '#0071cc',color:'#fff',fontFamily: 'inherit',fontSize:'20px',alignContent:'center',opacity:'0.9',borderRadius:'4px'}}>Search Bus</button>
             </div>

             <div
          className="img"
          style={{
            height: "500px",
            width: "100%",
            backgroundColor: "#167bcc",
            position: "absolute",
            top: "500px"
          }}
        >
          <h2
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 600,
              color: "#fff",
              fontSize: "35px",
              position: "absolute",
              left: "620px",
              top: "30px"
            }}
          >
            Top Destinations
          </h2>
          <button>Add</button>

          <div
            className="destini"
            style={{
              width: "1150px",
              position: "absolute",
              left: "0",
              top: "120px",
              padding: "0 30px",
              left:'140px',
                      }}
          >
            <Slider {...settings}>
              {images.map((img, idx) => (
                <div key={idx} style={{ padding: 0, margin: 0, }}>
                  <div  style={{
              
                      }}>
                  <img
                    src={img}
                    alt={`dest-${idx + 1}`}
                    style={{
                      width: "100%",
                      height: "300px",
                      objectFit: "cover",
                      borderRadius: "2px",
                      display: "block",
                     
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: 'rgba(0, 0, 0, 0.4)', 
                      opacity:'0.1',
                      borderRadius: '2px',
                    }}
                  ></div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
             
             <div className='online' style={{height:'230px',width:'100%',backgroundColor:'#e7e9ed',position:'absolute',top:'1000px'}}>
              <h1 style={{position:'absolute', left:'580px',top:'20px' ,color:'#0c2f54'
                ,fontFamily: 'Poppins, sans-serif'
                }}>Our Growing Numbers</h1>
                <div className='imp' style={{maxWidth:'720px', display:'block'}}>
                  <div className='row' style={{display:'flex'}}>
                   <div className='download' style={{height:'110px', width:'380px', backgroundColor:'white' ,
                    position:'absolute',left:'180px',top:'100px',boxShadow:'rgba(204, 204, 255, 1.01) 3px 5px 5px',
                    border: '1px solid #dee2e6',borderRight: '1px solid black',boxSizing:'borderbox',borderRadius:'5px'
                   }}><h4 style={{position:'absolute',left:'120px',top:'-10px',fontFamily: 'Poppins, sans-serif',fontWeight:'500',color:'#0c2f54',fontSize:'21px'}}>Downloaded</h4>
                   <p style={{position:'absolute',left:'120px',top:'40px',fontFamily: 'Poppins, sans-serif',fontWeight:'500',color:'#535b61',fontSize:'21px'}}>29,09,627+</p>
                    <img src={and} alt='' style={{height:'50px',position:'absolute',left:'30px',top:'30px' ,}}/>
                   </div>
                   
                   <div className='apple'style={{height:'110px', width:'380px', backgroundColor:'white' ,
                    position:'absolute',left:'580px',top:'100px',boxShadow:'rgba(204, 204, 255, 1.01) 3px 5px 5px',
                    border: '1px solid #dee2e6',borderRight: '1px solid black',boxSizing:'borderbox',borderRadius:'5px'
                   }}><h4 style={{position:'absolute',left:'120px',top:'-10px',fontFamily: 'Poppins, sans-serif',fontWeight:'500',color:'#0c2f54',fontSize:'21px'}}>Downloaded</h4>
                   <p style={{position:'absolute',left:'120px',top:'40px',fontFamily: 'Poppins, sans-serif',fontWeight:'500',color:'#535b61',fontSize:'21px'}}>2,81,627+</p>
                    <img src={app} alt='' style={{height:'50px',position:'absolute',left:'30px',top:'30px' ,}}/> 

                    <div className='vistor' style={{height:'110px', width:'380px', backgroundColor:'white' ,
                    position:'absolute',left:'400px',top:'0px',boxShadow:'rgba(204, 204, 255, 1.01) 3px 5px 5px',
                    border: '1px solid #dee2e6',borderRight: '1px solid black',boxSizing:'borderbox',borderRadius:'5px'
                   }}><h4 style={{position:'absolute',left:'120px',top:'-10px',fontFamily: 'Poppins, sans-serif',fontWeight:'500',color:'#0c2f54',fontSize:'21px'}}>Visitor</h4>
                   <p style={{position:'absolute',left:'120px',top:'40px',fontFamily: 'Poppins, sans-serif',fontWeight:'500',color:'#535b61',fontSize:'21px'}}>256280843</p>
                    <img src={vis} alt='' style={{height:'50px',position:'absolute',left:'30px',top:'30px'}}/>

                    
                    </div>

                   </div>

                  </div>
                </div>
                <div className='linear' style={{height:'500px',
              width:'100%', 
              background: 'rgb(240, 242, 244)',
              background:' linear-gradient(0deg, rgba(240, 242, 244, 1) 0%, rgba(183, 225, 242, 1) 100%)',
              position:'absolute',
              left:'0px',
              top:'230px'}}>
                  <div style={{width: '600px', height:'400px',position:'absolute',left:'150px',top:'-10px'}}>
                    <h2 style={{position:'absolute',color:'#0c2f54'}}>Latest Events</h2>
                <Carousel autoPlay
                    infiniteLoop
                    interval={1500}
                    showThumbs={false}
                    showStatus={false}
                    showArrows={true}>
                      
                      <div style={{display:'flex', width: "600px", margin: "0px", paddingTop: "60px",paddingRight:'20px',   }}>
                       <img src={banner1} alt="1"
                         style={{ width: '600px', padding: "10px", borderRadius: "10px" }}
                       /></div>
                        <div style={{ display:'flex',width: "600px", margin: "px", paddingTop: "60px"   }}>
                       <img src={banner2} alt="1"
                         style={{ width: '600px', padding:'10px', borderRadius: '10px' }}
                       /></div>
                       </Carousel>
                       </div>
                <img src={add} alt='' style={{height:'400px',position:'absolute',left:'1000px',top:'50px'}}/>
              </div>
              <div className='footer' style={{height:'250px', width:'100%',background:'#167bcc',position:'absolute',top:'730px'}}>
                <div className='row' style={{display:'flex',
                  flexWrap:'wrap',marginRight:'-15px',marginLeft:'-15px'
                }}>
                  <div className='about' style={{position:'relative',width:'100%'}}>
                    <h5 style={{position:'absolute',
                      left:'200px',
                      fontFamily: 'Arial, Helvetica, sans-seri',
                      fontSize:'14px',
                      color:'#ffffff'}}>About Us</h5>
                    <hr style={{width:'130px',
                      position:'absolute',
                      left:'200px',
                      top:'40px',
                      border: '1px solid #fff'}}></hr>
                    <ul className='footerlist' style={{listStyleType:'none',
                      color:'#fff',
                      fontFamily: 'Arial, Helvetica, sans-serif',
                      position:'absolute',
                      left:'160px',
                      top:'50px',
                      lineHeight:'22px'}}>
                      <li><img src={arrow} alt='' style={{position:'absolute',left:'20px'}}/>About us</li>
                      <li><img src={arrow} alt='' style={{position:'absolute',left:'20px'}}/>Information</li>
                      <li><img src={arrow} alt='' style={{position:'absolute',left:'20px'}}/>Rules & Regulation</li>
                      <li><img src={arrow} alt='' style={{position:'absolute',left:'20px'}}/>Reservation Center</li>
                      <li><img src={arrow} alt='' style={{position:'absolute',left:'20px'}}/>Special Services</li>
                    </ul>
                  </div>

                   <div className='about' style={{position:'relative',width:'100%'}}>
                    <h5 style={{position:'absolute',
                      left:'1100px',
                      fontFamily: 'Arial, Helvetica, sans-seri',
                      fontSize:'14px',
                      color:'#ffffff'}}>General Info</h5>
                    <hr style={{width:'130px',
                      position:'absolute',
                      left:'1100px',
                      top:'40px',
                      border: '1px solid #fff'}}></hr>
                    <ul className='footerlist' style={{listStyleType:'none',
                      color:'#fff',
                      fontFamily: 'Arial, Helvetica, sans-serif',
                      position:'absolute',
                      left:'1060px',
                      top:'50px',
                      lineHeight:'22px'}}>
                      <li><img src={arrow} alt='' style={{position:'absolute',left:'20px'}}/>FAQs</li>
                      <li><img src={arrow} alt='' style={{position:'absolute',left:'20px'}}/>Privacy Policy</li>
                      <li><img src={arrow} alt='' style={{position:'absolute',left:'20px'}}/>Site Map</li>
                      <li><img src={arrow} alt='' style={{position:'absolute',left:'20px'}}/>Contact us</li>
                      <li><img src={arrow} alt='' style={{position:'absolute',left:'20px'}}/>FeedBack</li>
                    </ul>
                  </div>
                   <div className='about' style={{position:'relative',width:'100%'}}>
                    <h5 style={{position:'absolute',
                      left:'650px',
                      fontFamily: 'Arial, Helvetica, sans-seri',
                      fontSize:'14px',
                      color:'#ffffff'}}>Quick Links</h5>
                    <hr style={{width:'130px',
                      position:'absolute',
                      left:'650px',
                      top:'40px',
                      border: '1px solid #fff'}}></hr>
                    <ul className='footerlist' style={{listStyleType:'none',
                      color:'#fff',
                      fontFamily: 'Arial, Helvetica, sans-serif',
                      position:'absolute',
                      left:'625px',
                      top:'50px',
                      lineHeight:'22px'}}>
                      <li><img src={arrow} alt='' style={{position:'absolute',left:'20px'}}/>Counter Address</li>
                      <li><img src={arrow} alt='' style={{position:'absolute',left:'20px'}}/>Suggesstion</li>
                      <li><img src={arrow} alt='' style={{position:'absolute',left:'20px'}}/>Compatible Browser</li>
                      <li><img src={arrow} alt='' style={{position:'absolute',left:'20px'}}/>Browser Setting</li>
                      <li><img src={arrow} alt='' style={{position:'absolute',left:'20px'}}/>Terms and Conditions</li>
                    </ul>
                  </div>
                </div>
                
              </div>
              <div className='contact' style={{height:'260px', width:'100%',background:'#e7e9ed',position:'absolute',top:'980px'}}>
                    <hr style={{border: '1px solid #6c757d',position:'absolute',top:'00px',left:'100px',width:'1300px'}}></hr>
                    <div className='online' style={{width:'100%',display: 'inline-block',
                     lineHeight: '12px',
                      margin: 0}}>
                        <ul style={{listStyleType:'none'}}>
                          <li style={{fontFamily: '"Poppins", sans-serif',fontSize:'14px',fontWeight:'400',
                            position:'absolute',left:'250px'
                          }}>Online reservation Toll Free Numbers</li>
                        </ul>
                        <div className='call' style={{color: '#990000',	fontWeight: 'bold', fontSize: '16px', textAlign:'left'}}>
                             <img src={phone}alt='' style={{position:'absolute',left:'230px',top:'50px'}}/>
                             <p style={{color: '#990000',position:'absolute',left:'260px',top:'35px',fontSize:'bold',fontWeight:'500'}}> 08066006572/9513948001</p>
                             
                             <p style={{position:'absolute',left:'230px',top:'60px',color:'black',fontSize:'14px'}}>and email:</p><p style={{color:'#0071cc',position:'absolute',left:'320px',top:'60px',fontSize:'14px'}}>  commercial@tnstc.org / ptcsotrs@gmail.com</p>
                            <p style={{position:'absolute',left:'290px',top:'90px',color:'#252b33',fontSize: '10px'}}>Basispay payment Gateway(24/7) Helpdesk:</p>
                             <img src={phone}alt='' style={{position:'absolute',left:'230px',top:'120px'}}/>
                             <p style={{color: '#990000',position:'absolute',left:'260px',top:'110px',fontSize:'bold',fontWeight:'500'}}>7305068045</p>
                             <p style={{position:'absolute',left:'270px',top:'140px',color:'black',fontSize:'10px',fontWeight:'300'}}>and email:</p><p style={{color:'#0071cc',position:'absolute',left:'320px',top:'140px',fontSize:'10px',fontWeight:'300'}}>support@basispay.in</p>
                        </div>
                            
                            <ul style={{listStyleType:'none'}}>
                          <li style={{fontFamily: '"Poppins", sans-serif',fontSize:'14px',fontWeight:'400',
                            position:'absolute',left:'800px'
                          }}>Online reservation Toll Free Numbers</li>
                        </ul>
                        <div className='call' style={{color: '#990000',	fontWeight: 'bold', fontSize: '16px', textAlign:'left'}}>
                             <img src={phone}alt='' style={{position:'absolute',left:'800px',top:'50px'}}/>
                             <p style={{color: '#990000',position:'absolute',left:'830px',top:'35px',fontSize:'14',fontWeight:'500'}}>044-49076316 / 49076326</p>
                             
                             <p style={{position:'absolute',left:'800px',top:'70px',color:'black',fontSize:'10px',fontWeight:'300'}}>and email:</p><p style={{color:'#0071cc',position:'absolute',left:'850px',top:'70px',fontSize:'10px',fontWeight:'300'}}>  commercial@tnstc.org / ptcsotrs@gmail.com</p>
                            <p style={{position:'absolute',left:'800px',top:'90px',color:'#252b33',fontSize: '10px'}}>Complains & Suggesitions</p>
                             <img src={phone}alt='' style={{position:'absolute',left:'800px',top:'120px'}}/>
                             <p style={{color: '#990000',position:'absolute',left:'830px',top:'110px',fontSize:'bold',fontWeight:'500'}}>WhatsApp No: 9445014448</p>
                              <ul style={{listStyleType:'none'}}>
                          <li style={{fontFamily: '"Poppins", sans-serif',fontSize:'14px',fontWeight:'400',
                            position:'absolute',left:'1100px',color:'#0071cc'
                          }}>Powered by: www.radiantinfo,com</li>
                          <li><img src={radio} alt='' style={{position:'absolute',left:'1150px',top:'50px'}}/></li>
                        </ul>
                        </div>

                      </div>
                  </div>
             </div>

             
           </div>
          </div>
  )
}   
