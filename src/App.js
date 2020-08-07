import React, { useState } from "react";
import { Switch, Route, useHistory, Link } from "react-router-dom";

//context
import { ProjectContext } from "./context/ProjectContext";

//components
import Projects from "./components/Projects";
import Edit from "./components/EditProject";
import Add from "./components/AddProject";

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
      <Link to="/add">
        <button>Add a Project</button>
      </Link>
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
      <Link to="/">Home</Link>
    </div>
  );
}

export default App;
