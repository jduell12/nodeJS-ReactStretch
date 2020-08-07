import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const ProjectCard = (props) => {
  const { id, name, description, completed } = props.project;
  const history = useHistory();

  const deleteProject = () => {
    axios
      .delete(`http://localhost:8000/projects/${id}`)
      .then((res) => console.log("Successfully deleted"))
      .catch((err) => console.log(err))
      .finally(history.push("/"));
  };

  return (
    <div>
      <h2>Name: {name}</h2>
      <h3>Project #{id} </h3>
      <p>Description: {description}</p>
      {completed ? <p>Completed: Yes</p> : <p>Completed: No</p>}
      <button>Edit Project</button>
      <button onClick={() => deleteProject()}>Delete Project</button>
    </div>
  );
};

export default ProjectCard;
