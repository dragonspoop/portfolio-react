export default function Hero() {
  return (
    <section id="home" className=" mt-10 section">
      <div className="container hero">
        <div>
          <div className="flex flex-col md:flex-row gap-4 w-fit">
            <div className="badge w-fit">Software Developer • MERN / Java</div>
            <div className="badge w-fit">Asspiring Penetration Tester</div>
          </div>
          <h1>Building fast, clean, secure and scalable web apps.</h1>
          <p>
            I love turning ideas into delightful products. Focused on React,
            Node.js, and Java. Exploring cybersecurity and penetration testing.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
            <a className="btn" href="/resume-infosys.pdf" target="_blank">
              View Resume
            </a>
            <a className="btn" href="#contact">
              Hire Me
            </a>
          </div>
        </div>
        <div
          className="frame"
          style={{
            background: "linear-gradient(135deg, #22d3ee 0%, #a78bfa 100%)",
            borderRadius: "30%",
            padding: "8px",
            boxShadow:
              "0 4px 24px rgba(34,211,238,0.15), 0 1.5px 8px rgba(167,139,250,0.12)",
          }}
        >
          <img
            src="/mypic.JPG"
            alt="Profile"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "30%",
              boxShadow: "0 2px 16px rgba(34,211,238,0.10)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
