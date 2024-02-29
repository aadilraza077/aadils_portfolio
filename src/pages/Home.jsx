import Intro from "../components/intro";
import Project from "../components/projects";
import projectone from "../images/projectone.png";
import projecttwo from "../images/projecttwo.png";
import { Link } from "react-router-dom";
import "./Home.css";
export const Home = () => {
  return (
    <div>
      <Intro />
      <div className="HomeProjectSection">
        <h3>My Projects</h3>
        <div className="HomeProjects">
          <Project
            title="Project One"
            description="This is the description of the project one "
            imageUrl={projectone}
            demoUrl="https://google.com"
            githubUrl="https://github.com/aadilraza077"
          />

          <Project
            title="Project two"
            description="This is the description of project two"
            imageUrl={projecttwo}
            demoUrl="https://google.com"
            githubUrl="https://github.com/aadilraza077"
          />
          <Project
            title="Project three"
            description="This is the description of project three"
            imageUrl={projectone}
            demoUrl="https://google.com"
            githubUrl="https://github.com/aadilraza077"
          />
        </div>
        <div className="ReadMore">
          <Link to="/projectspage">More Projects</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
