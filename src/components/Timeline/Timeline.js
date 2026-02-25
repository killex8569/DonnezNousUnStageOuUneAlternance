// components/Timeline.js
import React from "react";
import TimelineItem from "./Timelineitem";
import "./Timeline.css";

function Timeline({ events }) {
  return (
    <div className="timeline">
      {events.map((event, index) => (
        <TimelineItem
          key={event.id}
          title={event.title}
          date={event.date}
          description={event.description}
          position={index % 2 === 0 ? "left" : "right"}
        />
      ))}
    </div>
  );
}

export default Timeline;