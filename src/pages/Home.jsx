import Intro from "../components/intro";
import Project from "../components/projects";
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
            title = 'Portfolio Web Application'
            description = 'A web based application'
            type = 'web'
            demoUrl = 'https://example.com/chat'
            githubUrl = 'https://github.com/aadilraza077'
            imageUrl = '/src/images/projectfour.png'
          />

          <Project
            title= 'Desktop Chat App'
            description= 'A desktop chat application - for windows'
            type= 'desktop'
            demoUrl= 'https://example.com/chat'
            githubUrl= 'https://github.com/aadilraza077'
            imageUrl= '/src/images/projectthree.png'
          />
          <Project
            title= 'File Sharing System'
            description= 'A Web Based Encrypted File Sharing System'
            type= 'web'
            demoUrl= 'https://example.com/chat'
            githubUrl= 'https://github.com/aadilraza077'
            imageUrl= '/src/images/projectfive.png'
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
