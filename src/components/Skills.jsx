import skills from "../data/skills.js";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2>Skills</h2>
        <p className="sub">Technologies and tools I'm proficient with.</p>
        <div className="grid grid-3">
          {skills.map((s) => (
            <div key={s.group} className="card">
              <h3 style={{ marginBottom: 20, fontSize: 18, fontWeight: 600 }}>
                {s.group}
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {s.items.map(({ name }) => (
                  <span
                    key={name}
                    style={{
                      fontSize: 13,
                      color: "var(--text)",
                      border: "1px solid rgba(120, 140, 160, 0.5)",
                      backgroundColor: "rgba(50, 60, 70, 0.25)",
                      borderRadius: 6,
                      padding: "6px 12px",
                      transition: "all 0.3s ease",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.borderColor = "rgba(150, 170, 190, 0.9)";
                      e.target.style.backgroundColor = "rgba(60, 70, 80, 0.35)";
                      e.target.style.boxShadow =
                        "0 0 10px rgba(120, 140, 160, 0.25)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.borderColor = "rgba(120, 140, 160, 0.5)";
                      e.target.style.backgroundColor = "rgba(50, 60, 70, 0.25)";
                      e.target.style.boxShadow = "none";
                    }}
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
