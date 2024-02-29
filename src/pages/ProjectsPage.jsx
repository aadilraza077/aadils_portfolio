import React, { useState } from "react";
import Project from "../components/projects";
import "./ProjectsPage.css";

const ProjectsPage = ({ projects }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    filterProjects(event.target.value, filter);
  };

  const handleFilterChange = (event) => {
    const selectedFilter = event.target.value;
    setFilter(selectedFilter);
    filterProjects(searchTerm, selectedFilter);
  };

  const filterProjects = (searchTerm, filter) => {
    let filtered = projects;

    filtered = filtered.filter((project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filter !== "all") {
      filtered = filtered.filter((project) => project.type === filter);
    }

    setFilteredProjects(filtered);
  };

  return (
    <div className="ProjectsPageContainer">
      <div className="ProjectHeader">
        <h2>Projects  Portfolio</h2>
        <p>Search Projects by Title or Filter by Category</p>

      </div>
      <div className="ProjectsPageInput">
      <input
        type="text"
        placeholder="Search Projects"
        value={searchTerm}
        onChange={handleSearch}
      />

      <select value={filter} onChange={handleFilterChange}>
        <option value="all">All Projects</option>
        <option value="web">Web Based</option>
        <option value="mobile">Mobile App</option>
        <option value="desktop">Desktop App</option>
        {/* Add more options as needed */}
      </select>
      </div>

      <div className="ProjectsList">
        {filteredProjects.map((project) => (
          <Project
            key={project.id}
            title={project.title}
            description={project.description}
            demoUrl={project.demoUrl}
            githubUrl={project.githubUrl}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
