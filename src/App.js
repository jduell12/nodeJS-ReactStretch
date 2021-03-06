import React, { useState } from "react";
import { Switch, Route, useHistory, Link } from "react-router-dom";

//context
import { ProjectContext } from "./context/ProjectContext";

//components
import Projects from "./components/Projects";
import Edit from "./components/EditProject";
import Add from "./components/AddProject";
import Actions from "./components/ProjectActions";

function App() {
  const history = useHistory();

  const [projectInfo, setProjectInfo] = useState({
    id: "",
    name: "",
    description: "",
    completed: false,
  });

  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/add">Add a Project</Link>
      <Link to="/projects">Project Dashboard</Link>
      <Switch>
        <ProjectContext.Provider value={{ projectInfo, setProjectInfo }}>
          <Route exact path="/projects">
            <Projects queryKey={"projects"} />
          </Route>
          <Route exact path="/edit/">
            <Edit />
          </Route>
          <Route exact path="/add">
            <Add />
          </Route>
          <Route exact path="/actions">
            <Actions />
          </Route>
          <Route exact path="/">
            <div>
              <h1>Get Projects</h1>
              <button onClick={() => history.push("/projects")}>
                Display Projects
              </button>
            </div>
          </Route>
        </ProjectContext.Provider>
      </Switch>
    </div>
  );
}

export default App;
