import React, { useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { BASE_URL } from "../constants.js";

//context
import { ProjectContext } from "../context/ProjectContext";

const ProjectCard = (props) => {
  const { id, name, description, completed } = props.project;
  const history = useHistory();
  const { setProjectInfo } = useContext(ProjectContext);

  const deleteProject = () => {
    axios
      .delete(`${BASE_URL}/${id}`)
      .then((res) => console.log("Successfully deleted"))
      .catch((err) => console.log(err))
      .finally(history.push("/"));
  };

  const EditProject = () => {
    const projectInfo = {
      id: id,
      name: name,
      description: description,
      completed: completed,
    };

    setProjectInfo(projectInfo);

    history.push(`/edit/`);
  };

  const goToActions = () => {
    const projectInfo = {
      id: id,
      name: name,
      description: description,
      completed: completed,
    };

    setProjectInfo(projectInfo);
    history.push("/actions");
  };

  return (
    <div onClick={() => goToActions()}>
      <h2>Name: {name}</h2>
      <h3>Project #{id} </h3>
      <p>Description: {description}</p>
      {completed ? <p>Completed: Yes</p> : <p>Completed: No</p>}
      <button onClick={() => EditProject()}>Edit Project</button>
      <button onClick={() => deleteProject()}>Delete Project</button>
    </div>
  );
};

export default ProjectCard;
