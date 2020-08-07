import React, { useState } from "react";
import { Switch, Route, useHistory, Link } from "react-router-dom";

//context
import { ProjectContext } from "./context/ProjectContext";

//components
import Projects from "./components/Projects";

function App() {
  const history = useHistory();

  const [projectInfo, setProjects] = useState({
    id: "",
    name: "",
    description: "",
    completed: false,
  });

  return (
    <div className="App">
      <Switch>
        <ProjectContext.Provider value={{ projectInfo, setProjects }}>
          <Route exact path="/projects">
            <Projects queryKey={"projects"} />
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
