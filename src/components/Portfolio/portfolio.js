import React from "react";
import "./portfolio.css";
import Image1 from "../../assets/moveit(2).jpg";
import Image2 from "../../assets/tindog(2).jpg";
import Image3 from "../../assets/github(2).png";
import Image4 from "../../assets/timer(2).jpg";
import Image5 from "../../assets/spotify(2).jpg";
const Portfolio = () => {
  return (
    <section className="work">
      <h2 className="workTitle">My Portfolio</h2>
      <span className="workDesc">
        I take pride in paying attention to the smallest details and making sure
        that my work is pixel perfect. I am excited to bring my skill and
        experience to help business achieve their goals and create a strong
        online presence.
      </span>
      <div className="workImages">
        <a href="https://moveitnow.netlify.app/">
          <img src={Image1} alt="moveit" className="workImg" />
        </a>
        <a href="https://tinbarks.netlify.app/">
          <img src={Image2} alt="tindog" className="workImg" />
        </a>
        <a href="https://githubprofi.netlify.app/">
          <img src={Image3} alt="github" className="workImg" />
        </a>
        <a href="https://countdownap.netlify.app/">
          <img src={Image4} alt="countdown" className="workImg" />
        </a>
        <a href="https://spotclon.netlify.app/">
          <img src={Image5} alt="spotify" className="workImg" />
        </a>
      </div>
      <a href="https://github.com/Saurabhrai007?tab=repositories"><button className="workBtn"> See More</button></a>
    </section>
  );
};

export default Portfolio;
