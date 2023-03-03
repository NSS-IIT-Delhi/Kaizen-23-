import React from "react";
import "./Events.css";
import { images } from "../../assets/images/imageIndex";

const eventsData = [
  {
    title: "Event title",
    subtitle: "event subtitle",
    img: images.bazinga,
  },
  {
    title: "Event title",
    subtitle: "event subtitle",
    img: images.bazinga,
  },
  {
    title: "Event title",
    subtitle: "event subtitle",
    img: images.bazinga,
  },
];

export default function Events() {
  return (
    <div className="app__events">
      <h2>Explore our Events</h2>
      <div className="event-cards-container">
        {eventsData.map((event) => {
          const CardBGstyle = {
            background: `url(${event.img})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          };
          return (
            <div className="event-card card" style={CardBGstyle}>
              <div className="event-content">
                <h4 className="event-title ">{event.title}</h4>
                <p className="event-subtitle">{event.subtitle}</p>
              </div>
            </div>
          );
        })}
      </div>

      <a
        className="view-more-btn"
        target="_blank"
        href="https://kaizenevents.web.app/"
      >
        VIEW ALL
      </a>
    </div>
  );
}
