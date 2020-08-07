import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants";

//context
import { ProjectContext } from "../context/ProjectContext";

const ProjectActions = () => {
  const { projectInfo } = useContext(ProjectContext);
  const { id, name, description, completed } = projectInfo;

  const [actions, setActions] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/${id}/actions`)
      .then((res) => setActions(res.data.actions))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>{name}</h1>
      <h2>Project #{id}</h2>
      <p>Description: {description}</p>
      {completed ? <p>Completed: Yes</p> : <p>Completed: No</p>}
      {actions.map((action) => {
        return (
          <>
            <h3>Description</h3>
            <p key={action.id}>{action.description}</p>
            <h4>Notes</h4>
            <p>{action.notes}</p>
          </>
        );
      })}
    </div>
  );
};
export default ProjectActions;
