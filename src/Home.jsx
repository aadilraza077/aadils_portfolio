import Intro from "./components/intro"
import Project from "./components/projects"
import "./Home.css"
export const Home = () => {
  return (
    <div>
        <Intro/>
        <div className="HomeProjectSection" >
            <h3>Some of My Popular Projects</h3>
                <div className="HomeProjects">
                <Project/>
                <Project/>
                </div>

        </div>
    </div>
  )
}

export default Home