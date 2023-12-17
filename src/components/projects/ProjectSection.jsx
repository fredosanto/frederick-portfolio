import { Link, NavLink } from "react-router-dom";
import { data } from "../../data/projects";
import { useState } from "react";

function ProjectsLeft() {
  return (
    <div className="projects-section projects-header">
      <div className="header-container">
        <h1>Projects</h1>
      </div>
      <div className="description-container">
        <p>
          I have been working with these projects this year and they have been a
          huge part of elevating my skills. The projects are built with Vite,
          React, Javascript and Tailwind CSS, and also by using Noroffs API
        </p>
      </div>
      <div className="description-container">
        <p>
          These projects are assignments I have done at Noroff, and none of
          these are actual websites.
        </p>
      </div>
    </div>
  );
}

function ProjectsRight({ projects }) {
  return (
    <div className="projects-section projects-list">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          name={project.name}
          img={project.img}
          stack={project.stack}
          description={project.description}
          repository={project.repository}
          demo={project.demo}
        />
      ))}
    </div>
  );
}

function ProjectCard({ name, img, stack, description, repository, demo }) {
  return (
    <div className="card-container">
      <div className="card">
        <h2>{name}</h2>
        <div className="card-img">
          <img src={img} alt={name} />
        </div>
        <div className="stack-list">
          {stack.map((item) => (
            <div className="stack-item" key={item}>
              {item}
            </div>
          ))}
        </div>
        <p>{description}</p>
        <div className="card-link">
          <a href={repository}>GitHub repo</a>
        </div>
        <div className="card-link">
          <a href={demo}>Live Demo</a>
        </div>
      </div>
    </div>
  );
}

export function ProjectSection() {
  return (
    <div className="projects-wrapper">
      <Link to="/" className="back-btn">
        Go to homepage
      </Link>
      <ProjectsLeft />
      <ProjectsRight projects={data} />
    </div>
  );
}
