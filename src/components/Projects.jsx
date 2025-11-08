import projects from '../data/projects.js'
import ProjectCard from './ProjectCard.jsx'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Projects</h2>
        <p className="sub">A few things I’ve built recently.</p>
        <div className="grid grid-3">
          {projects.map(p => <ProjectCard key={p.slug} {...p} />)}
        </div>
      </div>
    </section>
  )
}
