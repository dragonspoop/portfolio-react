import skills from "../data/skills.js";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2>Skills</h2>
        <p className="sub">Tech I use regularly.</p>
        <div className="grid grid-3">
          {skills.map((s) => (
            <div key={s.group} className="card">
              <h3 style={{ marginBottom: 15 }}>{s.group}</h3>
              {s.items.map(({ name, progress }) => (
                <div
                  key={name}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 15,
                    alignItems:'center'
                  }}
                >
                  <span
                    style={{
                      fontSize: 15,
                      color: "var(--muted)",
                      border: 1,
                      borderColor: "rgba(255,255,255,.2)",
                      borderStyle: "solid",
                      borderRadius: 5,
                      padding:5
                    }}
                  >
                    {name}
                  </span>
                  <div
                    style={{
                      width:`${progress*2}px`,
                      backgroundColor: "#016891ff",
                      borderRadius: "10px",
                      overflow: "hidden",
                      boxShadow:'1px 2px rgba(0, 187, 255)',
                      height: "7px",
                    }}
                  ></div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
