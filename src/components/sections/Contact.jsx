import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_azx2ptv", // Your EmailJS Service ID
        "template_m94yu3c", // Your EmailJS Template ID
        form.current,
        "gglNZr2FLptRUSBQu" // Your EmailJS Public Key
      )
      .then(
        () => {
          alert("Message sent successfully ✅ ");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again.❌");
          console.error("EmailJS error:", error.text);
        }
      );
  };

  return (
    <motion.section
      id="contact"
      className="contact-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="contact-container">
        <div className="get-in-touch">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Get In Touch 🤝
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I'm always open to discussing new opportunities, interesting projects,
            or just having a chat about technology.
          </motion.p>
        </div>

        <div className="contact-grid">
          {/* Left: Contact Info */}
          <motion.div
            className="lets-connect"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2>Let's Connect</h2>
            <div className="connect-details">
              <div className="connect-item">
              <FaEnvelope color="00D4FF" size={20} />
                <span>
                  <a href="mailto:mohamedzameermpm123@gmail.com">
                    Email: mohamedzameermpm123@gmail.com
                  </a>
                </span>
              </div>
              <div className="connect-item">
              <FaPhone color="00D4FF" size={20} style={{rotate:'90deg'}} />

                <span>
                  <a  className="phonee" style={{ marginLeft: "50px" }} href="tel:+91-7010775964">
                    Phone: +91-7010775964
                  </a>
                </span>
              </div>
              <div className="connect-item">
              <FaGithub color="#00D4FF" size={20} />
                <a className="gitt"  style={{ marginLeft: "35px" }}
                  href="https://github.com/mohamedzameer33/"
                  target="_blank"
                  rel="noopener noreferrer"
                >GitHub: mohamedzameer33
                </a>
              </div>
              <div className="connect-item">
              <FaLinkedin color="00D4FF" size={20}/>
                <a
                  href="https://www.linkedin.com/in/mohamed-zameer-4b3211301"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn: linkedin.com/mohamed-zameer
                </a>
                
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            className="connectme"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2>Send a Message</h2>
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name" // Updated to match EmailJS template variable
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email" // Updated to match EmailJS template variable
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="title" // Optional: if your template uses ${title}
                  placeholder="Subject"
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message" // Already matches template variable
                  placeholder="Your Message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
