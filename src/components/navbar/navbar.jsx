import "./navbar.css";
import logo from "../../assets/images/logo.png";
import React, { useEffect, useState } from "react";

export default function Navbar() {
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
    <>
      <header
        class="header sticky-top"
        style={{ "background-color": `rgb(0,0,0,${scrolled ? 0.2 : 0})` }}
      >
        <nav
          class={`navbar navbar-expand-md p-${scrolled ? 0 : 2}`}
          style={{ backdropFilter: `${scrolled ? "blur(8px)" : ""}` }}
        >
          <div class="container-fluid">
            <a class="navbar-brand" href="">
              <img src={logo} height="55px" />
            </a>
            <a class="navbar-brand" href="">
              <b className='logo head-text'>Kaizen'23</b>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#menu"
            >
              <div class="menubar">
                <span class="first-span"></span>
                <span class="second-span"></span>
                <span class="third-span"></span>
              </div>
            </button>

            <div class="collapse navbar-collapse" id="menu">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item mx-1">
                  <a class="nav-link" href="">
                    Home
                  </a>
                </li>
                <li class="nav-item mx-1">
                  <a class="nav-link" href="">
                    Events
                  </a>
                </li>
                <li class="nav-item mx-1">
                  <a class="nav-link" href="">
                    CAP
                  </a>
                </li>
                <li class="nav-item mx-1">
                  <a class="nav-link" href="">
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
