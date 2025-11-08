import badges from "../data/badges";

const Tryhackme = () => {
  return (
    <section className="section">
      <div className="container">
        <h2>Tryhackme</h2>
        <p className="sub">
          Studying some modules and doing some ctf challengese to learn Penetration Testing.
        </p>
        <iframe
          src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=3973372"
          style={{ border: "none", width: "100%", height: 100 }}
        ></iframe>
        <div className="sub" style={{ fontSize: "1.5em" }}>
          Badges
        </div>
        <div>
          <div className="grid grid-4">
            {badges.map((badge) => (
              <div className="card" style={{ justifyItems:'center', textAlign: "center"}}>
                <img src={badge.img} alt="" style={{ width: 140 }} />
                <div className="card">
                  <div style={{fontWeight:'bold',textShadow:'2px 2px 1px #0082b5ff'}}>{badge.name}</div>
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
