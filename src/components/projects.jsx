import React from 'react'
import "./projects.css"

function Project(props) {
  const { title, description, imageUrl, demoUrl, githubUrl } = props;

  return (
    <div className="ProjectCard">
      <img src={imageUrl} alt={title} className="ProjectImage" />
      <div className="ProjectInfo">
        <h3 className="ProjectTitle">{title}</h3>
        <p className="ProjectDescription">{description}</p>
        <div className="ProjectLinks">
          {demoUrl && (
            <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="LinkButton">
              Demo
            </a>
          )}
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="LinkButton">
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Project;
