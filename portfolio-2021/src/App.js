// import Background from "./components/Background";
import Main from "./components/Main";
import VerticalNav from "./components/VerticalNav";
import Projects from "./components/Projects";

import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <VerticalNav />
        <Route exact path="/" component={Main} />
        <Route exact path="/projects" component={Projects} />
      </div>
    </BrowserRouter>
  );
}

export default App;
