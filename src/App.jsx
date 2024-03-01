import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import projects from "./pages/projectData";
import AboutMe from "./pages/AboutMe";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/footer";
import "./App.css";
import logo from "../src/images/logo.png";

const App = () => {
  return (
    <Router>
      <>
        <div className="MainHeader">
          <div className="TitleName">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>

          <div className="HeaderNavbar">
            <nav>
              <ul>
                <li>
                  <Link to="/projectspage">Projects</Link>
                </li>
                <li>
                  <Link to="/AboutMe">About Me</Link>
                </li>
                <li>
                  <Link to="/ContactPage">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projectspage" element={<ProjectsPage projects={projects} />}/>
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/ContactPage" element={<ContactPage />} />
        </Routes>
        <div className="AppFooter">
          <Footer />
        </div>
      </>
    </Router>
  );
};

export default App;
