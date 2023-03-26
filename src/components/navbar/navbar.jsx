import "./navbar.css";
import logo from "../../assets/images/logo.png";
import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";
import { useLocation } from 'react-router-dom'

export default function Navbar(props) {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  // console.log(location);
  const {eventsRef,competitionsRef} = props;
  const navBtnRef = React.useRef(null)


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

  let navigate = useNavigate(); 
  const home = async () =>{ 
    let path = `/`; 
    await navigate(path);
    await scroller.scrollTo('HOME', {
      duration: 1500,
      offset: 0,
    });
  }

  const events = async (to) =>{ 
    let path = `/events`; 
    await navigate(path, { state: { active:to } });
    await scroller.scrollTo('head', {
      duration: 1500,
      offset: 0,
    });
  }
  const sponsor = async (to) =>{ 
    let path = `/sponsor`; 
    await navigate(path, { state: { active:to } });
    await scroller.scrollTo('head', {
      duration: 1500,
      offset: 0,
    });
  }



  return (
    <>
      <header
        class="header sticky-top"
        style={{ "background-color": `rgb(0,0,0,${scrolled ? 0.7 : 0})` }}
      >
        <nav
          class={`navbar navbar-expand-md p-${scrolled ? 0 : 2}`}
          style={{ backdropFilter: `${scrolled ? "blur(8px)" : ""}` }}
        >
          <div class="container-fluid">
            <a class="navbar-brand" href="" onClick={home}>
              <img src={logo} height="55px" />
            </a>
            <a class="navbar-brand" href="" onClick={home}>
              <b className="logo head-text text-gradient">Kaizen'23</b>
            </a>
            <label
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#menu"
              for="check" 
              ref={navBtnRef}
              >
              <input type="checkbox" id="check"/> 
              <span></span>
              <span></span>
              <span></span>             
            </label>

            <div class="collapse navbar-collapse" id="menu">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item mx-1">
                  <a class="nav-link" onClick={()=>{navBtnRef.current.click();home()}}>
                    Home
                  </a>
                </li>
                <li class="nav-item mx-1">
                  <a class="nav-link" onClick={()=>{navBtnRef.current.click();location.pathname==='/events'? eventsRef.current.click() : events('events')}}>
                    Events
                  </a>
                </li>
                <li class="nav-item mx-1">
                  <a class="nav-link" onClick={()=>{navBtnRef.current.click();location.pathname==='/events'? competitionsRef.current.click() : events('competitions')}}>
                    Competitions
                  </a>
                </li>                
                <li class="nav-item mx-1">
                  <a class="nav-link" onClick={()=>{navBtnRef.current.click();sponsor()}}>
                    Sponsors
                  </a>
                </li>                
                <li class="nav-item mx-1">
                  <a class="nav-link" href="https://cap-kaizen-iitd.netlify.app/">
                    CAP
                  </a>
                </li>
                <li class="nav-item mx-1">
                  <a class="nav-link" onClick={()=>{navBtnRef.current.click();scroller.scrollTo('CONTACT', {duration: 1500,offset: 0,});}}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
