import React from "react";
import './Activities.css'

export default function ActivityCard({ item }) {
  return (
    <div className="activity-card">
      <img className="activity-card-img" src={item.img} alt="event" />

    </div>
  );
}
