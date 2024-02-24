import ContactForm from "./components/ContactForm";
import AboutMe from "./components/AboutMe";
import "./App.css";
import logo from "../src/images/logo.jpg";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import Projectspage from "./projectspage";
import Footer from "./components/footer";
import  Home  from "./Home";
const App = () => {
  return (
    <Router>
      <>
        <div className="MainHeader">
          <div className="TitleName">
            <img src={logo} alt="Logo" />
            <h3>
              <Link to="/">Aadils Portfolio</Link>
            </h3>
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
                  <Link to="/ContactForm">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/projectspage" element={<Projectspage />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/ContactForm" element={<ContactForm />} />
        </Routes>
        <div className="AppFooter">
        <Footer/>
        </div>
      </>
    </Router>
  );
};

export default App;
