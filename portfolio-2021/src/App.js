// import Background from "./components/Background";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Projects from "./components/Projects";

import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Route exact path="/" component={Main} />
        <Route exact path="/projects" component={Projects} />
      </div>
    </BrowserRouter>
  );
}

export default App;
