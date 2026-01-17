export default function Hero() {
  return (
    <section id="home" className=" mt-10 section">
      <div className="container hero">
        <div>
          <div className="flex flex-col md:flex-row gap-4 w-fit">
            <div className="badge w-fit">Cyber Security Enthusiasist</div>
            <div className="badge w-fit">Asspiring Penetration Tester</div>
          </div>
          <h1>
            Securing networks, identifying vulnerabilities, and conducting
            ethical penetration testing.
          </h1>
          <p>
            Security-focused professional specializing in vulnerability
            assessments, penetration testing, and security research. Passionate
            about finding and fixing security flaws before attackers do.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
            <a className="btn" href="/resume-cybersecurity.pdf" target="_blank">
              Download Resume
            </a>
            <a className="btn" href="#contact">
              Hire Me
            </a>
          </div>
        </div>
        <div
          className="frame"
          style={{
            borderRadius: "30%",
            border: "7px solid rgba(0, 100, 200, 1)",
          }}
        >
          <img
            src="/mypic3.png"
            alt="Profile"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </section>
  );
}
