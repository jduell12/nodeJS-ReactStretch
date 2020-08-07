import React from "react";

const ProjectCard = (props) => {
  const { id, name, description, completed } = props.project;

  return (
    <div>
      <h2>Name: {name}</h2>
      <h3>Project #{id} </h3>
      <p>Description: {description}</p>
      {completed ? <p>Completed: Yes</p> : <p>Completed: No</p>}
    </div>
  );
};

export default ProjectCard;
