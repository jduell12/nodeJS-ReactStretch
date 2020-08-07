import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

//components
import Card from "./ProjectCard";

const Projects = ({ queryKey }) => {
  const projectList = useQuery(queryKey, () => {
    return axios
      .get("http://localhost:8000/projects")
      .then((res) => res.data.projects)
      .catch((err) => console.log(err));
  });

  return projectList.isLoading ? (
    "...Loading..."
  ) : projectList.isError ? (
    projectList.error.message
  ) : (
    <div>
      <h1>Project List</h1>
      {projectList.data.map((project) => {
        return <Card key={project.id} project={project} />;
      })}
    </div>
  );
};

export default Projects;
