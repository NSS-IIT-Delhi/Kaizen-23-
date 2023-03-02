
import React, { useEffect, useState} from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { useNavigate } from "react-router-dom";
import "./style.css"
import logo from '../../assets/images/kaizen.png'


export default function Navbar(){

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleScroll = () => {
    if (window.pageYOffset > 70) {
      setScrolled(true);
    } else if (window.pageYOffset < 10) {
      setScrolled(false);
    }
  };

  return (
    <div>

      <div style={{"padding-top":"5rem"}}>
        <header class="header sticky-top" style={{ "background-color": `rgb(0,0,0,${scrolled ? 0.5 : 0})`}}>
          <nav class={`navbar navbar-expand-md navbar-fixed-top navbar-default pt-${scrolled ? 0:2}`}>
            <div class="container-fluid">
              <a class="navbar-brand px-4" href="https://www.kaizeniitd.in/"><img width={50} class="logo" alt="Kaizen" src={logo}/></a>
              <a class="ham-link float-left" href="https://www.kaizeniitd.in/">Kaizen'23</a>

              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu">
                <div class="menubar">
                  <span class="first-span"></span>
                  <span class="second-span"></span>
                  <span class="third-span"></span>
                </div>
              </button>              


              <div class="collapse navbar-collapse float-right" id="menu">
                  <ul class="navbar-nav ms-auto">

                      <li class="nav-item mx-2 hover-underline-animation">
                        <a class="nav-link">
                          <Link activeClass="nav-link-active" to="home" spy={true} offset={-70} duration={500}>
                            Home
                          </Link></a>
                      </li>

                      <li class="nav-item mx-2 hover-underline-animation">
                        <a class="nav-link">
                          <Link activeClass="nav-link-active" to="events" spy={true} offset={-70} duration={500}>
                            Events
                          </Link></a>
                      </li>

                      <li class="nav-item mx-2 hover-underline-animation">
                        <a class="nav-link">
                          <Link activeClass="nav-link-active" to="cap" spy={true} offset={-70} duration={500}>
                            CAP
                          </Link></a>
                      </li>


                      <li class="nav-item mx-2 hover-underline-animation">
                        <a class="nav-link">
                          <Link activeClass="nav-link-active" to="contact" spy={true} offset={-70} duration={500}>
                            Contact
                          </Link></a>
                      </li>  

                  </ul>
              </div>

            </div>
          </nav>
        </header>  
        </div>
        </div>
  );
}


