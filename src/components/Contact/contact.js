import React from "react";
import "./contact.css";
import Facebook from "../../assets/facebook.png";
import Linkedin from "../../assets/linkedin.png";
import Whatsapp from "../../assets/whatsapp.png";
import Snapchat from "../../assets/snapchat.png";

const Contact = () => {
  return (
    <section className="Contact">
      <h2 className="title">Feel Free To Contact Me</h2>
      <div className="location">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d824.6952131860776!2d77.58381977086613!3d28.840747682761087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c8bbef7cea023%3A0x610ba1890bfb7ba7!2sKNGD%20Modi%20Engineering%20College!5e0!3m2!1sen!2sin!4v1693428576085!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <p className="address">Modinagr, Uttar Pradesh, 201204</p>
      </div>

      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xleyngpl"
            method="POST"
            className="contact-inputs"
          >
            <input
              type="text"
              name="username"
              placeholder="Username"
              autoComplete="off"
              required
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="message"
              cols="30"
              rows="6"
              placeholder="Write Your Message Here"
              autoComplete="off"
              required
            ></textarea>

            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
      <div className="links">
        <a href="https://www.facebook.com/raisahahab">
          <img src={Facebook} alt="facebook" className="link" />
        </a>
        <a href="https://www.linkedin.com/in/saurabh-rai-b059681aa">
          <img src={Linkedin} alt="linkedin" className="link" />
        </a>
        <a href="https://wa.me/qr/YAVMQW7P2NDPJ1">
          <img src={Whatsapp} alt="whatsapp" className="link" />
        </a>
        <a href="https://www.snapchat.com/add/rai_shahab8851?share_id=wKuzjJH2rIk&locale=en-IN">
          <img src={Snapchat} alt="snapchat" className="link" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
