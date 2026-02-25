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
          isLast={index === events.length - 1}
        />
      ))}
    </div>
  );
}

export default Timeline;