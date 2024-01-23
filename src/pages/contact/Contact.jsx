import classes from "./contact.module.css";
import { MdEmail } from "react-icons/md";
import { FaMobile, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <div className={classes.container}>
      <h3 className={classes.heading}>Contact</h3>
      <div className={classes.interestContainer}>
        <p>
          I am interested in freelance opportunities especially ambitious or
          large projects. However, if you have other request or question, don't
          hesitate to contact me using below options.
        </p>
      </div>
      <div className={classes.bottomContainer}>
        <div className={classes.left}>
          <p className={classes.leftOne}>Let Connect</p>
          <h5 className={classes.leftSecond}>Digitally</h5>
        </div>
        <div className={classes.right}>
          <div className={classes.iconContainer}>
            <MdEmail color="red" className={classes.icon} />
            <a
              href="mailto:arundhi04101996@gmail.com"
              className={classes.text}
              target="blank"
            >
              Email
            </a>
          </div>
          <div className={classes.iconContainer}>
            <FaMobile color="green" className={classes.icon} />
            <a href="tel:+917539913570" className={classes.text} target="blank">
              Mobile
            </a>
          </div>
          <div className={classes.iconContainer}>
            <FaGithub className={classes.icon} />
            <a
              href="https://github.com/Arunbaskaran96"
              className={classes.text}
              target="blank"
            >
              Github
            </a>
          </div>
          <div className={classes.iconContainer}>
            <FaLinkedin color="aqua" className={classes.icon} />
            <a
              href="https://www.linkedin.com/in/arun-b-841112271/"
              className={classes.text}
              target="blank"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
