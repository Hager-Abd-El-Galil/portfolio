import { Container } from './styles'

import linkedinIcon from '../../assets/linkedin.png'
import githubIcon from '../../assets/github.png'
import instagramIcon from '../../assets/instagram.png'
import GmailIcon from '../../assets/gmail.png'

export function Footer() {
  return (
    <Container className="footer">
      <a href="/" className="logo">
        <img src="./images/logo.gif" width="100px" />
      </a>
      <div>
        <p>
          Hager Abd El Galil Portofolio @ 2023 <span>❤️</span>
        </p>
      </div>

      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/hager-abd-el-galil-a15448198/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="Linkedin" />
        </a>

        <a
          href="https://github.com/Hager-Abd-El-Galil/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>

        <a
          href="mailto:hagerabdelgalilahmed@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src={GmailIcon} alt="Gmail" />
        </a>

      </div>
    </Container>
  )
}
