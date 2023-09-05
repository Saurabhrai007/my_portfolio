import React from "react";
import "./intro.css";
import bg from "../../assets/bg.png";
import { Link } from "react-scroll";
import btnImg from '../../assets/hireme.png';

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span><br />
        <span className="introText">
          I am <span className="introName">Saurabh </span>
          <br />
          I'm a Web Designer
        </span>
        <p className="introPara">
          I am a skilled web designer with experience in creating <br /> visual
          appealing and user-friendly websites.
        </p>
      </div>
      <img src={bg} alt="developer image" className="bg" />
    </section>
  );
};

export default Intro;
