import { Container } from "./styles";
import githubIcon from "../../assets/github-icon.svg"
import externalLinkIcon from "../../assets/external-link-icon.svg"
import ScrollAnimation from "react-animate-on-scroll";

export function Projects(){
  return(
    <Container id="projects" className="text-center">
      <h2>PROJECTS</h2>

      <div className="projects text-start">
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <div className="proj-title d-flex gap-4 align-items-center">
                <img src="./images/projects/astrocloud.gif" aria-hidden alt="astrocloud" width="50px"/>
                <div className="fs-2 text-white">AstroCloud</div>
              </div>
              <div className="project-links">
                <a href="https://github.com/AstroCloud-Articles-Mangement-System/Articles-Dashboard" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub"/>
                </a>
              </div>
            </header>
            <div className="body">
              <p>Astrocloud is a multi-page dashboard for article websites, facilitating user group management and permission control. It also features informative charts, image uploading via Amazon S3, soft delete functionality, a "Remember Me" feature, and a user profile page.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>PHP</li>
                <li>MYSQL</li>
                <li>Bootstrap</li>
                <li>jQuery</li>
                <li>JavaSript</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
        
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <div className="proj-title d-flex gap-2 align-items-center">
                <img src="./images/projects/tic-tac-toe.gif" aria-hidden alt="tic tac toe game" width="50px" height="50px" style={{borderRadius:"50%",transform:"scale(1.5)"}}/>
                <div className="fs-2 text-white">Tic Tac Toe Game</div>
              </div>
              <div className="project-links">
                <a href="https://github.com/Hager-Abd-El-Galil/Tic-Tac-Toe-Game" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub"/>
                </a>
              </div>
            </header>
            <div className="body">
              <p>Angular-based Tic Tac Toe game for two players where the objective is to create a row of three marks horizontally, vertically or diagonally to win. The game ends in a draw if no player can do so.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Angular</li>
                <li>Bootstrap</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <div className="proj-title d-flex gap-3 align-items-center">
                <img src="./images/projects/pharmacySystem.gif" aria-hidden alt="pharmacy system" width="50px"/>
                <div className="fs-2 text-white">Pharmacy System</div>
              </div>
              <div className="project-links">
                <a href="https://github.com/Pharmacy-Management-System/Pharmacy_System" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub"/>
                </a>
              </div>
            </header>
            <div className="body">
              <p>The Pharmacy System is an Admin Dashboard for managing pharmacies and medical prescriptions. It has four main roles with different access levels and features like authentication, auto-assigning orders, revenue tracking, Stripe payments, and more.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Laravel</li>
                <li>MYSQL</li>
                <li>Bootstrap</li>
                <li>SASS</li>
                <li>jQuery</li>
                <li>JavaSript</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <div className="proj-title d-flex gap-3 align-items-center">
                <img src="./images/projects/E-Commerece.gif" aria-hidden alt="E-Commerce" width="75px"/>
                <div className="fs-2 text-white">RHM E-Commerce</div>
              </div>
              <div className="project-links">
                <a href="https://github.com/RHM-team/RHM-E-Commerce" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub"/>
                </a>
                <a href="https://rhm-e-commerce.web.app/" target="_blank" rel="noreferrer">
                  <img src={externalLinkIcon} alt="Visitar site" />
                </a>
              </div>
            </header>
            <div className="body">
              <p>RHM is an online furniture store with a sleek animated user interface built using vanilla JS. It offers features such as authentication, product and category management, search, order management, profile management, contact us, and lazy loading.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>JavaSript</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <div className="proj-title d-flex gap-4 align-items-center">
                <img src="./images/projects/chatApp.gif" aria-hidden alt="chat app" width="50px" height="50px" style={{borderRadius:"50%"}}/>
                <div className="fs-2 text-white">Chat Application</div>
              </div>
              <div className="project-links">
                <a href="https://github.com/Hager-Abd-El-Galil/Chat-Application" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub"/>
                </a>
                <a href="https://chat-application-25al.onrender.com/" target="_blank" rel="noreferrer">
                  <img src={externalLinkIcon} alt="Visitar site" />
                </a>
              </div>
            </header>
            <div className="body">
              <p>A live chat app built with Node.js and Socket.IO allows real-time communication between multiple users on a web page.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Express JS</li>
                <li>Node JS</li>
                <li>Bootstrap</li>
                <li>JavaSript</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <div className="proj-title d-flex gap-4 align-items-center">
                <img src="./images/projects/rock-paper-scissors.gif" aria-hidden alt="rock-paper-scissors-game" width="50px" height="50px" style={{borderRadius:"50%"}}/>
                <div className="fs-2 text-white">Rock Paper Scissors Game</div>
              </div>
              <div className="project-links">
                <a href="https://github.com/Hager-Abd-El-Galil/Rock-Paper-Scissors-Game" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub"/>
                </a>
              </div>
            </header>
            <div className="body">
              <p>Rock-Paper-Scissors game in JavaScript allows two players to select one of three options (rock, paper, or scissors) and compares the selections to determine a winner.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap</li>
                <li>JavaSript</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}