// components/TimelineItem.js
import React from "react";
import "./Timeline.css";

function TimelineItem({ title, date, description, isLast }) {
  return (
    <div className="timeline-item">
      <div className="timeline-marker">
        <div className="timeline-dot"></div>
        {!isLast && <div className="timeline-line"></div>}
      </div>

      <div className="timeline-content">
        <span className="timeline-date">{date}</span>
        <h3>{title}</h3>
        {description && <p>{description}</p>}
      </div>
    </div>
  );
}

export default TimelineItem;