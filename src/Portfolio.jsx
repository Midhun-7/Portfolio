import React from 'react';
// import { Link } from 'react-router-dom';

function Portfolio() {
  // Sample data for portfolio projects (you can replace this with your own data)
  const projects = [
    {
      title: 'Keeper App',
      description: 'Description of Project 1...',
      imageUrl: 'project1.jpg', // Replace with the path to your project's image
      projectUrl: '/project1', // Use a relative URL for internal navigation
    },
    {
      title: 'Box Office App',
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
                <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
