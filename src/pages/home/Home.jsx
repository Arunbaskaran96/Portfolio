import classes from "./home.module.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <div className={classes.container}>
      <h3 className={classes.heading}>ABOUT</h3>
      <p className={classes.about}>
        I am a full stack developer with a passion for building beautiful and
        user friendly web-sites.I have a strong understanding for both front-end
        and back-end development, and i am excited to put my skills to use in
        professional settings. I am a quick leaner and a team player,and i am
        confident that i can be valuable assest to any development team.
      </p>
      <div className={classes.iconContainer}>
        <a href="https://www.linkedin.com/in/arun-b-841112271/" target="blank">
          <FaLinkedin className={classes.linkedin} />
        </a>
        <a href="https://github.com/Arunbaskaran96" target="blank">
          <FaGithub className={classes.github} />
        </a>
      </div>
      <div style={{ marginTop: "35px" }}>
        <a className={classes.btn}>Resume</a>
      </div>
    </div>
  );
}
