import React from 'react'
import What from '../navbar/what-we-do.png';
import Slider from '../carousel/carousel'
import './techwheels.css'

export const Techwheels = () => {
  return <>
    <section class="hero-section">
        <div class="hero-overlay">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <p class="hero-heading">We will professionally select and check-up
                            <span > your car with warranty!</span>
                        </p>
                        <ul >
                            <li><a href="#">Examined with the dealer’s equipment</a></li>
                            <li><a href="#">Forensic processing</a></li>
                           
                        </ul>
                        <a class="btn-s" href="/appointment">Appointment</a>
                        <h3  class="mt-4 text-white">The bargaining covers our<br/> service fees <span
                                > in 95% of cases.</span></h3>
                    </div>
                </div>
            </div>
        </div>
        
       
        
    </section>

    <section className='ourteam'>
    <div class="container">
        <div class="row">
            <div class="col-lg12 text-center">
                <h1 className='teamheading'>OUR TEAM</h1>
                <p style={{fontSize: '18px'}}>We provide a doorstep car inspection service to provide you with an accurate report of your car’s
                    condition. Our experienced and professionally trained staff analyzes your vehicle’s condition
                    against more than 150 check-points including a detailed evaluation of your car’s interior, exterior,
                    drive, and its engine. After the inspection is complete, we send you a comprehensive digital report
                    highlighting each and every detail of your car’s current state so you can make an informed decision
                    as a purchaser or a seller.
                </p>
                <hr class="mt-5"/>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12 m-auto py-5">
                <img className='w-100' src={What}/>
            </div>
        </div>
    </div>
  </section>


  
<Slider/>

    <section class="contect-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <p className='contectheading'>Why You Should</p>
                    <h1 className='contect2heading'>CONTACT US
                    </h1>
                </div>

            </div>
            <div class="row">
                <div class="col-lg-3">
                    <div class="hover-div">
                        <div className='icondiv' >
                            <i class="fa-solid fa-handshake"
                                ></i>
                        </div>
                        <p className='icondivdisc'>its free 9 out of 10 cases
                        </p>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="hover-div">
                        <div className='icondiv'>
                            <i class="fa-solid fa-list-check"
                                ></i>
                        </div>
                        <p className='icondivdisc'>Range of services
                        </p>
                    </div>
                    
                </div>

                <div class="col-lg-3">
                    <div class="hover-div">
                        <div className='icondiv'>
                            <i class="fa-sharp fa-solid fa-arrow-right-arrow-left"
                                ></i>
                        </div>
                        <p className='icondivdisc'>
                            Return-the-car-within-15-days Program
                        </p>
                    </div>
                </div>

                <div class="col-lg-3">
                    <div class="hover-div">
                        <div className='icondiv'>
                            <i class="fa-solid fa-clock"
                                ></i>
                        </div>
                        <p className='icondivdisc'>Saving the time
                        </p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3">
                    <div class="hover-div">
                        <div className='icondiv'>
                            <i class="fa-solid fa-car"
                                ></i>
                        </div>
                        <p className='icondivdisc'>We do it as it for ourselves
                        </p>
                    </div>
                </div>
                <div class="col-lg-3">

                    <div class="hover-div">
                        <div className='icondiv'>
                            <i class="fa-solid fa-box"
                                ></i>
                        </div>
                        <p className='icondivdisc'>Range of services
                        </p>
                    </div>
                </div>

                <div class="col-lg-3">

                   <div class="hover-div">
                    <div className='icondiv'>
                        <i class="fa-solid fa-person"
                            ></i>
                    </div>
                    <p className='icondivdisc'>Dealer’s diagnostic
                        equipment
                    </p>
                   </div>
                </div>
                
                <div class="col-lg-3">
                    <div class="hover-div">
                        <div className='icondiv'>
                            <i class="fa-sharp fa-solid fa-location-dot"
                               ></i>
                        </div>
                        <p className='icondivdisc'>Dealer’s diagnostic
                            equipment
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
 
  </>
}
