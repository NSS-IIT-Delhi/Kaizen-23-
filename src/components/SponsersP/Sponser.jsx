import React from "react";
// import Tilt from "react-parallax-tilt";
import { useParams } from "react-router-dom";
import './Sponser.css'

export default function Event() {
  const { id } = useParams();
  return (
    <>

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
      <h2 className="Titles mt-5 pt-5">Ouur Collaborators</h2>
      <div class="container">
        <h1 className="text-gradient head-text text-center mb-5 mt-5">
        Title Sponsor
        </h1>
        <div class="row justify-content-center m-auto">
          <div class="col-12 col-md-4 col-sm-6 mb-4  m-auto wid">
          <a href="https://bhumi.ngo/" target="_blank" rel="noopener noreferrer">   <img src="S4.png" class="img-fluid" style={{width:"300px",height:"200px"}} alt="Sponsor 1" /></a>
          </div>

        </div>
        </div>
      <div class="container">
        <h1 className="text-gradient head-text text-center mb-5 mt-5">
        Powered By
        </h1>
        <div class="row justify-content-center m-auto">
          <div class="col-12 col-md-4 col-sm-6 mb-4  m-auto wid">
          <a href="https://www.good-deeds-day.org/" target="_blank" rel="noopener noreferrer">   <img src="S5.png" class="img-fluid" style={{width:"300px",height:"200px"}} alt="Sponsor 1" /></a>
          </div>
        </div>
        </div>
      <div class="container">
        <h1 className="text-gradient head-text text-center mb-5 mt-5">
          Co-Sponsors
        </h1>
        <div class="row justify-content-center m-auto">
          <div class="col-12 col-md-4 col-sm-6 mb-4  m-auto wid">
          <a href="https://thecoconutpeople.in/" target="_blank" rel="noopener noreferrer">   <img src="S1.jpg" class="img-fluid" style={{width:"300px",height:"200px"}} alt="Sponsor 1" /></a>
          </div>
          <div class="col-12 col-md-4 mb-4 col-sm-6  m-auto wid">
          <a href="https://linktr.ee/sustainity" target="_blank" rel="noopener noreferrer">   <img src="S2.jpg" class="img-fluid"style={{width:"300px",height:"200px"}} alt="Sponsor 2" /></a>
          </div>
          <div class="col-12 col-md-4 mb-4 col-sm-6 m-auto wid">
          <a href="https://thegreenchapter.store/" target="_blank" rel="noopener noreferrer">  <img src="S3.jpg" class="img-fluid"style={{width:"300px",height:"200px"}} alt="Sponsor 3" /></a>
          </div>
          <div class="col-12 col-md-4 mb-4 col-sm-6 m-auto wid">
          <a href="https://www.aeonoverseas.com/" target="_blank" rel="noopener noreferrer">  <img src="S3.jpg" class="img-fluid"style={{width:"300px",height:"200px"}} alt="Sponsor 3" /></a>
          </div>
          <div class="col-12 col-md-4 mb-4 col-sm-6 m-auto wid">
          <a href="https://www.studomatrix.in/" target="_blank" rel="noopener noreferrer">  <img src="S3.jpg" class="img-fluid"style={{width:"300px",height:"200px"}} alt="Sponsor 3" /></a>
          </div>
          <div class="col-12 col-md-4 mb-4 col-sm-6 m-auto wid">
          <a href="https://tokenize.exchange/" target="_blank" rel="noopener noreferrer">  <img src="S3.jpg" class="img-fluid"style={{width:"300px",height:"200px"}} alt="Sponsor 3" /></a>
          </div>
          <div class="col-12 col-md-4 mb-4 col-sm-6 m-auto wid">
          <a href="https://www.sewainternational.org/" target="_blank" rel="noopener noreferrer">  <img src="S3.jpg" class="img-fluid"style={{width:"300px",height:"200px"}} alt="Sponsor 3" /></a>
          </div>
        </div>
        </div>
      <div class="container">
        <h1 className="text-gradient head-text text-center mb-5 mt-5">
          Media Partners
        </h1>
        <div class="row justify-content-center m-auto">
          <div class="col-12 col-md-4 col-sm-6 mb-4  m-auto wid">
          <a href="https://www.hindustantimes.com/" target="_blank" rel="noopener noreferrer">   <img src="S6.png" class="img-fluid" style={{height:"100px"}} alt="Sponsor 1" /></a>
          </div>
          <div class="col-12 col-md-4 mb-4 col-sm-6  m-auto wid">
          <a href="https://thecampusmedia.com/" target="_blank" rel="noopener noreferrer">   <img src="S2.jpg" class="img-fluid"style={{width:"300px",height:"200px"}} alt="Sponsor 2" /></a>
          </div>
          <div class="col-12 col-md-4 mb-4 col-sm-6 m-auto wid">
          <a href="https://consciouscarma.com/" target="_blank" rel="noopener noreferrer">  <img src="S3.jpg" class="img-fluid"style={{width:"300px",height:"200px"}} alt="Sponsor 3" /></a>
          </div>
        </div>
        </div>

      

      
    </>
  );
}
