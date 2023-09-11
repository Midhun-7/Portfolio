import React from 'react';
// import { Link } from 'react-router-dom';

function Portfolio() {
  // Sample data for portfolio projects (you can replace this with your own data)
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of Project 1...',
      imageUrl: 'project1.jpg', // Replace with the path to your project's image
      projectUrl: '/project1', // Use a relative URL for internal navigation
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2...',
      imageUrl: 'project2.jpg', // Replace with the path to your project's image
      projectUrl: '/project2', // Use a relative URL for internal navigation
    },
    // Add more projects as needed
  ];

  return (
    <div id="portfolio">
      <h2>Portfolio</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-md-4" key={index}>
            <div className="card">
              <img src={project.imageUrl} className="card-img-top" alt={project.title} />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                {/* <Link to={project.projectUrl} className="btn btn-primary">
                  View Project
                </Link> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
