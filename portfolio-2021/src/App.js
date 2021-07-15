// import Background from "./components/Background";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./components/Main";
import VerticalNav from "./components/VerticalNav";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <VerticalNav />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/projects" component={Projects} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
