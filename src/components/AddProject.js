import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../constants";

const AddProject = () => {
  const history = useHistory();

  const initalValues = {
    name: "",
    description: "",
  };

  const [formValues, setFormValues] = useState(initalValues);

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const addProject = (event) => {
    event.preventDefault();

    axios
      .post(BASE_URL, formValues)
      .then((res) => history.push("/projects"))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Add a Project</h1>
      <form onSubmit={addProject}>
        <label htmlFor="addName">
          Name: &nbsp;
          <input
            type="text"
            id="addName"
            name="name"
            onChange={changeHandler}
            value={formValues.name}
          />
        </label>

        <label htmlFor="addDescription">
          Description: &nbsp;
          <input
            type="text"
            id="addDescription"
            name="description"
            value={formValues.description}
            onChange={changeHandler}
          />
        </label>
        <button>Add Project</button>
      </form>
    </div>
  );
};

export default AddProject;
