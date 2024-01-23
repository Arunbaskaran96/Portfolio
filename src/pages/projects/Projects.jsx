import classes from "./project.module.css";
import { FaExternalLinkSquareAlt, FaArrowRight } from "react-icons/fa";

export default function Projects() {
  return (
    <div className={classes.container}>
      <h3 className={classes.heading}>Projects</h3>
      <h6 className={classes.intern}>Intership Projects</h6>
      <div className={classes.projectsContainer}>
        <div className={classes.project}>
          <img className={classes.image} src="./indiainc.png" alt="website" />
          <br />
          <div className={classes.nameContainer}>
            <p className={classes.name}>
              <a
                href="https://www.indiainc.chat/"
                target="blank"
                className={classes.anchor}
              >
                <FaExternalLinkSquareAlt /> IndiaInc
              </a>
            </p>
          </div>
          <div className={classes.desContainer}>
            <p className={classes.description}>
              As a frontend developer, I developed a search result page and
              landing page of Indiainc intregrated with algoliasearch for faster
              search result. And used context api for state management.for
              styling used scss.
            </p>
          </div>
          <div className={classes.techStack}>
            <div style={{ display: "flex", alignItems: "center" }}>
              Tech Stack
              <span style={{ marginLeft: "10px" }}>
                <FaArrowRight color="green" />
              </span>
            </div>
            <div className={classes.tech}>React</div>
            <div className={classes.tech}>Mantine</div>
            <div className={classes.tech}>Typescript</div>
          </div>
        </div>
        <div className={classes.project}>
          <img className={classes.image} src="./xui.png" alt="website" />
          <br />
          <div className={classes.nameContainer}>
            <a
              className={classes.anchor}
              target="blank"
              href="https://d1p2ua47wkrux.cloudfront.net/?path=/docs/xui--docs"
            >
              <p className={classes.name}>
                <FaExternalLinkSquareAlt /> XUI
              </p>
            </a>
          </div>
          <div className={classes.desContainer}>
            <p className={classes.description}>
              Xui framework is the npm package for kredx.like bootstrap,I
              created the table component.xui uses mantine ui for
              styling.previously it was version-4,then i converted to version 7.
            </p>
          </div>
          <div className={classes.techStack}>
            <div style={{ display: "flex", alignItems: "center" }}>
              Tech Stack
              <span style={{ marginLeft: "10px" }}>
                <FaArrowRight color="green" />
              </span>
            </div>
            <div className={classes.tech}>React</div>
            <div className={classes.tech}>Storybook</div>
            <div className={classes.tech}>Jest</div>
            <div className={classes.tech}>Typescript</div>
          </div>
        </div>
      </div>
      <h6 style={{ marginTop: "25px" }} className={classes.intern}>
        Own Projects
      </h6>
      <div className={classes.projectsContainer}>
        <div className={classes.project}>
          <img className={classes.image} src="./realestate.png" alt="website" />
          <br />
          <div className={classes.nameContainer}>
            <p className={classes.name}>
              <a
                href="https://eclectic-gnome-2ead92.netlify.app/"
                target="blank"
                className={classes.anchor}
              >
                <FaExternalLinkSquareAlt /> GEstate
              </a>
            </p>
          </div>
          <div className={classes.desContainer}>
            <p className={classes.description}>
              GEstate is the website,where users can buy or sell a property,or
              users can rent a property.It's fully responsive,fast and secure.
            </p>
          </div>
          <div className={classes.techStack}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              Tech Stack
              <span style={{ marginLeft: "10px" }}>
                <FaArrowRight color="green" />
              </span>
            </div>
            <div className={classes.tech}>ReactJs</div>
            <div className={classes.tech}>NodeJs</div>
            <div className={classes.tech}>Express</div>

            <div>
              <div style={{ marginBottom: "10px" }} className={classes.tech}>
                Mongoose
              </div>
              <div style={{ marginBottom: "10px" }} className={classes.tech}>
                Flexbox
              </div>
              <div className={classes.tech}>Redux</div>
            </div>
          </div>
        </div>
        <div className={classes.project}>
          <img className={classes.image} src="./instabook.png" alt="website" />
          <br />
          <div className={classes.nameContainer}>
            <p className={classes.name}>
              <a
                href="https://stately-pixie-7d0b73.netlify.app/"
                target="blank"
                className={classes.anchor}
              >
                <FaExternalLinkSquareAlt /> Instabook
              </a>
            </p>
          </div>
          <div className={classes.desContainer}>
            <p className={classes.description}>
              This is social media website,user can post your images and make
              friends all over the world. and you can interact with them.
            </p>
          </div>
          <div className={classes.techStack}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              Tech Stack
              <span style={{ marginLeft: "10px" }}>
                <FaArrowRight color="green" />
              </span>
            </div>
            <div className={classes.tech}>ReactJs</div>
            <div className={classes.tech}>NodeJs</div>
            <div className={classes.tech}>Express</div>

            <div>
              <div style={{ marginBottom: "10px" }} className={classes.tech}>
                Mongoose
              </div>
              <div style={{ marginBottom: "10px" }} className={classes.tech}>
                Redux
              </div>
              <div className={classes.tech}>Redux-saga</div>
            </div>
          </div>
        </div>
        <div className={classes.project}>
          <img
            className={classes.image}
            src="https://effervescent-donut-ad7b3c.netlify.app/static/media/shopify.f134b46d16df6cc5e2d2.png"
            alt="website"
          />
          <br />
          <div className={classes.nameContainer}>
            <p className={classes.name}>
              <a
                href="https://fascinating-dragon-43b7cd.netlify.app/"
                target="blank"
                className={classes.anchor}
              >
                <FaExternalLinkSquareAlt /> Shopify
              </a>
            </p>
          </div>
          <div className={classes.desContainer}>
            <p className={classes.description}>
              Shopify is a real-time shopping web application where users can
              buy products from their homes. This application provides a very
              intuitive user experience and tries to make the shopping process
              as easy as possible.
            </p>
          </div>
          <div className={classes.techStack}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              Tech Stack
              <span style={{ marginLeft: "10px" }}>
                <FaArrowRight color="green" />
              </span>
            </div>
            <div className={classes.tech}>ReactJs</div>
            <div className={classes.tech}>NodeJs</div>
            <div className={classes.tech}>Express</div>
            <div className={classes.tech}>Mongoose</div>
          </div>
        </div>
        <div className={classes.project}>
          <img
            className={classes.image}
            src="https://effervescent-donut-ad7b3c.netlify.app/static/media/Project2.887a0286704b46f077ba.png"
            alt="website"
          />
          <br />
          <div className={classes.nameContainer}>
            <p className={classes.name}>
              <a
                href="https://soft-lokum-1da8b3.netlify.app/"
                target="blank"
                className={classes.anchor}
              >
                <FaExternalLinkSquareAlt /> A2B
              </a>
            </p>
          </div>
          <div className={classes.desContainer}>
            <p className={classes.description}>
              It is a vehicle service web application where users can book for
              vehicle service from their homes.Used and deployed all CRUD
              operations in this website in a very standard way using MERN
              stack.
            </p>
          </div>
          <div className={classes.techStack}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              Tech Stack
              <span style={{ marginLeft: "10px" }}>
                <FaArrowRight color="green" />
              </span>
            </div>
            <div className={classes.tech}>ReactJs</div>
            <div className={classes.tech}>NodeJs</div>
            <div className={classes.tech}>Express</div>

            <div>
              <div style={{ marginBottom: "10px" }} className={classes.tech}>
                Mongoose
              </div>
              <div style={{ marginBottom: "10px" }} className={classes.tech}>
                Redux
              </div>
              <div className={classes.tech}>Redux-saga</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
