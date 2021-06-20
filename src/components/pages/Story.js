import React from 'react';
import '../../App.css';
import timelineElements from "../timelineElements.js";
import 'react-vertical-timeline-component/style.min.css';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { ReactComponent as WorkIcon } from './star-2.svg';
import { ReactComponent as SchoolIcon } from './star-2.svg';


export default function Story() {
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };
  return(
    <>
    <h1>Timeline</h1>
    <VerticalTimeline>
    {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";
          return(
            <VerticalTimelineElement
            key={element.key}
            date={element.date}
            dateClassName="date"
            iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
            icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon
            className="vertical-timeline-element--work"
               />}
            >
               <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
              {showButton && (
                <a
                  className={`button ${
                    isWorkIcon ? "workButton" : "schoolButton"
                  }`}
                  href="/"
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
          })}
    </VerticalTimeline>
    </>

  );
}
