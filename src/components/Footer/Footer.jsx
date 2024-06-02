import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className = 'footer' id='footer'>

    <div className="footer-content">

    <div className="footer-content-left">
        <img scr={assets.logo} alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, ex amet laborum, natus omnis tempora earum repudiandae laboriosam veritatis vel perspiciatis quam libero doloribus. Beatae magni quas nam culpa necessitatibus sapiente! Aliquid.</p>

     <div className="footer-social-icons">
        <img src={assets.facebook_icon} alt=""/>
        <img src={assets.instagram_icon} alt=""/>
        <img src={assets.Linkedin_icon} alt=""/>
     </div>

<div className="footer-content-center">
 
 <h2>COMPANY</h2>
 <ul>
    <li>
Home
    </li>
Aboutus
    <li>
        Deliverty
        </li>

        <li>
        Privacy policy
        </li>

      
 </ul>


</div>



<div className="footer-content-right">

  <h2>GET IN TOUCH</h2>
   <ul>

<li>+1-212-456-7890</li>

<li> contact@tomato.com</li>




   </ul>

</div>


    </div>



</div>   
        <hr/>
      <p className="footer-copyright">Copyright 2024 @ Tomato.com - All Right Reserved</p>
    </div>
  )
}

export default Footer
