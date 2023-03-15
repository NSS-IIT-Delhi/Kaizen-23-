import React from "react";
import "./Events.css";
import { events as allevents } from "../../Events/events";
import { useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";
import Tilt from "react-parallax-tilt";
import './tilt.scss'

export default function Events() {
  // function pane(lst) {
  //   const data = ev[lst[0]];
  //   console.log(data[1].image);
  //   return (
  //     <div
  //       className=" event col-xl-4 col-lg-5 col-md-6 col-sm-10 col-11 px-5 py-3"
  //       id={data[0]}
  //     >
  //       <Tilt style={{ backgroundColor: "transparent" }}>
  //         <img
  //           src={data[1].image}
  //           onClick={() => toevent(data[0])}
  //           style={{
  //             cursor: "pointer",
  //             "border-radius": "15px",
  //             "max-width": "100%",
  //           }}
  //         />
  //       </Tilt>
  //     </div>
  //   );
  // }

  function panelst(lst) {
    return (
      <div className="event-cards-container">
        {lst.map((data,key) =>{
          return(
        <div className=" event col-xl-4 col-lg-5 col-md-6 col-sm-10 col-11 px-5 py-3" id={data[0]}>


          

          <Tilt
            className="parallax-effect-glare-scale"
            perspective={1000}
            // glareEnable={true}
            // glareMaxOpacity={0.45}
            scale={1.02}
            gyroscope={true}
          >
            <img
              src={data[1].image}
              onClick={() => toevent(data[0])}
              class = "event_image"
              style={{
                cursor: "pointer",
                "border-radius": "15px",
                "max-width": "100%",
              }}
            />     
          <div class="overlay">
          </div>         
          <div className="inner-element">

                <div>{data[1].date}</div>
                <div>{data[1].time}</div>

          </div>
    </Tilt>

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
  // const competitions = [],
  //   workshops = [],
  //   events = [];
  // for (let i = 0; i < ev.length; i++) {
  //   if (ev[i][1].category === "competition") {
  //     competitions.push(i);
  //   }
  //   if (ev[i][1].category === "workshop") {
  //     workshops.push(i);
  //   }
  //   if (ev[i][1].category === "event") {
  //     events.push(i);
  //   }
  // }

  let navigate = useNavigate();
  const toevents = async () => {
    let path = `/events`;
    await navigate(path, {state: {active:'all'}});
    await scroller.scrollTo("head", {
      duration: 1500,
      offset: 0,
    });
  };

  const toevent = async (id) => {
    let path = `/${id}`;
    await navigate(path);
    await scroller.scrollTo("head", {
      duration: 1500,
      offset: 0,
    });
  };

  return (


    
    <div className="app__container app__flex app__events">
      <h2 className="head-text text-gradient">Explore our <span className="accent">Events</span></h2>
      {/* <div className="event-cards-container">
        {pane(events)}
        {pane(competitions)}
      {pane(workshops)}
      </div> */}
      {panelst(ev.slice(0,3))}

      <a className="view-more-btn" target="_blank" onClick={toevents}>
        VIEW ALL
      </a>



    </div>
  );
}
