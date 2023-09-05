import React from "react";
import "./about.css";
import UIDesigns from "../../assets/ui-design.png";
import AppDesign from "../../assets/app-design.png";
import WebDesign from "../../assets/website-design.png";
const About = () => {
  return (
    <section id="about">
      <span className="aboutTitle"> What I Do </span>
      <span className="aboutDesc">
        I am a skilled web designer with experience in creating visual appealing
        and user-friendly websites.
      </span>
      <div className="skillBars">
        <div className="skillBar">
            <img src={UIDesigns} alt="UIDesign" className="skillBarImg" />
            <div className="skillBarText">
                <h2>UI/UX Designing</h2>
                <p>Demo text, write content here</p>
            </div>
        </div>
      <div className="skillBar">
            <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
            <div className="skillBarText">
                <h2>Web Designing</h2>
                <p>Demo text, write content here</p>
            </div>
        </div>
        <div className="skillBar">
            <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
            <div className="skillBarText">
                <h2>App Designing</h2>
                <p>Demo text, write content here</p>
            </div>
        </div>
        </div>
    </section>
  );
};

export default About;
