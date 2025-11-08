import badges from "../data/badges";

const Tryhackme = () => {
  return (
    <section id="tryhackme" className="section">
      <div className="container">
        <h2>Tryhackme</h2>
        <p className="sub">
          Studying some modules and doing some ctf challengese to learn
          Penetration Testing.
        </p>
        <div className="flex  w-full overflow-hidden">
          <iframe
            src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=3973372"
            className="w-[350px] sm:w-[400px] md:w-[450px] lg:w-[500px] rounded-xl border-none overflow-hidden"
            style={{
              height: "130px",
              border: "none",
              overflow: "hidden",
            }}
            scrolling="no"
          ></iframe>
        </div>

        <div className="sub" style={{ fontSize: "1.5em" }}>
          Badges
        </div>
        <div>
          <div className="grid grid-4">
            {badges.map((badge) => (
              <div
                className="card"
                style={{ justifyItems: "center", textAlign: "center" }}
              >
                <img src={badge.img} alt="" style={{ width: 140 }} />
                <div className="card">
                  <div
                    style={{
                      fontWeight: "bold",
                      textShadow: "2px 2px 1px #0082b5ff",
                    }}
                  >
                    {badge.name}
                  </div>
                  <span className="sub">{badge.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tryhackme;
