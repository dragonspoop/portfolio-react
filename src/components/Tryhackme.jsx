// import badges from "../data/badges";

import Badges from "./Badges";

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
      </div>
      <Badges></Badges>
    </section>
  );
};

export default Tryhackme;
