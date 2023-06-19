import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import { YouTube } from "@material-ui/icons";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} alt="animatch_image" />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <div className="project-icon">
        {project.githubLink && (
          <a className="github_icon" href={project.githubLink}>
            <GitHubIcon />
          </a>
        )}
        {project.youtubeLink && (
          <a className="youtube_icon" href={project.youtubeLink}>
            <YouTube />
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectDisplay;
