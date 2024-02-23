import Project from './components/projects'

export const Projectspage = () => {
  return (
    <div className="ProjectsModule">
        <h3>My Projects</h3>
        <div className="ProjectsContainer">
          <Project />
          <Project />
        </div>
      </div>
  )
}
export default Projectspage
