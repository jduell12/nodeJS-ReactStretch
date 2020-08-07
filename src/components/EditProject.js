import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

//context
import { ProjectContext } from "../context/ProjectContext";

const EditProject = () => {
  const { projectInfo } = useContext(ProjectContext);
  const history = useHistory();

  const initialFormValues = {
    id: "",
    name: "",
    description: "",
    completed: false,
  };

  const [formValues, setFormValues] = useState(initialFormValues);

  useEffect(() => {
    setFormValues(projectInfo);
  }, [projectInfo]);

  const changeHandler = (event) => {};

  const submitForm = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <h1>Edit Project</h1>
      <form onSubmit={submitForm}>
        <label htmlFor="nameInput">
          Name: &nbsp;
          <input
            id="nameInput"
            type="text"
            name="name"
            value={formValues.name}
            onChange={changeHandler}
          />
        </label>

        <label htmlFor="descriptionInput">
          Description: &nbsp;
          <input
            id="descriptionInput"
            type="text"
            name="description"
            value={formValues.description}
            onChange={changeHandler}
          />
        </label>

        <label htmlFor="completedInput">
          Completed: &nbsp;
          <select
            id="completedInput"
            name="completed"
            value={formValues.completed}
          >
            <option value="true" onChange={changeHandler}>
              Yes
            </option>
            <option value="false" onChange={changeHandler}>
              No
            </option>
          </select>
        </label>

        <button>Edit Project</button>
      </form>
    </div>
  );
};

export default EditProject;
