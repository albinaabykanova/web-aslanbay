import React from "react";
import "./home.css";

const Social = () => {
    return (
         <div className="home__social">
            <a href="https://www.instagram.com/abbaslanbay/" className="home__social-icon" target="_blank">
                <i class="uil uil-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/abbas-aslanbay-a936a617b/" className="home__social-icon" target="_blank">
                <i class="uil uil-dribbble"></i>
            </a>
            <a href="https://github.com/abbaslanbay?tab=overview&from=2023-03-01&to=2023-03-22" className="home__social-icon" target="_blank">
               <i class="uil uil-github-alt"></i>
            </a>
         </div>
    )
}

export default Social;