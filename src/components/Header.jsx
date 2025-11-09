export default function Header() {
  return (
    <header className="fixed">
      <div className="container">
        <nav>
          <a href="#home">
          <div className="brand">
            <img src="/favicon.svg" alt="" />
            <strong>Ajay</strong>
          </div></a>
          <div className="links">
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#tryhackme">Tryhackme</a>
            <a href="#ctf">CTF-writeups</a>
            {/* <a href="#experience">Experience</a> */}
            <a href="#contact">Contact</a>
            <a className="btn" href="/resume.pdf" download>Resume</a>
          </div>
        </nav>
      </div>
    </header>
  )
}
