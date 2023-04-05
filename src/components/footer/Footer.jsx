import React from "react";
import "./footer.css";

export const Footer = () => {
    return (
      <footer className="container">
        <div className="footer__container container">
           <h1 className="footer__title">Aslanbay</h1>

            <ul className="footer__list">
                   <li>
                      <a href="#about" className="footer__link">About</a>
                   </li>

                   <li>
                      <a href="#portfolio" className="footer__link">Projects</a>
                   </li>

                   <li>
                      <a href="#testimonials" className="footer__link">testimonials</a>
                   </li>
            </ul>

            <div className="footer__social">
            <a 
               href="https://www.instagram.com/abbaslanbay/" 
               className="home__social-icon" 
               target="_blank" 
               rel="noreferrer">
               <i class="uil uil-instagram"></i>
            </a>

            <a 
               href="https://www.linkedin.com/in/abbas-aslanbay-a936a617b/" 
               className="home__social-icon" 
               target="_blank" 
               rel="noreferrer">
              <i class="uil uil-dribbble"></i>
            </a>

            <a 
              href="https://github.com/abbaslanbay?tab=overview&from=2023-03-01&to=2023-03-22" 
              className="home__social-icon" 
              target="_blank" 
              rel="noreferrer">
              <i class="uil uil-github-alt"></i>
            </a>
           </div>

           <span className="footer__copy">&#160; Aslanbay. All rights reserved</span>
        </div>
    </footer>
    )
}

export default Footer;