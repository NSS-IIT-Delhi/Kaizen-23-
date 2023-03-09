import React from "react";
// import Tilt from "react-parallax-tilt";
import "./Team.css";
import { useParams } from "react-router-dom";


export default function Event() {
  const { id } = useParams();
  return (
    <>
         <h2 className="Titles mt-5 pt-5">Kaizen Techical Team</h2>
         <hr className="hrx"/>

      <ul className="background">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className="container mt-5">
      <header className="section-header mt-5">
        <p className="pt-4">Coordinators</p>
      </header>
      <div className="row gy-4 new">
        <div
          className="col-lg-3 col-md-5 col-sm-6 col-xs-10 d-flex align-items-stretch aos-init aos-animate "
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="member" style={{ backgroundColor: "#e6e6e6" }}>
            <img
              src="/Team Members/Nitesh_Saini.jpg"
              className="img-fluid"
              alt=""
              style={{  width:"200px",height:"200px", objectFit: "cover" }}
            />

            <div className="member-info">
              <h4 className="text-dark" style={{fontSize:"1.4rem"}}>
                Nitesh Saini{" "}
             
              <a href="https://www.linkedin.com/in/nitesh-saini-80893b1a0/" target="_blank" rel="noopener noreferrer" className="text-dark"><i className="fa-brands fa-linkedin"></i></a>
              </h4>   </div>
          </div>
        </div>

        <div
          className="col-lg-3 col-md-5 col-sm-6 col-xs-10 d-flex align-items-stretch aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="member" style={{ backgroundColor: "#e6e6e6" }}>
            <img
              src="/adminerp.svg"
              className="img-fluid"
              alt=""
              style={{  width:"200px",height:"200px", objectFit: "cover" }}
            />

            <div className="member-info">
              <h4 className="text-dark"style={{fontSize:"1.4rem"}}>
                Harshal Holkar{" "}
                <a href="https://www.linkedin.com/in/holkar-harshal/" target="_blank" rel="noopener noreferrer" className="text-dark"><i className="fa-brands fa-linkedin"></i></a>
              </h4> 
            </div>
          </div>
        </div>        </div>
        <header className="section-header mt-5">
        <p>Activity Heads</p>
      </header>
      <div className="row gy-4 new mb-4">
        <div
          className="col-lg-3 col-md-4 col-sm-6 col-xs-10 d-flex align-items-stretch aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="member" style={{ backgroundColor: "#e6e6e6" }}>
            <img
              src="/Team Members/Urmila.JPG"
              className="img-fluid"
              alt=""
              style={{ width:"200px", height: "200px", objectFit: "cover" }}
            />

            <div className="member-info">
              <h4 className="text-dark"style={{fontSize:"1.4rem"}}>
                Urmila Sharma{" "}
                <a href="https://www.linkedin.com/in/urmila-sharma-515a21214/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>
              </h4> 
            </div>
          </div>
        </div>
        <div
          className="col-lg-3 col-md-4 col-sm-6 col-xs-10 d-flex align-items-stretch aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="member" style={{ backgroundColor: "#e6e6e6" }}>
            <img
              src="/adminerp.svg"
              className="img-fluid"
              alt=""
              style={{  width:"200px",height:"200px", objectFit: "cover" }}
            />

            <div className="member-info">
              <h4 className="text-dark"style={{fontSize:"1.4rem"}}>
                Raghav{" "}

                <a href="#" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>
              </h4> 

            </div>
          </div>
        </div>
        <div
          className="col-lg-3 col-md-4 col-sm-6 col-xs-10 d-flex align-items-stretch aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="member" style={{ backgroundColor: "#e6e6e6" }} >
            <img
              src="/Team Members/Abhijeet.jpg"
              className="img-fluid"
              alt=""
              style={{  width:"200px",height:"200px", objectFit: "cover" }}
            />

            <div className="member-info">
              <h4 className="text-dark"style={{fontSize:"1.4rem"}}>
                Abhijeet {" "}

                <a href="https://www.linkedin.com/in/abhijeet-gautam-a413b1211/" target="_blank" rel="noopener noreferrer" ><i className="fa-brands fa-linkedin"></i></a>
              </h4> 
            </div>
          </div>
        </div>
        <div
          className="col-lg-3 col-md-4 col-sm-6 col-xs-10 d-flex align-items-stretch aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="member" style={{ backgroundColor: "#e6e6e6" }}>
            <img
              src="/Team Members/arush.jpg"
              className="img-fluid"
              alt=""
              style={{  width:"200px",height:"200px", objectFit: "cover" }}
            />

            <div className="member-info">
              <h4 className="text-dark"style={{fontSize:"1.4rem"}}>
                Arush Bansal{" "}
                <a href="https://www.linkedin.com/in/arush-bansal-a108b7223/" target="_blank" rel="noopener noreferrer" ><i className="fa-brands fa-linkedin"></i></a>
              </h4> 
            </div>
          </div>
        </div>
        <div
          className="col-lg-3 col-md-4 col-sm-6 col-xs-10 d-flex align-items-stretch aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="member" style={{ backgroundColor: "#e6e6e6" }}>
            <img
              src="/adminerp.svg"
              className="img-fluid"
              alt=""
              style={{  width:"200px",height:"200px", objectFit: "cover" }}
            />

            <div className="member-info">
              <h4 className="text-dark"style={{fontSize:"1.4rem"}}>
                Anish Banerjee{" "}
                <a href="#" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>
              </h4> 
            </div>
          </div>
        </div>
      </div></div>
      
    </>
  );
}
