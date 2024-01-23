import classes from "./skill.module.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaBootstrap,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiMongodb, SiExpress, SiStorybook } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

export default function Skill() {
  return (
    <div className={classes.container}>
      <h3 className={classes.heading}>Skills</h3>
      <div className={classes.top}>
        <div className={classes.skillTop}>
          <h6 className={classes.skill}>Web Design</h6>
          <p className={classes.des}>
            I love designs and it's the first step before creating any website
            as I can give layout to my imagination.
          </p>
        </div>
        <div className={classes.skillTop}>
          <h6 className={classes.skill}>Web Development</h6>
          <p className={classes.des}>
            I am a Full Stack Web Developer (MERN) and have quite some
            experience in it as well.
          </p>
        </div>
        <div className={classes.skillTop}>
          <h6 className={classes.skill}>Problem Solving</h6>
          <p className={classes.des}>
            I love solving problems whether it's programming problems or real
            life problems.
          </p>
        </div>
      </div>
      <div>
        <p className={classes.tech}>TECH I AM FAMILIAR WITH</p>
      </div>
      <div className={classes.techContainer}>
        <div className={classes.first}>
          <div className={classes.skillset}>
            <FaHtml5 color="orange" className={classes.icon} />
            <p className={classes.skillname}>Html</p>
          </div>
          <div className={classes.skillset}>
            <FaCss3Alt color="blue" className={classes.icon} />
            <p className={classes.skillname}>Css</p>
          </div>
          <div className={classes.skillset}>
            <IoLogoJavascript color="orange" className={classes.icon} />
            <p className={classes.skillname}>JavaScript</p>
          </div>
          <div className={classes.skillset}>
            <FaReact color="aqua" className={classes.icon} />
            <p className={classes.skillname}>React</p>
          </div>
        </div>
        <div className={classes.first}>
          <div className={classes.skillset}>
            <SiMongodb color="green" className={classes.icon} />
            <p className={classes.skillname}>MongoDB</p>
          </div>
          <div className={classes.skillset}>
            <SiMongodb color="blue" className={classes.icon} />
            <p className={classes.skillname}>Mongoose</p>
          </div>
          <div className={classes.skillset}>
            <SiExpress color="orange" className={classes.icon} />
            <p className={classes.skillname}>Express</p>
          </div>
          <div className={classes.skillset}>
            <FaNodeJs color="green" className={classes.icon} />
            <p className={classes.skillname}>Node JS</p>
          </div>
        </div>
        <div className={classes.first}>
          <div className={classes.skillset}>
            {/* <SiMongodb color="green" className={classes.icon} /> */}
            <img
              style={{ height: "30px" }}
              src="https://testing-library.com/img/logo-large.png"
              alt="icon"
            />
            <p className={classes.skillname}>Jest</p>
          </div>
          <div className={classes.skillset}>
            <TbBrandVscode color="blue" className={classes.icon} />
            <p className={classes.skillname}>Vs Code</p>
          </div>
          <div className={classes.skillset}>
            <FaBootstrap color="aqua" className={classes.icon} />
            <p className={classes.skillname}>BootStrap</p>
          </div>
          <div className={classes.skillset}>
            <SiStorybook color="darkpink" className={classes.icon} />
            <p className={classes.skillname}>StoryBook</p>
          </div>
        </div>
      </div>
    </div>
  );
}
