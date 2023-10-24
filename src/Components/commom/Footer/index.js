import React from 'react'
import './index.css'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer max-width'>
      <h3> Zomato </h3>
      <div className='links'>
        <div className='about zomato'>
          <p> About Zomato </p>
          <a href='/'> Who We Are </a>
          <a href='/'> Blog </a>
          <a href='/'> Work With Us</a>
          <a href='/'> Investor Relations</a>
          <a href='/'> Report Fraud </a>
          <a href='/'> Press Kit </a>
          <a href='/'> Contact Us</a>
        </div>
        <div className='zomaverse'>
          <p> Zomaverse </p>
          <a href='/'> Zomato </a>
          <a href='/'> Blinkit </a>
          <a href='/'> Feeding India </a>
          <a href='/'> Hyperpure</a>
          <a href='/'> Zomaland </a>
        </div>
        <div className='for_restaurants'>
          <p> For Restaurants </p>
          <a href='/'> Partner With Us </a>
          <a href='/'> Apps For You </a>
        </div>
        <div className='learn_more'>
          <p> Learn More </p>
          <a href='/'> Privacy </a>
          <a href='/'> Security </a>
          <a href='/'> Terms </a>
          <a href='/'> Sitemap </a>
        </div>
        <div className='social_links'>
          <p> Social Links </p>
          <a href='/'> <i class="fab fa-linkedin"></i></a>
          <a href='/'> <i class="fab fa-instagram"></i></a>
          <a href='/'> <i class="fab fa-twitter"></i></a>
          <a href='/'> <i class="fab fa-youtube"></i></a>
          <a href='/'> <i class="fab fa-facebook"></i></a>
        </div>
      </div>
      <hr/>
      <div className='copyright'>
        <p> By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2023 © Zomato™ Ltd. All rights reserved.</p>
      </div>
      </div>
      

    </div>
  )
}


export default Footer
