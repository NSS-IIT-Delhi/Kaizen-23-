import React from "react";
// import Tilt from "react-parallax-tilt";
import { useParams } from "react-router-dom";
import "./Sponser.css";
import sponserDetails from "./SponserDetails";

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
      {/* <div className="mt-5 pt-5"></div> */}
      {/* <h2 className="Titles ">Our Collaborators</h2> */}

      {/* <div class="container">
        <h1 className="text-gradient head-text text-center mb-4 mt-4">
          Title Sponsor
        </h1>
        <div class="row justify-content-center m-auto">
          <div class="col-12 col-md-4 col-sm-6 mb-4  m-auto wid">
            <a
              href="https://bhumi.ngo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img
                src="S1.png"
                class="img-fluid"
                style={{ width: "300px", height: "200px" }}
                alt="Sponsor 1"
              />
            </a>
          </div>
        </div>
      </div>
      <div class="container">
        <h1 className="text-gradient head-text text-center mb-4 mt-3">
          Powered By
        </h1>
        <div class="row justify-content-center m-auto">
          <div class="col-12 col-md-4 col-sm-6 mb-4  m-auto wid">
            <a
              href="https://www.good-deeds-day.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img
                src="S2.png"
                class="img-fluid"
                style={{ width: "300px", height: "200px" }}
                alt="Sponsor 1"
              />
            </a>
          </div>
        </div>
      </div>
      <div class="container">
        <h1 className="text-gradient head-text text-center mb-4 mt-3">
          Co-Sponsors
        </h1>
        <div class="row justify-content-center m-auto">
          <div class="col-12 col-md-4 col-sm-6 mb-4  m-auto wid">
            <a
              href="https://thecoconutpeople.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img
                src="S3.webp"
                class="img-fluid"
                style={{ width: "300px", height: "200px" }}
                alt="Sponsor 1"
              />
            </a>
          </div>
          <div class="col-12 col-md-4 mb-4 col-sm-6  m-auto wid">
            <a
              href="https://linktr.ee/sustainity"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img
                src="S4.jpeg"
                class="img-fluid"
                style={{ width: "300px", height: "200px" }}
                alt="Sponsor 2"
              />
            </a>
          </div>
          <div class="col-12 col-md-4 mb-4 col-sm-6 m-auto wid">
            <a
              href="https://thegreenchapter.store/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img
                src="S5.png"
                class="img-fluid"
                style={{ width: "300px", height: "200px" }}
                alt="Sponsor 3"
              />
            </a>
          </div>
          <div class="col-12 col-md-4 mb-4 col-sm-6 m-auto wid">
            <a
              href="https://www.aeonoverseas.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img
                src="S6.jpeg"
                class="img-fluid"
                style={{ width: "300px", height: "200px" }}
                alt="Sponsor 3"
              />
            </a>
          </div>
          <div class="col-12 col-md-4 mb-4 col-sm-6 m-auto wid">
            <a
              href="https://www.sewainternational.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img
                src="S9.png"
                class="img-fluid"
                style={{ width: "300px", height: "200px" }}
                alt="Sponsor 3"
              />
            </a>
          </div>
          <div class="col-12 col-md-4 mb-4 col-sm-6 m-auto wid">
            <a
              href="https://tokenize.exchange/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img
                src="S8.jpeg"
                class="img-fluid"
                style={{ width: "300px", height: "200px" }}
                alt="Sponsor 3"
              />
            </a>
          </div>
          <div class="col-12 col-md-4 mb-4 col-sm-6 m-auto wid">
            <a
              href="https://www.studomatrix.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img
                src="S7.png"
                class="img-fluid"
                style={{ width: "300px", height: "200px" }}
                alt="Sponsor 3"
              />
            </a>
          </div>
        </div>
      </div>
      <div class="container">
        <h1 className="text-gradient head-text text-center mb-4 mt-3">
          Media Partners
        </h1>
        <div class="row justify-content-center m-auto">
          <div class="col-12 col-md-4 col-sm-6   m-auto wid">
            <a
              href="https://www.hindustantimes.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center"
            >
              {" "}
              <img
                src="S10.svg"
                class="img-fluid"
                style={{ height: "100px" }}
                alt="Sponsor 1"
              />
            </a>
          </div>
          <div class="col-12 col-md-4 mb-4 col-sm-6  m-auto wid">
            <a
              href="https://thecampusmedia.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img
                src="S11.png"
                class="img-fluid"
                style={{ width: "300px", height: "200px" }}
                alt="Sponsor 2"
              />
            </a>
          </div>
          <div class="col-12 col-md-4 mb-4 col-sm-6 m-auto wid">
            <a
              href="https://consciouscarma.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img
                src="S12.jpg"
                class="img-fluid"
                style={{ width: "300px", height: "200px" }}
                alt="Sponsor 3"
              />
            </a>
          </div>
        </div>
      </div> */}

      <div className="sponsors__wrapper app__container app__flex">
        <section className="sponsors__category app__flex">
          <h1
            style={{ marginBottom: "2rem" }}
            className="head-text text-gradient"
          >
            Title Sponsor
          </h1>
          <div className="sponsors__list">
            {sponserDetails.titleSponsor.map((item) => {
              return (
                <div className="sponsor-card title-sponsor">
                  <a href={item.url} target="_blank">
                    <img
                      className="sponsor-card__img sponsor-img-large"
                      src={item.img}
                      alt="sponsor"
                    />
                    <p className="gradient subhead-text">{item.title}</p>
                  </a>
                </div>
              );
            })}
          </div>
        </section>
        <section className="sponsors__category app__flex">
          <h1
            style={{ marginBottom: "2rem" }}
            className="head-text text-gradient"
          >
            Powered By
          </h1>
          <div className="sponsors__list">
            {sponserDetails.poweredBy.map((item) => {
              return (
                <div className="sponsor-card">
                  <a href={item.url} target="_blank">
                    <img
                      className="sponsor-card__img sponsor-img-large"
                      src={item.img}
                      alt="sponsor"
                    />
                    <p className="gradient subhead-text">{item.title}</p>
                  </a>
                </div>
              );
            })}
          </div>
        </section>
        <section className="sponsors__category app__flex">
          <h1
            style={{ marginBottom: "2rem" }}
            className="head-text text-gradient"
          >
            Co-Sponsors
          </h1>
          <div className="sponsors__list">
            {sponserDetails.coSponsors.map((item) => {
              return (
                <div className="sponsor-card">
                  <a href={item.url} target="_blank">
                    <img
                      className="sponsor-card__img"
                      src={item.img}
                      alt="sponsor"
                    />
                  </a>
                  <p className="gradient subhead-text">{item.title}</p>
                </div>
              );
            })}
          </div>
        </section>
        <section className="sponsors__category app__flex">
          <h1
            style={{ marginBottom: "2rem" }}
            className="head-text text-gradient"
          >
            Media Partners
          </h1>
          <div className="sponsors__list">
            {sponserDetails.mediaPartners.map((item) => {
              return (
                <div className="sponsor-card">
                  <a href={item.url} target="_blank">
                    <img
                      className="sponsor-card__img"
                      src={item.img}
                      alt="sponsor"
                    />
                    <p className="gradient subhead-text">{item.title}</p>
                  </a>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}
