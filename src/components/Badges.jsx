import React, { useState } from "react";
import badges from "../data/badges";
import { motion, AnimatePresence } from "framer-motion";

const Badges = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleBadges = showAll ? badges : badges.slice(0, 4);

  return (
    <section className="container">
      <div className="sub" style={{ fontSize: "1.5em" }}>
        Badges
      </div>
      <div>
        <motion.div layout className="grid grid-4">
          <AnimatePresence mode="popLayout">
            {visibleBadges.map((badge) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: "easeInOut", duration: 0.5}}
                key={badge.name}
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
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        {badges.length > 4 && (
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn"
              style={{ cursor: "pointer" }}
            >
              {showAll ? "See Less" : "See More +"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Badges;
