import React from "react";
import l1 from "./images/logo1.png";
import l2 from "./images/logo2.png";
import l3 from "./images/logo3.png";

import "../App.css";

function about() {
  return (
    <div>
      <section id="about" className="about">
        <h2>About Me</h2>
        <div className="responsive-div">
          <div className="content">
            <p>
              As a current student pursuing computer science engineering, my
              passion lies in solving complex problems and exploring innovative
              solutions. I have a strong foundation in software development,
              having worked extensively on web-based projects that involve
              creating intuitive user interfaces and managing data efficiently.
              My academic journey at Smt. Kashibai Navale College of
              Engineering, Pune, has broadened my understanding of software
              design principles and equipped me with skills in database
              management and web development technologies. Outside of academics,
              I indulge in exploring topics related to astronomy and aviation,
              which complement my curiosity for understanding complex systems
              and their applications. I am enthusiastic about applying my skills
              and knowledge to contribute meaningfully to projects that push the
              boundaries of technology.
            </p>
          </div>
        </div>
      </section>
      <section className="logo-section">
        <div className="logo-tile">
          <a href="https://leetcode.com/u/sujit_avchar/" className="logo-link">
            <img src={l1} alt="Logo 1" className="logo-img" />
          </a>
        </div>
        <div className="logo-tile">
          <a href="https://github.com/sujitavchar" className="logo-link">
            <img src={l2} alt="Logo 2" className="logo-img" />
          </a>
        </div>
        <div className="logo-tile">
          <a href="https://codeforces.com/profile/sujitAvchar" className="logo-link">
            <img src={l3} alt="Logo 3" className="logo-img" />
          </a>
        </div>
      </section>
    </div>
  );
}

export default about;
