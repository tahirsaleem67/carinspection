import React from 'react'
import { Image } from 'react-bootstrap';
import Videoimg from '../navbar/Screenshot 2023-05-30 141136.png'
import './about.css'

const About =()=>{
    return(
        <>
            <div class="container-fluid ">
      <div class="row ">
          <div class="col-lg-12">
              <section class="about-hero-section">
                  <div class="heading align-items-center d-flex justify-content-center">
                      <h1 class="text-white text-center fw-bolder hero-heading">A few words about us</h1>
                  </div>
              </section>
          </div>
      </div>
  </div>


  <section class="blog-section" >
        <div class="container">
            <div class="row">
                <div class="col-lg-10 m-auto mt-5">
                    <Image class="rounded w-100" src={Videoimg}/>
                </div>
                <div class="col-lg-10 m-auto py-5">
                    <p className='videodisc' >We, here at tech wheels, are a group of like-minded
                        individuals with a passion for cars. The
                        automobile market today is plagued with fraudulent deals where a car is promised to be “total
                        genuine” and in reality is far from it. We know that purchasing a car is a huge investment for
                        anyone, we are here to make sure that you have all the necessary information available so you
                        can make the safest decision.
                    </p>
                    <p  className='videodisc'>Our experienced and professional arrives at your
                        designated location to inspect vehicles on more
                        than 150 different check-points using state of the art technology and provide you with a easy to
                        understand digital inspection report immediately. With an tech wheels report in hand you can
                        rest assured that you are aware of the exact condition of the car before you invest your
                        hard-earned money into it. Fraud se bacho, Inspection karao, Befikir ho jao!</p>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}
export default About