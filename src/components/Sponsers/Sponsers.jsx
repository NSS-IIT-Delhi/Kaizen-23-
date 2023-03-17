import React from "react";
import './Sponsers.css'
const Sponsers = () => {
  return (
    <div>
      <div class="container">
        <h1 className="text-gradient head-text text-center mb-5 mt-5">
          Our Collaborators
        </h1>
        <div class="row justify-content-center m-auto">
          <div class="col-12 col-md-4 col-sm-6 mb-4  m-auto wid">
            <img src="S1.jpg" class="img-fluid" style={{width:"300px",height:"200px"}} alt="Sponsor 1" />
          </div>
          <div class="col-12 col-md-4 mb-4 col-sm-6  m-auto wid">
            <img src="S2.jpg" class="img-fluid"style={{width:"300px",height:"200px"}} alt="Sponsor 2" />
          </div>
          <div class="col-12 col-md-4 mb-4 col-sm-6 m-auto wid">
            <img src="S3.jpg" class="img-fluid"style={{width:"300px",height:"200px"}} alt="Sponsor 3" />
          </div>
        </div>

      
    </div>
    </div>
  );
};

export default Sponsers;
