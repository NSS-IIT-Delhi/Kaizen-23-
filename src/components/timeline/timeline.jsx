import "./timeline.css";
import { events } from "../../Events/events";
import { useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";
import { useState } from "react";

import { images } from "../../assets/images/imageIndex";
import { BsDownload } from "react-icons/bs";

function element_list() {
  let is_top = true;
  let alignment;
  let navigate = useNavigate();
  const open_event_page = async (id) => {
    let path = `/${id}`;
    await navigate(path);
    await scroller.scrollTo("head", { duration: 1500, offset: 0 });
  };

  return Object.entries(events)
    .sort((a, b) => {
      return a[1]["time-order"] - b[1]["time-order"];
    })
    .map((event_data) => {
      alignment = is_top ? "top" : "bottom";
      is_top = !is_top;

      return (
        <div
          className={`timeline-event timeline-event-${alignment}`}
          onClick={() => {
            open_event_page(event_data[0]);
          }}
        >
          {/* <div>{event_data[1]["time-order"]}</div> */}
          <div>{event_data[1].title}</div>
          <div className="timeline-date-and-time">{event_data[1].date}</div>
          <div className="timeline-date-and-time">{event_data[1].time}</div>
          <div className={`timeline-dot timeline-dot-${alignment}`}></div>
        </div>
      );
    });
}

export default function Timeline() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="timeline app__container app__flex">
      <div className="timeline-heading">
        <h2 className="head-text text-gradient">
          Glimpse of the <span className="accent">Timeline</span>
        </h2>
      </div>
      <div className="timeline-container scrollbar-hidden">
        <div className="timeline-line"></div>
        <div className="timeline-event-box">{element_list()}</div>
      </div>
      <div className="app__flex">
        <button
          className="full-schedule-btn"
          onClick={() => setIsVisible((prevState) => !prevState)}
        >
          {isVisible ? `HIDE SCHEDULE` : `SHOW FULL SCHEDULE`}
        </button>
        <div className="download-icon">
          <a href={images.schedule} download>
            <BsDownload />
          </a>
        </div>
      </div>
      {isVisible && (
        <div className="full-schedule-wrapper">
          <img
            className="full-schedule-img"
            src={images.schedule}
            alt="schedule"
          />
        </div>
      )}
    </div>
  );
}
