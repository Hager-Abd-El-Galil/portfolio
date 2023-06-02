import { Container } from "./styles";

import linuxIcon from "../../assets/linux-icon.png";
import mysqlIcon from "../../assets/mysql-icon.svg";
import mongoIcon from "../../assets/mongo-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import javaIcon from "../../assets/java-icon.svg";
import rubyIcon from "../../assets/rails.png";
import awsIcon from "../../assets/aws-icon.png";
import ScrollAnimation from "react-animate-on-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faPython,
  faNodeJs,
  faLaravel,
  faPhp,
  faDocker,
  faWordpress,
  faBootstrap,
  faSass
} from '@fortawesome/free-brands-svg-icons'

export function About(){
  return(
    <Container id="about" className="col-12 d-flex flex-row justify-content-around flex-wrap">
      <div className="about-text col-10 col-lg-6">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>ABOUT ME</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000}>
          <p>A Passionate Software Engineer with 2 years of Experience in Full Stack Web Development. Graduated From Faculty Of Engineering, Alexandria University communications and Electronics Department.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000} style={{marginTop: "2rem", marginBottom: "2rem"}}>

          <p>Open Source Developer at professional Training (9 Months) at Information Technology Institute and UI/UX (Front End) Developer at ITI Tech-Leaps (Online).</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.6 * 1000}>

          <p>Proficient in JavaScript, Python, and Java, with extensive Experience Working with React Js and Angular Frameworks. Strong background in Agile Development Methodologies and Automated Testing, as well as Excellent problem-solving, communication skills and time management.</p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.7 * 1000}>
          <h3>TECHNICAL SKILLS</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
              </ScrollAnimation>
          </div>
          <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
              </ScrollAnimation>
          </div>
          <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.3 * 1000}>
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
              </ScrollAnimation>
          </div>
          <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
                <FontAwesomeIcon icon={faBootstrap} color="#6f0ff3" />
              </ScrollAnimation>
          </div>
          <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.5 * 1000}>
                <FontAwesomeIcon icon={faSass} color="#c46292" />
              </ScrollAnimation>
          </div>
          <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
                <img src={typescriptIcon} />
              </ScrollAnimation>
          </div>
          <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.7 * 1000}>
                <FontAwesomeIcon icon={faReact} color="#5cd7ef" />
              </ScrollAnimation>
          </div>
          <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
                <FontAwesomeIcon icon={faAngular} color="#bb0d2b" />
              </ScrollAnimation>
          </div>
          <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={0.9 * 1000}>
                <img src={vueIcon}  />
              </ScrollAnimation>
          </div>
          <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
                <FontAwesomeIcon icon={faNodeJs} color="#77c63a" />
              </ScrollAnimation>
          </div>
          <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={1.1 * 1000}>
                <FontAwesomeIcon icon={faPhp} color="#6779b1" />
              </ScrollAnimation>
          </div>
          <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={1.2 * 1000}>
                <FontAwesomeIcon icon={faLaravel} color="#ec2f2d" />
              </ScrollAnimation>
          </div>
          <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={1.3 * 1000}>
                <FontAwesomeIcon icon={faPython} color="#4B8BBE" />
              </ScrollAnimation>
          </div>
          <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={1.4 * 1000}>
                <img src={rubyIcon} alt="Java"/>
              </ScrollAnimation>
          </div>
          <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={1.5 * 1000}>
                <img src={javaIcon} alt="Java"/>
              </ScrollAnimation>
          </div>
          <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={1.6 * 1000}>
                <img src={linuxIcon} alt="Linux" />
              </ScrollAnimation>
          </div>
          <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={1.7 * 1000}>
                <img src={mysqlIcon} alt="MYSQL"/>
              </ScrollAnimation>
          </div>
          <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={1.8 * 1000}>
                <img src={mongoIcon} alt="Mongo DB"/>
              </ScrollAnimation>
          </div>
          <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={1.9 * 1000}>
                <FontAwesomeIcon icon={faWordpress} color="#1e86b9" />
              </ScrollAnimation>
          </div>
          <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={2 * 1000}>
                <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
              </ScrollAnimation>
          </div>
          <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={2.1 * 1000}>
                <FontAwesomeIcon icon={faDocker} color="#0395bc" />
              </ScrollAnimation>
          </div>
          <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={2.2 * 1000}>
                <img src={awsIcon} alt="AWS" />
              </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image col-10 col-lg-4 d-flex flex-row justify-content-center">
        <ScrollAnimation animateIn="fadeInRight" delay={0.6 * 1000}>
          <div className="stage-cube-cont">
            <div className="cubespinner">
              <div className="face1">
                <FontAwesomeIcon icon={faPython} color="#4B8BBE" />
              </div>
              <div className="face2">
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
              </div>
              <div className="face3">
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
              </div>
              <div className="face4">
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
              </div>
              <div className="face5">
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
              </div>
              <div className="face6">
                <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
              </div>
            </div>
          </div>
        </ScrollAnimation>  
      </div>
    </Container>
  )
}
