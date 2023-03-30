import React from "react";
import "./Activities.css";
import ActivityCard from "./ActivityCard";
import ActivityDetails from "./ActivityDetails";

export default function Activities() {
  return (
    <div className="app__activities app__flex app__container">
      <h1 className="head-text text-gradient">Activities in Kaizen'23</h1>
      <div className="activities__sliding-carousel app__flex gradient">
        {ActivityDetails.map((item) => (
          <ActivityCard key={Math.random()} item={item} />
        ))}
      </div>
    </div>
  );
}
