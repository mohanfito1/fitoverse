import React, { useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import "./Projects.css";
import { Link } from "react-router-dom"; // Import Link from React Router


// Import images
import beijing2008 from "../../assets/home.jpeg";
import penrithStadium from "../../assets/home1.jpeg";
import carySportsCenter from "../../assets/home2.jpeg";

const projectData = [
  {
    name: "PA School",
    location: "Pollachi, Tamil Nadu",
    year: "2024",
    description: "This multisport arena at PA School is designed to bring students together and promote a healthy lifestyle. Featuring FIFA-approved football turf and polypropylene tiles for basketball and volleyball courts, the vibrant design draws children to the ground. The facility encourages teamwork, physical fitness, and a lifelong love for sports, creating a space where young minds and bodies can thrive.",
    sports: "Volleyball, Basketball, Multisport, and Football",
    area: "40,000 sq. ft.",
    image: beijing2008,
  },
  {
    name: "Penrith Stadium",
    location: "Penrith, Australia",
    year: "2019",
    description: "A modern sports facility in Australia.",
    image: penrithStadium,
  },
  {
    name: "Cary Sports & Recreation Community Center",
    location: "Cary, United States",
    year: "2020",
    description: "A state-of-the-art community sports center in the US.",
    image: carySportsCenter,
  },
];

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [projects, setProjects] = useState(projectData);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const [overlayVisible, setOverlayVisible] = useState(false); // Controls overlay visibility

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }

    const sortedProjects = [...projects].sort((a, b) => {
      if (a[key] === "TBC" && b[key] !== "TBC") return 1;
      if (b[key] === "TBC" && a[key] !== "TBC") return -1;

      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setProjects(sortedProjects);
    setSortConfig({ key, direction });
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setOverlayVisible(true); // Show the overlay when project is selected
  };

  const handleClose = () => {
    setSelectedProject(null);
    setOverlayVisible(false); // Hide the overlay when the project is closed
  };

  return (
    <div className="projects-page">
      {/* Left side overlay, only visible when a project is selected */}
      <div className={`left-side-overlay ${overlayVisible ? "visible" : ""}`}></div>

      <div className="projects-header">
        <h1>Projects</h1>
      </div>

      <div className="projects-table">
        <div className="table-header">
          <span
            className={`table-column ${sortConfig.key === "name" ? "active" : ""}`}
            onClick={() => handleSort("name")}
          >
            Name {sortConfig.key === "name" && (sortConfig.direction === "asc" ? "↑" : "↓")}
          </span>
          <span
            className={`table-column ${
              sortConfig.key === "location" ? "active" : ""
            }`}
            onClick={() => handleSort("location")}
          >
            Location {sortConfig.key === "location" && (sortConfig.direction === "asc" ? "↑" : "↓")}
          </span>
          <span
            className={`table-column ${sortConfig.key === "year" ? "active" : ""}`}
            onClick={() => handleSort("year")}
          >
            Year {sortConfig.key === "year" && (sortConfig.direction === "asc" ? "↑" : "↓")}
          </span>
        </div>
        <div className="table-body">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`table-row ${
                hoveredProject === project ? "hovered" : ""
              }`}
              onMouseEnter={() => setHoveredProject(project)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => handleProjectClick(project)}
            >
              <span className="table-column">{project.name}</span>
              <span className="table-column">{project.location}</span>
              <span className="table-column">{project.year}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Hover Image with Framer Motion */}
      {hoveredProject && !selectedProject && (
        <motion.div
          className="hover-image-container"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.8 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <motion.img
            src={hoveredProject.image}
            alt={hoveredProject.name}
            className="hover-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          />
        </motion.div>
      )}

      {/* Project Details Animation */}
      {selectedProject && (
        <motion.div
          className={`project-details ${selectedProject ? "visible" : ""}`}
          initial={{ opacity: 0, transform: "translateX(50%)" }}
          animate={{ opacity: 1, transform: "translateX(0)" }}
          exit={{ opacity: 0, transform: "translateX(50%)" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <button
            className="close-button"
            onClick={handleClose} // Close project details and hide overlay
          >
            &times;
          </button>
          <h2>{selectedProject.name}</h2>
          <p><strong>Location:</strong> {selectedProject.location}</p>
          <p><strong>Year:</strong> {selectedProject.year}</p>
          <p><strong>Sports:</strong> {selectedProject.sports}</p>
          <p><strong>Total Area:</strong> {selectedProject.area}</p>
          <p>{selectedProject.description}</p>
          <motion.img
            src={selectedProject.image}
            alt={selectedProject.name}
            className="details-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </div>
  );
};

export default Projects;
