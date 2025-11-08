import experience from '../data/experience.js'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2>Experience</h2>
        <p className="sub">Internships, freelance, and highlights.</p>
        <div className="grid">
          {experience.map((e)=>(
            <div key={e.company} className="card">
              <h3>{e.role} • {e.company}</h3>
              <p style={{margin:'8px 0'}}><strong>{e.period}</strong></p>
              <ul style={{margin:0,paddingLeft:18,lineHeight:1.7,color:'var(--muted)'}}>
                {e.points.map((pt,i)=><li key={i}>{pt}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
