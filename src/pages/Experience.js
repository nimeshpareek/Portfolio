import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education" // high school
          date="2018 - 2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Maheshwari Dayanand Public School, Jaipur, India
          </h3>
          <p> High School (12th)</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education" // college
          date="2020 - 2024"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Global Institute of Technology, Jaipur, India
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree
          </h4>

          <p> Computer Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work" // internship
          date="15 June 2022 - 15 August 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title"> 
            Frontend Developer - Pelican Info Solutions 
          </h3>
          <h4 className="vertical-timeline-element-subtitle"> 
            Jaipur, India
          </h4>
          <p>Developed professional frontend portfolio website for their clients.</p>
        </VerticalTimelineElement>
        

        <VerticalTimelineElement
          className="vertical-timeline-element--work" // open source
          date="May 2023 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Open Source Contributor (GSSOC'23)
          </h3>
          <p>
          GirlScript Summer of Code is a 3-month long
          #OpenSource  program by GirlScript Foundation.
          </p>
        </VerticalTimelineElement>
        </VerticalTimeline>
      
    </div>
  );
}

export default Experience;
