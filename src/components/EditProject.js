import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../constants";

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

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    if (name === "completed") {
      if (value === "true") {
        setFormValues({
          ...formValues,
          [name]: true,
        });
      } else {
        setFormValues({
          ...formValues,
          [name]: false,
        });
      }
    } else {
      setFormValues({
        ...formValues,
        [name]: value,
      });
    }
  };

  const submitForm = (event) => {
    event.preventDefault();

    axios
      .put(`${BASE_URL}/${projectInfo.id}`, formValues)
      .then((res) => {
        return history.push("/projects");
      })
      .catch((err) => console.log(err));
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
            onChange={changeHandler}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </label>

        <button>Edit Project</button>
      </form>
    </div>
  );
};

export default EditProject;
