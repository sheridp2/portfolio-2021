// import Background from "./components/Background";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./components/Main";
import VerticalNav from "./components/VerticalNav";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App" style={{ fontFamily: "Rubik, sans-serif" }}>
          <VerticalNav />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/resume" component={Resume} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
