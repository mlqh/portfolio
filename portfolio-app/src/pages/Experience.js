import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import "../styles/Experience.css";

import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016 - 2020"
          iconStyle={{ background: "#3e497a", color: "#ffffff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Richmond Hill High School, Richmond Hill, Ontario
          </h3>
          <p> High School Diploma, Honour Roll </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020 - 2025 (Expected)"
          iconStyle={{ background: "#3e497a", color: "#ffffff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            University of Waterloo, Waterloo, Ontario
          </h3>
          <p> B.A.Sc in Computer Engineering, President's List </p>
          <h4> Relevant Coursework </h4>
          <p> Data Structures and Algorithms, Concurrency, Embedded Systems </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jan 2021 - Apr 2021"
          iconStyle={{ background: "#3e497a", color: "#ffffff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">OMERS</h3>
          <p> DevOps Engineering Co-Op </p>
          <p> Tools: Java, Python, IBM WebSphere </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Sept 2021 - Dec 2021"
          iconStyle={{ background: "#3e497a", color: "#ffffff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            OpenText Corporation
          </h3>
          <p> Software Developer Co-Op, Core Case Management </p>
          <p> Tools: Java, Spring/Springboot, TypeScript, </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="April 2022 - Aug 2022"
          iconStyle={{ background: "#3e497a", color: "#ffffff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Zynga Inc.</h3>
          <p> Software Engineer Co-Op, Core Architecture </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jan 2023 - Apr 2023"
          iconStyle={{ background: "#3e497a", color: "#ffffff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">PointClickCare</h3>
          <p> Software Engineer Co-Op, Architecture Team </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jan 2024 - Apr 2024"
          iconStyle={{ background: "#3e497a", color: "#ffffff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">???</h3>
          <p> Let's see where the future takes me! </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
