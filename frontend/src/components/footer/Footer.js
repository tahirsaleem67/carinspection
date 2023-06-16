import React from 'react'
import './footer.css'

export const Footer = () => {
  return (
    <footer class="footer-distributed">

    <div class="footer-left">

      <h3><img className='image1' src="logo.png"/></h3>

      <p class="footer-links">
        <a href="home.html" class="link-1">Home</a>
        
        <a href="about.html">About</a>
      
        <a href="samplereport.html">Sample Report</a>
      
        <a href="career.html">Career</a>
    
      </p>

      <a href="#" style={{textDecoration: 'none'}}><p class="footer-company-name text-white">© 2023 Copyright: Tech Wheels</p></a>
    </div>

    <div class="footer-center">

      <div>
        <i class="fa fa-map-marker"></i>
        <p><span>Websquad, chanone road</span> 3 floor, faisalabad</p>
      </div>

      <div>
        <i class="fa fa-phone"></i>
        <p>+1.555.555.5555</p>
      </div>

      <div>
        <i class="fa fa-envelope"></i>
        <p><a href="mailto:support@company.com">support@company.com</a></p>
      </div>

    </div>

    <div class="footer-right">

      <p class="footer-company-about text-white">
        <span>About the company</span>
        We provide a doorstep car inspection service to provide you with an accurate report of your car’s condition.
      </p>

      <div class="footer-icons">

        <a href="#"><i class="fa-brands fa-facebook"></i></a>
        <a href="#"><i class="fa-brands fa-instagram"></i></a>

      </div>

    </div>

  </footer>
  )
}
