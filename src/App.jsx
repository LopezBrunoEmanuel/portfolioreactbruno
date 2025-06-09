import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Aboutme from "./pages/Aboutme";
import Project from "./pages/Project";
import Contact from "./pages/contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            {" "}
          </Route>
          <Route path="/aboutme" element={<Aboutme />}>
            {" "}
          </Route>
          <Route path="/project" element={<Project />}>
            {" "}
          </Route>
          <Route path="/contact" element={<Contact />}>
            {" "}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
