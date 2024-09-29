import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import { GitHub as GitHubIcon } from '@mui/icons-material';
import "../styles/ProjectDisplay.css";

export default function ProjectDisplay() {
  const { id } = useParams<{id: string }>();
  const projectIndex = id ? parseInt(id, 10) : NaN;
  const project = ProjectList[projectIndex];
  
  return (
    <div className="project">
      <h1> {project.name} </h1>
      <img src={project.image} alt="cool project" />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <GitHubIcon />
    </div>
  );
}
