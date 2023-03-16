import React, { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import { scroller } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { events as allevents } from "../../Events/events";
import "./AllEvents.css";
import Background from "../background/background";
import { useLocation } from 'react-router-dom'

export default function AllEvents(props) {
  const {eventsRef,competitionsRef} = props;
  console.log(eventsRef)
  const location = useLocation();
  let active = location.state ? location.state.active : 'all' ;


  function pane(lst) {
    return (
      <div className="events-container row p-2 justify-content-center">
        {lst.map((data, key) => {
          data = ev[data];
          return (
            <div
              class="event col-xl-4 col-lg-5 col-md-6 col-sm-10 col-11 px-5 py-3"
              id={data[0]}
            >
              <div onClick={() => event(data[0])} style={{cursor: "pointer"}}>
                <Tilt
                  className="parallax-effect-glare-scale"
                  perspective={1000}
                  scale={1.02}
                  gyroscope={true}
                  >
                  <img
                    src={data[1].image_back}
                    class = "event_image"
                    style={{
                      cursor: "pointer",
                      "border-radius": "15px",
                      "max-width": "100%",
                    }}
                    />     
                  <div class="overlay">
                  </div>  
                <span><img class="text-img" src={data[1].image_text} style={{"position":"absolute","top":"0px","left":"0px","width":"100%","zIndex":"102"}}/>
                  <h2 className="coming-soon">{data[1].text}</h2></span>  
                  <div className="inner-element">
                    <div>{data[1].date}</div>
                    <div>{data[1].time}</div>
                  </div>
                </Tilt> 
              </div>             
            </div>
          );
        })}
      </div>
    );
  }

  const evt = Array.from(Object.entries(allevents));
  const ev = evt.sort(function (a, b) {
    return a[1].rank - b[1].rank;
  });
  const competitions = [],
    workshops = [],
    events = [];
  for (let i = 0; i < ev.length; i++) {
    if (ev[i][1].category === "competition") {
      competitions.push(i);
    }
    if (ev[i][1].category === "workshop") {
      workshops.push(i);
    }
    if (ev[i][1].category === "event") {
      events.push(i);
    }
  }

  let navigate = useNavigate();
  const event = async (id) => {
    let path = `/${id}`;
    await navigate(path);
    await scroller.scrollTo("head", {
      duration: 1500,
      offset: 0,
    });
  };

  return (
    <>
      <Background />
      <div class="head" id="head">
        <h2 class="pt-2 Title text-gradient">Events</h2>
      </div>
      <main style={{ position: "relative" }}>
        <ul
          class="nav nav-pills mb-3 p-3 justify-content-center"
          id="pills-tab"
          role="tablist"
        >
          <li class="nav-item p-2" role="presentation">
            <button 
              class={`nav-link p-3 ${active==='all'?'active':''}`}
              // class={`nav-link p-3 `}
              id="pills-all-tab" 
              data-bs-toggle="pill" 
              data-bs-target="#pills-all" 
              type="button" role="tab" 
              aria-controls="pills-all" 
              aria-selected="true" >ALL</button>
          </li>
          <li class="nav-item p-2" role="presentation">
            <button
              class={`nav-link p-3 ${active==='events'?'active':''}`}
              id="pills-events-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-events"
              type="button"
              role="tab"
              aria-controls="pills-events"
              aria-selected="false"
              ref={eventsRef}
            >
              EVENTS
            </button>
          </li>
          <li class="nav-item p-2" role="presentation">
            <button
              class={`nav-link p-3 ${active==='competitions'?'active':''}`}
              id="pills-competitions-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-competitions"
              type="button"
              role="tab"
              aria-controls="pills-competitions"
              aria-selected="true"
              ref={competitionsRef}
            >
              COMPETITIONS
            </button>
          </li>
          <li class="nav-item p-2" role="presentation">
            <button
              class={`nav-link p-3`}
              id="pills-workshops-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-workshops"
              type="button"
              role="tab"
              aria-controls="pills-workshops"
              aria-selected="false"
            >
              WORKSHOPS
            </button>
          </li>
        </ul>
        <div class="tab-content" id="pills-tabContent">
          <div class={`tab-pane fade ${active==='all'?"show active":""}`} id="pills-all" role="tabpanel" aria-labelledby="pills-all-tab">
          <div className="events-container row p-2 justify-content-center">
            {ev.map((data, key) => {return(

              <div class="event col-xl-4 col-lg-5 col-md-6 col-sm-10 col-11 px-5 py-3" id={data[0]}>
                <div onClick={() => event(data[0])} style={{cursor: "pointer"}}>
                  <Tilt
                    className="parallax-effect-glare-scale"
                    perspective={1000}
                    scale={1.02}
                    gyroscope={true}
                    >
                    <img
                      src={data[1].image_back}
                      class = "event_image"
                      style={{
                        cursor: "pointer",
                        "border-radius": "15px",
                        "max-width": "100%",
                      }}
                      />     
                    <div class="overlay">
                    </div>  
                    <span><img class="text-img" src={data[1].image_text} style={{"position":"absolute","top":"0px","left":"0px","width":"100%","zIndex":"102"}}/>
                    <h2 className="coming-soon">{data[1].text}</h2></span>
                    <div className="inner-element">
                      <div>{data[1].date}</div>
                      <div>{data[1].time}</div>
                    </div>
                  </Tilt> 
                </div>                 
              </div>
              
            );
            })}
          </div>
        </div>

          <div
            class={`tab-pane fade ${active==='events'?"show active":""}`}
            id="pills-events"
            role="tabpanel"
            aria-labelledby="pills-events-tab"
          >
            <h2 className="text-center text-primary">Coming Soon</h2>
            {pane(events)}
          </div>
          <div
            class={`tab-pane fade ${active==='competitions'?"show active":""}`}
            id="pills-competitions"
            role="tabpanel"
            aria-labelledby="pills-competitions-tab"
          >
            {pane(competitions)}
          </div>
          <div
            class={`tab-pane fade`}
            id="pills-workshops"
            role="tabpanel"
            aria-labelledby="pills-workshops-tab"
          >
            {pane(workshops)}
          </div>
        </div>
      </main>
    </>
  );
}
